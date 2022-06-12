const { gql } = require('apollo-server');

const typeDefs = gql`
  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }
`;

module.exports = typeDefs;