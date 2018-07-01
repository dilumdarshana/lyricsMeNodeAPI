import { 
    ArtistController
} from './controllers';

const express = require('express');
//const expressJoi = require('express-joi-validator');

const routes = express.Router();

export default (app) => {

    // artist routes
    //routes.get('/artist/:id', ArtistController.getArtist);
    routes.post('/artist', ArtistController.createArtist);
    // routes.put('/artist', ArtistController.createArtist);
    routes.delete('/artist', ArtistController.deleteArtist);
    // routes.get('/artists', ArtistController.createArtist);

    // album routes

    // lyrics routs

    // login routes

    app.use('/api', routes);

};