import Providers from "@/components/Providers"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"

import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

// Done after the video and optional: add page metadata
export const metadata = {
  title: "iMessage | Home",
  description: "Welcome to the iMessage",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontHeading.variable
      )}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
