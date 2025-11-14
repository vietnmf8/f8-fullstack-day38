import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import useCart from "@/hooks/useCart";
import PropTypes from "prop-types";

function ProductCard({ product }) {
    const { addToCart } = useCart();

    /* Hàm định dạng tiền VND */
    const formatPrice = (price) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price * 25000);
    };

    /* JSX */
    return (
        <Card className="flex flex-col justify-between">
            <CardHeader>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
                <CardTitle className="text-lg h-14 overflow-hidden">
                    {product.title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-xl font-semibold text-primary">
                    {formatPrice(product.price)}
                </p>
            </CardContent>
            <CardFooter>
                {/* 8. click thì gọi addToCart(product) */}
                <Button className="w-full" onClick={() => addToCart(product)}>
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}

/* Prop-types */
ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string,
    }).isRequired,
};

export default ProductCard;
