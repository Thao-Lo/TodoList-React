import { useEffect, useState } from "react";
import { Input, InputContainer, Label, LoginContainer, LoginForm, Button } from "./LoginPage.styles";
import * as AuthService from '../../services/authServices';
import { useNavigate } from "react-router-dom";

function LoginPage({isLoggedIn,setIsLoggedIn}) {
    const [loginFormValue, setLoginFormValue] = useState(
        {
            username: '',
            password: ''
        }
    )
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setLoginFormValue((preValue) => (
            {
                ...preValue,
                [name]: value
            }
        ))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {username, password } = loginFormValue;
        try{
           const data = await AuthService.login(username, password);
           setIsLoggedIn(true);
        //    localStorage.setItem('hi', data)
           console.log(localStorage.getItem('user'));
        }catch(error){
                console.log('Login fail: ', error);
        }      
    }
    useEffect(()=> {
        if(isLoggedIn){
            navigate('/')
        }
    },[isLoggedIn, navigate]) 

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleSubmit}>
                <InputContainer>
                    <Input type="text" id="username" name="username" placeholder="" value={loginFormValue.username} onChange={handleInputChange} />
                    <Label htmlFor="username">Username: </Label>
                </InputContainer>
                <InputContainer>
                    <Input type="password" id="password" name="password" placeholder="" value={loginFormValue.password} onChange={handleInputChange} />
                    <Label htmlFor="password">Password: </Label>
                </InputContainer>
                <Button type="submit">Submit</Button>
            </LoginForm>
        </LoginContainer>
    )
}
export default LoginPage;
