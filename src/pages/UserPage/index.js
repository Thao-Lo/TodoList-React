import { useEffect, useState } from "react";
import { fetchProtectedData, fetchUserData } from "../../services/authServices";
import { USER_ACTION, useUser } from "../../hooks/UserContext";
import { useNavigate } from "react-router-dom";

function UserPage() {
    const { state, dispatch } = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        //using axios promise base
        const getUserData = async () => {
            try {
                const data = await fetchProtectedData('/me');
                dispatch({ type: USER_ACTION.SET_USER, payload: data });
                setIsLoading(false);
            }
            catch (error) {
                console.log('error', error);
                setIsLoading(false) //stop loading when error occur
                setError("You need to log in to access this page.");
                setTimeout(() => {
                    navigate('/login')
                }, 3000)

            }
        }
        getUserData();
    }, [dispatch, navigate])

    if (isLoading) return <div>....Loading</div>
    if (error) return <div>{error}</div>
    return (
        <div>
            <h1>User Profile Page</h1>
            {state.user ? (
                <div>
                    <img src={state.user.image} alt={state.user.firstName} />
                    <div>Full name: {state.user.lastName} {state.user.firstName} </div>
                    <div>Email: {state.user.email}</div>
                    <div>Gender: {state.user.gender}</div>

                </div>            )
                :
                (
                    <div>No user Data available</div>
                )}
        </div>
    )
}

export default UserPage;