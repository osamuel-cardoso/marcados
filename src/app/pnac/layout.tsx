import { Footer } from '../components/Footer'
import { Marquee } from '../components/Marquee'
import { Header } from '../components/views/View/components/Header'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Header />
            <Marquee />
            {children}
            <Footer />
        </>
    )
}
