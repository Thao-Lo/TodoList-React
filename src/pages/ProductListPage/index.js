import { Link } from "react-router-dom";
import ProductCard from "../../components/ecommerce/ProductCard";
import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";

function ProductListPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchProducts = async () => {
        const res = await fetch('https://dummyjson.com/products?limit=15');
        const data = await res.json();
        setProducts(data.products);
        setIsLoading(false)
        console.log(data.products);
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    let productList = products.map(({ id, title, brand, thumbnail, price }) => {
        return (
            <Grid xs={4}>
                <ProductCard id={id} key={id} title={title} brand={brand} thumbnail={thumbnail} price={price} />
            </Grid>
        )
    })



    return (
        <div>
            <h1> Product List Page</h1>
            <Container maxWidth="lg">
            <Grid container spacing={2}>

                {productList}

            </Grid>
            </Container>
        </div>

    )
}

export default ProductListPage;