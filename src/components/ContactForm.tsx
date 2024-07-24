"use client"

import { useState, type FormEvent } from "react"
import Button from "./Button"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())

    setLoading(true)

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/74d4f2cdd0a759d55ffd8b3f2c022442",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        },
      )

      if (res.status === 200) {
        setMessage("Your message has been sent!")
        setTimeout(() => setMessage(null), 8000)
      } else {
        setMessage("Something went wrong. Please try again later.")
        setTimeout(() => setMessage(null), 8000)
      }
    } catch (error) {
      console.error(error)
      setMessage("Something went wrong. Please try again later.")
      setTimeout(() => setMessage(null), 8000)
    }

    setLoading(false)
    // @ts-expect-error
    e.target.reset()
  }

  return (
    <form className="mt-8 grid gap-8 text-xl" onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="rounded border-2 border-white bg-black px-4 py-3 text-base text-white placeholder-neutral-400 focus:border-brand focus:ring-0"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="rounded border-2 border-white bg-black px-4 py-3 text-base text-white placeholder-neutral-400 focus:border-brand focus:ring-0"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows={5}
            className="rounded border-2 border-white bg-black px-4 py-3 text-base text-white placeholder-neutral-400 focus:border-brand focus:ring-0"
          />
        </div>

        {message && <p className="text-lg text-neutral-400">{message}</p>}
      </div>

      <Button
        theme={{ color: "brand", type: "fill" }}
        type="submit"
        disabled={loading}
      >
        {loading ? "Sending..." : "Submit"}
      </Button>
    </form>
  )
}
