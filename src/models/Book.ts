import mongoose, { Schema, model } from 'mongoose';

// se crear la interface Book
export interface Book extends mongoose.Document {
  title_book: string;
  author: string;
  isbn: string;
}

// se crea el schema para Book
const BookSchema = new Schema({
  title_book: String,
  author: String,
  isbn: String,
});

// Por ultimo se debe  crear el modelo:
export default model<Book>('Book', BookSchema);
