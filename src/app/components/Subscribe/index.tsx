'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const leadSchema = z.object({
    leadName: z.string().min(1, 'Por favor, preencha seu nome.'),

    leadEmail: z.string().email('Informe um endereço de e-mail válido'),
    phoneNumber: z
        .string()
        .min(1)
        .max(12)
        .transform((data) => {
            let phone = data.replace(/\D/g, '')

            if (phone.length === 8) {
                phone = '9' + phone
            }

            if (phone.charAt(0) !== '9') {
                phone = '9' + phone.slice(1)
            }

            return phone.replace(/(\d{1})(\d{4})(\d{4})/, '$1 $2-$3')
        }),
})

type LeadSchema = z.infer<typeof leadSchema>

export function Subscribe() {
    const { register, handleSubmit } = useForm<LeadSchema>({
        resolver: zodResolver(leadSchema),
    })

    async function handleRegisterLead(data: LeadSchema) {
        try {
            console.log(data)

            const { status } = await fetch('/api/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(data),
            })

            console.log(status)
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     document.body.style.overflow = 'hidden'
    //     const handleEscape = (event: KeyboardEvent) => {
    //         if (event.key === 'Escape') {
    //             // função aqui
    //         }
    //     }

    //     window.addEventListener('keydown', handleEscape)

    //     return () => {
    //         window.removeEventListener('keydown', handleEscape)
    //         document.body.removeAttribute('style')
    //     }
    // }, [])

    return (
        <div>
            <form onSubmit={handleSubmit(handleRegisterLead)}>
                <input
                    className="px-5 py-2 bg-brand__gray-200 border border-solid border-brand__gray-300"
                    placeholder="Digite seu nome"
                    minLength={1}
                    type="text"
                    {...register('leadName')}
                    required
                />
                <input
                    className="px-5 py-2 bg-brand__gray-200 border border-solid border-brand__gray-300"
                    placeholder="Digite seu e-mail"
                    minLength={1}
                    type="email"
                    {...register('leadEmail')}
                    required
                />
                <input
                    className="px-5 py-2 bg-brand__gray-200 border border-solid border-brand__gray-300"
                    placeholder="9 8809-0092"
                    maxLength={8}
                    {...register('phoneNumber')}
                    required
                />

                <button type="submit">Continuar inscrição 🏌️‍♂️</button>
            </form>
        </div>
    )
}
