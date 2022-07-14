import express from 'express'
import path from 'path'
import cors from 'cors'
import corsOptions from '../config/corsOptions'
import { logger } from '../middleware/logEvents'
import errorHandler from '../middleware/errorHandler'
import verifyJWT from './middleware/verifyJWT'
import cookieParser from 'cookie-parser'
import credentials from '../middleware/credentials'

const app = express()
const PORT = process.env.PORT || 3500

app.use(logger)
app.use(credentials)
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use(errorHandler)
app.use(verifyJWT)

app.use('/', express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/root'))
app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use('/refresh', require('./routes/refresh'))
app.use('/logout', require('./routes/logout'))
app.use('/employees', require('./routes/api/employees'))

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html'))
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    else if (req.accepts('json')) 
        res.json({ "error": "404 Not Found" })
    else
        res.type('txt').send("404 Not Found")
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))