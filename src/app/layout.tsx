import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/web-site/_shared/header";

export const metadata: Metadata = {
  title: "Loom Trust",
  description:
    "Send, receive, trade and invest in Bitcoin and cryptocurrency all in one safe and simple Platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased grid`} suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
