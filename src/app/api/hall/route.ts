import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { Resend } from 'resend'

import { HallEmailTemplate } from '@/emails/hall.email'
import { render } from '@react-email/components'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request, response: Response) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        leadEmail,
        leadName,
        phoneNumber,
    }: {
        leadEmail: string
        leadName: string
        phoneNumber: string
    } = await request.json()

    try {
        const { statusText, error: supabaseError } = await supabase
            .from('leads')
            .insert([
                {
                    name: leadName,
                    mail: leadEmail,
                    phone: phoneNumber,
                },
            ])

        const { data, error } = await resend.emails.send({
            from: `Ecossistema MarcadosⓂ️ <marketing@marcados.me>`,
            to: ['samuelcardoso555@gmail.com', 'oi@marcados.me'],
            subject: `Seu acesso ao Hall chegou!Ⓜ️`,
            html: render(HallEmailTemplate({ name: leadName })),
        })

        if (supabaseError) {
            console.log(supabaseError)
        }

        if (error) {
            console.log(error)
        }

        return Response.json([data, statusText])
    } catch (error) {
        console.log(error)
        return Response.json(error)
    }
}
