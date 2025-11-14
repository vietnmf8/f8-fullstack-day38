import React from "react";
import { Button } from "./ui/button";
import { PackageOpen, ShoppingCart } from "lucide-react";
import useCart from "@/hooks/useCart";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import CartItem from "./CartItem";

function MainHeader() {
    const {
        items,
        totalQuantity,
        totalPrice,
        updateQuantity,
        removeFromCart,
        clearCart,
    } = useCart();

    /* Hàm định dạng tiền VND */
    const formatPrice = (price) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price * 25000);
    };
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <nav className="container h-16 flex items-center justify-between mx-auto">
                <a href="/" className="text-xl font-bold">
                    MyStore
                </a>

                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="relative"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            {/* Hiển thị totalQuantity,  = 0 thì ẩn */}
                            {totalQuantity > 0 && (
                                <Badge
                                    variant="destructive"
                                    className="absolute -top-2 -right-2 px-1.5 py-0.5 text-xs h-auto"
                                >
                                    {totalQuantity}
                                </Badge>
                            )}
                        </Button>
                    </PopoverTrigger>
                    {/* Hiển thị dropdown cart */}
                    <PopoverContent className="w-80 absolute -right-3.5">
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center p-4">
                                <PackageOpen className="w-12 h-12 text-muted-foreground" />
                                <p className="mt-2 text-muted-foreground">
                                    Your cart is empty.
                                </p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-lg font-medium mb-2">
                                    My Cart
                                </h3>
                                <ScrollArea className="h-64">
                                    <div className="pr-4">
                                        {/* List các sản phẩm */}
                                        {items.map((item) => (
                                            <React.Fragment key={item.id}>
                                                <CartItem
                                                    item={item}
                                                    onUpdate={updateQuantity}
                                                    onRemove={removeFromCart}
                                                />
                                                <Separator className="my-1" />
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </ScrollArea>
                                <Separator className="my-2" />
                                {/* Hiển thị tổng tiền */}
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-muted-foreground">
                                        Total:
                                    </span>
                                    <span className="text-xl font-bold">
                                        {formatPrice(totalPrice)}
                                    </span>
                                </div>
                                {/* Nút "Clear Cart" */}
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={clearCart}
                                >
                                    Clear Cart
                                </Button>
                            </>
                        )}
                    </PopoverContent>
                </Popover>
            </nav>
        </header>
    );
}

export default MainHeader;
