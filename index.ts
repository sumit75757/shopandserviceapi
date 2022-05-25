import http from 'http';
import apps from './src/app';


const port = process.env.PORT || 4000;

const httpServer = http.createServer(apps);


httpServer.listen(port);
