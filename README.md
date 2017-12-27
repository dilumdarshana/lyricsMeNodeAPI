SETUP REST API:

How to initalize node app,
- npm init - Will create basic setup including package.json
- npm install express morgan body-parser --save - Installing main tool express js.

- npm install --save mongoose node-restful body-parser - General extra modules that need for REST which doesn't come up with express

- npm install gulp-mocha should sinon --save - For Unit Testing

- npm install supertest gulp-env --save-dev - For integration Testing

Task monitoring system (using gulp):

Node change monitoring tool. Once do a change on the file system, app will restart automatically.

- npm install -g gulp
- npm install --save-dev gulp gulp-nodemon

Note: 
    - Assume that having a database call 'bookAPI' in mongo
    - Assume that mongo db has table call 'books'
    - All APIs can be test using Google Chrome 'Postman' extension
    - npm global installations will keep in '/usr/local/lib/node_modules' in Mac.
  
HOW TO RUN:

- gulp <task name> - If blank default will be executed

USAGE:

- GET (list out all the book OR list individual book)
    - API - http://localhost:5000/api/books
    - API - http://localhost:5000/api/books/57c68308c4dad892a2171b66
    - RESULT - {
              "_id": "57c68308c4dad892a2171b66",
              "title": "Node JS",
              "auther": "Rayan Dhal",
              "__v": 0,
              "read": true
            }
    
- POST (add new book to DB)
    - API - http://localhost:5000/api/books
    - POST DATA - {
                    "title": "Node JS",
                    "auther": "Rayan Dhal",
                    "read": true
                }
 
- PUT (Update existing book by primary key)
     - API - localhost:5000/api/books/57c68308c4dad892a2171b66
     - DATA - {
                "title": "Node JS Basics",
                "auther": "Rayan Dhal",
                "read": true
            }
     
- PATCH (Update existing book partially by primary key)
     - API - localhost:5000/api/books/57c68308c4dad892a2171b66
     - DATA - {
                "read": false
            }
     
- DELETE (delete a existing book by primary key)
    - API - localhost:5000/api/books/57c68308c4dad892a2171b66
    

UNIT TESTING and INTEGRATION TESTING (Using mocha):

- gulp test

PENDINGS:

- Simplify/enhance the REST using module 'node-restful'