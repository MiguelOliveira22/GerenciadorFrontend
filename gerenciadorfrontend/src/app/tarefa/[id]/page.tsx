import { FormAlterar } from "@/components/form";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata : Metadata = {
    title: "Tarefa"
}

export default async function PageTarefa({ params } : { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const result = await fetch(`https://gerenciadorbackend.onrender.com/tarefa/${id}`);

    if (!result.ok) {
        notFound();
    }

    return (
        <div className="mainForm">
            <div className="card">
                <FormAlterar value={id}/>
            </div>
        </div>
    );
}