import { Container } from '@/app/components/Container'
import { Testimonials } from '@/app/components/View/components/Hero/components/Testimonials'
import { Video } from '@/app/components/View/components/Video'
import { MarcadosBrand } from '@/app/components/icons/MarcadosBrand'
import Link from 'next/link'

export function Hero() {
    return (
        <section className="bg-brand__gray-100 py-16 md:py-20">
            <Container>
                <div className="flex flex-col gap-[3rem]">
                    <div className="flex flex-col gap-10">
                        <MarcadosBrand />
                        <div className="flex flex-col gap-3 max-w-[64rem]">
                            <h1 className="text-4xl md:text-7xl text-brand__gray-1000 uppercase">
                                Posicionamento, Nicho & Atração de Clientes.
                            </h1>
                            <p className="max-w-[41.5rem] text-brand__gray-600 text-[1.0625rem] md:text-[1.125rem]">
                                Aprenda sobre posicionamento e nicho e como
                                aplicar estratégias de diferenciação na sua
                                carreira no mercado criativo. Este curso ensina
                                desde o básico até técnicas avançadas para que
                                você possa ser encontrado, ser conhecido e gerar
                                oportunidades de fechar bons projetos.
                            </p>
                        </div>

                        <div className="hidden md:flex justify-between items-center gap-4">
                            <span className="font-bold uppercase text-nowrap md:text-[.8125rem]">
                                Um produto original Marcados Ⓜ️
                            </span>
                            <hr className="border border-brand__gray-300 w-full" />
                            <span className="font-bold uppercase text-nowrap md:text-[.8125rem]">
                                ©{new Date().getFullYear()} André Lona
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Video
                            controls
                            url={
                                'https://player.vimeo.com/video/881866338?h=5113a7fdfc'
                            }
                        />

                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            <div className="md:max-w-[24.25rem]">
                                <div className="w-full  bg-brand__gray-1000 rounded-xl p-4 flex flex-col justify-between gap-12 lg:min-h-72">
                                    <h3 className="text-brand__gray-100 leading-tight uppercase text-[.9375rem] md:text-[1.0625rem]">
                                        Clique no botão abaixo e entre para o
                                        PNAC
                                    </h3>
                                    <div className="flex flex-col gap-[1.125rem]">
                                        <div className="flex flex-col">
                                            <span className="uppercase text-[1.5625rem] leading-none font-bold text-brand__gray-100">
                                                12X DE R$ 59,24*
                                            </span>
                                            <span className="uppercase text-[.9375rem] font-bold text-brand__gray-600">
                                                OU R$ 590,00 À VISTA
                                            </span>
                                        </div>

                                        <Link
                                            className="flex justify-center bg-brand__blue-700_base uppercase font-bold text-brand__gray-1000 rounded-[.25rem] text-[.8125rem] w-full px-4 py-[.875rem] transition hover:bg-brand__gray-100 hover:text-brand__gray-1000"
                                            href={'/subscribe'}
                                        >
                                            Entre para a lista de espera
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-brand__gray-200 w-full flex flex-col gap-8 md:justify-between rounded-xl p-4">
                                <div className="w-full flex flex-col-reverse gap-4 md:flex-row justify-between">
                                    <h3 className="text-[.9375rem] md:text-[1.0625rem] max-w-[36.125rem] uppercase leading-[135%]">
                                        São mais de 150 aulas, todas com
                                        materiais de apoio, slides e exercícios.
                                        Receba todo o direcionamento necessário
                                        para ser um designer que é pago para
                                        pensar.
                                    </h3>
                                    <span className="text-brand__gray-600 text-[.8125rem] font-medium">
                                        Ⓜ️ @{new Date().getFullYear()}
                                    </span>
                                </div>
                                <div className="flex justify-between items-end">
                                    <Testimonials />
                                    <span className="hidden md:block max-w-[14rem] text-[.875rem] uppercase font-display text-right font-medium text-brand__gray-600">
                                        CRESÇA NO MERCADO CRIATIVO E VIVA BEM
                                        FAZENDO O QUE AMA.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
