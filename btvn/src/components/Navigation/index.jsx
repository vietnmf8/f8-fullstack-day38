import paths from "@/configs/path";
import { NavLink } from "react-router";
import React from "react";

const items = [
    {
        path: paths.countdown,
        title: "countdown",
    },
    {
        path: paths.counter,
        title: "counter",
    },
    {
        path: paths.shoppingCart,
        title: "shoppingCart",
    },
];

function Navigation() {
    /* Hàm Render Item */

    return (
        <nav>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "current" : ""
                            }
                            to={item.path}
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
