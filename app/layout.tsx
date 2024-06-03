import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';


export const metadata: Metadata = {
  title: 'Disney+ Clone',
  description: 'For educational purposes only. Please do not come after me, Disney!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#14143C]'>
          <Header />
          {children}
      </body>
    </html>
  )
}
