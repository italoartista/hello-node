// exportação nomeada como default
import { default as prod, users } from './api.js';


import { createServer} from 'http';

const port = 5002;

const server = createServer((req, res) => {
    
    if(req.url === '/produtos' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        res.write(JSON.stringify(prod));
        res.end();
    } else if (req.url === '/users' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        res.write(JSON.stringify(users));
        res.end();
    }
    
})

server.listen(port, ()=> {
   console.log(`Server is running on 127.0.0.1 and port ${port}`);
})