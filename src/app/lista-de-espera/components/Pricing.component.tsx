import { Button } from '@/app/components/Button'
import { Container } from '@/app/components/Container'
import { Divider } from '@/app/components/Divider'
import { Heading } from '@/app/components/Heading'
import { Feature } from '@/app/components/views/View/components/Pricing/Feature'
import { Offer } from '@/app/components/views/View/components/Pricing/Offer'

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
                        <div className="flex flex-col gap-8 md:sticky md:top-12 w-full md:max-w-[37%]">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-6">
                                    <Feature
                                        title="Tenha acesso a materiais exclusivos."
                                        subtitle="Receba acesso ao Hall do Marcados."
                                    />
                                    <Feature
                                        title="Aguarde no Hall do Marcados enquanto espera a próxima turma"
                                        subtitle="
                                        Como membro da lista de espera, terá acesso no Notion a aulas selecionadas da plataforma do Grupo Marcados Ⓜ️."
                                    />
                                    <Feature
                                        title="Seja avisado com antecedência."
                                        subtitle="Tenha prioridade no aviso da próxima turma"
                                    />
                                    <Feature
                                        title="Faça parte da lista de pré-venda."
                                        subtitle="Em toda turma, liberamos condições espciais"
                                    />
                                </div>
                                <Button
                                    variant={'blue'}
                                    href={'/lista-de-espera/subscribe'}
                                >
                                    Entre para a lista de espera
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
