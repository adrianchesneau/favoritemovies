var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');


router.get('/movies', (req, res) => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=713c1b20f22c6ace1914f979ec75725c')
        .then(response => response.json())
        .then(data => {
            res.json({ movies: data.results });
        });
})


module.exports = router;
