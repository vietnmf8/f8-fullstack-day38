import React, { useState } from "react";
import ThemeContext from "./Context";

/* Bước 2: Tạo ra cái cung cấp */
// eslint-disable-next-line react/prop-types
export const Provider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const values = {
        theme,
        toggle() {
            setTheme(theme === "light" ? "dark" : "light");
        },
    };
    return (
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    );
};

export default Provider;
