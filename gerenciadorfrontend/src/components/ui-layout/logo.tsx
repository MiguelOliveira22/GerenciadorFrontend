import Link from "next/link";

export default function Logo({ className } : Readonly<{ className?: string }>) {
    return (
        <div className={className}>
            <Link href="/"><h1>O Gerenciador</h1></Link>
        </div>
    );
}