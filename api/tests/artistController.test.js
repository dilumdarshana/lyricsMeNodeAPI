import { expect } from 'chai';
import request from 'supertest';
import app from './../../app';

const artist = {
    name: 'Shakira',
    image: null
};

let createdArtist = {};

describe('Artist Creation >> ', () => {
    it('should create a new artist', (done) => {
        request(app)
            .post('/api/artist')
            .send(artist)
            .end((err, res) => {
                createdArtist = res.body;
                expect(res.status).to.be.equal(200);
                done();
            });
    });
});

describe ('Artist Delete >> ', () => {
    it('should delete artist', (done) => {
        request(app)
            .delete('/api/artist')
            .send( { filter: { _id: createdArtist._id }})
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                done();
            });
    });
});
