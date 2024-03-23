'use client'

import { PostGrid } from '../PostGallery'
import { PostRow } from '../PostRow'

export function Posts({
    posts,
    arrangement,
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
    arrangement: 'list' | 'grid'
}) {
    return (
        <>
            {arrangement === 'grid' && (
                <div className="grid lg:grid-cols-3 lg:gap-x-4 lg:gap-y-10">
                    {posts.map(
                        (
                            {
                                slug,
                                subtitle,
                                title,
                                thumbnail_post,
                                createdAt,
                            },
                            index
                        ) => (
                            <PostGrid
                                key={index}
                                title={title}
                                content={subtitle}
                                src={thumbnail_post.url}
                                date={createdAt}
                                slug={slug}
                            />
                        )
                    )}
                </div>
            )}
            {arrangement === 'list' && (
                <div>
                    {posts.map(
                        (
                            {
                                slug,
                                subtitle,
                                title,
                                thumbnail_post,
                                createdAt,
                            },
                            index
                        ) => (
                            <PostRow
                                key={index}
                                title={title}
                                content={subtitle}
                                date={createdAt}
                                slug={slug}
                            />
                        )
                    )}
                </div>
            )}
        </>
    )
}
