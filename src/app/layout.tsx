import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import './globals.css'

const robotoCondensed = Roboto_Condensed({
    variable: '--font-robotoCondensed',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Jan Kowalski - Trener Personalny',
    description:
        'Osiągnij swoje cele fitness z doświadczonym trenerem personalnym. Indywidualne podejście, treningi dostosowane do Twoich potrzeb i motywacja do działania.',
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${robotoCondensed.className} antialiased`}>
                {children}
            </body>
        </html>
    )
}
