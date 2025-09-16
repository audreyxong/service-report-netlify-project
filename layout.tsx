import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Report",
  description: "IMI Service Report preview",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
