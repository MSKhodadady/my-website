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
      <body className={` ${AppFont.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
