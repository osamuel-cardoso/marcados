import { Container } from '@/app/components/Container'
import { Heading } from '@/app/components/Heading'
import { ClassesTable } from '../../../../ClassesTable'

export function Classes() {
    return (
        <section className="bg-brand__gray-100 py-20 md:py-28 overflow-x-hidden">
            <Container>
                <div className="flex flex-col gap-[5.5rem]">
                    <div className="flex flex-col gap-11 md:flex-row md:justify-between">
                        <div className="flex flex-col gap-4">
                            <Heading heading="Interativa, completa e intuitiva. Essa é nossa plataforma de conteúdo." />
                            <p className="text-[.9375rem] md:text-[1.1875rem] text-brand__gray-600 w-full max-w-[31.5rem]">
                                Veja abaixo na prática como é explorar todo o
                                conteúdo disponível no Grupo Marcados.
                            </p>
                        </div>
                    </div>

                    <ClassesTable />
                </div>
            </Container>
        </section>
    )
}
