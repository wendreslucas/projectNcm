import express from 'express';
import controller from '../controllers';
const router = express.Router();

router.get('/ncms', controller.NcmController.getAllNcms);
router.post('/ncm', controller.NcmController.createNcm);
router.delete('/ncm/:id', controller.NcmController.deleteNcm);

export default router;
