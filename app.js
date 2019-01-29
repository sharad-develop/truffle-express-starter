const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const routes = require('./routes/metacoinApi');
const swaggerSpec = require('./swaggerSpec');
// Swagger UI for express used to serve swagger-ui with output of swagger-jsdoc
const swaggerUi = require('swagger-ui-express');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/", routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
    console.log(`listening on port ${port}....`)
});