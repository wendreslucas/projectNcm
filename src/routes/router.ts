import express from 'express';
import controller from '../controllers';
const router = express.Router();

router.get('/ncms', controller.NcmController.getAllNcms);
router.post('/ncm', controller.NcmController.createNcm);

export default router;
