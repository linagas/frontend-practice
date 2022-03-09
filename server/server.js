const express =  require('express')
const cors = require("cors");

const app = express()
app.use(cors());

const meliRouter = require('./routes/meli')

app.get('/', ((req,res) =>{
    res.status(200).json({message: 'Node server'})
}))

app.use('/items', meliRouter)


app.listen(3001)

