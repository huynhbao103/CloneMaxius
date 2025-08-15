import type { Metadata } from "next";
import { LanguageProvider } from "../contexts/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maxius.io - Innovative Solutions",
  description: "Maxius.io offers innovative solutions for modern businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
