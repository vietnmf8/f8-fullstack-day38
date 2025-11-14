import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

import PropTypes from "prop-types";
import { Button } from "./ui/button";

const CartItem = ({ item, onUpdate, onRemove }) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price * 25000);
    };

    return (
        <div className="flex items-start gap-3 py-2">
            <img
                src={item.thumbnail}
                alt={item.title}
                className="w-12 h-12 object-cover rounded"
                onError={(e) => {
                    e.target.src =
                        "https://placehold.co/100x100/EEE/CCC?text=Img";
                }}
            />
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                    <h4 className="text-sm font-medium truncate pr-2">
                        {item.title}
                    </h4>
                    <span className="text-sm font-semibold whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                    </span>
                </div>

                {/* Controls và Nút xóa */}
                <div className="flex justify-between items-center mt-1">
                    {/* Nút +/- để updateQuantity */}
                    <div className="flex items-center gap-1">
                        <Button
                            variant="outline"
                            size="icon"
                            className="w-5 h-5"
                            onClick={() => onUpdate(item.id, item.quantity - 1)}
                        >
                            <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-sm w-5 text-center">
                            {item.quantity}
                        </span>
                        <Button
                            variant="outline"
                            size="icon"
                            className="w-5 h-5"
                            onClick={() => onUpdate(item.id, item.quantity + 1)}
                        >
                            <Plus className="w-3 h-3" />
                        </Button>
                    </div>
                    {/* Nút xóa */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="w-6 h-6 text-destructive"
                        onClick={() => onRemove(item.id)}
                    >
                        <Trash2 className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};
CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default CartItem;
