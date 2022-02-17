

# nodejs-ValidaRegra é baseado no projeto node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/mgalvao2012/nodejs-ValidaRegra # or clone your own fork
$ cd nodejs-ValidaRegra
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

## Exemplo de uso

O arquivo example.http tem alguns exemplos:
```
POST https://nodejs-validaregra.herokuapp.com/ValidaRegra
content-type: application/json

{
    "parametros" : {
        "ORIGEM" : 1,
        "MACA" : 10,
        "BATATINHA" : 3,
        "BANANA": 26,
        "Feira": 1
    },
    "regra" : "ORIGEM == 1 && (MACA == 10 && (BATATINHA == 3 || BATATINHA == 4 || BATATINHA == 6 || BATATINHA == 9 || BATATINHA == 7 || BATATINHA == 8 || BATATINHA == 10 || BATATINHA == 18 || BATATINHA == 20 || BATATINHA == 235 || BATATINHA == 26 || BATATINHA == 27 || BATATINHA == 35 || BATATINHA == 34 || BATATINHA == 33 || BATATINHA == 36 || BATATINHA == 37 || BATATINHA == 38) && BANANA == 26) || (MACA == 60 && (BATATINHA == 3 || BATATINHA == 6 || BATATINHA == 7 || BATATINHA == 260) && BANANA == 26) || MACA == 19 && ((BATATINHA == 3 || BATATINHA == 4 || BATATINHA == 20 || BATATINHA == 34) && BANANA == 26) || ((BATATINHA == 6 || BATATINHA == 7 || BATATINHA == 8) && BANANA == 3) || ((BATATINHA == 33) && BANANA == 40) || MACA == 14 && (BATATINHA == 3 && BANANA == 40) || (BATATINHA == 6 && BANANA == 3) && Feira == 1"
}

### Resposta:

HTTP/1.1 200 OK
Server: Cowboy
Connection: close
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 18
Etag: W/"12-/RSU2dbqR2XsP9blRFNdmgn76w4"
Date: Thu, 17 Feb 2022 12:19:06 GMT
Via: 1.1 vegur

{
   "resultado": true
}
```
