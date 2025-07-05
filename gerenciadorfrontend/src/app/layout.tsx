import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";
import "./globals.css";

import LogoText from "@/components/logoText";
import HeaderChange from "@/components/headerChange";

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
  display: "swap",
  weight: "400"
});

export const metadata: Metadata = {
  title: { default: "Gerenciador Frontend", template: "%s - Gerenciador Frontend" },
  description: "Gerenciador Frontend - Projeto Entrevista"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${martianMono.variable}`}>
        <HeaderChange/>
        <main className="content">
          <LogoText className="logo"/>
          {children}
        </main>
      </body>
    </html>
  );
}
