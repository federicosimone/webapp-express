const dbConnection = require('../data/db');

function index(req, res) {
    const sqlQuery = "SELECT * FROM movies";

    dbConnection.query(sqlQuery, (error, rows) => {
        if (error) return res.status(500), json({ error: " DB error", message: "Errore nel recuperare i dati del DB" });

        res.json(rows);
    });
}

const funzioni = {
    index
}

module.exports = funzioni;

