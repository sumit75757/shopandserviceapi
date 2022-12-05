import http from 'http';
import apps from './src/app';
require("dotenv").config();

const port = process.env.PORT || process.env.PORT;

const httpServer = http.createServer(apps);
