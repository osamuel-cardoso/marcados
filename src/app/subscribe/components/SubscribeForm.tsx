'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const leadSchema = z.object({
    leadName: z.string().min(2, 'Por favor, preencha seu nome.'),

    leadEmail: z.string().email('Informe um endereço de e-mail válido'),
    phoneNumber: z.string().min(2, 'Digite um número de telefone válido'),
})

type LeadSchema = z.infer<typeof leadSchema>

export function Subscribe({ handleSetMount }: { handleSetMount(): void }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<LeadSchema>({
        resolver: zodResolver(leadSchema),
    })

    async function handleRegisterLead(data: LeadSchema) {
        // try {
        //     console.log(data)
        //     const { status } = await fetch('/api/mail', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(data),
        //     })
        //     if (status === 200) {
        //         reset()
        //         handleSetMount()
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
    }

    return (
        <form onSubmit={handleSubmit(handleRegisterLead)}>
            <div className="flex flex-col w-full gap-8">
                <label
                    htmlFor="leadName"
                    className="flex flex-col gap-3 uppercase font-medium text-[.8125rem] md:text-[.9375rem]"
                >
                    Seu nome
                    <input
                        className="px-[1.3125rem] py-4 md:h-[4rem] text-[.9375rem] md:text-base uppercase bg-[transparent] border border-solid border-brand__gray-300 rounded focus:border-brand__gray-500 focus-visible:border-brand__gray-500"
                        placeholder="Digite seu nome"
                        id="leadName"
                        minLength={1}
                        type="text"
                        {...register('leadName')}
                        required
                    />
                    {errors.leadName?.message}
                </label>
                <label
                    htmlFor="email"
                    className="flex flex-col gap-3 uppercase font-medium text-[.8125rem] md:text-[.9375rem]"
                >
                    Seu melhor e-mail
                    <input
                        className="px-[1.3125rem] py-4 md:h-[4rem] text-[.9375rem] md:text-base uppercase bg-[transparent] border border-solid border-brand__gray-300 rounded focus:border-brand__gray-500 focus-visible:border-brand__gray-500"
                        placeholder="Digite seu e-mail"
                        id="email"
                        minLength={1}
                        type="email"
                        {...register('leadEmail')}
                        required
                    />
                    {errors.leadEmail?.message}
                </label>
                <label
                    htmlFor="phoneNumber"
                    className="flex flex-col gap-3 uppercase font-medium text-[.8125rem] md:text-[.9375rem]"
                >
                    Seu telefone
                    <input
                        className="px-[1.3125rem] md:h-[4rem] py-4 text-[.9375rem] md:text-base uppercase bg-[transparent] border border-solid border-brand__gray-300 rounded focus:border-brand__gray-500 focus-visible:border-brand__gray-500"
                        placeholder="9 8809-0092"
                        id="phoneNumber"
                        maxLength={11}
                        {...register('phoneNumber')}
                        required
                    />
                    <span className="text-[.875rem] normal-case font-text font-normal text-brand__gray-700">
                        {errors.phoneNumber?.message}
                    </span>
                </label>
                <button
                    className="w-full px-4 py-5 md:px-7 text-[.9375rem] md:py-6 rounded bg-brand__blue-700_base font-bold text-center uppercase transition border border-solid border-[transparent]  hover:border-brand__gray-300 hover:bg-[transparent] hover:text-brand__gray-1000"
                    disabled={isSubmitting}
                    type="submit"
                >
                    Continuar inscrição 🏌️‍♂️
                </button>
            </div>
        </form>
    )
}
