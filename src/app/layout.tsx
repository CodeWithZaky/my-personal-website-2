import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Page",
  description:
    "Welcome to the Home Page of My Website. Discover our features, services, and latest updates. Explore now to learn more about what we offer.",
  keywords:
    "home page, my website, welcome, features, services, updates, explore",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="container mx-auto">
            <Navbar />
            <div className="px-5 py-20 md:px-10">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
