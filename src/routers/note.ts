import express, { Request, Response, } from "express";
const Note = require('../models/note')
const router = express.Router()

router.post('/notes', async (req : Request, res : Response) => {
    const note: any = new Note({
        ...req.body })

    try {
        await note.save()
        res.status(201).send(note)
    } catch (e : any) {
        res.status(400).send(e)
    }
})

router.get('/notes' , async (req : Request, res : Response) => {
    try {
        const notes :any = await Note.find({})
        res.send(notes)
    } catch (e) {
        res.status(500).send()
    }

})

router.get('/notes/:id', async (req : Request, res : Response) => {
    const _id : String = req.params.id

    try {
        const note: any = await Note.findOne({ _id })

        if (!note) {
            return res.status(404).send()
        }

        res.send(note)
    } catch (e : any) {
        res.status(500).send()
    }
})

router.patch('/notes/:id', async (req : Request, res : Response) => {
    const updates : String[] = Object.keys(req.body)
    const allowedUpdates : String[] = ['title', 'content']
    const isValidOperation : Boolean = updates.every((update : String) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const note : any = await Note.findOne({ _id: req.params.id})

        if (!note) {
            return res.status(404).send()
        }

        updates.forEach((update : any) => note[update] = req.body[update])
        await note.save()
        res.send(note)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/notes/:id', async (req : Request, res : Response) => {
    try {
        const note : any = await Note.findOneAndDelete({ _id: req.params.id})

        if (!note) {
            res.status(404).send()
        }

        res.send(note)
    } catch (e) {
        res.status(500).send()
    }
})

router.delete('/notes', async (req : Request, res : Response) => {
    try {
        const note : any = await Note.deleteMany({})
        if (!note) {
            res.status(404).send()
        }
        res.send(note)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router