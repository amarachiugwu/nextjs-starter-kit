import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starter Kit",
  description:
    "A Nextjs, tailwind CSS project that i use as a starting point for my tutorial projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-poppins`}>{children}</body>
    </html>
  );
}
