export type GetPostsData = {
    blogPosts: [
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
}

export type GetPostData = {
    blogPost: {
        slug: string
        subtitle: string
        title: string
        createdAt: Date
        content: {
            json
        }
    }
}
