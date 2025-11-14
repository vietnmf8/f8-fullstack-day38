import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_QUANTITY,
    CLEAR_CART,
    LOAD_CART_FROM_STORAGE,
} from "./consts.js";

/* Hàm tính toán tổng số lượng và tổng giá tiền */
const calculateTotals = (items) => {
    // Tổng số lượng
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

    // Tổng số tiền
    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return { totalQuantity, totalPrice };
};

/* State khởi tạo */
export const initialState = {
    items: [], // Mảng chứa các sản phẩm
    totalPrice: 0, // Tổng tiền cần thanh toán trong giỏ hàng
    totalQuantity: 0, // Tổng số lượng sản phẩm
};

/* Reducer xử lý các hành động thanh toán */
export const cartReducer = (state, action) => {
    let newItems; // Mảng mới sau khi cập nhật sản phẩm
    let totals = {}; // Tổng số lượng và tổng số tiền

    switch (action.type) {
        /* Thêm vào giỏ */
        case ADD_TO_CART: {
            // Kiểm tra sản phẩm đã tồn tại chưa?
            const product = action.payload;
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === product.id
            );

            // Nếu sản phẩm tồn tại -> +1 số lượng
            if (existingItemIndex > -1) {
                newItems = state.items.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Sản phẩm mới, thêm vào giỏ
                newItems = [...state.items, { ...product, quantity: 1 }];
            }

            totals = calculateTotals(newItems);

            // Trả ra tổng thông tin sản phẩm
            return { items: newItems, ...totals };
        }

        /* Gỡ sản phẩm */
        case REMOVE_FROM_CART: {
            const productId = action.payload;
            // Cập nhật mảng chứa các sản phẩm mới
            newItems = state.items.filter((item) => item.id !== productId);

            // Cập nhật tổng giá tiền và số lượng
            totals = calculateTotals(newItems);

            // Trả ra tổng thông tin sản phẩm
            return { items: newItems, ...totals };
        }

        /* Cập nhật số lượng mỗi sản phẩm */
        case UPDATE_QUANTITY: {
            const { productId, quantity } = action.payload;
            if (quantity <= 0) {
                // Nếu số lượng = 0 -> xoá sản phẩm
                newItems = state.items.filter((item) => item.id !== productId);
            } else {
                // Cập nhật số lượng mới
                newItems = state.items.map((item) =>
                    item.id === productId ? { ...item, quantity } : item
                );
            }

            // Cập nhật tổng giá tiền và số lượng
            totals = calculateTotals(newItems);

            // Trả ra tổng thông tin sản phẩm
            return { items: newItems, ...totals };
        }

        /* Clear Giỏ hàng */
        case CLEAR_CART:
            return initialState; // trả về state ban đầu

        /* Khôi phục từ localStorage */
        case LOAD_CART_FROM_STORAGE:
            return action.payload;

        default:
            throw new Error(`Action ${action.type} invalid`);
    }
};
