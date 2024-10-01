import { useEffect, useState } from "react";
import { Input, InputContainer, Label, LoginContainer, LoginForm, Button } from "./LoginPage.styles";
import * as AuthService from '../../services/authServices';
import { useNavigate } from "react-router-dom";
import { USER_ACTION, useUser } from "../../hooks/UserContext";

function LoginPage() {
    const [loginFormValue, setLoginFormValue] = useState(
        {
            username: '',
            password: ''
        }
    )
    const { state, dispatch } = useUser();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        console.log(e.target.value);
        //key: value, base on name update value of input when it changed
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
        const { username, password } = loginFormValue;
        try {
            //call login function from Auth service
            const data = await AuthService.login(username, password);
            dispatch({ type: USER_ACTION.LOGIN, payload: data})           

        } catch (error) {
            dispatch({ type: USER_ACTION.AUTH_ERROR, payload: error.message})
            console.log('Login fail: ', error);
        }
    }

    useEffect(() => {
        if (state.isAuthenticated) {
            navigate('/')
        }
    }, [state.isAuthenticated, navigate])
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
