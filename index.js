const http = require('http');
const url = require('url');
const { getDate } = require('./modules/utils');
const { greetMessage } = require('./lang/en/en');

http.createServer(function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;

    // ChatGPT was used to generate the following if statement
    if (pathname === '/COMP4537/labs/3/getDate' && query.name) {
        const name = query.name;
        const currentTime = getDate();
        const message = `<h1 style="color: blue;">${greetMessage(name)} ${currentTime}</h1>`;
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(message);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Add a name to the query string. Example: http://localhost:8000/COMP4537/labs/3/getDate?name=Victor Vasconcellos');
    }
}).listen(process.env.PORT || 8000);

console.log('Server running and listening on port 8000. Access http://localhost:8000/ in your browser.');