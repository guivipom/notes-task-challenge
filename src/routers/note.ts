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

// // GET /tasks?completed=true
// // GET /tasks?limit=10&skip=20
// // GET /tasks?sortBy=createdAt:desc
// router.get('/tasks', auth, async (req, res) => {

//     const match = {}
//     const sort = {}

//     if ( req.query.completed){
//         match.completed = req.query.completed === 'true'
//     }

//     if( req.query.sortBy){
//         const parts = req.query.sortBy.split(':')
//         sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
//     }

//     try {
//         await req.user.populate({
//             path: 'tasks',
//             match,
//             options: {
//                 limit: parseInt(req.query.limit),
//                 skip: parseInt(req.query.skip),
//                 sort  
//             }
//         }).execPopulate()
//         res.send(req.user.tasks)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

router.get('/notes/:id', async (req, res) => {
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

router.patch('/notes/:id', async (req, res) => {
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

router.delete('/notes/:id', async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({ _id: req.params.id})

        if (!note) {
            res.status(404).send()
        }

        res.send(note)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router