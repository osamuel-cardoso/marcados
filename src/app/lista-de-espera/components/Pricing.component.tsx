import { Button } from '@/app/components/Button'
import { Container } from '@/app/components/Container'
import { Divider } from '@/app/components/Divider'
import { Heading } from '@/app/components/Heading'
import { Feature } from '@/app/components/views/View/components/Pricing/Feature'
import aula17 from '@/app/images/aula 17.jpeg'
import aula79 from '@/app/images/aula 79.jpeg'
import aula123 from '@/app/images/aula-123.jpeg'
import aula55 from '@/app/images/aula 55.jpeg'
import { StaticImageData } from 'next/image'
import { Offer } from './Offer'

type FeaturesType = (
    | {
          title: string
          label?: undefined
          class: StaticImageData
      }
    | {
          title: string
          label: string
          class: StaticImageData
      }
)[]

const features: FeaturesType = [
    { title: 'Estratégia de marca, onde tudo começou', class: aula17 },
    { title: 'Especialista vs. Generalista', class: aula55 },
    { title: 'O mapa do branding', class: aula79 },
    { title: 'Sistemas para se manter disciplinado', class: aula123 },
]

export function Pricing() {
    return (
        <section className="py-20 md:py-28 bg-brand__gray-100">
            <Container>
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-8">
                        <Heading
                            heading="Entre agora para o Hall de Entrada do Marcados©"
                            cap="Explore a comunidade por dentro através da nossa plataforma de conteúdo no Notion e veja tudo que tem dentro da comunidade."
                        />
                        <Divider />
                    </div>
                    <div className="flex flex-col-reverse gap-11 md:flex-row md:items-start md:justify-between">
                        <div className="flex flex-col gap-8 md:sticky md:top-12 w-full md:max-w-[37%]">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-6">
                                    <Feature title="Tenha acesso à 4 aulas exclusivas" />
                                    <Feature title="Seja avisado com antecendência sobre a próxima abertura" />
                                    <Feature title="Explore a comunidade por dentro através da nossa plataforma de conteúdo no Notion" />
                                    <Feature title="Faça parte da lista de pré-venda e garanta condições especiais" />
                                </div>
                                <Button
                                    variant={'blue'}
                                    href={'/lista-de-espera/subscribe'}
                                >
                                    QUERO TER ACESSO AO HALLⓂ️
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
                                    src={feature.class.src}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
