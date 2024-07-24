import Image from "next/image"
import logo from "@/../public/logo.png"
import Button from "@/components/Button"
import Underline from "@/components/Underline"
import Instagram from "@/components/Instagram"
import Link from "next/link"
import ContactForm from "@/components/ContactForm"

export default function Home() {
  return (
    <main className="mx-auto grid max-w-screen-xs">
      <Image
        src={logo}
        alt="Sad Girl Sessions Logo"
        className="mx-auto mt-8 h-16 w-fit object-cover"
      />
      <h1 className="sr-only">Sad Girl Sessions</h1>

      <div className="mt-8 grid gap-8">
        {[null, null, null, null, null, null, null, null, null].map((_, i) => (
          <Link key={i} href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
            <Button
              theme={{
                color: i % 4 === 0 || i % 4 === 1 ? "accent" : "brand",
                type: i % 2 === 0 ? "text" : "fill",
              }}
            >
              Click me if you want to text your ex
            </Button>
          </Link>
        ))}
      </div>

      <section className="mt-12">
        <div className="flex items-center justify-between gap-6">
          <h2 className="relative">
            <span className="text-3xl font-semibold">Get in touch</span>
            <Underline className="absolute -bottom-5 left-0 h-full w-full text-brand" />
          </h2>

          <Link href="https://instagram.com">
            <Instagram className="size-6 text-white transition-colors duration-100 hover:text-brand focus-visible:text-brand" />
          </Link>
        </div>

        <ContactForm />
      </section>

      <footer className="mb-4 mt-12">
        <p className="text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} Sad Girl Sessions. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
