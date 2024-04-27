import { z } from 'zod'

const leadFormSchema = z.object({
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

type LeadSchema = z.infer<typeof leadFormSchema>

const formatPhoneNumber = (value: string) => {
    let strValue = value || ''

    return strValue
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/^\((\d{2})\) 9/, '($1) 9 ')
        .replace(/(\d)(\d{4})$/, '$1-$2')
}

export { formatPhoneNumber, leadFormSchema }
export type { LeadSchema }
