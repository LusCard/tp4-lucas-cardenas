
const express = require('express')
const app = express()
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
require("dotenv").config();
const port = process.env.PORT || 6000

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
/** requiero el modulo de las rutas y ejecutara todas las peticiones en la ruta '/' */
const ruta = require('./routes/indexRoutes')
app.use('/', ruta);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
