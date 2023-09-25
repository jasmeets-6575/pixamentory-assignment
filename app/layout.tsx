import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Pixamentory Assignment",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="md:flex">
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}