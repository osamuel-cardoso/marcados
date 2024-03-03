import { Page } from '@/@types/notion'
import Row from './View/components/Classes/Row'

async function getNotionDatabasesData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/classes`, {
        cache: 'no-cache',
    })
    return res.json()
}

export async function ClassesTable() {
    const { data } = await getNotionDatabasesData()
    const databaseResponseData: Page[] = data

    return (
        <>
            <table className="w-full">
                <thead className="hidden md:block w-full mb-9">
                    <tr className="w-full flex gap-4">
                        <td className="w-[33.33%]">
                            <span>Aulas</span>
                        </td>

                        <td className="w-[25%]">
                            <span>Playlist</span>
                        </td>

                        <td className="w-[25%]">
                            <span>Fase</span>
                        </td>

                        <td className="w-[16.67%]">
                            <span>Formato</span>
                        </td>
                    </tr>
                </thead>
                <tbody className="flex flex-col gap-4">
                    {databaseResponseData.map((result) => (
                        <Row
                            key={result.id}
                            title={result.properties.Aulas.title[0]?.plain_text}
                            playlist={
                                result.properties.Playlist.multi_select[0]?.name
                            }
                            format={
                                result.properties.Formato.multi_select[0]?.name
                            }
                            step={result.properties.Fase.select?.name}
                        />
                    ))}
                </tbody>
            </table>
        </>
    )
}
