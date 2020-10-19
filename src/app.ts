import express , {Application, Request, Response, Router} from 'express';
require('./db/mongoose')

const noteRouter : Router = require('./routers/note')
const app : Application = express();

app.use(express.json())

app.use(noteRouter)

module.exports = app
