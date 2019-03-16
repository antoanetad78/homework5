const Sequelize = require('sequelize')
const sequalize = require('../db')
const User = require('../users/model')

const Playlist = sequalize.define('playlists', {
    name:{
        type:Sequelize.STRING,
        field: 'name',
        allowNull:false
    },
    userId: {
        type: Sequelize.INTEGER,
        field: 'user_id'
    }
}, {
    timestamp:false,
    tableNme:'playlists'
}

);

Playlist.belongsTo(User)
module.exports = Playlist