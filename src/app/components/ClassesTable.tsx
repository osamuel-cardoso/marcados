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
        <div className="overflow-x-scroll pb-3 classes__table">
            <div className="mb-9 grid grid-cols-4 gap-x-4 w-[82rem]">
                <span>Aulas</span>

                <span>Playlist</span>

                <span>Fase</span>

                <span>Formato</span>
            </div>
            <div className="grid grid-rows-[auto] gap-3 w-[82rem]">
                {databaseResponseData.slice(0, 12).map((result) => (
                    <Row
                        key={result.id}
                        title={result.properties.Aulas.title[0]?.plain_text}
                        playlist={
                            result.properties.Playlist.multi_select[0]?.name
                        }
                        format={result.properties.Formato.multi_select[0]?.name}
                        step={result.properties.Fase.select?.name}
                    />
                ))}
            </div>
        </div>
    )
}
