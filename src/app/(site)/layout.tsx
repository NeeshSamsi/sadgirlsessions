import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const bahnschrift = localFont({
  src: "../../../public/fonts/Bahnschrift.ttf",
  variable: "--font-bahnschrift",
})

export const metadata: Metadata = {
  title: "Sad Girl Sessions",
  description:
    "Sad Girl Sessions is all about embracing our feelings and finding strength in vulnerability. It’s more than an event series, it’s a community and content platform.",
  openGraph: {
    images: ["/logo.png"],
  },
}

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bahnschrift.variable} bg-black font-sans text-white`}>
        {children}
      </body>
    </html>
  )
}
