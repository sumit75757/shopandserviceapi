import express from "express";

const route = express();

route.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
});

export default route