import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Button({
  text,
  url,
  theme,
  type,
}: {
  text: string
  url: string
  theme: "brand" | "accent"
  type: "fill" | "text"
}) {
  return (
    <Link href={url}>
      <button
        className={cn(
          "group relative w-full rounded border-2 border-white px-8 py-4 text-lg font-semibold uppercase",
          {
            "bg-brand hover:text-brand focus-visible:text-brand text-white hover:bg-white focus-visible:bg-white":
              theme === "brand" && type === "fill",
            "text-brand hover:bg-brand hover:border-brand focus-visible:bg-brand focus-visible:border-brand bg-black hover:text-white focus-visible:text-white":
              theme === "brand" && type === "text",
            "bg-accent hover:text-accent focus-visible:text-accent text-white hover:bg-white focus-visible:bg-white":
              theme === "accent" && type === "fill",
            "text-accent hover:bg-accent hover:border-accent focus-visible:bg-accent focus-visible:border-accent bg-black hover:text-white focus-visible:text-white":
              theme === "accent" && type === "text",
          },
        )}
      >
        <span>{text}</span>
        <span className="absolute inset-0 -z-10 size-full translate-x-2 translate-y-2 rounded bg-white group-hover:border-2 group-hover:border-white group-hover:bg-black" />
      </button>
    </Link>
  )
}
