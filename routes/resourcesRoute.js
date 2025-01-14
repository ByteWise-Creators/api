import express from 'express';
import { getResources } from '../controllers/resourcesController.js';

const router = express.Router();

router.get('/resources/:id', getResources)

export default router;