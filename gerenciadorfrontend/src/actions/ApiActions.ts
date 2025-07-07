export async function criarTarefa(body : object) {
    const requestConfig : RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }

    console.log(requestConfig);
    const result = await fetch("https://gerenciadorbackend.onrender.com/criar", requestConfig);

    if (result.ok) {
        return true;
    }

    return false;
}

export async function atualizarTarefa(id: number, body : object) {
    const requestConfig : RequestInit = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }

    const result = await fetch(`https://gerenciadorbackend.onrender.com/atualizar/${id}`, requestConfig);

    if (result.ok) {
        return true;
    }

    return false;
}

export async function deletarTarefa(id: number) {
    const requestConfig : RequestInit = {
        method: "DELETE"
    }

    const result = await fetch(`https://gerenciadorbackend.onrender.com/deletar/${id}`, requestConfig);

    if (result.ok) {
        return true;
    }

    return false;
}