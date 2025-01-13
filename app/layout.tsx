import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/nav-bar";
import RecipeProvider from "./context/recipe-context";

const inter = Montserrat({ subsets: ["latin"], weight:["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Tasty React With Next.js",
  description: "Curated Recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <RecipeProvider>
          <>
            <NavBar />
            {children}
          </>
        </RecipeProvider>
        </body>
    </html>
  );
}