import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const neueHaasDisplay = localFont({
    src: [
        {
            path: '../fonts/Neue Haas Grotesk Display Pro 55 Roman.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/Neue Haas Grotesk Display Pro 56 Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../fonts/Neue Haas Grotesk Display Pro 65 Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/Neue Haas Grotesk Text Pro 66 Medium Italic.ttf',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../fonts/Neue Haas Grotesk Text Pro 75 Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/Neue Haas Grotesk Display Pro 76 Bold Italic.ttf',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../fonts/Neue Haas Grotesk Display Pro 95 Black.ttf',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../fonts/Neue Haas Grotesk Display Pro 96 Black Italic.ttf',
            weight: '900',
            style: 'italic',
        },
    ],
    display: 'swap',
    variable: '--font-display',
})

const neueHaasText = localFont({
    src: [
        {
            path: '../fonts/Neue Haas Grotesk Text Pro 55 Roman.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/Neue Haas Grotesk Text Pro 56 Italic.ttf',
            weight: '400',
            style: 'italic',
        },

        {
            path: '../fonts/Neue Haas Grotesk Text Pro 65 Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/Neue Haas Grotesk Text Pro 66 Medium Italic.ttf',
            weight: '500',
            style: 'italic',
        },

        {
            path: '../fonts/Neue Haas Grotesk Text Pro 75 Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/Neue Haas Grotesk Text Pro 76 Bold Italic.ttf',
            weight: '700',
            style: 'italic',
        },
    ],
    display: 'swap',
    variable: '--font-text',
})

export const metadata: Metadata = {
    // metadataBase: new URL('https://marcados.me'),
    alternates: {
        canonical: '/',
    },

    title: 'Marcados®',

    openGraph: {
        type: 'website',
        title: 'Grupo Marcados',
        description:
            'Grupo Marcados, uma comunidade de designers e criativos trabalhando com branding. Uma biblioteca de conteúdo com mais de 50h de aulas sobre design, branding, estratégia e o business do design.',
        // url: 'https://marcados.me',
        locale: 'pt-BR',
        siteName: 'Grupo Marcados®',
        images: ['./images/Ⓜ️ _ Opengraph.svg'],
    },
    description:
        'Grupo Marcados, uma comunidade de designers e criativos trabalhando com branding. Uma biblioteca de conteúdo com mais de 50h de aulas sobre design, branding, estratégia e o business do design.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="pt-BR"
            className={`${neueHaasDisplay.variable} ${neueHaasText.variable}`}
        >
            <body className="overflow-x-hidden">{children}</body>
        </html>
    )
}
