import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Agra - Green City Mission 2030",
  description: "Green Agra - Green City Mission 2030",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
