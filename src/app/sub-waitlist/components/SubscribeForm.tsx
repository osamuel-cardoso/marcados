'use client'

import { formatPhoneNumber } from '@/app/pnac/subscribe/components/useSubscribeForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const leadSchema = z.object({
    leadName: z.string().refine((value) => /\b\w+\b \w/.test(value), {
        message: 'Por favor, escreva seu nome e sobrenome',
    }),

    leadEmail: z.string().email('Informe um endereço de e-mail válido'),
    phoneNumber: z
        .string()
        .min(10, 'O número de telefone deve ter pelo menos 10 dígitos')
        .transform((data) => {
            return data
                .replace(/\D/g, '')
                .replace(/^(\d{2})(\d)/g, '($1) $2')
                .replace(/^\((\d{2})\) 9/, '($1) 9 ')
                .replace(/(\d)(\d{4})$/, '$1-$2')
        }),
})

type LeadSchema = z.infer<typeof leadSchema>

export function Subscribe({ handleSetMount }: { handleSetMount(): void }) {
    const { replace } = useRouter()

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitting },
    } = useForm<LeadSchema>({
        resolver: zodResolver(leadSchema),
    })

    async function handleRegisterLead(data: LeadSchema) {
        try {
            console.log(data)
            const { status } = await fetch('/api/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            if (status === 200) {
                reset()
                replace('/success')
            }
        } catch (error) {
            console.log(error)
        }
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
                    <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                className="px-[1.3125rem] md:h-[4rem] py-4 text-[.9375rem] md:text-base uppercase bg-[transparent] border border-solid border-brand__gray-300 rounded focus:border-brand__gray-500 focus-visible:border-brand__gray-500"
                                placeholder="(11) 9 8809-0092"
                                id="phoneNumber"
                                required
                                value={formatPhoneNumber(field.value)}
                                onChange={(e) => {
                                    field.onChange(e.target.value)
                                }}
                                maxLength={16}
                            />
                        )}
                    />
                    <span className="text-[.9375rem] normal-case font-text font-normal text-brand__gray-700">
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
