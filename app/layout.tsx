import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Лиза — AI-инженер и промпт-инженер",
  description:
    "AI-инженер, специализирующийся на промпт-инжиниринге и интеграции LLM. Создаю интеллектуальные системы, меняющие взаимодействие людей с ИИ.",
  generator: "v0.app",
  openGraph: {
    title: "Лиза — AI-инженер и промпт-инженер",
    description:
      "AI-инженер, специализирующийся на промпт-инжиниринге и интеграции LLM.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
