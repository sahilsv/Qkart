import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card" sx={{ maxWidth: 350 }}>
      <CardMedia component="img" alt={product.name} image={product.image} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography mb={1} variant="body2" sx={{ fontWeight: "bold" }}>
          ${product.cost}
        </Typography>
        <Rating
          name="read-only"
          value={product.rating}
          precision={0.5}
          readOnly
        />
      </CardContent>
      <CardActions className="card-actions">
        <Button
          className="card-button"
          variant="contained"
          startIcon={<AddShoppingCartOutlined />}
          onClick={handleAddToCart}
          fullWidth
        >
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
