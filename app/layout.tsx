import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import TopNavbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SoundCloud player',
  description: 'A better SoundCloud player',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <TopNavbar></TopNavbar>
      <body className={` ${inter.className} bg-slate-950 text-slate-50 h-screen`}>{children}</body>
    </Providers>
  )
}
