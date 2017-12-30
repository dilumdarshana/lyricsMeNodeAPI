SETUP REST API:

How to initalize node app,

- npm install

Usage of special npm packages

- mongoose : mongodb library

- morgan : login system for http requests

- jsonwebtoken : JWT token for authentications

- gulp-mocha should sinon : For Unit Testing

- supertest gulp-env : For integration Testing

- gulp gulp-nodemon : Change monitor tools

Task monitoring system (using gulp):

Note: 
    This application will be connect with the mongodb database. Configurations can be change through the
    config.js
  
HOW TO RUN:

- gulp

USAGE:

- Login for administration
    - Method: POST
    - API: http://localhost:4000/api/auth/login

- Search lyrics for given keyword
    - Method: GET
    - API: http://localhost:4000/api/v1/lyrics/search/{$keyword}

- Get a single lyric
    - Method: GET
    - API: http://localhost:4000/api/v1/lyrics/{$lyric_id}

- Create a new lyric
    - Method: POST
    - API: http://localhost:4000/api/v1/lyrics

- Update a lyric
    - Method: PATCH
    - API: http://localhost:4000/api/v1/lyrics/{$lyric_id}

- Delete a lyric
    - Method: DELETE
    - http://localhost:4000/api/v1/lyrics/{$lyric_id}
    
UNIT TESTING and INTEGRATION TESTING (Using mocha):

- Pending