import { Request, Response } from 'express';

class IndexController {
  public index(req: Request, res: Response) {
    res.render('index', { titlePage: 'Welcome to Books App' });
  }
}

export const indexController = new IndexController();
// export default indexController;
