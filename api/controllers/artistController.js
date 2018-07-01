import { ArtistModel } from './../models';

class ArtistContoller {

    
    createArtist (req, res) {
        const { name, image } = req.body;
        const artist = {
            name,
            image
        };

        ArtistModel.create(artist)
            .then(result => {
                res.status(200).json(result);
            })
            .catch (error => {
                console.log('error > ', error)
                res.status(400).json(error);
            });
    }

    updateArtist(req, res) {
        res.status(200).json();
    }

    getArtist(req, res) {
        res.status(200).json('hellooo');
    }

    deleteArtist(req, res) {
        const { filter } = req.body;

        ArtistModel.delete(filter)
            .then(result => {
                res.status(200).json(result);
            })
            .catch (error => {
                console.log('error > ', error)
                res.status(400).json(error);
            });
    }
}

export default new ArtistContoller;
