import { Container, ImageList, ImageListItem, Box, Typography } from "@mui/material";

function ProductDetail({ product }) {
    return (
        <Box sx={{margin: '2rem'}}>
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
        </Box>

    )
}
export default ProductDetail;