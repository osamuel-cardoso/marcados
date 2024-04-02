import MarqueeComponent from 'react-fast-marquee'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { Header } from '../components/views/View/components/Header'

const lonaPhrases = [
    'Estratégia, branding e o business do design c/ andré lona',
    'Pago para pensar',
    'f*da-se o seu portfólio',
    'Aprenda a diagnosticar antes de prescrever',
    'Seu cliente não se importa com o que você sabe.',
    'Estratégia, branding e o business do design c/ andré lona',
    'Pago para pensar',
    'f*da-se o seu portfólio',
    'Aprenda a diagnosticar antes de prescrever',
    'Seu cliente não se importa com o que você sabe.',
    'Estratégia, branding e o business do design c/ andré lona',
    'Pago para pensar',
    'f*da-se o seu portfólio',
    'Aprenda a diagnosticar antes de prescrever',
    'Seu cliente não se importa com o que você sabe.',
]

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Header />
            <div className="flex gap-4  py-2 bg-brand__blue-700_base text-brand__gray-1000">
                <MarqueeComponent
                    loop={0}
                    speed={12}
                >
                    <div className="flex gap-4 uppercase font-bold text-[.9375rem]">
                        {lonaPhrases.map((phrase, index) => (
                            <span key={index}>{phrase}</span>
                        ))}
                    </div>
                </MarqueeComponent>
            </div>
            {children}
            <Footer />
            <div className="fixed left-[50%] -translate-x-1/2 bottom-[1vh] flex items-center ">
                <Container>
                    <div className="bg-brand__gray-100 bg-opacity-75 p-4 backdrop-blur-lg">
                        asdaciopnmiqcnmiqnm
                    </div>
                </Container>
            </div>
        </>
    )
}
