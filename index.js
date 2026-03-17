const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


app.get('/', (req, res) => {
    res.send("Server dei film");
});

//app.use("/movies")


app.listen(port, () => {
    console.log(`Express avviato su porta ${port} `)
});
