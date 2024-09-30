import styled from "styled-components";

export const LoginContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100vh;
     background-color: #f4f4f4;
`;
export const LoginForm = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  width: 20rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);  
`
export const InputContainer = styled.div`
    position: relative;
`
export const Label = styled.label`
    position: absolute;
    left: 0px;
    top: 10px;
    pointer-events: none;
    transition: 0.3s;
`

export const Input = styled.input`
    width: 100%;
  padding: 16px 0 8px 0;
  margin-bottom: 1.5rem;
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  transition: border 0.1s;

  &:focus {
    border-bottom: 2px solid #000;
  }
  &:focus ~ ${Label},
  //when input has content
  &:not(:placeholder-shown) ~ ${Label}
  {
    top: -10px;
    font-size: 0.875rem;
    color: #007bff;
    font-weight: 600;
  }
`

export const Button = styled.button`
 width: 100%;
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`