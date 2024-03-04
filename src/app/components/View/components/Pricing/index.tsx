import { Button } from '@/app/components/Button'
import { Container } from '@/app/components/Container'
import { Divider } from '@/app/components/Divider'
import { Heading } from '@/app/components/Heading'

import { Countdown } from './Countdown'
import { Feature } from './Feature'
import { Offer } from './Offer'

type FeaturesType = (
    | {
          title: string
          label?: undefined
      }
    | {
          title: string
          label: string
      }
)[]

const features: FeaturesType = [
    { title: '12 meses de acesso à comunidade' },
    { title: '+130 aulas e contando', label: 'Atualização contínua' },
    { title: 'Encontros semanais ao vivo' },
    { title: 'Curso Método N.A.V.E' },
    {
        title: 'Curso Código de Vendas — temporada 1 e 2',
        label: 'Atualização!',
    },
    { title: 'Curso Branding 101' },
    { title: 'Projeto Vitória' },
    {
        title: 'Playlists didáticas e cronograma de conteúdo',
    },
    {
        title: 'Acesso ao grupo exclusivo no Telegram',
    },
    { title: 'Clube do Livro' },
    { title: 'Templates', label: 'Novo!' },
    { title: 'PNAC', label: 'Bônus!' },
]

export function Pricing() {
    return (
        <section className="py-20 md:py-28 bg-brand__gray-100">
            <Container>
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-8">
                        <Heading
                            heading="Estamos esperando você dentro da comunidade."
                            cap="Essa é a sua oportunidade de ser diferente dos demais."
                        />
                        <Divider />
                    </div>
                    <div className="flex flex-col-reverse gap-11 md:flex-row md:items-start md:justify-between">
                        <div className="flex flex-col gap-8 md:sticky md:top-12 w-full md:max-w-[41.67%]">
                            <div className="flex items-center gap-3">
                                <Countdown />
                                <div className="bg-brand__system-yellow px-[.6875rem] py-[.4375rem] h-[100%] font-bold text-[.8125rem]  md:text-[.9375rem] text-brand__gray-100 rounded-md uppercase">
                                    R$400 OFF
                                </div>
                                <div className="bg-brand__system-yellow px-[.6875rem] py-[.4375rem] h-[100%] font-bold text-[.8125rem]  md:text-[.9375rem] text-brand__gray-100 rounded-md uppercase">
                                    +PNAC
                                </div>
                            </div>

                            <div>
                                <span className="uppercase text-[.9375rem] md:text-[1.1875rem] line-through font-bold text-brand__gray-600">
                                    De R$2.100,90
                                </span>
                                <h3 className="text-[2.25rem] md:text-[4rem]">
                                    12x R$120,48
                                </h3>
                                <span className="uppercase text-[.9375rem] md:text-[1.1875rem] line-through font-bold text-brand__gray-600">
                                    ou R$1200,00 à vista
                                </span>
                            </div>

                            <div className="flex flex-col gap-6">
                                <Feature
                                    title="Parcele no boleto em 24x"
                                    subtitle="Sujeito à análise."
                                />
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
                                variant={'yellow'}
                                href={'https://pay.kiwify.com.br/KXJzTMT'}
                            >
                                Entre para o Marcados
                            </Button>
                        </div>

                        <div className="w-full md:max-w-[41.67%] flex flex-col gap-7">
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
