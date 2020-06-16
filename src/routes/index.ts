import { indexController } from './../controllers/index.controller';
import { Router, Request } from 'express';

const router: Router = Router();

router.get('/', indexController.index);

export default router;
