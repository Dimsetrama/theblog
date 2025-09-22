import Footer from "@/app/_components/footer";
import { ThemeSwitcher } from "./_components/theme-switcher";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// ✨ EDIT YOUR SITE DETAILS HERE
export const metadata: Metadata = {
  // This is the title that appears in the browser tab
  title: "Etrama | Thrives on Neglect",
  // This is the description that appears on search engines like Google
  description: "In order to shit fire, one must first chew glass.",
  openGraph: {
    // This image is shown when you share a link on social media
    // You should change this URL in the constants file (see below)
    images: ["/assets/og-image.png"], // Example path
  },
  // These icons will appear in browser tabs, on mobile home screens, etc.
  icons: {
    icon: "/favicon/favicon-32x32.png",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <ThemeSwitcher />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}