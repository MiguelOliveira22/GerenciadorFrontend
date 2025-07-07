import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export default function Label({
    className, required, value, onChange, id, type
}: Readonly<{
    className?: string | undefined,
    required?: boolean | undefined,
    value: any,
    onChange: ChangeEventHandler,
    id?: string | undefined,
    type: HTMLInputTypeAttribute
}>) {
    return <input type={type} id={id} value={value} onChange={onChange} required={required} className={className}/>;
}