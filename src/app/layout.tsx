import type { Metadata } from "next";

import { Vazirmatn } from "next/font/google";
import { ClientLayout } from "./ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "خدادادی - مهندس نرم افزار",
  description: "مهندس نرم افزار",
};

const AppFont = Vazirmatn({ subsets: ["arabic", "latin", "latin-ext"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={` ${AppFont.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
