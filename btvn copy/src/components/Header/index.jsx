import Navigation from "../Navigation";
import React from "react";

function Header() {
    return (
        // Viết CSS inline trực tiếp với object style
        <header style={{ marginTop: 50, padding: 10 }}>
            <Navigation />
        </header>
    );
}

export default Header;
