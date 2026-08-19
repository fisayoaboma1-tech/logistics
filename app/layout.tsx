import type { Metadata } from "next"
import { Inter, Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
})

export const metadata: Metadata = {
  title: "LogiTrack — Ship Smarter. Deliver Faster.",
  description:
    "Global shipment logistics with real-time tracking, route optimization, and end-to-end visibility for your entire fleet.",
  generator: "LogiTrack",
  keywords: [
    "shipment tracking",
    "logistics",
    "freight",
    "delivery tracking",
    "cargo",
    "supply chain",
    "real-time tracking",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}