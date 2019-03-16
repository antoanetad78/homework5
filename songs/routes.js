const { Router } = require('express')
const Song = require('./model')

const router = new Router()

router.post('/playlists/:id/songs', (req, res, next) => {
    const id = req.params.id
    req.body.playlistId = id
    console.log('request body', req.body);

    
    Song
      .create(req.body)
      .then(song => {
          return res.send(song)
      })
      .catch(console.error)



})

module.exports = router