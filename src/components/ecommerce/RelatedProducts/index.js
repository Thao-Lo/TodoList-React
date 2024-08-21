import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function RelatedProducts({ product }) {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProduct] = useState([]);

    const fetchProductByCategory = async () => {
        setIsLoading(true);
        const res = await fetch(`https://dummyjson.com/products/category/${product.category}`);
        const data = await res.json();
        setProduct(data.products);
        setIsLoading(false);
        console.log("category", data.products);
    }

    useEffect(() => {
        fetchProductByCategory();
        return () => { fetchProductByCategory()}
    }, [])


    return (
        <Box sx={{ minHeight: '5rem', width: "90vw", display:'flex', gap:'1rem', padding:'0.5rem' }}>
            {products.map( item  => {
                return (
                <Card sx={{ width: 345, height: 250}} key={item.id + item.title}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.thumbnail}
                            alt={item.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              ${item.price}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {item.title} 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                )
            })}

        </Box>
    )
}
export default RelatedProducts;