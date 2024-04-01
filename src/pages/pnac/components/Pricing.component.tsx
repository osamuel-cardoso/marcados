import { Button } from '@/app/components/Button'
import { Container } from '@/app/components/Container'
import { Divider } from '@/app/components/Divider'
import { Heading } from '@/app/components/Heading'
import { Feature } from '@/app/components/View/components/Pricing/Feature'
import { Offer } from '@/app/components/View/components/Pricing/Offer'

type FeaturesType = {
    title: string
    label?: string
}[]

const features: FeaturesType = [
    {
        title: 'Acesso aos 3 módulos: Posicionamento, Nicho e Atração de Clientes',
    },
    {
        title: 'Mais de 8h de aulas com apoio visual e qualidade profissional',
    },
    { title: 'Exercícios e metodologias para colocar em prática' },
    { title: 'Estudos de caso com profissionais reais.' },

    { title: 'Curso de Bio c/ Amanda', label: 'Conteúdo extra' },
    {
        title: 'Curso Fórmula de Conteúdo c/ Patrão Matheus',
        label: 'Conteúdo extra',
    },
]

export function Pricing() {
    return (
        <section className="py-20 md:py-28 bg-brand__gray-100">
            <Container>
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-8">
                        <Heading
                            heading="POSICIONAMENTO, NICHO & ATRAÇÃO DE CLIENTES."
                            cap="Seja encontrado, conhecido e gere oportunidades de fechar bons projetos."
                        />
                        <Divider />
                    </div>
                    <div className="flex flex-col-reverse gap-11 md:flex-row md:items-start md:justify-between">
                        <div className="flex flex-col gap-8 md:sticky md:top-12 w-full md:max-w-[40%]">
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-3">
                                    <div className="bg-brand__blue-700_base px-[.6875rem] py-[.4375rem] h-[100%] font-bold text-[.8125rem] text-brand__gray-1000 rounded-md uppercase">
                                        Um produto original Ⓜ️
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[2.25rem] md:text-[3.65rem]">
                                        12X DE R$ 59,24*
                                    </h3>
                                    <span className="uppercase text-[.9375rem] md:text-[1.1875rem] font-bold text-brand__gray-600">
                                        OU R$ 590,00 À VISTA
                                    </span>
                                    <div />
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Feature
                                        title="Compra 100% segura"
                                        subtitle="Utilizamos a Kiwify como gateway de pagamento."
                                    />
                                    <Feature
                                        title="Acesso imediato"
                                        subtitle="Tenha acesso à comunidade imediatamente."
                                    />
                                </div>
                                <Button
                                    variant={'blue'}
                                    href={'/pnac'}
                                >
                                    Comece Agora!
                                </Button>
                            </div>
                        </div>

                        <div className="w-full md:max-w-[41.67%] flex flex-col gap-4">
                            {features.map((feature, index) => (
                                <Offer
                                    key={index}
                                    heading={feature.title}
                                    label={feature.label}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
