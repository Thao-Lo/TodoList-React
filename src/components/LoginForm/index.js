import { useState } from "react";

import {LoginContainer, LoginBox, Input, Button} from './LoginForm.styles'


function LoginForm({ onLogin }) {
    const [loginFormValue, setLoginFormValue] = useState({
        username: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginFormValue((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = () => {
        const { username, password } = loginFormValue;
        if (username && password) {
            onLogin();

        } else {
            alert("Invalid Username or Password")
        }
    }
    return (
        <LoginContainer>
        <LoginBox>
            <label for="username"><b>Username</b></label>
            <Input type="text" name='username' value={loginFormValue.username} onChange={handleInputChange} />


            <label for="password"><b>Password</b></label>
            <Input type="password" name='password' value={loginFormValue.password} onChange={handleInputChange} />

            <Button type="submit" onClick={handleSubmit}>Login</Button>
        </LoginBox>
        </LoginContainer>
    )
}
export default LoginForm;