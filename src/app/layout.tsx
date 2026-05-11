import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suganya Maheswaran",
  description: "Cloud Full-Stack Engineer & Systems Problem Solver",
  openGraph: {
    title: "Suganya Maheswaran",
    description: "Cloud Full-Stack Engineer & Systems Problem Solver",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <div className="max-w-4xl mx-auto px-6 py-12 sm:py-24">
          {children}
        </div>
      </body>
    </html>
  );
}
