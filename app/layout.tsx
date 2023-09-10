'use client'

import './globals.css'
// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/lib/tailwindcss'
import { Provider } from 'react-redux'
import { store } from '@/lib/redux'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Nomads Forum',
//   description: 'Nomads Forum Development Site',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </Provider>
    </ThemeProvider>
  )
}
