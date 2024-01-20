import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/navBar";
import { cn } from "@/lib/utils";

const NewFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aditya Media",
  description: "Passionate,Creative and Responsible",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          NewFont.className,
          "flex flex-col items-center justify-center bg-white"
        )}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
