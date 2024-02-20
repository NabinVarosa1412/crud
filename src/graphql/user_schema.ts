
import { gql } from 'apollo-server-express'

 const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        gender: String
        phone: String
        address: String
        nationality: String
        dateOfBirth: String
        educationBackground: String
        preferredContactMethod: String
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    type Mutation {
        createUser(name: String!, email: String!, gender: String!, address: String!, nationality: String!): User
        updateUser(id: ID!, name: String, email: String): User
        deleteUser(id: ID!): User
    }
`;
export default typeDefs;

