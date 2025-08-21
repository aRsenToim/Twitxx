import express from 'express'
import { PrismaClient } from '@prisma/client'
import routesAuth from './routes/auth.js'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import routesPosts  from './routes/posts.js'
import routesUsers from './routes/users.js'
import routesLikes from './routes/likes.js'

export const prisma = new PrismaClient()
const app = express()

const corsConfig = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.use(cors(corsConfig))
app.use(express.json());
app.use(fileUpload({}))
app.use(express.static('static'))
app.use('/api/auth', routesAuth)
app.use('/api/posts', routesPosts)
app.use('/api/users', routesUsers)
app.use('/api/likes', routesLikes)





const PORT = process.env.PORT || 3003
app.listen(PORT, (err) => {
    console.log(err ? err.message : `Server listing ${PORT}`);
})