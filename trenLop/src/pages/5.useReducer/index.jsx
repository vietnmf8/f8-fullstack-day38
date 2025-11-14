import { Button } from "@/components/ui/button";
import React, { useReducer } from "react";
import reducer from "./reducer";
import { DECREASE, INCREASE } from "./consts";

function UseReducer() {
    const [count, dispatch] = useReducer(reducer, 0);
    console.log(count);

    return (
        <div>
            <h1>Count is {count}</h1>
            {/* Tăng */}
            <Button
                variant="outline"
                onClick={() => dispatch({ type: INCREASE })}
            >
                Increase
            </Button>

            {/* Giảm */}
            <Button
                variant="outline"
                onClick={() => dispatch({ type: DECREASE })}
            >
                Decrease
            </Button>

            {/* Tăng 5 */}
            <Button
                variant="outline"
                onClick={() => dispatch({ type: INCREASE, payload: 100 })}
            >
                Jump
            </Button>
        </div>
    );
}

export default UseReducer;
