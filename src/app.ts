import express from "express";
import morgen from 'morgan';
import bodyParser from 'body-parser';
import mongoos from 'mongoose';
import auth from "./auth/auth";
import cors from "cors"; 
import cat  from "./addCategory/addCategory";
import authChack from "./Middleware/chackauth";
import product from "./product/product";
const app = express();
require("dotenv").config();

const database:any = process.env.MONGO_URL;
console.log(database);

mongoos.connect(database)
    .then(
        (res:any) => {
            console.log('database conected');
            console.log("http://localhost:" + process.env.PORT + "/");
        }
    ).catch(
        (err:any) => {
            console.log("database not conected", err);
        }
    )

app.use(morgen('dev'))


app.use(bodyParser.json())
app.use(cors({
    origin: "*"
}))

app.all('*', (req:any, res:any, next:any) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
///////////// routes////////////////

app.use('/api/auth', auth)
app.use('/api/catogory', cat)
app.use('/api/product',product)
app.use('/uplode',express.static('uplode'));

app.use( authChack, (res,req,next)=>{

    const err:any = new Error('404 Not Found');
    err.status = 404;
    next();
})

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
