import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import React from "react";

function UseState() {
    const [countDown, setCountDown] = useState(60);

    console.log("re-render");

    useEffect(() => {
        // Closure: Trong lần đầu tiên chạy nhớ countdown = 60
        setInterval(() => {
            console.log("Running....");
            setCountDown((prev) => prev - 1);
        }, 1000);

        // Hoặc nếu truyền deps thì có thể clean-up
    }, []);

    return (
        <div>
            <h1>Count is {countDown}</h1>
        </div>
    );
}

export default UseState;
