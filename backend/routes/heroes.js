const express = require("express")
const app = express()
let heroes = require("../superheroes.json")

app.use(express.json())


app.get("/", (req, res) => {
    res.json(heroes)
})

app.get("/:slug", (req, res) => {

    const { slug } = req.params
    console.log(slug)
    const hero = heroes.find(hero => hero.name === slug)
    console.log(hero)
    res.json(hero)
})

app.get("/:slug/powers", (req, res) => {
    const { slug } = req.params
    const hero = heroes.find(hero => hero.name === slug)
    res.json(hero.power)
})

module.exports = app