// For adding custom fonts with other frameworks, see:
// https://tailwindcss.com/docs/font-family
import type { Metadata } from "next";
import { Spline_Sans, Be_Vietnam_Pro } from 'next/font/google';
import "./globals.css";
import Providers from "@/components/providers";
import { AuthSync } from "@/components/auth-sync";

const splineSans = Spline_Sans({
  subsets: ['latin'],
  variable: '--font-spline',
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-vietnam',
});

export const metadata: Metadata = {
  title: 'QuestLog & Mission Control',
  description: 'A gamified task management application',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${splineSans.variable} ${beVietnamPro.variable}`}>
        <Providers>
          <AuthSync />
          {children}
        </Providers>
      </body>
    </html>
  );
}