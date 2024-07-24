import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: {
    color: "brand" | "accent"
    type: "fill" | "text"
  }
}

export default function Button({ children, theme, type, ...rest }: Props) {
  return (
    <button
      className={cn(
        "group relative w-full rounded border-2 border-white px-8 py-4 text-lg font-semibold uppercase transition-colors duration-100",
        {
          "bg-brand text-white hover:bg-white hover:text-brand focus-visible:bg-white focus-visible:text-brand":
            theme.color === "brand" && theme.type === "fill",
          "bg-black text-brand hover:border-brand hover:bg-brand hover:text-white focus-visible:border-brand focus-visible:bg-brand focus-visible:text-white":
            theme.color === "brand" && theme.type === "text",
          "bg-accent text-white hover:bg-white hover:text-accent focus-visible:bg-white focus-visible:text-accent":
            theme.color === "accent" && theme.type === "fill",
          "bg-black text-accent hover:border-accent hover:bg-accent hover:text-white focus-visible:border-accent focus-visible:bg-accent focus-visible:text-white":
            theme.color === "accent" && theme.type === "text",
        },
      )}
      {...rest}
    >
      <span>{children}</span>
      <span className="absolute inset-0 -z-10 size-full translate-x-2 translate-y-2 rounded bg-white group-hover:border-2 group-hover:border-white group-hover:bg-black" />
    </button>
  )
}
