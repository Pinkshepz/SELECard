import React from 'react'
import type { Metadata } from 'next'

import GlobalNavigator from './components/navigator'
import icon from '../../public/images/icon.svg'

import './styles/globals.css'
import './styles/fontface.css'

export const metadata: Metadata = {
  title: 'SELEC.io',
  description: 'Explore. Extract. Exam. Exercise.',
  icons: [
    {
      rel: 'icon',
      type: 'image/svg',
      sizes: '32x32',
      url: icon,
    }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log("-----INITIATE APP-----")
  return (
    <React.StrictMode>
      <html lang="en">
        <body>
          <GlobalNavigator />
          <main className='pt-16'>
            {children}
          </main>
        </body>
      </html>
    </React.StrictMode>
  )
}
