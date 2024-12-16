import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { Providers } from './providers';
import Footer from '@/components/Footer';


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
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
