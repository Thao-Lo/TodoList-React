import { Container, ImageList, ImageListItem, Box, Typography, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCart } from "../../../hooks/CartContext";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import QuantityInputContainer from "../QuantityInput";

function ProductDetail({ product }) {
    const { addToCart } = useCart();

    const handleAddToCart = (inputQuantity) => {
        addToCart({id: product.id, title: product.title, quantity: inputQuantity })
    }
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
            <Box>
                <IconButton aria-label="add to cart" onClick={() => addToCart({id: product.id, title: product.title, quantity: 1 })}>
                    <AddShoppingCartIcon />
                </IconButton>
                <QuantityInputContainer min={1} max={10} defaultValue={1} handleAddToCart={handleAddToCart} showUpdateCart={false}/>
            </Box>
        </Box>

    )
}
export default ProductDetail;