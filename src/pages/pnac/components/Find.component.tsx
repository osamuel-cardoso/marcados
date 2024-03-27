import { Container } from '@/app/components/Container'
import { Heading } from '@/app/components/Heading'
import Marquee from 'react-fast-marquee'

export function Find() {
    return (
        <section className="bg-brand__gray-100 py-20 md:py-28 overflow-x-hidden">
            <div className="flex flex-col gap-10">
                <Container>
                    <div className="pb-8 border-b border-brand__gray-300">
                        <Heading
                            heading="Domine seu nicho e nunca mais sinta que não tem mais nada para falar."
                            cap="Aprenda a destacar-se e captar projetos no mercado criativo, do básico ao avançado."
                        />
                    </div>
                </Container>
                <div>
                    <Marquee
                        speed={24}
                        className="flex gap-4 overflow-hidden"
                    >
                        <span className="uppercase font-bold text-[5rem] md:text-[5.5rem] leading-none relative flex items-center">
                            ENCONTRE SEU NICHO → ATRAIA OS CLIENTES CERTOS
                            <div className="py-[.625rem] px-[.9375rem] bg-brand__system-yellow rounded-full text-brand__gray-100 text-[.9375rem] font-bold leading-none uppercase absolute">
                                Atração de clientes
                            </div>
                        </span>
                        <span className="uppercase font-bold text-[5rem] md:text-[5.5rem] leading-none relative flex items-center">
                            DEFINA SEU POSICIONAMENTO →
                            <div className="py-[.625rem] px-[.9375rem] bg-brand__blue-700_base rounded-full text-brand__gray-1000 text-[.9375rem] font-bold leading-none uppercase absolute left-[35%]">
                                Exercícios
                            </div>
                        </span>
                        <span className="uppercase font-bold text-[5rem] md:text-[5.5rem] leading-none relative flex items-center">
                            A Comunidade dos designers de negócios
                            <div className="py-[.625rem] px-[.9375rem] bg-brand__system-yellow rounded-full text-brand__gray-100 text-[.9375rem] font-bold leading-none uppercase absolute left-[40%]">
                                SEJA RECONHECIDO COMO EXPERT
                            </div>
                        </span>
                    </Marquee>
                    <Marquee
                        speed={24}
                        direction="right"
                        className="flex gap-4 overflow-hidden"
                    >
                        <span className="uppercase font-bold text-[5rem] md:text-[5.5rem] leading-none relative flex items-center">
                            ENCONTRE SEU NICHO → ATRAIA OS CLIENTES CERTOS
                            <div className="py-[.625rem] px-[.9375rem] bg-brand__system-yellow rounded-full text-brand__gray-100 text-[.9375rem] font-bold leading-none uppercase absolute">
                                Atração de clientes
                            </div>
                        </span>
                        <span className="uppercase font-bold text-[5rem] md:text-[5.5rem] leading-none relative flex items-center">
                            DEFINA SEU POSICIONAMENTO →
                            <div className="py-[.625rem] px-[.9375rem] bg-brand__blue-700_base rounded-full text-brand__gray-1000 text-[.9375rem] font-bold leading-none uppercase absolute left-[35%]">
                                Exercícios
                            </div>
                        </span>
                        <span className="uppercase font-bold text-[5rem] md:text-[5.5rem] leading-none relative flex items-center">
                            A Comunidade dos designers de negócios
                            <div className="py-[.625rem] px-[.9375rem] bg-brand__system-yellow rounded-full text-brand__gray-100 text-[.9375rem] font-bold leading-none uppercase absolute left-[40%]">
                                SEJA RECONHECIDO COMO EXPERT
                            </div>
                        </span>
                    </Marquee>
                </div>
            </div>
        </section>
    )
}
