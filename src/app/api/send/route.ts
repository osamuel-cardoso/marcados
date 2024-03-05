import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Ⓜ️ <oi@marcados.me>',
            to: ['samuelcardoso555@gmail.com'],
            subject: 'Bem vindo ao Marcados!',
            html: 'este é um teste',
        })

        console.log(data)
        console.log(error)
        return Response.json(data)
    } catch (error) {
        return Response.json(error)
    }
}
