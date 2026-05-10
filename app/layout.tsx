import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Happy Mother\'s Day ❤️ | Ultra Premium Celebration',
  description: 'The purest love ever created deserves the most beautiful celebration. A cinematic luxury experience celebrating mothers.',
  keywords: 'mothers day, mom, mother, celebration, love, family, premium, luxury',
  openGraph: {
    title: 'Happy Mother\'s Day ❤️',
    description: 'The purest love ever created deserves the most beautiful celebration.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dark-bg text-white antialiased">
        {children}
      </body>
    </html>
  )
}
