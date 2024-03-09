'use client'

import { Container } from '@/app/components/Container'
import { CreateModalPortal } from '@/app/components/CreateModal'
import andreLone from '@/app/images/andre__lona.png'
import Image from 'next/image'
import { useState } from 'react'
import { Subscribe } from './SubscribeForm'

export function SubscribeContainer() {
    const [mount, setMount] = useState(false)

    function handleSetMount() {
        setMount((prev) => !prev)
    }

    return (
        <>
            <Container className="overflow-hidden">
                <section className="md:h-screen">
                    <div className="h-full py-4 flex flex-col gap-8 md:gap-4 md:flex-row md:justify-between">
                        <main className="h-full w-full flex gap-20 flex-col justify-between">
                            <span className="font-display font-medium uppercase max-w-[264px] text-[.8125rem] md:text-[.9375rem]">
                                A Comunidade dos Designers de Negócio.
                            </span>
                            <Subscribe handleSetMount={handleSetMount} />
                            <span className="font-display font-medium text-[.8125rem] md:text-[.9375rem] max-w-[264px]">
                                <span className="uppercase">
                                    Estratégia de marca e o business do design
                                </span>{' '}
                                c/ André Lona
                            </span>
                        </main>
                        <div className="h-full w-full md:max-w-[50%] rounded overflow-hidden">
                            <Image
                                className="w-full h-full object-cover"
                                src={andreLone}
                                alt="O Andre Lona"
                            />
                        </div>
                    </div>
                </section>
            </Container>
            {mount && (
                <CreateModalPortal>
                    <div className="w-screen h-screen flex items-center justify-center bg-brand__gray-100 fixed left-0 top-0 bottom-0 right-0 bg-opacity-80 backdrop-blur-md">
                        <div className="bg-brand__gray-100 p-5 flex flex-col gap-3 rounded-2xl">
                            <a
                                className="block px-4 py-3 md:px-7 md:py-5 rounded font-bold text-center uppercase transition border border-solid border-transparent hover:bg-brand__gray-100 hover:text-brand__gray-1000 bg-brand__blue-700_base text-brand__gray-1000 border-brand__blue-700_base hover:border-brand__gray-300"
                                href="https://pay.kiwify.com.br/GYkZUxF"
                            >
                                Pix e cartão de crédito
                            </a>
                            <a
                                className="block px-4 py-3 md:px-7 md:py-5 rounded font-bold text-center uppercase transition border border-solid border-transparent hover:bg-brand__gray-100 hover:text-brand__gray-1000 bg-brand__blue-700_base text-brand__gray-1000 border-brand__blue-700_base hover:border-brand__gray-300"
                                href="https://pay.kiwify.com.br/8kaLTzm"
                            >
                                Parcelamento em dois cartões
                            </a>
                            <a
                                className="block px-4 py-3 md:px-7 md:py-5 rounded font-bold text-center uppercase transition border border-solid border-transparent hover:bg-brand__gray-100 hover:text-brand__gray-1000 bg-brand__blue-700_base text-brand__gray-1000 border-brand__blue-700_base hover:border-brand__gray-300"
                                href="https://financiamento.tmbeducacao.com.br/AndreLona/DY812065UP"
                            >
                                Parcelamento inteligente
                            </a>
                        </div>
                    </div>
                </CreateModalPortal>
            )}
        </>
    )
}
