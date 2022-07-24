const express = require('express')
const router = express.Router()

const mysqlConnection = require("../database.js")

router.get("/", (req, res) => {
    mysqlConnection.query("SELECT s.id, st.denomination, s.name FROM staff s LEFT JOIN stores st ON st.id = s.works_at", (err, rows) =>{
        if(err) {
            console.log(err)
        } else {
            res.json(rows)
        }
    })
})

router.get("/:id", (req, res) => {
    mysqlConnection.query("SELECT * FROM stores WHERE id = ?", [req.params.id], (err, rows) =>{
        if(err) {
            console.log(err)
        } else {
            res.json(rows[0])
        }
    })
})

module.exports = router