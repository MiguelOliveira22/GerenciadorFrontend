export default function Label({
    children, htmlFor,
}: Readonly<{
    children: React.ReactNode,
    htmlFor: string;
}>) {
    return <label htmlFor={htmlFor}>{ children }</label>;
}