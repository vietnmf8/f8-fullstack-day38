import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";

const START_COUNT = 10;

function Countdown() {
    const [count, setCount] = useState(10);

    // useRef để lưu intervalId ra ngoài.
    const intervalRef = useRef(null);

    /* Dừng bộ đếm */
    const stopCountdown = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    /* Bắt đầu bộ đếm */
    const startCountDown = () => {
        // Dừng bộ đếm cũ
        stopCountdown();

        // Bắt đầu đếm ngược
        intervalRef.current = setInterval(() => {
            setCount((prev) => {
                if (prev <= 1) {
                    stopCountdown(); // Dừng bộ đếm
                    return 0; // Trả về giá trị cuối cùng
                }
                return prev - 1;
            });
        }, 1000);
    };

    /* Reset bộ đếm */
    const handleReset = () => {
        stopCountdown(); // Dừng bộ đếm cũ
        setCount(START_COUNT); // Đặt lại giá trị
        startCountDown(); // Bắt đầu bộ đếm
    };

    useEffect(() => {
        // Bắt đầu bộ đếm
        startCountDown();

        // Clean up
        return () => {
            stopCountdown();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <h2>Count is {count}</h2>
            <Button onClick={handleReset}>Reset</Button>
        </div>
    );
}

export default Countdown;
