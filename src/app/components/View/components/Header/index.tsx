import { Anchor } from '@/app/components/Anchor'
import { Container } from '@/app/components/Container'
import MarcadosBrand from '@/app/images/Ⓜ️.png'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { Hour } from './Hour'
import { Location } from './Location'
import { Temp } from './Temp'

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

const subscribeDate = [
    'Próxima abertura em junho',
    'Próxima abertura em junho',
    'Próxima abertura em junho',
    'Próxima abertura em junho',
    'Próxima abertura em junho',
    'Próxima abertura em junho',
    'Próxima abertura em junho',
    'Próxima abertura em junho',
    'Próxima abertura em junho',
]

export function Header() {
    return (
        <>
            <header className="bg-brand__gray-1000 py-[1.0625rem]">
                <Container>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-8">
                            <Image
                                className="h-7 w-7"
                                quality={100}
                                loading="eager"
                                src={MarcadosBrand}
                                alt="Símbolo do Marcados"
                            />
                            <div
                                className="p-[.375rem] rounded-lg hidden md:flex md:gap-1"
                                style={{ backgroundColor: '#eeeeee' }}
                            >
                                <Anchor href={'#community'}>Comunidade</Anchor>
                                <Anchor href={'#courses'}>
                                    Cursos fechados
                                </Anchor>
                                <Anchor href={'#feedbacks'}>Feedbacks</Anchor>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="hidden lg:block">
                                <Location />
                            </div>

                            <Hour />

                            <Temp />
                        </div>
                    </div>
                </Container>
            </header>

            <div className="flex gap-4  py-2 bg-brand__gray-100">
                <Marquee
                    loop={0}
                    speed={12}
                >
                    <div className="flex gap-4 uppercase font-bold text-[.9375rem]">
                        {lonaPhrases.map((phrase, index) => (
                            <span key={index}>{phrase}</span>
                        ))}
                    </div>
                </Marquee>
            </div>
            <div className="flex gap-4 py-2 bg-brand__gray-1000 text-brand__gray-100">
                <Marquee
                    loop={0}
                    speed={12}
                    direction="right"
                >
                    <div className="flex gap-4 uppercase font-bold text-[.9375rem]">
                        {subscribeDate.map((phrase, index) => (
                            <span key={index}>{phrase}</span>
                        ))}
                    </div>
                </Marquee>
            </div>
        </>
    )
}
