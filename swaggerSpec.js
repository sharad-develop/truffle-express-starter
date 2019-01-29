// Swagger and swagger-jsdoc
const swaggerJSDoc = require('swagger-jsdoc');

// swagger definition
const swaggerDefinition = {
  info: {
    title: 'Turffle Express Swagger API',
    version: '1.0.0',
    description: 'This is the Example API documentation and is using the OpenAPI spec.',
  },
  host: `localhost:3000`,
  basePath: '/',
};

// options for swagger jsdoc 
const swaggerOptions = {
    swaggerDefinition: swaggerDefinition, // swagger definition
    apis: [
      './routes/metacoinApi.js'
    ], // path where API specification are written
  };
  
  // initialize swaggerJSDoc generator (outputs swagger docs as JSON to variable)
  const swaggerSpec = swaggerJSDoc(swaggerOptions);
  // Server swagger at <apiurl>/docs using swagger-ui-express

  module.exports = swaggerSpec;