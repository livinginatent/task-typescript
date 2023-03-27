import React from "react";
import { useGetProductsQuery } from "./api";

import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = () => {
  const { data, isLoading } = useGetProductsQuery();
  if (!data) return null;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {console.log(data.products)}
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={3}>
        {data.products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                alt={product.title}
                height="200"
                image={product.thumbnail}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {product.description}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Price: ${product.price}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Rating: {product.rating}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Stock: {product.stock}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Category: {product.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
