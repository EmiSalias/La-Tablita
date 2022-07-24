const express = require('express')
const router = express.Router()

const mysqlConnection = require("../database.js")

router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM categories c INNER JOIN products p ON p.categories_id = c.id", (err, rows) =>{
        if(err) {
            console.log(err)
        } else {
            res.json(rows)
        }
    })
})

router.get("/:id", (req, res) => {
    mysqlConnection.query("SELECT * FROM categories WHERE id = ?", [req.params.id], (err, rows) =>{
        if(err) {
            console.log(err)
        } else {
            res.json(rows[0])
        }
    })
})

module.exports = router