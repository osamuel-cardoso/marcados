'use client'

import { pnacQuestions } from '@/utils/feedbacks/pnac.questions'
import { useState } from 'react'
import { Question } from './Question.component'

export default function Faq() {
    const [activeAccordion, setActiveAccordion] = useState(0)

    const handleSetColapse = (index: number) => {
        setActiveAccordion(index)
    }

    return (
        <div className="flex flex-col gap-8">
            {pnacQuestions.map((item, position) => (
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
