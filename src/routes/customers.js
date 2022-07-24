const express = require('express')
const router = express.Router()

const mysqlConnection = require("../database.js")

router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM customers", (err, rows) =>{
        if(err) {
            console.log(err)
        } else {
            res.json(rows)
        }
    })
})

router.get("/:id", (req, res) => {
    mysqlConnection.query("SELECT * FROM customers WHERE id = ?", [req.params.id], (err, rows) =>{
        if(err) {
            console.log(err)
        } else {
            res.json(rows[0])
        }
    })
})

router.post("/", (req, res) => {
    const { id, name, email } = req.body
    const query = "CALL addCustomer(?, ?, ?)"
    mysqlConnection.query(query, [id, name, email], (err, rows) => {
        if(!err) {
            res.json({status: "Cliente añadido exitosamente"})
        } else {
            console.log(err)
        }
    })
})

module.exports = router