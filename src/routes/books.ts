import { booksController } from './../controllers/books.controller';
import { Router, Request } from 'express';

const router: Router = Router();

router.get('/', booksController.indexBooks);
router.get('/add', booksController.renderFormBooks);
router.post('/add', booksController.saveBook);

export default router;
