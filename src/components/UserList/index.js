import UserCard from "../UserCard";

function UserList() {
  const listUser = [{
    name: 'Keira',
    age: 30,
    avatar: 'avatar.jpeg',
    online: false
  }, {
    name: 'Thao Lo',
    age: 35,
    avatar: 'avatar.jpeg',
    online: true
  }, {
    name: 'Zavis',
    age: 40,
    avatar: 'avatar.jpeg',
    online: true
  }]


  return (
    <div className="sidebar">
      {/* {listUser.map((user, index) => {
        return (
          <UserCard key={index} avatar={user.avatar} name={user.name} age={user.age} online={user.online}></UserCard>
        )
      })} */}
      {listUser.map(({ name, age, avatar, online }, index) => {
        return (
          <UserCard
            key={index}
            profilePicture={avatar}
            username={name}
            userAge={age}
            online={online}></UserCard>
        )
      })};
    </div>
  )
}
export default UserList;