import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ecommerce/ProductDetail";
import { ImageList, ImageListItem, Grid, CircularProgress, Container, Box } from "@mui/material";
import RelatedProducts from "../../components/ecommerce/RelatedProducts";


function ProductDetailPage() {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);   

    let params = useParams();
    console.log("params", params);

    const fetchProductById = async () => {
        setIsLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${params.productId}`);
        const data = await res.json();
        setProduct(data);
        setIsLoading(false);
        console.log(data.images);
    }
    useEffect(() => {
        fetchProductById();
    }, [])

    let imageDisplay = (
        <ImageList sx={{ minWidth: 500, height: 450 }} variant="woven" cols={2} gap={8}>
            {product.images && product.images.map((img) => (
                <ImageListItem key={img}>
                    <img
                        srcSet={`${img}`}
                        src={`${img}`}
                        alt={product.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );

    return (
        <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
            <Grid container spacing={2}>
                <Grid xs={7}>
                    {isLoading ? <CircularProgress /> : imageDisplay}

                </Grid>
                <Grid xs={5}>
                    {!isLoading && <ProductDetail product={product} />}
                </Grid>
            </Grid>
            <Box sx={{width: '100vw', display:'flex', justifyContent:'center', marginTop: '2rem'}}>
                {!isLoading && <RelatedProducts product={product} />}
            </Box>
        </Container>
    )
}

export default ProductDetailPage;