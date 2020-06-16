import express from 'express';
import exphbs from 'express-handlebars';

// se agregan handlebars@handlebars/allow-prototype-access
// para permitir el envio de objetos a las plantillas
import Handlebars from 'handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';

import path from 'path';

// Import Routes
import IndexRoutes from './routes/index';
import BooksRoutes from './routes/books';

/* intiallitations */
const app = express();
import './database';

/* Settings server */
app.set('port', process.env.PORT || 3000);

// indicar a node  donde estan mi vistas usando el modulo path
app.set('views', path.join(__dirname, 'views')); // une 2 rutas en una sola

// configurar y definir  el mototr de plantillas '.hbs'
app.engine(
  'hbs',
  exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./libs/helpers'),
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);

// utilisar el motor de plantillas ya configurado
app.set('view engine', 'hbs');

/*Middleware*/
//express.json()  entender los json que llegan al servidor
app.use(express.json());

//  entender los datos enviado desde un formulario html
app.use(express.urlencoded({ extended: false }));

/*Routes*/
app.use('/', IndexRoutes);
app.use('/books', BooksRoutes);

/*Static Files*/
app.use(express.static(path.join(__dirname, 'public')));

/* Staring the server*/
app.listen(app.get('port'), () => {
  console.log(`serve on port ${app.get('port')}`);
});
