const express = require('express');
const morgan = require('morgan');
const helmet = require("helmet");
const cors = require('cors');
const rfs = require('rotating-file-stream');
const path = require('path')
const dotenv = require('dotenv');
const connect = require('./src/configs/db.confg');
const route = require('./src/routers/router');
dotenv.config();

connect.connectDatabase();

const port = process.env.port ||  3000;

const isProduction  = process.env.NODE_ENV ==="production"

const app = express();

app.use(helmet());

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d', 
    path: path.join(__dirname,'log')
});

//app.use(morgan('tiny')) ;
app.use( isProduction ? morgan('combined',{stream:accessLogStream}):morgan("dev") );

app.use(cors());

// app.get('/products/:id', cors(), function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for a Single Route'})
//   })

app.use(express.json()) ; /// chi dung du lieu json

route(app);

app.listen(port , ()=>{
    console.log(`Listener connect port: ${port}`);
});

