import { Container } from '@/app/components/Container'
import { Divider } from '@/app/components/Divider'
import { Heading } from '@/app/components/Heading'
import {
    atraction,
    extras,
    industry,
    positioning,
} from '@/utils/features/pnacContent'
import { Card } from './components/Card.modules'

import { default as shot01, default as shot06 } from '@/app/images/shot01.png'
import shot02 from '@/app/images/shot02.png'
import shot03 from '@/app/images/shot03.png'
import shot04 from '@/app/images/shot04.png'
import shot05 from '@/app/images/shot05.png'
import Image from 'next/image'

export default function Modules() {
    return (
        <section className="py-20 md:py-28 bg-brand__gray-100 overflow-hidden">
            <div className="flex flex-col gap-16">
                <Container>
                    <div className="flex flex-col gap-9">
                        <Heading
                            heading="TRÊS GRANDES MÓDULOS SEM ENROLAÇÃO PARA SAIR DE UM FREELA PARA UM DONO DE NEGÓCIO."
                            cap="Essa é a visão geral dos principais tópicos do curso PNAC."
                        />
                        <Divider />
                    </div>
                </Container>
                <div className="flex items-center flex-col gap-4">
                    <div className="flex gap-3 md:gap-4 w-full  -translate-x-[120vw] md:translate-x-[-2vw]">
                        <Image
                            className="max-h-[12.75rem] md:max-h-max p-3 md:p-4 bg-brand__gray-200 rounded-lg md:rounded-3xl"
                            src={shot01}
                            alt="Slide do módulo"
                        />
                        <Image
                            className="max-h-[12.75rem] md:max-h-max p-3 md:p-4 bg-brand__gray-200 rounded-lg md:rounded-3xl"
                            src={shot02}
                            alt="Slide do módulo"
                        />
                        <Image
                            className="max-h-[12.75rem] md:max-h-max p-3 md:p-4 bg-brand__gray-200 rounded-lg md:rounded-3xl"
                            src={shot03}
                            alt="Slide do módulo"
                        />
                    </div>
                    <div className="flex gap-3 md:gap-4 w-full -translate-x-[60vw] md:translate-x-[2vw]">
                        <Image
                            className="max-h-[12.75rem] md:max-h-max p-3 md:p-4 bg-brand__gray-200 rounded-lg md:rounded-3xl"
                            src={shot04}
                            alt="Slide do módulo"
                        />
                        <Image
                            className="max-h-[12.75rem] md:max-h-max p-3 md:p-4 bg-brand__gray-200 rounded-lg md:rounded-3xl"
                            src={shot05}
                            alt="Slide do módulo"
                        />
                        <Image
                            className="max-h-[12.75rem] md:max-h-max p-3 md:p-4 bg-brand__gray-200 rounded-lg md:rounded-3xl"
                            src={shot06}
                            alt="Slide do módulo"
                        />
                    </div>
                </div>
                <Container>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Card
                            fill="filled"
                            title="Posicionamento"
                            module="Módulo 01"
                            features={positioning}
                        />
                        <Card
                            fill="filled"
                            title="Nicho"
                            module="Módulo 02"
                            features={industry}
                        />
                        <Card
                            fill="filled"
                            title="Atração de clientes"
                            module="Módulo 03"
                            features={atraction}
                        />
                        <Card
                            fill="outlined"
                            title="Extras"
                            module="Materiais de apoio"
                            features={extras}
                        />
                    </div>
                </Container>
            </div>
        </section>
    )
}
