import express from 'express';
import controller from '../controllers';
const router = express.Router();

router.get('/ncms', controller.NcmController.getAllNcms);

export default router;
