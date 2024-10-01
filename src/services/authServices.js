//function ko lien quan den react
import axios from 'axios';

const API_URL = 'https://dummyjson.com/auth'

axios.interceptors.request.use(
    (config) => {
        const user = JSON.parse(localStorage.getItem('user'));
        //API ask for header authoziation, always check what API ask for when get authorization
        //override the config Authorization: Bearer <token>
        if (user && user.accessToken) {
            config.headers.Authorization = `Bearer ${user.accessToken}`
        }
        return config
    },
    (error) => { return Promise.reject(error) }
)

//function will return a data
export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, { username, password, expiresInMins: 1 })
    console.log(response); //data object = user information and 2 tokens 

    //save to local storage if data is valid
    if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
        console.log(response.data.accessToken);
    }

    //return either valid data or error data
    return response.data;
}

export const logout = () => {
    localStorage.removeItem('user');
}

const refreshToken = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const response = await axios.post(`${API_URL}/refresh`, { refreshToken: user.refreshToken, expiresInMins: 10 })
    if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify({
            ...user,
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken
        }))
        return response.data
    }
    throw new Error("FAILED TO REFRESH TOKEN")
}

//reuseable function, can apply for authorization also cart page
export const fetchProtectedData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_URL}${endpoint}`)
        console.log(response);
        return response.data;
    }
    catch (error) {
        // status 401 token's expired
        if (error.response && error.response.status == 401) {
            await refreshToken();   //refresh token when has status 401
            const response = await axios.get(`${API_URL}${endpoint}`); // try the request again after refresh token
            return response.data

        }
        logout();
        window.location.href = '/login';
        throw error;
    }

}

//extra function if using protected function
export const fetchUserData = async () => {
    try {
        const response = await axios.get(`${API_URL}/me`)
        console.log(response);
        return response.data;
    }
    catch (error) {
        // status 401 token's expired
        if (error.response && error.response.status == 401) {
            const data = await refreshToken();
            const response = await axios.get(`${API_URL}/me`);
            return response.data

        }
        logout();
        window.location.href = '/login';
        throw error;
    }

}