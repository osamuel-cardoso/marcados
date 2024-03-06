import andreLone from '@/app/images/andre__lona.png'
import Image from 'next/image'
import { Container } from '../components/Container'
import { Subscribe } from './components/SubscribeForm'

export default function page() {
    return (
        <Container className="overflow-hidden">
            <section className="md:h-screen">
                <div className="h-full py-4 flex flex-col gap-8 md:gap-4 md:flex-row md:justify-between">
                    <main className="h-full w-full flex gap-20 flex-col justify-between">
                        <span className="font-display font-medium uppercase max-w-[264px] text-[.8125rem] md:text-[.9375rem]">
                            A Comunidade dos Designers de Negócio.
                        </span>
                        <Subscribe />
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
    )
}
