import { Request, Response } from 'express';

import BookModel, { Book } from '../models/Book';

class BooksController {
  public async indexBooks(req: Request, res: Response) {
    const booksArray: Book[] = await BookModel.find();
    let falgBooks = booksArray ? true : false;
    console.log('Si hay libros', falgBooks);
    res.render('books/index', {
      titlePage: 'Books',
      books: booksArray,
      flagBk: falgBooks,
    });
  }

  public renderFormBooks(req: Request, res: Response) {
    res.render('books/add', {
      titlePage: 'agregar un libro',
    });
  }

  public async saveBook(req: Request, res: Response) {
    console.log(req.body);

    const { title_book, author, isbn } = req.body;
    const book: Book = new BookModel({ title_book, author, isbn });
    await book.save();
    res.redirect('/books');
  }
}

export const booksController = new BooksController();
