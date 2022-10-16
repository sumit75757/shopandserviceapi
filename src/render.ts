import express from "express";


const route = express();
route.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
export default route;