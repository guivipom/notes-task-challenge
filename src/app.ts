import express , {Application, Request, Response, Router} from 'express';
require('./db/mongoose')


const taskRouter : Router = require('./routers/note')




const app : Application = express();

app.use(express.json())
app.use(taskRouter)

app.get('/', (req : Request ,res : Response) => {
    res.send('Hello');
})

module.exports = app
