import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { CART_ACTION, useCart } from "../../../hooks/CartContext";
import NumbericInput from '../NumericInput';
function ProductDetail({ product }) {
    console.log("product", product);
    const [quantity, setQuantity] = useState(1);
    const {dispatch} = useCart();   

    return (
        <Box sx={{ margin: '2rem' }}>
            <Box>
                <Typography variant="h5" component="h5">{product.title}</Typography>
            </Box>
            <Box>
                <Typography gutterBottom variant="h5" component="div">
                    ${product.price}
                </Typography>
            </Box>
            <Box>
                <Typography variant="h6" color="text.secondary">
                    {product.description}
                </Typography>
            </Box>
            <Box sx={{display:'flex'}}>
                <NumbericInput value={quantity} onChange={setQuantity} min={1} max={product.stock} />
                <IconButton aria-label="add to cart" 
                onClick={() => dispatch({type: CART_ACTION.ADD_ITEM, payload:{product, quantity: quantity}})}>
                    <AddShoppingCartIcon />
                </IconButton>

              
            </Box>
        </Box>

    )
}
export default ProductDetail;