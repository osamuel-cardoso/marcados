import { Button } from '@/app/components/Button'
import { Container } from '@/app/components/Container'
import { Divider } from '@/app/components/Divider'
import { Heading } from '@/app/components/Heading'

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
                                {/* <div className="flex items-center gap-3">
                                    <Countdown />
                                    <div className="bg-brand__system-yellow px-[.6875rem] py-[.4375rem] h-[100%] font-bold text-[.8125rem] text-brand__gray-100 rounded-md uppercase">
                                        R$200 OFF
                                    </div>
                                </div> 
                                
                                   <span className="uppercase text-[.9375rem] md:text-[1.1875rem] line-through font-bold text-brand__gray-600">
                                        De R$2.100,90
                                    </span> 
                                    <h3 className="text-[2.25rem] md:text-[3.65rem]">
                                        12X de R$ 160,64
                                    </h3>
                                    <span className="uppercase text-[.9375rem] md:text-[1.1875rem] font-bold text-brand__gray-600">
                                        ou R$1600,00 à vista
                                    </span> 
                                </div> */}
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
                                    href={'/subscribe'}
                                >
                                    Entre para a lista de espera
                                </Button>
                            </div>

                            {/* <a
                                href="https://www.marcados.me/camp-pnac"
                                target="_blank"
                                className="flex flex-col gap-6 p-3 bg-brand__gray-200 rounded-xl"
                            >
                                <h3 className="text-[.9375rem] leading-[150%] tracking-normal uppercase max-w-[25.25rem]">
                                    Ao adquirir o Marcados até 06/03, você o
                                    curso de posicionamento, nicho e atração de
                                    clientes. O PNAC.
                                </h3>
                                <Image
                                    src={pnacImg}
                                    alt="Imagem dos templates"
                                    quality={100}
                                />
                                <Divider />

                                <p className="text-[.8125rem] text-brand__gray-600">
                                    Clique neste card e saiba mais sobre o curso
                                    que ajude designer a se tornarem conhecidos,{' '}
                                    <span className="text-brand__gray-1000">
                                        construírem relacionamentos e tomarem
                                        controle da parte comercial do seu
                                        trabalho.
                                    </span>
                                </p>
                            </a> */}
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
