const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

const notFoundMiddleware = require('./middlewares/notFound');
const errorsHandlerMiddleware = require('./middlewares/errorsHandler');

const moviesRouter = require('./routers/filmsRouter')

app.get('/', (req, res) => {
    res.send("Server dei film");
});

app.use("/movies", moviesRouter)

app.use(notFoundMiddleware);
app.use(errorsHandlerMiddleware);


app.listen(port, () => {
    console.log(`Express avviato su porta ${port} `)
});
