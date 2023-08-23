
import type { Metadata } from 'next'
import ThemeRegistry from '../theme/ThemeRegistry'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeaderTest from '../components/HeaderTest'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AIA Tottenham Hotspur | Home',
  description: 'AIA Tottenham Hotspur | Home',
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <HeaderTest />
        <body className={inter.className}>{children}</body>
      <Footer />
      </ThemeRegistry>
    </html>
  )
}
