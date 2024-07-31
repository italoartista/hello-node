
import { createServer} from 'http';
import { head, main, bio, projects, contact, footer } from './templates.js';
const port = 3000;

const server = createServer((req, res) => {
    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(head + main + footer);
        res.end();
    } else if(req.url === '/bio' && req.method === 'GET'){ 
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(head + bio + footer);
        res.end();
    } else if(req.url === '/projects' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(head + projects + footer);
        res.end();
    } else if(req.url === '/contact' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(head + contact + footer);
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('<h1>Page not found</h1>');
        res.end();
    }
    
})

server.listen(port, ()=> {
   console.log(`Server is running on 127.0.0.1 and port ${port}`);
})