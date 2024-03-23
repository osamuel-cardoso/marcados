import { gql } from '@apollo/client'

export const GET_POSTS = gql`
    query GetPosts {
        blogPosts {
            createdAt
            slug
            subtitle
            title
            thumbnail_post {
                url
            }
        }
    }
`
