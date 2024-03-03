import { Client } from '@notionhq/client'
import { NextRequest, NextResponse } from 'next/server'

const notion = new Client({
    auth: `${process.env.NOTION_KEY}`,
})

async function getNotionData() {
    const res = await notion.databases.query({
        database_id: `${process.env.DATABASE_ID}`,
        auth: `${process.env.NOTION_KEY}`,
        sorts: [
            {
                property: 'Aulas',
                direction: 'ascending',
            },
        ],
        page_size: 15,
    })

    return res.results.map((result) => {
        return result
    })
}

export async function GET(request: NextRequest, response: NextResponse) {
    const data = await getNotionData()

    return NextResponse.json({ data })
}
