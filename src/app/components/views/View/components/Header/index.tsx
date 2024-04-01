import { Anchor } from '@/app/components/Anchor'
import { Container } from '@/app/components/Container'
import MarcadosBrand from '@/app/images/Ⓜ️.png'
import Image from 'next/image'
import { Hour } from './Hour'
import { Location } from './Location'
import { Temp } from './Temp'

export function Header({ anchors }: { anchors?: boolean }) {
    return (
        <header className="bg-brand__gray-1000 py-[1.0625rem]">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Image
                            className="h-7 w-7"
                            quality={100}
                            loading="eager"
                            src={MarcadosBrand}
                            alt="Símbolo do Marcados"
                        />
                        {anchors && (
                            <div
                                className="p-[.375rem] rounded-lg hidden md:flex md:gap-1"
                                style={{ backgroundColor: '#eeeeee' }}
                            >
                                <Anchor href={'#community'}>Comunidade</Anchor>
                                <Anchor href={'#courses'}>
                                    Cursos fechados
                                </Anchor>
                                <Anchor href={'#feedbacks'}>Feedbacks</Anchor>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="hidden lg:block">
                            <Location />
                        </div>

                        <Hour />

                        <Temp />
                    </div>
                </div>
            </Container>
        </header>
    )
}
