
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get( '/', (req, res) => {
    console.log( `in router.get...` );
    
    let sqlText = `SELECT * FROM "feedback" ORDER BY "id";`;

    pool.query( sqlText )
        .then( (result) => {
            console.log( `GET successful!`, result.rows );
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log( `Error getting feedback from DB.`, error );
            res.sendStatus(500);
        });
})

router.post( '/', (req, res) => {
    const feedback = req.body;
    console.log( `in router.post...`, feedback );

    let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    
    pool.query( sqlText, [ Number(feedback.feeling), Number(feedback.understanding), Number(feedback.support), feedback.comments ] )
        .then( (response) =>{
            console.log( `POST successful!` );
            res.sendStatus(201);
        })
        .catch( (error) => {
            console.log( `Could not add feedback to DB`, error );
            res.sendStatus(500);
        })
})


module.exports = router;