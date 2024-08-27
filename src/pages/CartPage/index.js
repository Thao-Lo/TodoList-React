import { Box, Grid, Container,Button } from "@mui/material";
import QuantityInputContainer from "../../components/ecommerce/QuantityInput";
import { useCart } from "../../hooks/CartContext";


function CartPage() {
    const { cart, deleteItem, updateCartItem } = useCart();

    const handleUpdateCart = (id, quantity) => {
        console.log("Updating cart item with id:", id, "and quantity:", quantity);
        updateCartItem(id, quantity)
    }

    const cartList = cart.map(item => (
        <Box key={item.id}>            
            <Box> Product name: {item.title}</Box>
            <Box> Quantity: {item.quantity}</Box>
            <Button onClick={() => deleteItem(item.id)} >Remove</Button>
            <QuantityInputContainer min={1} max={10} defaultValue={item.quantity} id={item.id} showAddToCart={false} handleUpdateCart={handleUpdateCart}/>
        </Box>
    ))

    return (
        <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
            <Box sx={{ mb: 2, fontSize: 'h6.fontSize', fontWeight: 'fontWeightMedium' }}>Your Cart</Box>

            <Grid container spacing={2}>
                <Grid item xs={9}>                    
                        {cart.length === 0 ? "Cart is empty" : cartList}  
                </Grid>
                <Grid item xs={3}>
                    <Box>Checkout</Box>

                </Grid>
            </Grid>


        </Container>
    )
}

export default CartPage;