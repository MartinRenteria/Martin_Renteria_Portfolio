/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [light, setLight] = useState(false);

    useEffect(() => {
        setLight(document.documentElement.dataset.theme === "light");
    }, []);

    function toggle() {
        const next = light ? "dark" : "light";
        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem("theme", next);
        } catch { }
        setLight(!light);
    }

    return (
        <button type="button" className="theme-toggle" onClick={toggle}>
            {light ? "Switch to dark theme" : "Switch to light theme"}
        </button>
    );
}
