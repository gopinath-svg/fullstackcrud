import express from 'express'
import { movieCreate, movieDelete, movieIndex, movieUpdate } from '../controllers/movie.controller.js';
const router = express.Router();

//R - for reading
router.get('/',movieIndex)

//c - for creating

router.post('/',movieCreate)

//u-for update
router.put('/:id',movieUpdate)

//D - for delete
router.delete('/:id',movieDelete)

export default router;