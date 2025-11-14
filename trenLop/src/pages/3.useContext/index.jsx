
import { ThemeContext } from "@/contexts/ThemeContext";
import React, { useContext, useEffect } from "react";

/* 
- Props: A => B => C => D
- useContext: A => D
- Global State & Local State

- Bước 1: Tạo
- Bước 2: Cung cấp giá trị
- Bước 3: Nhận giá trị

LƯU Ý:  CHỉ Re-render lại component chọn vào useContext để lấy dữ liệu ra
? Theo lý thuyết Comp CHA re-render sẽ dẫn tới Comp CON re-render. Vậy tại sao trong trường hợp này Comp UseContext mặc dù nằm trong Comp Provider, Provider re-render nhưng Child lại không re-render
=> Bởi vì khác nhau các truyền:
Nếu truyền trực tiếp:
<ThemeContext.Provider>
    <App/> --> Đây là cú pháp React.createElement
</ThemeContext.Provider>

=> Mỗi lần re-render lại phải gọi lại createElement mới nên App sẽ bị re-render
- Còn nếu:
<ThemeContext.Provider>
    {children} --> Giữ tham chiếu đến App, App không đổi nên không bị re-render
</ThemeContext.Provider>
*/

const Child = () => {
    /* Bước 3: Nhận giá trị */
    const { theme, toggle } = useContext(ThemeContext);
    const isLight = theme === "light";

    console.log("re-render");

    useEffect(() => {
        // Đã có shadCN hỗ trợ dark mode
        // document.body.classList.toggle('light', isLight);
        // document.body.classList.toggle('dark', !isLight);

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

function UseContext() {
    console.log("re-render");
    return (
        <>
            <Child />
        </>
    );
}

export default UseContext;
