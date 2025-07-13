import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./global.css";
import Script from "next/script";

const inter = Public_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcello Novelli",
  description: "Marcello Novelli's personal website",
};

export default function Layout({ children }: { children: ReactNode }) {
  const isDev = process.env.NODE_ENV === "development";
  return (
    <html
      lang="en"
      className={inter.className}
      suppressHydrationWarning
      data-website-id="72ec0e40-aae4-4ef8-9cd1-36b54a80ce47"
    >
      {!isDev ? (
        <Script
          async
          src="https://cloud.umami.is/script.js"
          data-website-id="72ec0e40-aae4-4ef8-9cd1-36b54a80ce47"
        />
      ) : null}
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
