'use strict';

const express = require('express');
const routes = express.Router();

import {
    artistController,
    albumController,
    lyricsControler
} from './../controllers';

export default () => {

    // artists
    routes.get('/artist/:id', artistController.getArtist);

    // album

    // lyrics
};