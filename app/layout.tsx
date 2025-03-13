import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./global.css";

const inter = Public_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcello Novelli",
  description: "Marcello Novelli's personal website",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
