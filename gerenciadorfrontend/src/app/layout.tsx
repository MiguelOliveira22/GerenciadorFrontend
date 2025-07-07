import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";
import "./globals.css";

import Logo from "@/components/ui-layout/logo";
import ColorModeHeader from "@/components/ui-layout/colorModeHeader";
import { ThemeProvider } from "next-themes";

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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${martianMono.variable}`}>
        <ThemeProvider>
          <ColorModeHeader/>
          <div className="content">
            <Logo className="logo text-center"/>

            { children }
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
