interface User {
    object: string
    id: string
}

interface File {
    url: string
    expiry_time: string
}

interface Cover {
    type: string
    file: {
        url: string
        expiry_time: string
    }
}

export interface Page {
    object: string
    id: string
    created_time: string
    last_edited_time: string
    created_by: User
    last_edited_by: User
    cover: Cover
    icon: {
        type: string
        emoji: string
    }
    parent: {
        type: string
        database_id: string
    }
    archived: boolean
    properties: {
        Link: {
            id: string
            type: string
            url: string | null
        }
        Playlist: {
            id: string
            type: string
            multi_select: {
                id: string
                name: string
                color: string
            }[]
        }
        Formato: {
            id: string
            type: string
            multi_select: {
                id: string
                name: string
                color: string
            }[]
        }
        Fase: {
            id: string
            type: string
            select: {
                id: string
                name: string
                color: string
            }
        }
        Date: {
            id: string
            type: string
            date: {
                start: string
                end: string | null
                time_zone: string | null
            }
        }
        Aulas: {
            id: string
            type: string
            title: {
                type: string
                text: {
                    content: string
                    link: string | null
                }
                annotations: {
                    bold: boolean
                    italic: boolean
                    strikethrough: boolean
                    underline: boolean
                    code: boolean
                    color: string
                }
                plain_text: string
                href: string | null
            }[]
        }
    }
    url: string
    public_url: string | null
}
