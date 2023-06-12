import express from "express";
const app = express();
const port = 3030;

const middlewareGlobal = (req, res, next) => {
    console.log('I am the global middleware');
    // const err = new Error('I am an Error');
    // next(err);
    next();
}

const middleware1 = (req, res, next) => {
    console.log('I am the first middleware');
    req.customProperty = 100;
    next();
}

const middleware2 = (req, res, next) => {
    console.log('I am the second middleware');
    // const err = new Error('I am an error from middleware2');
    // next(err);
    console.log(`req.customProperty: ${req.customProperty}`);
    req.customProperty = 600;
    next();
}

const errorHandlerMiddleware1 = (err, req, res, next) => {
    if (err) {
        res.send('<h1>An error happened. Please try again later</h1>');
    }
}

const errorHandlerMiddleware2 = (err, req, res, next) => {
    if (err.status === 2) {
        res.send('<h1>Another error happened. Try again later</h1>');
    }
}

// global middleware
app.use(middlewareGlobal);

// route specific middlewares
app.get('/', middleware1, middleware2, (req, res, next) => {
    console.log('I am the standard Express function!');
    res.send(`<h1>Hello World! req.customProperty: ${req.customProperty}</h1>`);
});

// error handling middlewares are written
// at the very bottom of other middlewares
// and routes
// if an error happens, Express will bypass the codes in between and
// come to the error handling middlewares
app.use(errorHandlerMiddleware1);
app.use(errorHandlerMiddleware2);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})