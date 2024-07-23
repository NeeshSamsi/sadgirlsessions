import Image from "next/image"
import logo from "@/../public/logo.png"
import Button from "@/components/Button"

export default function Home() {
  return (
    <main className="max-w-screen-xs mx-auto grid place-items-center">
      <Image
        src={logo}
        alt="Sad Girl Sessions Logo"
        className="mt-8 h-16 w-fit object-cover"
      />
      <h1 className="sr-only">Sad Girl Sessions</h1>

      <div className="mt-8 grid gap-8">
        {[null, null, null, null, null, null, null, null, null].map((_, i) => (
          <Button
            key={i}
            text="Click me if you want to text your ex"
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            theme={i % 4 === 0 || i % 4 === 1 ? "accent" : "brand"}
            type={i % 2 === 0 ? "text" : "fill"}
          />
        ))}
      </div>
    </main>
  )
}
