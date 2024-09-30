import { useState } from "react";
import { AdjustIcon, Container, ErrorMessage, InputQuantity, QuantityBtn } from "./NumericInput.styles";


export default function NumericInput({ min, max, value, onChange }) {
    const [error, setError] = useState(null);
    const minQuantity = min;
    const maxQuantity = max;

    const handleDecrease = (e) => {
        e.preventDefault();
        setError(null);
        if(value>minQuantity){
            onChange(value-1);
            console.log("Min: button click" + max);
        }
        // onChange(prevQuantity => Math.max(prevQuantity - 1, minQuantity))
    }
    const handleIncrease = (e) => {
        e.preventDefault();
        setError(null);
        // onChange(prevQuantity => Math.min(prevQuantity + 1, maxQuantity));
        if(value<maxQuantity){
            console.log("Max: button click" + maxQuantity);
            onChange(value+1);
        }
    };

    const handleInputChange = (e) => {
        //  converting the string into a base-10 integer
        const inputValue = parseInt(e.target.value, 10);
        if (inputValue < minQuantity || inputValue > maxQuantity) {
            setError("Please enter a value between " + minQuantity + " and " + maxQuantity + ".")
            onChange(minQuantity);

        } else {
            setError(null);
            onChange(inputValue);
        }
    }

    return (
        <Container>
            <QuantityBtn onClick={handleDecrease}>
                <AdjustIcon>-</AdjustIcon>
            </QuantityBtn>
            <InputQuantity type="number" value={value} onChange={handleInputChange} name="quantity" min={min} max={max} />
            <QuantityBtn onClick={handleIncrease}>
                <AdjustIcon>+</AdjustIcon>
            </QuantityBtn>

            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    )
}

{/* <Input value={currentNumber} onKeyDown={(event) => {
    if(!(/[0-9]/.test(event.key) || "Backspace" == event.key)){
        event.preventDefault();
        let number = parseInt(currentNumber + event.target.value,10)
        setCurrentNumber(number);
    }

}}

    /> */}