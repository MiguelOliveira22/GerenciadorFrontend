import { FormCriar } from "@/components/form";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Criar"
}

export default async function PageTarefa() {
    return (
        <div className="mainForm">
            <div className="card">
                <FormCriar/>
            </div>
        </div>
    );
}