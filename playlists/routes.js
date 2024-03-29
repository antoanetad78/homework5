const { Router } = require('express')
const Playlist = require('./model')
const Songs = require('../songs/model')
const auth = require('../auth/middleware')

const router = new Router()

router.get('/playlists', (req,res,next) => {
    Playlist
        .findAll()
        .then(playlists => {            
            return res.send(playlists)
        }).catch(console.error)
})

router.get('/playlists/:id', (req, res, next) =>{ 
    const id = req.params.id
    
        Promise.all(
            [
                Songs.findAll({ 
                        where:{
                            playlist_id:id,
                            user_id:userId
                        }
                      })
                    .then(songs => songs),
    
                Playlist
                    .findByPk(id)
                    .then(playlist => playlist)
            ])
            .then(([songs, playlist]) => 
                    res.send(
                            {songs,playlist}
                            )
            )
            .catch(console.error)
})
//Cannot delete because of foreign key constraint 
// router.delete('/playlists/:id', (req,res,next) => {
//     const id = req.params.id
    
//     Playlist
//        .findByPk(id)
//        .then(playlist => playlist.destroy())
//          .then(() =>  res.send({
//             message:"Playlist and all it's songs were deleted"
//         }))
//     })

router.post('/playlists', (req, res, next) => {

    Playlist
        .create(req.body)
        .then(playlist => {
           return res.send(playlist)
        })
        .catch(console.error)
})

module.exports = router