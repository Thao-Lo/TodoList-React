import { useEffect, useState } from "react";
import { fetchProtectedData, fetchUserData } from "../../services/authServices";

function UserPage() {
    const [user, setUser] = useState({});

    useEffect(() => {
        //using axios promise base
        const getUserData = async () => {
            try {
                const data = await fetchProtectedData('/me');
                setUser(data)
            }
            catch (error) {
                throw new Error(error)
            }
        }
        getUserData();
    }, [])

    return (
        <div>
            <h1>User Profile Page</h1>
            {user ? (
                <div> 
                     <img src={user.image} alt={user.firstName}/>
                    <div>Full name: {user.lastName} {user.firstName} </div>
                    <div>Email: {user.email}</div>
                    <div>Gender: {user.gender}</div>                
                   
                </div>                
            )
                :
                (
                    <div>Loading</div>
                )}
        </div>
    )
}

export default UserPage;