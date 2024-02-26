import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/public/globals.css";
import NavBar from "@/components/NavBar";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NAL",
  description: "Your fully futured Anime List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <div>{<NavBar navItems={[{ name: "Home", link: "/home" }]} />}</div>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
