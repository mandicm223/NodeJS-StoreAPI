require('dotenv').config()
//async errors
require('express-async-errors')

const express = require('express');
const app = express();
const connectDB = require('./db/connect')

const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')

const router = require('./routes/products')

// middleware
app.use(express.json())

//routes
app.get('/' , (req,res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
})

app.use('/api/v1/products' , router)


//products route

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 9999
const start = async () => {
    try {
        //connectDB
        app.listen(port , console.log(`Server is listening to port ${port}`))
        await connectDB(process.env.MONGO_URI)
    } catch (error) {
        console.log(error)
    }
}

start()