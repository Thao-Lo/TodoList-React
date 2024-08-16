import './App.css';
import { NavBar } from './components/example/NavBar';
import State from './components/State';
import Count from './components/example/Count';
import DarkMode from './components/DarkMode';
import { useState } from "react";
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import TodoContainer from './components/todo-list/TodoContainer';
import TodoList from './components/todo-list/TodoList';
import TimerContainer from './components/timer/TimerContainer';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="App">
      {/* <NavBar />
      <State />
      <Count />
      <DarkMode />
      {isLoggedIn ? <UserList /> : <LoginForm onLogin={handleLogin}/>} */}
      {/* <TodoList /> */}
     <TimerContainer/>
    </div>
  
  );
}

export default App;
