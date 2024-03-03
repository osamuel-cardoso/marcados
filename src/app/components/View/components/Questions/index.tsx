import { Container } from '@/app/components/Container'
import { Heading } from '@/app/components/Heading'
import { Faq } from './Faq'

export function Questions() {
    return (
        <section className="bg-brand__gray-100 py-20 md:py-28">
            <div>
                <Container>
                    <div className="flex flex-col gap-20">
                        <Heading
                            heading="AINDA TEM DÚVIDAS? A RESPOSTA ESTÁ AQUI."
                            cap="Veja as perguntas frequentes e tire sua dúvida antes de entrar."
                        />

                        <Faq />
                    </div>
                </Container>
            </div>
        </section>
    )
}
