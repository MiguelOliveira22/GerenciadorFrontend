'use client';

import { createRoot } from "react-dom/client";
import "material-symbols";

export default function HeaderChange(){
    function onClick(){
        const domNode = document.getElementById("colorMode");
        //const root = createRoot(domNode);

        //root.render();
    }

    return (
        <header className="caixaBackgroundColor">
            <div onClick={onClick} className="botaoBackgroundColor">
                <span className="material-symbols-outlined">light_mode</span>
                <p id="colorMode">Light Mode</p>
            </div>
        </header>
    );
}