const express = require('express')
const fs = require("fs")
const app = express()


    const hasil = fs.readFileSync('./dataWeb.json')
    const hasill = JSON.parse(hasil)

    app.get('/api', (req,res) => {
        res.json(hasill)
    })

app.listen(5000, () => {
    console.log('berjalan guys')
})