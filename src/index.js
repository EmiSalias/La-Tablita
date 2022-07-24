const express = require('express')
const app = express()

const morgan = require('morgan')

app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
    const html =`<html>
                    <head>
                        <title>La Tablita</title>
                    </head>
                    <body style="font-family:Verdana; background:black">
                        <h1 style="font-size:100px; color:yellow; text-align:center">LA TABLITA</h1>
                        <h4 style="font-size:50px; padding:10px; color:#F1A500">A picar <br> mi amor, <br> vamos <br> a picar <br> mi amor.</h4>
                    </body>
                </html>`
    res.send(html)
})
const categoriesRoute = require("./routes/categories.js")
const customersRoute = require("./routes/customers.js")
const order_productsRoute = require("./routes/order_products.js")
const ordersRoute = require("./routes/orders.js")
const positionsRoute = require("./routes/positions.js")
const productsRoute = require("./routes/products.js")
const staffRoute = require("./routes/staff.js")
const stocksRoute = require("./routes/stocks.js")
const storesRoute = require("./routes/stores.js")

app.use(express.json())
app.use(morgan("dev"))

app.use("/categories", categoriesRoute)
app.use("/customers", customersRoute)
app.use("/order_products", order_productsRoute)
app.use("/orders", ordersRoute)
app.use("/positions", positionsRoute)
app.use("/products", productsRoute)
app.use("/staff", staffRoute)
app.use("/stocks", stocksRoute)
app.use("/stores", storesRoute)

app.listen(app.get("port"), () => {
    console.log("Servidor en el puerto", app.get("port"))
})