import Questions from '@/app/components/views/pnacView/components/Faq/Index.component'
import Hero from '@/app/components/views/pnacView/components/Hero/Hero.component'
import Modules from '@/app/components/views/pnacView/components/Modules/Modules.component'
import Pricing from '@/app/components/views/pnacView/components/Pricing.component'
import Testimonial from '@/app/components/views/pnacView/components/Testimonial/Testimonial.component'
import { Marquee } from '../components/views/pnacView/components/Marquee/Marquee.component'
import { Results } from '../components/views/pnacView/components/Results/Results.component'
import Link from 'next/link'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { Header } from '../components/views/View/components/Header'
import MarqueeComponent from 'react-fast-marquee'

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

export default async function Page() {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
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
            <Hero />
            <Modules />
            <Results />
            <Marquee />
            <Pricing />
            <Testimonial />
            <Questions />
            <Footer />
            <div className="fixed left-[50%] -translate-x-1/2 bottom-[1vh] flex justify-center w-full md:max-w-[404px]">
                <Container>
                    <div className="bg-brand__gray-100 bg-opacity-75 p-3 md:p-4 backdrop-blur-lg rounded-lg w-full">
                        <div className="w-full h-full flex items-center gap-3 justify-between">
                            <div className="flex flex-col gap-1 leading-tight max-w-[8.25rem] md:max-w-[10.25rem]">
                                <h5 className="text-[.8125rem] md:text-[.9375rem]">
                                    Não seja um designer no meio de designers
                                </h5>
                                <p className="text-brand__gray-600 text-[.8125rem]">
                                    Entre para o PNAC
                                </p>
                            </div>

                            <Link
                                className="bg-brand__blue-700_base uppercase block justify-end font-bold text-[.6875rem] text-nowrap md:text-[.8125rem] text-brand__gray-1000 px-[.9375rem] py-[.5625rem] rounded-full transition hover:bg-brand__gray-100"
                                href={'/pnac/subscribe'}
                            >
                                Comece agora
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
