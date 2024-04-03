import { Container } from '@/app/components/Container'
import { Divider } from '@/app/components/Divider'
import { Heading } from '@/app/components/Heading'
import skeleton__classe from '@/app/images/skeleton__classe.svg'

import { default as shot01, default as shot06 } from '@/app/images/shot01.png'
import shot02 from '@/app/images/shot02.png'
import shot03 from '@/app/images/shot03.png'
import shot04 from '@/app/images/shot04.png'
import shot05 from '@/app/images/shot05.png'
import { atraction, industry, positioning } from '@/utils/features/pnacContent'
import Image from 'next/image'
import { Classe } from './components/Classe.module'

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
                        <img
                            className="max-h-[12.75rem] md:max-h-max p-3 md:p-4 bg-brand__gray-200 rounded-lg md:rounded-3xl"
                            src={shot01.src}
                            alt="Slide do módulo"
                        />
                        <img
                            className="max-h-[12.75rem] md:max-h-max p-3 md:p-4 bg-brand__gray-200 rounded-lg md:rounded-3xl"
                            src={shot02.src}
                            alt="Slide do módulo"
                        />
                        <img
                            className="max-h-[12.75rem] md:max-h-max p-3 md:p-4 bg-brand__gray-200 rounded-lg md:rounded-3xl"
                            src={shot03.src}
                            alt="Slide do módulo"
                        />
                    </div>
                    <div className="flex gap-3 md:gap-4 w-full -translate-x-[60vw] md:translate-x-[2vw]">
                        <img
                            className="max-h-[12.75rem] md:max-h-max p-3 md:p-4 bg-brand__gray-200 rounded-lg md:rounded-3xl"
                            src={shot04.src}
                            alt="Slide do módulo"
                        />
                        <img
                            className="max-h-[12.75rem] md:max-h-max p-3 md:p-4 bg-brand__gray-200 rounded-lg md:rounded-3xl"
                            src={shot05.src}
                            alt="Slide do módulo"
                        />
                        <img
                            className="max-h-[12.75rem] md:max-h-max p-3 md:p-4 bg-brand__gray-200 rounded-lg md:rounded-3xl"
                            src={shot06.src}
                            alt="Slide do módulo"
                        />
                    </div>
                </div>
                <Container>
                    <Classe
                        index={`01`}
                        content={positioning}
                        heading="POSICIONAMENTO"
                        resume="Módulo 01  —  Posicionamento"
                        src={skeleton__classe.src}
                    />
                    <Classe
                        index={`02`}
                        content={industry}
                        heading="Nicho"
                        resume="Módulo 02  —   Nicho"
                        src={skeleton__classe.src}
                    />
                    <Classe
                        index={`03`}
                        content={atraction}
                        heading="Atração de Clientes"
                        resume="Módulo 03  —   Atração de Clientes"
                        src={skeleton__classe.src}
                    />
                </Container>
            </div>
        </section>
    )
}
