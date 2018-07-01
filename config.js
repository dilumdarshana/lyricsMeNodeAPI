const config = {

    local: {
        port: 4000,
        host: 'http://localhost',
        apiVersion: 'v1',
        dbConnection: 'mongodb://localhost/lyrics',
        //dbConnection: 'mongodb://Lyrics-Me:$apache123@lyrics-me-shard-00-00-t4oqu.mongodb.net:27017,lyrics-me-shard-00-01-t4oqu.mongodb.net:27017,lyrics-me-shard-00-02-t4oqu.mongodb.net:27017/test?ssl=true&replicaSet=Lyrics-Me-shard-0&authSource=admin'
        
        jwtSalt: 'unkown',
        accessTokenExpires: '600' // this must be in seconds
    },
    staging: {

    },
    prod: {

    }
}

module.exports = config;