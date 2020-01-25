export const appConstants = {
  port: parseInt(process.env.PORT, 10) || 3000,
  apiVersion: process.env.API_VERSION || "2.0",
  routePrefix: process.env.ROUTE_PREFIX || "v2",
  swaggerEndpoint: process.env.SWAGGER_ENDPOINT || "api",
  crudQuery: {
    limit: parseInt(process.env.CRUD_QUERY_LIMIT, 10) || 25,
    maxLimit: parseInt(process.env.CRUD_QUERY_MAXLIMIT, 10) || 100
  }
};
