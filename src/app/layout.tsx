import localFont from 'next/font/local'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Virtuship',
  description: 'Ajak jalan incaranmu dengan unik dan spesial',
}

const metafiz = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Metafiz/metafizdemoregular-51778.otf',
      weight: '400'
    },
    {
      path: '../../public/assets/fonts/Metafiz/metafizdemobold-z8wk3.otf',
      weight: '700'
    }
  ],
  variable: '--font-metafiz'
})

const centra = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Centra_No2/Web_Fonts/229a57bbeef591e04a1fdfe347c90864.woff2',
      weight: '400'
    },
  ],
  variable: '--font-centra'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`no-touch ${inter.className} ${centra.variable} ${metafiz.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html >
  )
}
