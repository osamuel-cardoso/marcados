import { Container } from '@/app/components/Container'
import { Divider } from '@/app/components/Divider'
import { Heading } from '@/app/components/Heading'
import { Arrow } from './icons/Arrow.icon'

export function Results() {
    return (
        <section className="py-20 md:py-28 bg-brand__gray-100">
            <Container>
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-8">
                        <Heading
                            heading="Para ter os resultados que poucos têm, você precisa fazer o que poucos fazem."
                            cap="A maior parte dos profissionais criativos domina softwares de criação e consegue entregar projetos. Esse é o mínimo para estar inserido no mercado hoje."
                        />
                        <Divider />
                    </div>
                    <div className="flex flex-col gap-11">
                        <div className="flex flex-col gap-11">
                            <div className="flex flex-col md:flex-row justify-between gap-3">
                                <span className="uppercase text-[.8125rem] md:text-[.9375rem] font-bold">
                                    Produto original Ⓜ️
                                </span>
                                <span className="hidden md:block uppercase text-brand__gray-600 text-[.9375rem] font-bold">
                                    pnac—©{new Date().getFullYear()}
                                </span>
                                <div className="flex flex-col gap-3">
                                    <h3 className="w-full max-w-[30.5rem] uppercase text-[1.3125rem]">
                                        O diferencial está na parte comercial
                                        que vem antes da entrega do serviço.
                                    </h3>
                                    <p className="text-brand__gray-600 w-full max-w-[28rem]">
                                        No PNAC respondemos essas três
                                        perguntas. Você vai aprender o que
                                        ninguém te ensinou até agora. Seja
                                        encontrado, conhecido e gere
                                        oportunidades de fechar bons projetos.
                                    </p>
                                </div>
                            </div>
                            <Divider />
                        </div>
                        <div className="flex flex-col gap-6 md:gap-11">
                            <div className="flex justify-between">
                                <Arrow className="hidden md:block" />

                                <div className="flex flex-col gap-3">
                                    <span className="md:hidden uppercase font-bold text-brand__gray-600">
                                        (01)
                                    </span>
                                    <h3 className="w-full max-w-[30.5rem] uppercase text-[1.0625rem] md:text-[1.3125rem]">
                                        Se você não sabe se posicionar, como vai
                                        atrair os clientes certos?
                                    </h3>
                                </div>
                            </div>
                            <Divider />
                        </div>
                        <div className="flex flex-col gap-6 md:gap-11">
                            <div className="flex justify-between">
                                <Arrow className="hidden md:block" />

                                <div className="flex flex-col gap-3">
                                    <span className="md:hidden uppercase font-bold text-brand__gray-600">
                                        (02)
                                    </span>
                                    <h3 className="w-full max-w-[30.5rem] text-[1.0625rem] uppercase md:text-[1.3125rem]">
                                        Se você não tem um nicho, como vai criar
                                        projetos relevantes?
                                    </h3>
                                </div>
                            </div>
                            <Divider />
                        </div>
                        <div className="flex flex-col gap-6 md:gap-11">
                            <div className="flex justify-between">
                                <Arrow className="hidden md:block" />

                                <div className="flex flex-col gap-3">
                                    <span className="md:hidden uppercase font-bold text-brand__gray-600">
                                        (03)
                                    </span>

                                    <h3 className="w-full max-w-[30.5rem] uppercase text-[1.0625rem] md:text-[1.3125rem]">
                                        Se você não tem clientes, como vai
                                        construir um negócio?
                                    </h3>
                                </div>
                            </div>
                            <Divider />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
