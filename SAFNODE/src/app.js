import express from 'express'
import cors from "cors";
import config from './config';
import productRoutes from "./routes/productsroutes";
import coloresroutes from "./routes/coloresroutes";
import diseñosroutes from "./routes/diseñosroutes";
import estilosroutes from "./routes/estilosroutes";
import marcasroutes from "./routes/marcasroutes";
import materialesroutes from "./routes/materialesroutes";
import proovedoresroutes from "./routes/proveedoresroutes";
import promocionesroutes from "./routes/promocionesroutes";
import tallasroutes from "./routes/tallasroutes";
import indexroutes   from "./routes/indexroutes";
import morgan from "morgan";

import path from "path";
const {join} = require('path')
//import bodyParser from "body-parser";


const app = express()

// settings
app.set('port', config.port)

//app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//app.use(bodyParser.json());
//app.use(bodyParser.productRoutes({extended:false}));
app.use(express.urlencoded({extended:false}));

//app.use('views', path.join(__dirname, ('views')));
app.use(express.json());

app.use('/static',express.static(join(process.cwd(),"public")));
// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    next();
  });
  
// Routes
//app.use("/api", productRoutes);
app.use( productRoutes);
app.use(coloresroutes);
app.use(diseñosroutes);
app.use(estilosroutes);
app.use(marcasroutes);
app.use(materialesroutes);
app.use(promocionesroutes);
app.use(tallasroutes);
app.use(indexroutes);
app.use(proovedoresroutes);
app.use(express.json());
app.use(express.static('public'));
export default app
