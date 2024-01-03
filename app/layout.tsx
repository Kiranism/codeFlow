import ThemeProvider from "@/components/ThemeToggle/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";
import "../styles/global.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeFlow Snippet",
  description: "Animate your code snippet.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
