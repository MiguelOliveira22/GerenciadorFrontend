import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";
import "./globals.css";

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Gerenciador Frontend", template: "%s - Gerenciador Frontend" },
  description: "Gerenciador Frontend - Projeto Entrevista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${martianMono.variable} ${martianMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
