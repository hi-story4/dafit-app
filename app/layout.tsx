import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileNavbar from "./component/navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DaFit",
  description: "Health Training Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileNavbar />
        <div className="flex min-h-screen flex-col items-center justify-start p-12">
          {children}
        </div>
      </body>
    </html>
  );
}
