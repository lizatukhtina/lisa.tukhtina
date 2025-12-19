import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elizaveta Tukhtina | AI Engineer & Prompt Engineer",
  description:
    "AI Engineer and Prompt Engineering specialist with experience in developing and deploying generative AI solutions. Specializing in prompt architectures, LLM fine-tuning, and AI agent development.",
  keywords: [
    "AI Engineer",
    "Prompt Engineer",
    "NLP",
    "Machine Learning",
    "Generative AI",
    "LLM",
    "OpenAI",
  ],
  authors: [{ name: "Elizaveta Tukhtina" }],
  creator: "Elizaveta Tukhtina",
  openGraph: {
    type: "website",
    title: "Elizaveta Tukhtina | AI Engineer & Prompt Engineer",
    description:
      "AI Engineer and Prompt Engineering specialist with experience in developing and deploying generative AI solutions.",
    siteName: "Elizaveta Tukhtina Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elizaveta Tukhtina | AI Engineer & Prompt Engineer",
    description:
      "AI Engineer and Prompt Engineering specialist with experience in developing and deploying generative AI solutions.",
    creator: "@lizatukhtina",
  },
  generator: "LT",
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
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
