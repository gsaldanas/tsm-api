import express from 'express';
const router = express.Router();

import {
  getAllSingers,
  getSingerById,
  postSinger,
  updateSinger,
  deleteSinger,
} from '../controllers/singerController.js';

//ROUTES
// GET ALL
router.get('/', getAllSingers);

// //GET DEELNEMER
// router.get('/?deelnemer=', getSingerByQuery);

// GET BY ID
router.get('/:id', getSingerById);

// POST
router.post('/', postSinger);
// PUT(UPDATE)
router.put('/:id', updateSinger);

// DELETE BY ID
router.delete('/:id', deleteSinger);

export default router;
