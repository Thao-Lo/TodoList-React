import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, CardHeader, IconButton, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
        <Box sx={{ margin: '0.5rem' }}>
            <Card sx={{ maxWidth: 345, height: 450 }}>
                <CardHeader
                    title={<Link to={`/products/${product.id}`} style={{ textDecoration: 'none', fontSize: '1.25rem' }}>{product.title}</Link>}
                    sx={{ height: 64, alignItems: 'start' }} />
                <CardMedia
                    sx={{ height: 200, backgroundSize: 'contain' }}
                    image={product.thumbnail}
                    title={product.title}
                />
                <CardContent sx={{ height: 60 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        ${product.AddShoppingCartIconprice}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {product.brand}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'end' }}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="add to cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>

    )
}

export default ProductCard;