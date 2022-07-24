const express = require('express')
const router = express.Router()

const mysqlConnection = require("../database.js")

router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM products", (err, rows) =>{
        if(err) {
            console.log(err)
        } else {
            res.json(rows)
        }
    })
})

router.get("/:id", (req, res) => {
    mysqlConnection.query("SELECT * FROM products WHERE id = ?", [req.params.id], (err, rows) =>{
        if(err) {
            console.log(err)
        } else {
            res.json(rows[0])
        }
    })
})

router.put("/:id", (req, res) => {
    const { id } = req.params
    const { price } = req.body
    const query = "CALL editProduct(?, ?)"
    mysqlConnection.query(query, [id, price], (err, rows) => {
        if(!err) {
            res.json({status: "Precio editado exitosamente"})
        } else {
            console.log(err)
        }
    })
})

module.exports = router