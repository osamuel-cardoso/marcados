import { Container } from '@/app/components/Container'
import { Heading } from '@/app/components/Heading'
import { Course } from './Course'

import { Divider } from '@/app/components/Divider'
import branding101 from '@/app/images/branding-101.svg'
import codigoDeVendas from '@/app/images/codigo-de-vendas.svg'
import templateImg from '@/app/images/img__template.png'
import nave from '@/app/images/nave.svg'
import vitoria from '@/app/images/projeto-vitoria.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Countdown } from '../Pricing/Countdown'

export function Delivery() {
    return (
        <section
            className="py-20 md:py-28 bg-brand__gray-100"
            id="courses"
        >
            <Container>
                <div
                    className="flex flex-col gap-20
                "
                >
                    <Heading
                        heading="além das aulas semanais, assista aos cursos sem pagar nada a mais."
                        cap="Conte com metodologias com início, meio e fim. Aproveite os cursos dentro da comunidade. "
                    />

                    <div className="flex flex-col-reverse md:flex-row items-start gap-4">
                        <div className="pt-5 flex flex-col gap-5 border-t solid border-brand__gray-300 w-full max-w-[26.6875rem] md:sticky md:top-5">
                            <div className="flex flex-col gap-6 p-3 bg-brand__gray-200 rounded-xl">
                                <h3 className="text-[.9375rem] leading-[150%] tracking-normal uppercase">
                                    Você também receberá indicações de conteúdo
                                    externo, como vídeos, livros e podcasts para
                                    te auxiliar na jornada.
                                </h3>
                                <Image
                                    src={templateImg}
                                    alt="Imagem dos templates"
                                    quality={100}
                                />
                                <Divider />
                                <div className="flex flex-col gap-6">
                                    <span className="text-[.8125rem] text-brand__gray-600">
                                        Conte com{' '}
                                        <span className="text-brand__gray-1000">
                                            templates
                                        </span>{' '}
                                        de:
                                    </span>

                                    <div className="grid grid-cols-1 justify-items-start gap-2">
                                        <span className="px-[.6875rem] py-[.3125rem] text-[.8125rem] bg-brand__gray-300 rounded-md">
                                            Proposta comercial
                                        </span>
                                        <span className="px-[.6875rem] py-[.3125rem] text-[.8125rem] bg-brand__gray-300 rounded-md">
                                            Proposta técnica de projetos de
                                            branding
                                        </span>
                                        <span className="px-[.6875rem] py-[.3125rem] text-[.8125rem] bg-brand__gray-300 rounded-md">
                                            Modelo de apresentação institucional
                                        </span>
                                        <span className="px-[.6875rem] py-[.3125rem] text-[.8125rem] bg-brand__gray-300 rounded-md">
                                            Modelo de contrato de prestação de
                                            serviço
                                        </span>
                                    </div>
                                </div>
                                <Divider />
                                <p className="text-[.8125rem] text-brand__gray-600">
                                    Nós reunimos tudo que você precisa para se
                                    tornar um grande criativo estratégico e{' '}
                                    <span className="text-brand__gray-1000">
                                        não só um apertador de botões.
                                    </span>
                                </p>
                            </div>
                            <div className="w-full  bg-brand__gray-200  rounded-xl p-4 flex flex-col gap-12">
                                <div className="flex items-center gap-3">
                                    <Countdown />
                                    <div className="bg-brand__blue-700_base px-[.6875rem] py-[.4375rem] h-[100%] font-bold text-brand__gray-1000 rounded-md uppercase text-[.8125rem]">
                                        🎁 PNAC
                                    </div>
                                    <div className="bg-brand__blue-700_base px-[.6875rem] py-[.4375rem] h-[100%] font-bold text-brand__gray-1000 rounded-md uppercase text-[.8125rem]">
                                        R$400 OFF
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[1.125rem]">
                                    <div className="flex flex-col">
                                        <span className="uppercase text-[.9375rem] line-through font-bold text-brand__gray-600">
                                            De R$2.100,90
                                        </span>
                                        <span className="uppercase text-[1.5625rem] leading-none font-bold text-brand__gray-1000">
                                            12X R$120,48
                                        </span>
                                        <span className="uppercase text-[.9375rem] font-bold text-brand__gray-600">
                                            OU R$1200,00 À VISTA
                                        </span>
                                    </div>

                                    <Link
                                        className="flex justify-center bg-brand__system-yellow text-brand__gray-100 uppercase font-bold text-brand__gray/1000 rounded-[.25rem] text-[.8125rem] w-full px-4 py-[.875rem] transition hover:bg-brand__gray-100 hover:text-brand__gray-1000"
                                        href={
                                            'https://pay.kiwify.com.br/KXJzTMT'
                                        }
                                        target="_blank"
                                    >
                                        Entre para o marcados
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:max-w-[66.67%] grid md:grid-cols-2 gap-4 gap-y-16">
                            <Course
                                title="método n.a.v.e"
                                description="Transforme seu processo criativo em um processo de diagnóstico estratégico — e cobre por isso.
                                Com 8h de conteúdo, esse curso é um passo-a-passo de como aplicar estratégia de marca nos seus clientes."
                                classes="8 AULAS"
                                image={nave}
                            />

                            <Course
                                title="código de vendas"
                                description="Nesta série, entrevistamos profissionais criativos de vários setores diferentes e perguntamos à eles: como você consegue clientes?
                                O resultado é um acervo de insights para você aplicar no seu negócio."
                                classes="22 AULAS"
                                image={codigoDeVendas}
                            />

                            <Course
                                title="branding 101"
                                description="Aprenda os fundamentos do branding do começo ao fim, deixando sua entrega ser mais profunda e complexa. Evolua seus projetos sem nenhum software de criação."
                                classes="5 AULAS"
                                image={branding101}
                            />

                            <Course
                                title="projeto vitória"
                                description="O Reality Show onde uma equipe de estrategistas do Marcados faz o rebranding da Ana Vitória, uma webdesigner com problemas de posicionamento."
                                classes="18 AULAS"
                                image={vitoria}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
