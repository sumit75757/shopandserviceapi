import express from "express";
import morgen from 'morgan';
import bodyParser from 'body-parser';
// const produst = require('./api/routes/products');
const app = express();
import mongoos from 'mongoose';
// const user = require("./api/routes/users");
import auth from "./auth/auth";
// const todos =require('./api/routes/todo')
// const email = require("./api/routes/send_email");
// const feed = require("./api/routes/postRoute/post");
import cors from "cors";
// const jwt = require('jsonwebtoken')
// const authchack = require("./api/Middleware/chack-auth")
// const likeuser= require('./api/routes/postRoute/like')
// const comment = require('./api/routes/postRoute/comment')
// tslint:disable-next-line: 
require("dotenv").config();


import { PORT, MONGODB_URI } from "./configs/config";

// const { API_ENDPOINT_NOT_FOUND_ERR, SERVER_ERR } = require("./errors");

mongoos.connect(MONGODB_URI)
    .then(
        (res:any) => {
            // tslint:disable-next-line: no-console
            console.log('database conected');
            // tslint:disable-next-line: no-console
            console.log("http://localhost:" + PORT + "/");
        }
    ).catch(
        (err:any) => {
            // tslint:disable-next-line: no-console
            console.log("database not conected", err);
        }
    )
app.use(morgen('dev'))


// app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(cors({
    origin: "*"
}))

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});




// app.use((res,req,next)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if (req.method === "OPTIONS") {
//       res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//       return res.status(200).json({});
//     }
//     next();
// }
// )
///////////// routes////////////////
// app.use('/api', jwt({
//     secret: config.sessionSecretKey,
//     fail: function (req, res) {
//       if (!req.headers.authorization){
//         res.send(401, 'missing authorization header');
//       }
//       res.send(401);
//     }
//   }));
app.use('/api/auth', auth)
// app.use('/email', email)
// app.use('/api/products', produst);
// app.use('/api/user', user);
// app.use('/api/todo', todos);
// app.use('/api/feed', feed);
// app.use('/api/feed/like',likeuser)
// app.use('/api/feed/comment',comment)
// app.use('/uplode',express.static('uplode'));
// app.use('/feeds',express.static('feeds'));


// app.use( authchack, (res,req,next)=>{

//     const err = new Error('404 Not Found');
//     err.status = 404;
//     next(err);
// })

// app.use((res,req,next)=>{
//     const err = new Error('404 Not Found');
//     err.status = 404;
//     next(err);
// })

app.use((err:any, req:any, res:any, next:any) => {
    // tslint:disable-next-line: 
    console.log(err);
    res.status(err.status || 500)

    res.json(
        {
            error: {
                message: err.message
            }
        }
    )

});
export default app


 // mongodb+srv://Sumitpatel:<password>@cluster0.nt5gi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
