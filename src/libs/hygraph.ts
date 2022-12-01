import { GraphQLClient } from 'graphql-request'

export const hygraph = new GraphQLClient(process.env.CMS_API_URL)
