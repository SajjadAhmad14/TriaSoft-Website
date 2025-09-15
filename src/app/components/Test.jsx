import React, { useState } from "react";
import { MenuIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function TestIcons() {
    const [open, setOpen] = useState(false);
    return (
        <div className="p-10">
            <button onClick={() => setOpen(!open)}>
                {open ? <XMarkIcon className="w-8 h-8 text-black" /> : <MenuIcon className="w-8 h-8 text-black" />}
            </button>
        </div>
    );
}
