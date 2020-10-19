const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../src/app')
const Note = require('../src/models/note')

const noteOneId = new mongoose.Types.ObjectId()

const noteOne = {
    _id: noteOneId,
    title: 'Test title',
    content: 'Test content',
    tags: ['tag 1', 'tag 2', 'tag 3']
}

beforeEach(async()=> {
    await Note.deleteMany()
    await new Note(noteOne).save()
})

test('should create a new note', async ()=> {
    await request(app).post('/notes')
    .send({ title: 'New Test note',
            content: 'New note content ',
            tags: ['tag 1', 'tag 2', 'tag 3']})
    .expect(201)
})

test('should NOT create a new note', async ()=> {
    await request(app).post('/notes').send({
            content: 'New note content ',
            tags: ['tag 1', 'tag 2', 'tag 3']
    }).expect(400)
})

test('Should get note by id', async () => {
    await request(app)
        .get('/notes/'+noteOneId)
        .expect(200)
})


test('Should delete note by id', async () => {
    await request(app)
        .delete('/notes/'+noteOneId)
        .expect(200)
})
