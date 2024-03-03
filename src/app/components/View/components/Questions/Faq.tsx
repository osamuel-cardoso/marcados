'use client'

import { useState } from 'react'
import { Question } from './Question'

const frequentlyQuestions = [
    {
        title: 'Quanto tempo de garantia terei?',
        content: 'Você terá 7 dias de garantia pela Hotmart.',
    },
    {
        title: 'Quanto tempo de acesso terei?',
        content: 'Você terá um ano de acesso a partir da data da compra.',
    },
    {
        title: 'Renovação é automática?',
        content:
            'Sim, mas não se preocupe. Informaremos com antecedência antes de fazer a cobrança.',
    },
    {
        title: 'O grupo serve para iniciantes? Vou ficar perdido(a) lá dentro?',
        content:
            'O Marcados é a melhor forma de começar a trabalhar com marcas. Deve ser considerado uma parada obrigatória para estrategistas e designers de marca, do iniciante ao avançado.',
    },
    {
        title: 'Para quem é o Grupo Marcados?',
        content:
            'O Grupo Marcados é para designers, estrategistas ou qualquer outra pessoa que esteja ou queira trabalhar com branding.',
    },
    {
        title: 'Como recebo os dados de acesso?',
        content:
            'Após a aprovação do pagamento, você receberá os dados de acesso automaticamente no e-mail cadastrado no ato da compra. Por isso é importante que você cadastre um e-mail válido. Depois da sua matrícula, procure por um e-mail do Grupo Marcados.',
    },
]

export function Faq() {
    const [activeAccordion, setActiveAccordion] = useState(0)

    const handleSetColapse = (index: number) => {
        setActiveAccordion(index)
    }

    return (
        <div className="flex flex-col gap-8">
            {frequentlyQuestions.map((item, position) => (
                <Question
                    key={position}
                    heading={item.title}
                    content={item.content}
                    isCurrent={activeAccordion === position}
                    index={position}
                    handleChangeIndex={handleSetColapse}
                />
            ))}
        </div>
    )
}
