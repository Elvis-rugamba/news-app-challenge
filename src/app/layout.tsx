import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ARTICLE_SECTIONS } from "@/data/article-sections";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "News App",
  description: "News app challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar
          menus={ARTICLE_SECTIONS.map((section) => ({
            label: section.label,
            href: `/section/${section.value}`,
          }))}
        />
        <main className="flex flex-col pt-14">{children}</main>
      </body>
    </html>
  );
}
