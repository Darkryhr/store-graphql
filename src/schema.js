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

  type Cart {
    id: ID!
    customerId: ID!
    active: Boolean = true
    createdAT: DATETIME!
    items: [CartItem!]
  }

  type CartItem {
    createdAT: DATETIME!
    productId: ID!
    cartId: ID!
    id: ID! 
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
