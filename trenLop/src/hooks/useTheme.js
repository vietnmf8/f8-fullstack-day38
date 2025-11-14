import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

function useTheme() {
    const context = useContext(ThemeContext);
    return context;
}

export default useTheme;
