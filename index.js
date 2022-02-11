const express = require('express');
const path = require('path');
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require('./swagger_output.json');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
require('./endpoints')(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
