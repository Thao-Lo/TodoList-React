function UserCard({profilePicture, username, useAge, online}){
    return(
    <div className="user-item">
        <img className ="avatar" src={profilePicture} alt={`${username}-avatar`}/>
        <h4>Name: {username} - age: {useAge}</h4>
        <p>Status: {online? "Online" : "Offline"} </p>
    </div>
    )

}
export default UserCard;