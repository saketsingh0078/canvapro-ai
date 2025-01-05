import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CanvaPro -Ai",
  description: "It is graphic editor with AI-powered tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
