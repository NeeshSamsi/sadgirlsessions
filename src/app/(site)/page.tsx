import { type Metadata } from "next"

import Link from "next/link"
import Image from "next/image"
import logo from "@/../public/logo.png"

import Button from "@/components/Button"
import Underline from "@/components/Underline"
import Instagram from "@/components/Instagram"
import ContactForm from "@/components/ContactForm"

const links = [
  {
    text: "click me if you want to text your ex",
    link: "https://www.youtube.com/watch?v=SeHx6AbR74o",
  },
  {
    text: "click me if they’re ghosting you",
    link: "https://apps.apple.com/us/app/hinge-dating-app-match-meet/id595287172",
  },
  {
    text: "click me if you’re angry",
    link: "https://www.youtube.com/watch?v=XIeCMhNWFQQ&t=37s",
  },
  {
    text: "click me if you’re feeling sad",
    link: "https://open.spotify.com/playlist/4oWetqiykLLBqkH3DvYaZu?si=f29c6ba5ef1d4f2f",
  },
  {
    text: "click this if you need to find yourself",
    link: "https://www.skyscanner.net/flights/flights-to-region/44292244/cheap-flights-to-bali.html?associateID=SEM_GGF_19370_00074&&utm_source=google&utm_medium=cpc&utm_campaign=UK-Flights-Search-EN-Pmax&utm_term=&associateID=PMX_FLI_19465_00000&campaign_id=20887622368&adgroupid=&keyword_id=&gad_source=1&gclid=Cj0KCQjwkdO0BhDxARIsANkNcrdQR5ijBUIQ3QqvH6EIpCmBbnYLG9rDEEuvvga2D10U8jJT7n4NpcwaAs_oEALw_wcB&gclsrc=aw.ds",
  },
  {
    text: "click this if you’re feeling spicy",
    link: "https://www.netflix.com/browse",
  },
]

export const metadata: Metadata = {
  title: "Sad Girl Sessions",
  description:
    "Sad Girl Sessions is all about embracing our feelings and finding strength in vulnerability. It’s more than an event series, it’s a community and content platform.",
  openGraph: {
    images: ["/logo.png"],
  },
}

export default function Home() {
  return (
    <main className="mx-auto grid max-w-screen-xs px-8">
      <Image
        src={logo}
        alt="Sad Girl Sessions Logo"
        className="mx-auto mt-8 h-16 w-fit object-cover"
      />
      <h1 className="sr-only">Sad Girl Sessions</h1>

      <div className="mt-8 grid gap-8">
        {links.map(({ text, link }, i) => (
          <Link key={i} href={link}>
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
