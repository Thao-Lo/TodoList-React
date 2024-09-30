import { useEffect, useState } from "react";
import { fetchProtectedData, fetchUserData } from "../../services/authServices";

function UserPage() {
    const [user, setUser] = useState({});

    useEffect( () => {
       fetchProtectedData('/me');        
    }, [])

    return (
        <div>User Profile Page</div>
    )
}

export default UserPage;