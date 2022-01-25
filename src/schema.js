const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    category: String
    price: Int!
    image: String
  }

  type User {
    id: ID!
    name: String!
    email: String!
    role: Role!
    city: String
    street: String
  }

  enum Role {
    USER
    ADMIN
  }

  type Query {
    allProducts: [Product!]!
    product(name: String!): Product
  }

  type Mutation {
    createUser(data: UserCreateInput): User!
  }

  input UserCreateInput {
    name: String!
    email: String!
    city: String
    street: String
  }
`;

module.exports = typeDefs;
