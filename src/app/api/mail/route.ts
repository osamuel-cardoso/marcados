import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request, response: Response) {
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
        const { data, error } = await resend.emails.send({
            from: `André Lona <hello@samuelcardoso.me>`,
            to: ['helloasurastudio@gmail.com', 'joao888torres@gmail.com'],
            subject: `Olá, ${leadName.charAt(0).toUpperCase() + leadName.slice(1)} Bem vindo ao Marcados!`,
            html: `${leadName} ${leadEmail} ${phoneNumber}`,
        })

        if (error) {
            console.log(error)
        }

        return Response.json(data)
    } catch (error) {
        console.log(error)
        return Response.json(error)
    }
}
