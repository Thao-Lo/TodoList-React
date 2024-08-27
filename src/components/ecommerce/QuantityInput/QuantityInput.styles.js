import styled from "styled-components";

export const Form = styled.form`
    width: 17rem;
    height: 5rem;
    background-color: white;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
`
export const QuantityBtn = styled.button `
      width: 2rem;
    height: 2rem;
    border-radius: 5px;
    border: none;
    background-color: #e7e9eb;
    &:hover {
        background-color: #a6a7a8;
    }
`
export const AdjustIcon = styled.div `
   color: black;
   font-size: 1.5rem;
`


export const InputQuantity = styled.input`
     height: 2rem;
    text-align: center;
    border-radius: 5px;
    border: 1px solid gray;
`
export const SubmitButton = styled.button`
    height: 2rem;
    border: none;
    border-radius: 5px;
    padding: 0 1rem;
    color: white;
    font-weight: 600;
    background-color: #04aa6d;
    &:hover {
        background-color: #059862;
    }
`


export const ErrorMessage = styled.div`
    color: red;
    margin-top: 0.5rem;
`
