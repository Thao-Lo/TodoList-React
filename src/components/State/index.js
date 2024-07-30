import {useState} from 'react';
function State(){
    const[name, setName] = useState("");

return (   
    <div>
        <h1>Hello, {name}!</h1>
        <input type="text" value={name} onChange={event =>setName(event.target.value)}/>
    </div>
)
}
export default State;