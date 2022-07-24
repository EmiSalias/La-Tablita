const express = require('express')
const router = express.Router()

const mysqlConnection = require("../database.js")

router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM stocks ORDER BY quantity ASC;", (err, rows) =>{
        if(err) {
            console.log(err)
        } else {
            res.json(rows)
        }
    })
})

router.get("/:id", (req, res) => {
    mysqlConnection.query("SELECT * FROM stocks WHERE id = ?", [req.params.id], (err, rows) =>{
        if(err) {
            console.log(err)
        } else {
            res.json(rows[0])
        }
    })
})

module.exports = router