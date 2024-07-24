import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import reader from "@/lib/keystatic"

const bahnschrift = localFont({
  src: "../../../public/fonts/Bahnschrift.ttf",
  variable: "--font-bahnschrift",
})

export const generateMetadata: () => Promise<Metadata> = async () => {
  const settings = await reader.singletons.settings.read()
  if (!settings) throw new Error("Keystatic Content Not Found - settings")

  return {
    title: "Sad Girl Sessions",
    description:
      "Sad Girl Sessions is all about embracing our feelings and finding strength in vulnerability. It’s more than an event series, it’s a community and content platform.",
    metadataBase: new URL(settings.url),

    openGraph: {
      images: ["/logo.png"],
    },
  }
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
