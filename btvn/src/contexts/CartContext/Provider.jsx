import React, { useEffect, useReducer } from "react";
import CartContext from "./Context";
import PropTypes from "prop-types";
import { cartReducer, initialState } from "@/pages/ShoppingCart/reducer.js";
import {
    ADD_TO_CART,
    CART_STORAGE_KEY,
    CLEAR_CART,
    LOAD_CART_FROM_STORAGE,
    REMOVE_FROM_CART,
    UPDATE_QUANTITY,
} from "./consts";

function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    console.log(`CartProvider render`);
    /* Khôi phục Cart khi load trang */
    useEffect(() => {
        try {
            const storedCart = localStorage.getItem(CART_STORAGE_KEY);
            if (storedCart) {
                dispatch({
                    type: LOAD_CART_FROM_STORAGE,
                    payload: JSON.parse(storedCart),
                });
            }
        } catch (error) {
            // Hiển thị lỗi và xoá khỏi localStorage
            console.error("Không thể tải Cart từ localStorage", error);
            localStorage.removeItem(CART_STORAGE_KEY);
        }
    }, []);

    /* Lưu vào localStorage sau khi cập nhật Cart */
    useEffect(() => {
        if (state !== initialState) {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
        }
    }, [state]);

    /* Thêm sản phẩm vào giỏ hàng */
    const addToCart = (product) => {
        dispatch({ type: ADD_TO_CART, payload: product });
    };

    /* Gỡ sản phẩm khỏi giỏ hàng */
    const removeFromCart = (productId) => {
        dispatch({ type: REMOVE_FROM_CART, payload: productId });
    };

    /* Cập nhật số lượng sản phẩm */
    const updateQuantity = (productId, quantity) => {
        dispatch({ type: UPDATE_QUANTITY, payload: { productId, quantity } });
    };

    /* Xoá toàn bộ khỏi giỏ hàng */
    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    const value = {
        // State
        items: state.items,
        totalPrice: state.totalPrice,
        totalQuantity: state.totalQuantity,

        // Method
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}

/* Prop types */
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CartProvider;
