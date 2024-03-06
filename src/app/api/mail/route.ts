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
            from: `Ecossistema MarcadosⓂ️ <marketing@marcados.me>`,
            to: ['samuelcardoso555@gmail.com', 'oi@marcados.me'],
            subject: `Atenção! Lead em processo de compra! Ⓜ️`,
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
