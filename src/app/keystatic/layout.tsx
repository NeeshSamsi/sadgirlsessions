import { type Metadata } from "next"
import KeystaticApp from "./keystatic"

export const metadata: Metadata = {
  title: "Admin Dashboard | Sad Girl Sessions",
}

export default function KeystaticLayout() {
  return <KeystaticApp />
}
