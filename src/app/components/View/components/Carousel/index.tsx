import { Container } from '@/app/components/Container'
import { Divider } from '@/app/components/Divider'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

import sequence01 from '@/app/images/sequence-01.gif'
import sequence02 from '@/app/images/sequence-02.gif'
import sequence03 from '@/app/images/sequence-03.gif'

export function Carousel() {
    return (
        <section className="bg-brand__gray-100 py-20 md:py-28 overflow-x-hidden">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <Marquee
                        speed={24}
                        className="flex gap-4 overflow-hidden"
                    >
                        <span className="uppercase font-bold text-[3.25rem] md:text-[5.5rem] leading-none">
                            A Comunidade dos designers de negócios
                        </span>
                        <span className="uppercase font-bold text-[3.25rem] md:text-[5.5rem] leading-none">
                            A Comunidade dos designers de negócios
                        </span>
                        <span className="uppercase font-bold text-[3.25rem] md:text-[5.5rem] leading-none">
                            A Comunidade dos designers de negócios
                        </span>
                    </Marquee>
                    <Marquee
                        speed={24}
                        direction="right"
                        className="flex gap-4 overflow-hidden"
                    >
                        <span className="uppercase font-bold text-[3.25rem] md:text-[5.5rem] leading-none">
                            A Comunidade dos designers de negócios
                        </span>
                        <span className="uppercase font-bold text-[3.25rem] md:text-[5.5rem] leading-none">
                            A Comunidade dos designers de negócios
                        </span>
                        <span className="uppercase font-bold text-[3.25rem] md:text-[5.5rem] leading-none">
                            A Comunidade dos designers de negócios
                        </span>
                    </Marquee>
                </div>
                <Container>
                    <div className="flex flex-col gap-8 md:gap-14">
                        <div className="flex w-full md:justify-center gap-3 overflow-x-scroll md:overflow-x-visible carousel__wrapper pb-2">
                            <Image
                                className="md:max-h-[42.375rem] w-full rounded-lg object-cover"
                                src={sequence01}
                                alt="Imagem do carrossel"
                            />
                            <Image
                                className="md:max-h-[42.375rem] w-full rounded-lg object-cover"
                                src={sequence02}
                                alt="Imagem do carrossel"
                            />
                            <Image
                                className="md:max-h-[42.375rem] w-full rounded-lg object-cover"
                                src={sequence03}
                                alt="Imagem do carrossel"
                            />
                        </div>
                        <div className="flex flex-col gap-8">
                            <Divider />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
