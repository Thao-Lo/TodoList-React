import styled from "styled-components";

export const Container = styled.div`
    width: 10rem;
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


export const ErrorMessage = styled.div`
    color: red;
    margin-top: 0.5rem;
`
