const Sequelize = require('sequelize')
const sequalize = require('../db')
const Song = require('../songs/model')

const Playlist = sequalize.define('playlists', {
    name:{
        type:Sequelize.STRING,
        field: 'name',
        allowNull:false
    }
}, {
    timestamp:false,
    tableNme:'playlists'
}

);


module.exports = Playlist