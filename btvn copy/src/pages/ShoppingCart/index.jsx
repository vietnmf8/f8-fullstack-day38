import MainHeader from "@/components/MainHeader";
import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from "react";

function ShoppingCart() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /* Tải dữ liệu products */
    useEffect(() => {
        setIsLoading(true);
        fetch("https://api01.f8team.dev/api/products")
            .then((res) => res.json())
            .then((response) => {
                setProducts(response.data.items);
            })
            .catch((error) => {
                console.error("Failed to fetch products:", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    /* Xử lý loading */
    if (isLoading) {
        return (
            <div className="container mx-auto p-4 text-center">
                Loading products...
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <MainHeader />
            <h1 className="text-3xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ShoppingCart;
