import { Providers } from "@/components/Providers"
import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

// Initialize Roboto font only
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: "jStack App",
  description: "Created using jStack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={roboto.variable}>
        <body className="font-roboto bg-brand-50 text-brand-950 antialiased">
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}