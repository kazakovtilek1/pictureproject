import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Самая большая картина в мире",
  description:
    "100 000 человек создают шедевр, который войдёт в историю. Твоя кисть — твой след в искусстве Кыргызстана",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
