const dbConnection = require('../data/db');

function index(req, res) {
    const sqlQuery = "SELECT * FROM movies";

    dbConnection.query(sqlQuery, (error, rows) => {
        if (error) return res.status(500).json({ error: " DB error", message: "Errore nel recuperare i dati del DB" });

        res.json(rows);
    });
};

function show(req, res) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: "ERROR", message: "ID inserito non valido" })
    }

    const sqlQuery = "SELECT * FROM movies WHERE id = ?";
    const parametriQuery = [id];

    const sqlQueryReviews = `
    SELECT 
    reviews.id,
    reviews.movie_id,
    reviews.name,
    reviews.vote,
    reviews.text
    FROM movies AS M
    JOIN reviews 
    ON reviews.movie_id = M.id
    WHERE M.id = ?`

    dbConnection.query(sqlQuery, parametriQuery, (error, film) => {
        if (error) {
            return res.status(500).json({ error: "DB Error", message: "Impossile eseguire la richiesta" })
        }

        if (film.length === 0) {
            return res.status(404).json({ error: "Not Found", message: "Impossile trovare il post" })
        }

        const risultatofilm = film[0];

        dbConnection.query(sqlQueryReviews, parametriQuery, (error, reviewsResult) => {
            if (error) {
                return res.status(500).json({ error: "Database query failed" })
            };
            console.log(reviewsResult);

            risultatofilm.reviews = reviewsResult;
            res.json(risultatofilm);
        });
    });

}

const funzioni = {
    index,
    show
}

module.exports = funzioni;

