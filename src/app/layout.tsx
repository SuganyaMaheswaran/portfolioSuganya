import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
