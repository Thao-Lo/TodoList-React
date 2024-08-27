import { useState } from "react";
import { AdjustIcon, Form, QuantityBtn, SubmitButton, InputQuantity, ErrorMessage } from "./QuantityInput.styles";


export default function QuantityInputContainer({ min, max, defaultValue, handleAddToCart,handleUpdateCart, id, showAddToCart = true, showUpdateCart = true }) {
    const [quantity, setQuantity] = useState(defaultValue);
    const [error, setError] = useState(null);
    const minQuantity = min;
    const maxQuantity = max;

    const handleDecrease = (e) => {
        e.preventDefault();
        setError(null);
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, minQuantity))
    }
    const handleIncrease = (e) => {
        e.preventDefault();
        setError(null);
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, maxQuantity));
    };

    const handleInputChange = (e) => {
        //  converting the string into a base-10 integer
        const value = parseInt(e.target.value, 10);
        if (value < minQuantity || value > maxQuantity) {
            setError("Please enter a value between " + minQuantity + " and " + maxQuantity + ".")
            setQuantity(minQuantity);

        } else {
            setError(null);
            setQuantity(value);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddToCart(quantity);
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        handleUpdateCart(id, quantity);

    }

    return (
        <div>
            <Form action="">
                <QuantityBtn onClick={handleDecrease}>
                    <AdjustIcon>-</AdjustIcon>
                </QuantityBtn>
                <InputQuantity type="number" value={quantity} onChange={handleInputChange} name="quantity" min={min} max={max} />
                <QuantityBtn onClick={handleIncrease}>
                    <AdjustIcon>+</AdjustIcon>
                </QuantityBtn>
                {showAddToCart && (
                    <SubmitButton type="submit" onClick={handleSubmit}>Add To Cart</SubmitButton>
                )}
                {showUpdateCart && (
                    <SubmitButton type="submit" onClick={handleUpdate}>Update</SubmitButton>
                )}
            </Form>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
    )
}