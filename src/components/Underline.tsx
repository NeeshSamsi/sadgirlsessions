import type { SVGProps } from "react"

export default function Underline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="164"
      height="17"
      viewBox="0 0 164 17"
      fill="none"
      {...props}
    >
      <path
        d="M1 4.83745C17.7981 2.83119 67.6449 -0.579467 132.648 1.82805"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M37.4098 10.7151C49.3485 8.44505 85.0765 3.51465 132.479 1.95363"
        stroke="currentColor"
        strokeWidth="2"
        stroke-linecap="round"
      />
      <path
        d="M37.8048 10.6738C53.9548 9.57612 101.585 8.7332 162.904 14.1427"
        stroke="currentColor"
        strokeWidth="2"
        stroke-linecap="round"
      />
    </svg>
  )
}
