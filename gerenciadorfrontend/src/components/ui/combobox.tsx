import React, { ChangeEventHandler } from "react";

export function Combobox({ children, id, className, name, value, onChange } : Readonly<{
    children : React.ReactNode,
    id?: string | undefined,
    className?: string | undefined,
    name?: string | undefined,
    value: any,
    onChange: ChangeEventHandler
}>){
    return (
        <select name={name} id={id} className={className} value={value} onChange={onChange}>
            {children}
        </select>
    );
}

export function ComboboxOption({value, stringExib} : Readonly<{
    value: any,
    stringExib: string
}>) {
    return (
        <option value={value}>{stringExib}</option>
    );
}