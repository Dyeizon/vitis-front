import React, { useState } from "react";
import logo from './../img/logo.png'

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="mobile-menu-bar py-2">
                <a href="/" className="h-full"><img src={logo} alt="Logo" className="h-full"/></a>

                <div onClick={() => setOpen(!open)} class="space-y-2">
                    <div class="w-9 h-1 bg-white"></div>
                    <div class="w-9 h-1 bg-white"></div>
                    <div class="w-9 h-1 bg-white"></div>
                </div>
            </div>

            <div className={`mobile-menu-content ${open ? '' : 'hidden'}`}>
                <h1>alala</h1>
            </div>
        </>
    );
}