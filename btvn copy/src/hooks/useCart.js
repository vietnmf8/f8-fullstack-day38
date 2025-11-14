import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";

/* Hook nhận context */
const useCart = () => {
    const context = useContext(CartContext);

    // Bắn lỗi khi cố tình dùng context ngoài Provider
    if (context === undefined) {
        throw new Error("useCart này phải được dùng với CartProvider");
    }

    // Trả về context nhận được
    return context;
};

export default useCart;
