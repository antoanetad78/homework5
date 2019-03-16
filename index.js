const express = require('express')
const bodyParser = require('body-parser')
const songRoutes = require('./songs/routes')
const playlistRoutes = require('./playlists/routes')

const app = express()
const port = process.env.PORT || 4000

app 
    .use(bodyParser.json())
    .use(songRoutes)
    .use(playlistRoutes)
    .listen(port, ()=> console.log(`app is listening on port ${port}`)
    )