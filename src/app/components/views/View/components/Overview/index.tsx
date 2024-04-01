import { Container } from '@/app/components/Container'
import { Divider } from '@/app/components/Divider'
import { Heading } from '@/app/components/Heading'
import { OverviewVideo } from './OverviewVideo'

export function Overview() {
    return (
        <section className="py-20 md:py-28 bg-brand__gray-100 overflow-hidden">
            <Container>
                <div className="flex flex-col gap-8">
                    <Heading
                        heading="SOBRE A NOSSA PLATAFORMA DE CONTEÚDO"
                        cap="Veja abaixo como é acessar e explorar todo o conteúdo disponível no Grupo Marcados."
                    />
                    <Divider />

                    <OverviewVideo />
                </div>
            </Container>
        </section>
    )
}
