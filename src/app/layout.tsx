import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import styles from '../app/page.module.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_TITLE || 'Blog template',
  description: process.env.NEXT_PUBLIC_DESCRIPTION || 'My blog template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
        <Header><Logo /></Header>
          {children}
        {/* <Footer /> */}
        </main>
      </body>
    </html>
  )
}
