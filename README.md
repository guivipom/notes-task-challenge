# notes-task-lendis


On this repository I created a small notepad application for NodeJS with Typescript , that contains the next endpoints:

 * Create a note
 * List notes
 * Update a note
 * Delete a note
 * Delete multiple notes at the same time

Other technologies I used are Mongoose and MongoDB to maintaind and update a database, Express to create the server and JEST to add some basic endpoint testing.

## Prerequistes

As a prerequisite you will need to download and install [git](https://git-scm.com/downloads)  [Node.js](https://git-scm.com/downloads) and set up a [MongoDB] database.

## Local Installation

After you cloned the git repository, go inside the main project folder and execute the next command to install all the necessary dependencies. 

```bash
npm install
```

## Local Usage

After all the dependencies have been installed you can run your server locally by running:
    npm run dev

# Note API Usage

Usage of the TASK API

## Create Note

### Request

`POST /notes`

    curl --location --request POST 'localhost:3000/notes' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "title": "New note!",
        "content": " Content of the note",
        "tags":  ["express","Node","Typescript","MongoDB"]
}'

### Response

    HTTP/1.1 201 Created
    Content-Type: application/json
    {
    "note": {
        "title": 0,
        "_id": "5f7b4d2dbcea25460c7a1567",
        "content": "James33",
         "tags":  ["express","Node","Typescript","MongoDB"]
        "createdAt": "2020-10-19T16:43:25.795Z",
        "updatedAt": "2020-10-19T16:43:25.795Z",
        "__v": 0
        }
    }

## Get List of notes

### Request

`GET /notes`

    curl --location --request GET 'localhost:3000/notes'

### Response

    HTTP/1.1 200 OK
    Content-Type: application/json
    [
        { note 1 },
        { note 2 }
    ],
    

## Get note by id

### Request

`GET /notes/:id`

    curl --location --request GET 'localhost:3000/notes/5f8d7f39702bce2c1cc720a0'

### Response

    HTTP/1.1 200 OK
    Content-Type: application/json
    {
        "_id": "5f8d7f39702bce2c1cc720a0",
        "title": "do yoga",
        "content": "Content of the first note",
        "tags": [],
        "createdAt": "2020-10-19T11:57:45.353Z",
        "updatedAt": "2020-10-19T11:57:45.353Z",
        "__v": 0
    }

## Update note

### Request

`PATCH /notes/:id`

    curl --location --request PATCH 'localhost:3000/notes/5f8d7f39702bce2c1cc720a0' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "title": "do yoga 3",
        "content": " Content of the first note 2"
    }'
### Response

    HTTP/1.1 200 OK
    Content-Type: application/json
    {
        "_id": "5f8d7f39702bce2c1cc720a0",
        "title": "do yoga 3",
        "content": "Content of the first note 2",
        "tags": [],
        "createdAt": "2020-10-19T11:57:45.353Z",
        "updatedAt": "2020-10-19T12:09:00.250Z",
        "__v": 0
    }

## Delete note

### Request

`DELETE /notes/:id`

    curl --location --request DELETE 'localhost:3000/notes/5f8d7f39702bce2c1cc720a0'
    
### Response

    HTTP/1.1 200 OK
    Content-Type: application/json
    {
        "_id": "5f8d7f39702bce2c1cc720a0",
        "title": "do yoga 3",
        "content": "Content of the first note 2",
        "tags": [],
        "createdAt": "2020-10-19T11:57:45.353Z",
        "updatedAt": "2020-10-19T12:09:00.250Z",
        "__v": 0
    }

## Delete note

### Request

`DELETE /notes`

    curl --location --request DELETE 'localhost:3000/notes'
    
### Response

    HTTP/1.1 200 OK
    Content-Type: application/json
    {
        "n": 2,
        "ok": 1,
        "deletedCount": 2
    }