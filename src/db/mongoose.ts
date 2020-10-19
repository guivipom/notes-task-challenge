const mongoose = require('mongoose')

mongoose.connect( 'mongodb://127.0.0.1:27017/notes-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err: Error) =>{
    if(err) {
        console.log('Database connection error: ',err)
    } else {
        console.log('Connection succesful')
    }
})