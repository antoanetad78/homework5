const Sequelize = require('sequelize')
const sequalize = require('../db')
const Playlist = require('../playlists/model')

const Song = sequalize.define('songs', {
    title:{
        type:Sequelize.STRING,
        field:'title',
        allowNull: false
    },
    artist: {
        type:Sequelize.STRING,
        field:'artist',
        allowNull: false
    },
    album: {
        type: Sequelize.STRING,
        field:'album',
        allowNull: false
    },
    playlistId: {
        type:Sequelize.INTEGER,
        field:'playlist_id',        
    }
}, {
    timestamp: false,
    tableName: 'songs',
});

//This should allow the songs to be deleted when the playlist is deleted but doesn't work
Song.belongsTo(Playlist, {constraints: false, onDelete:'cascade', hooks:true})

module.exports = Song
