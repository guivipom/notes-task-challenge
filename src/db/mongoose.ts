const mongoose = require('mongoose')

mongoose.connect( 'mongodb://127.0.0.1:27017/notes-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (e :any) =>{
    if(e) {
        console.log('Database connection error: ',e)
    } else {
        console.log('Connection succesful')
    }
})