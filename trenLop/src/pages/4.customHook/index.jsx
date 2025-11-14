import useTheme from "@/hooks/useTheme";
import React, { useEffect } from "react";

/*
- Built-in Hook: Là Hook có sẵn
- Custom Hook  : Hook tự tạo ra
    - Bắt đầu bằng "use", ... (Rules of Hooks - giống các Hook khác)
    - Hầu hết -> Dùng hook khác bên trong
    => Tái sử dụng logic => tránh lặp code khi dùng hook, tránh import nhiều lần

    Cách tư duy để custom hook:
    1. Xác định code DÙNG HOOK bị lặp. VD: Lặp nhiều lần lấy giá trị theme
    2. Xác định tên hook. Ví dụ: useTheme, useCountDown, useInfinityLoad
    3. Chuyển code bị lặp vào trong custom hook
*/

const Child = () => {
    const { theme, toggle } = useTheme();
    const isLight = theme === "light";

    console.log("re-render");

    useEffect(() => {
        document.body.style.background = isLight ? "#fff" : "#333";
    }, [theme, isLight]);

    return (
        <div>
            <h1
                style={{
                    color: isLight ? "#333" : "#fff",
                }}
            >
                UseContext
            </h1>

            <button onClick={toggle}>{isLight ? "Dark" : "Light"}</button>
        </div>
    );
};

function CustomHook() {
    console.log("re-render 1");
    return (
        <>
            <Child />
        </>
    );
}

export default CustomHook;
