import { Outlet } from "react-router";
import React from "react";
import MainHeader from "@/components/MainHeader";
import Header from "@/components/Header";

function DefaultLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            
            <main className="grow">
                <Outlet />
            </main>

            <footer className="border-t py-4 text-center text-muted-foreground">
                Footer © 2025
            </footer>
        </div>
    );
}

export default DefaultLayout;
