import { type Metadata } from "next"

import reader from "@/lib/keystatic"

import Link from "next/link"
import Image from "next/image"
import logo from "@/../public/logo.png"

import Button from "@/components/Button"
import Underline from "@/components/Underline"
import Instagram from "@/components/Instagram"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Sad Girl Sessions",
  description:
    "Sad Girl Sessions is all about embracing our feelings and finding strength in vulnerability. It’s more than an event series, it’s a community and content platform.",
  openGraph: {
    images: ["/logo.png"],
  },
}

export default async function Home() {
  const settings = await reader.singletons.settings.read()
  const buttons = await reader.singletons.buttons.read()
  const contactForm = await reader.singletons.contactForm.read()

  if (!settings) throw new Error("Keystatic Content Not Found - settings")
  if (!buttons) throw new Error("Keystatic Content Not Found - buttons")
  if (!contactForm) throw new Error("Keystatic Content Not Found - contactForm")

  const { instagram } = settings
  const { heading } = contactForm

  return (
    <main className="mx-auto grid max-w-screen-xs px-8">
      <Image
        src={logo}
        alt="Sad Girl Sessions Logo"
        className="mx-auto mt-8 h-16 w-fit object-cover"
      />
      <h1 className="sr-only">Sad Girl Sessions</h1>

      <div className="mt-8 grid gap-8">
        {buttons.buttons.map(({ text, url }, i) => (
          <Link key={i} href={url}>
            <Button
              theme={{
                color: i % 4 === 0 || i % 4 === 1 ? "accent" : "brand",
                type: i % 2 === 0 ? "text" : "fill",
              }}
            >
              {text}
            </Button>
          </Link>
        ))}
      </div>

      <section className="mt-12">
        <div className="flex items-center justify-between gap-6">
          <h2 className="relative">
            <span className="text-3xl font-semibold">{heading}</span>
            <Underline className="absolute -bottom-5 left-0 h-full w-full text-brand" />
          </h2>

          <Link href={instagram}>
            <Instagram className="size-6 text-white transition-colors duration-100 hover:text-brand focus-visible:text-brand" />
          </Link>
        </div>

        <ContactForm {...contactForm} />
      </section>

      <footer className="mb-4 mt-12">
        <p className="text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} Sad Girl Sessions. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
