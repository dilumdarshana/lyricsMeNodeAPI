const config = {

    local: {
        nodePort: 4000,
        dbConnection: 'mongodb://localhost/lyrics'
        //dbConnection: 'mongodb+srv://Lyrics-Me:$apache123@lyrics-me-t4oqu.mongodb.net/test'
    },
    staging: {

    },
    prod: {

    }
}

module.exports = config;