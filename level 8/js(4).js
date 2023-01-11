var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(request, response)
{
    var pathname = url.parse(request.url).C:\Users\jay83\Downloads\level 4 Grocery List.substring(1);
    console.log("Request for " + pasthname + " recieved.");
    fs.readFile(pathname,function(err, data)
    {
        if(err)
        {
            console.log(err);
            response.writeHead(404,{"Content-Type": "text/html"});
        }
        else
        {
            response.writeHead(200,{"Content-Type": "text/html"});
            response.write(data.toString())
        }
        response.end();
    });
}).listen(8081);

console.log("server running at http://127.0.01:8081/")