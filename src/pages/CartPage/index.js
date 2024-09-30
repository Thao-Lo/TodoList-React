import { Box, Button, Container, Grid } from "@mui/material";
import NumbericInput from '../../components/ecommerce/NumericInput';
import { CART_ACTION, useCart } from "../../hooks/CartContext";

function CartPage() {
    const { state: cart, dispatch } = useCart();    

    const handleUpdateCart = (product, newQuantity) => {
        console.log("Updating cart item with id:", product.id, "and new quantity:", newQuantity);
        dispatch ({type: CART_ACTION.UPDATE_ITEM, payload: {product, quantity: newQuantity}})
    }

    const cartList = cart && cart.map(item => (       
        <Box key={`${Math.random()}_${item.product.id}`}>            
            <Box> Product name: {item.product.title}</Box>
            <Box> Quantity: {item.quantity}</Box>
            <Box>Price: ${item.product.price * item.quantity}</Box>
            <Button onClick={() => dispatch({type: CART_ACTION.REMOVE_ITEM, payload: {product: item.product}})} >Remove</Button>
            <Box sx={{minWidth: '10rem', display: 'flex'}}>
            <NumbericInput value={item.quantity}
             onChange={(newQuantity) => handleUpdateCart(item.product, newQuantity)} min={1} max={item.product.stock} />           
            </Box>
           
        </Box>
    ))

    return (
        <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
            <Box sx={{ mb: 2, fontSize: 'h6.fontSize', fontWeight: 'fontWeightMedium' }}>Your Cart</Box>

            <Grid container spacing={2} sx={{marginLeft: '2rem'}}>
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