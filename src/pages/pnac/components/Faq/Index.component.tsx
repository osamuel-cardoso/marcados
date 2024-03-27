import { Container } from '@/app/components/Container'
import { Divider } from '@/app/components/Divider'
import { Heading } from '@/app/components/Heading'
import { Faq } from './Faq.component'

export function Questions() {
    return (
        <section className="bg-brand__gray-100 py-20 md:py-28">
            <div>
                <Container>
                    <div className="flex flex-col gap-10 lg:gap-20">
                        <div className="flex flex-col gap-8">
                            <Heading
                                heading="COMO ESTE CURSO PODE ME AJUDAR?"
                                cap="Entendo suas preocupações e mostrarei soluções práticas e diretas."
                            />
                            <Divider />
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <div className="rounded-full px-[.8125rem] py-[.5625rem] lg:px-[.9375rem] lg:py-[.8125rem] text-[.75rem] lg:text-[.875rem] uppercase font-bold cursor-pointer border border-brand__gray-300 transition hover:border-[transparent] hover:bg-brand__system-yellow hover:text-brand__gray-100">
                                PLANEJAMENTO DE ATRAÇÃO DE CLIENTES
                            </div>
                            <div className="rounded-full px-[.8125rem] py-[.5625rem] lg:px-[.9375rem] lg:py-[.8125rem] text-[.75rem] lg:text-[.875rem] uppercase font-bold cursor-pointer border border-brand__gray-300 transition hover:border-[transparent] hover:bg-brand__system-yellow hover:text-brand__gray-100">
                                COMPREENSÃO DO POSICIONAMENTO
                            </div>
                            <div className="rounded-full px-[.8125rem] py-[.5625rem] lg:px-[.9375rem] lg:py-[.8125rem] text-[.75rem] lg:text-[.875rem] uppercase font-bold cursor-pointer border border-brand__gray-300 transition hover:border-[transparent] hover:bg-brand__system-yellow hover:text-brand__gray-100">
                                EXERCÍCIO DE POSICIONAMENTO
                            </div>
                            <div className="rounded-full px-[.8125rem] py-[.5625rem] lg:px-[.9375rem] lg:py-[.8125rem] text-[.75rem] lg:text-[.875rem] uppercase font-bold cursor-pointer border border-brand__gray-300 transition hover:border-[transparent] hover:bg-brand__system-yellow hover:text-brand__gray-100">
                                ACHO QUE NICHAR NÃO É PARA MIM
                            </div>
                            <div className="rounded-full px-[.8125rem] py-[.5625rem] lg:px-[.9375rem] lg:py-[.8125rem] text-[.75rem] lg:text-[.875rem] uppercase font-bold cursor-pointer border border-brand__gray-300 transition hover:border-[transparent] hover:bg-brand__system-yellow hover:text-brand__gray-100">
                                ENCONTRAR/DEFINIR UM NICHO
                            </div>
                            <div className="rounded-full px-[.8125rem] py-[.5625rem] lg:px-[.9375rem] lg:py-[.8125rem] text-[.75rem] lg:text-[.875rem] uppercase font-bold cursor-pointer border border-brand__gray-300 transition hover:border-[transparent] hover:bg-brand__system-yellow hover:text-brand__gray-100">
                                ESTUDAR UM NICHO (DORES/DESEJOS)
                            </div>
                        </div>

                        <Faq />
                    </div>
                </Container>
            </div>
        </section>
    )
}
