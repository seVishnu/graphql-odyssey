const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    tracksforHome: [Track!]!
  }

  "A track is a group of modules that teaches about a certain topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }
  "Author of a complete track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
