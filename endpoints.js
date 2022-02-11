module.exports = function (app) {
    const bodyParser = require('body-parser');	
    let dados = [];
    // Configuring body parser middleware
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // var getJSON = require('get-json');
    app.post('/ValidaRegra', function(req, res){  
    try {
        const dados = req.body;
        let regra = dados.regra;
        var start = new Date().getTime();
        // define regex para adicionar a constante "$data." em cada variavel para ser trocada na formula
        const regex = /[a-zA-Z_]+/g;
        const subst = `\$data.$&`;
        regra = regra.replace(regex, subst);    
    
        function wrappedEval(textExpression, contextData){
            let fn = Function(`"use strict"; var $data = this;return (${textExpression})`);
            return fn.bind(contextData)();
        }
        res.json({ resultado : wrappedEval(regra, dados.parametros) });
        var elapsed = new Date().getTime() - start;
        console.log(elapsed);  
    } catch (e) {
        res.json({ resultado : 'erro', mensagem : e })
    }
    });

}