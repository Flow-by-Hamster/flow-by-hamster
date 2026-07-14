import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Hamster — Run your services, beautifully.",
  description:
    "Bookings, payments, clients, and your team — all in one place. Built for African service businesses.",
  openGraph: {
    title: "Hamster — Run your services, beautifully.",
    description:
      "The all-in-one platform for service businesses across Africa.",
    url: "https://hamster.co",
    siteName: "Hamster",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
