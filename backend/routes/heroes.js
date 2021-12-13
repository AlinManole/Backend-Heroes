const express = require("express")

const app = express()
let heroes = require("../superheroes.json")

app.use(express.json())

const existingHero = (req, res, next) => {
    const { slug } = req.params
    const hero = heroes.find(hero => hero.slug === (slug))

    if (!hero) {
        res.status(404).send("Not found")
    } else {
        next()
    }
}

app.get("/", (req, res) => {
    res.json(heroes)
})

app.get("/:slug", existingHero , (req, res) => {

    const { slug } = req.params

    const hero = heroes.find(hero => hero.name === slug)

    res.json(hero)
})

app.get("/:slug/powers", (req, res) => {
    const { slug } = req.params
    const hero = heroes.find(hero => hero.name === slug)
    res.json(hero.power)
})

app.post("/", (req, res) => {
    if (existingHero){
        res.status(409).send("This hero is already in the list")
    } else {
        const hero = {
            id: heroes.length + 1,
            ...req.body
        }
        heroes = [...heroes, hero]
    }

    res.json(heroes)
})


app.put("/:slug/powers", (req, res) => {
    const { slug } = req.params
    const {power} = req.body;
    console.log(slug)
    let hero = heroes.find(hero => hero.slug === slug)
    console.log(hero)

    hero.power = [...hero.power, power]

    res.json(hero)
})

app.delete("/:slug", existingHero, (req, res) => {
    const { slug } = req.params
    const index = heroes.findIndex(hero => hero.slug === slug)

    heroes.splice(index, 1)
    res.status(204).send(`The super hero ${index} has been delete.`)
})

app.delete("/:slug/power/:power", existingHero, (req, res) => {
    const { slug } = req.params
    const { power } = req.params
    const index = heroes.power.findIndex(power => power.slug === slug )
    heroes.power.splice(index, 1)
    res.status(204).send(`The power ${power} of the hero ${slug} has been delete.`)
})


module.exports = app