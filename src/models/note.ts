import { Schema, Document } from "mongoose";

export {};
const mongoose = require('mongoose')

const noteSchema : Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        validate(value : String) {
            if (value.length > 99) {
                throw new Error('Title must be shorter than 100 characters')
            }
        }
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    tags: [{
        type: String
    }],
}, {
    timestamps: true
})

const Note = mongoose.model('Note', noteSchema )

module.exports = Note