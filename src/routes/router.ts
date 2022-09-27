import express from 'express';
import controller from '../controllers';
const router = express.Router();

router.get('/ncm', controller.NcmController.getAllNcms);

export default router;
