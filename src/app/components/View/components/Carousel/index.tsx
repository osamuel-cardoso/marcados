import { Container } from '@/app/components/Container'
import { Divider } from '@/app/components/Divider'
import Marquee from 'react-fast-marquee'

export function Carousel() {
    return (
        <section className="bg-brand__gray-100 py-20 md:py-28">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <Marquee
                        speed={24}
                        className="flex gap-4 overflow-hidden"
                    >
                        <span className="uppercase font-bold text-[5.5rem] leading-none">
                            A Comunidade dos designers de negócios
                        </span>
                        <span className="uppercase font-bold text-[5.5rem] leading-none">
                            A Comunidade dos designers de negócios
                        </span>
                        <span className="uppercase font-bold text-[5.5rem] leading-none">
                            A Comunidade dos designers de negócios
                        </span>
                    </Marquee>
                    <Marquee
                        speed={24}
                        direction="right"
                        className="flex gap-4 overflow-hidden"
                    >
                        <span className="uppercase font-bold text-[5.5rem] leading-none">
                            A Comunidade dos designers de negócios
                        </span>
                        <span className="uppercase font-bold text-[5.5rem] leading-none">
                            A Comunidade dos designers de negócios
                        </span>
                        <span className="uppercase font-bold text-[5.5rem] leading-none">
                            A Comunidade dos designers de negócios
                        </span>
                    </Marquee>
                </div>
                <Container>
                    <div className="flex flex-col gap-14">
                        <div></div>
                        <div className="flex flex-col gap-8">
                            <Divider />
                            <div className="w-full grid grid-cols-3 gap-4">
                                <div className="flex justify-between text-[.9375rem] font-bold">
                                    <span>UMA COMUNIDADE VIVA</span>
                                    <span>(01)</span>
                                </div>
                                <div className="flex justify-between text-[.9375rem] font-bold">
                                    <span>QUE RESPIRA CRIATIVIDADE</span>
                                    <span>(02)</span>
                                </div>
                                <div className="flex justify-between text-[.9375rem] font-bold">
                                    <span>E ESTRUTURA NEGÓCIOS</span>
                                    <span>(03)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
