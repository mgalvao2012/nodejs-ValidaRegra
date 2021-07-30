const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));
let dados = [];

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var getJSON = require('get-json');
app.post('/ValidaRegra', function(req, res){  
  try {
    const dados = req.body;
    let regra = dados.regra;
    var start = new Date().getTime();
  
    function wrappedEval(textExpression, contextData){
      let fn = Function(`"use strict"; var $data = this;return (${textExpression})`);
      return fn.bind(contextData)();
    }
    res.json({ resultado : wrappedEval(regra, dados) });
    var elapsed = new Date().getTime() - start;
    console.log(elapsed);  
  } catch (e) {
    res.json({ resultado : 'erro', mensagem : e })
  }
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
