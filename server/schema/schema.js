const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./types/root_query_type.js');
const mutation = require('./mutations.js');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation,
});
