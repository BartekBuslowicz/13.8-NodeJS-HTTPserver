var http = require('http');
var fs = require('fs');
var server = http.createServer();
url = require('url');

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");

    if (request.method === 'GET' && request.url === '//') {
 		fs.readFile('./index.html', 'utf-8', function(err, data){
	    	response.write(data);
            response.end();
	})
    } else {
        var img = fs.readFileSync('./404.jpg');
	    response.writeHead(200, {'Content-Type': 'image/jpg' });
	    response.end(img, 'binary');
	} 
});
server.listen(1234);