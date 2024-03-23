'use client'

import { Posts } from '@/app/(blog)/components/Posts'
import { useState } from 'react'

export function PostContainer({
    posts,
}: {
    posts: [
        {
            createdAt: Date
            slug: string
            subtitle: string
            title: string
            thumbnail_post: {
                url: string
            }
        },
    ]
}) {
    const [arrangement, setArrangement] = useState<'list' | 'grid'>('grid')

    function handleSetList() {
        setArrangement('list')
    }
    function handleSetGrid() {
        setArrangement('grid')
    }

    return (
        <>
            <div className="pb-4 border-b border-solid border-brand__gray-900">
                <div className="flex justify-between">
                    <div className="flex gap-1">
                        <h1 className="uppercase text-[1.3125rem] ">Artigos</h1>
                        <span className="align-top font-bold text-[.9375rem]">
                            {String(posts.length).padStart(2, '0')}
                        </span>
                    </div>
                    <div className="hidden  md:block uppercase font-bold">
                        <span>Visualizar: </span>
                        <span
                            onClick={handleSetList}
                            className="cursor-pointer"
                        >
                            Lista
                        </span>
                        <span>/</span>
                        <span
                            onClick={handleSetGrid}
                            className="cursor-pointer"
                        >
                            Galeria
                        </span>
                    </div>
                </div>
            </div>

            <Posts
                arrangement={arrangement}
                posts={posts}
            />
        </>
    )
}
