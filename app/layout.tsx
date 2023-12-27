import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Disney Plus Clone',
  description: 'For educational purposes only. Please do not come after me, Disney!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
