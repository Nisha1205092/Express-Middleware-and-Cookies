import express from "express";
const app = express();
const port = 3000;

const middleware1 = (req, res, next) => {
    console.log('I am the first middleware');
    next();
}

const middleware2 = (req, res, next) => {
    console.log('I am the second middleware');
    next();
}

const standardExpressCallback = (req, res, next) => {
    console.log('I am the standard Express function!');
    res.send('<h1>Hello World!</h1>');
}
app.get('/', middleware1, middleware2, standardExpressCallback);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})