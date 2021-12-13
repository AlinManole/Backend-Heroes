const express = require("express")
const app = express()
const morgan = require("morgan")
const port = 5000
const cors = require("cors")
const heroes = require("./routes/heroes")

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))


app.use("/heroes", heroes)


const log = (req, res, next) => {
  console.log("Vous avez reçu une requete")
  next()
}

app.use(log)

app.listen(port, () => {
  console.log(`Server is running on port ${5000}`)
})