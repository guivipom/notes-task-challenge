const app = require('./app')

const port : Number = 3000

app.listen(port, ()=> {
    console.log('Server is up on port ' + port)
})
