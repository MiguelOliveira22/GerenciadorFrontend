'use client';

import "material-symbols";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ColorModeHeader(){
    const [ mounted, setMounted ] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    });

    if (!mounted) {
        return null;
    }

    function onClick() {
        if(theme == "dark")
            setTheme("light");
        else
            setTheme("dark");
    }

    return (
        <header className="caixaBackgroundColor">
            <div onClick={onClick} className="botaoBackgroundColor">
                <span className="material-symbols-outlined">{ theme != "system" ? `${theme}_mode`: "home" }</span>
                <p id="colorMode">{ (theme != "system") ? ((theme == "light") ?"Light Mode" : "Dark Mode") : "Preffered Color Mode" }</p>
            </div>
        </header>
    );
}