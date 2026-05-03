const requestHandler = (req, res)=>{
    const url = req.url;
    const method = req.method
    if(url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><h1>Hello New Users!</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create</button></form></body>'
    );
    res.write('</html>');
    return res.end();
    }
    if(url === '/users'){
     res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>List of Users</title></head>');
    res.write(
      '<body><h1>List of Users</h1><ul><li>User1</li><li>User2</li></ul></body>'
    );
    res.write('</html>');
    return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', chunk =>{
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const newUser = parsedBody.split('=')[1];
            console.log(newUser);
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            return res.end();
        })
    }
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Not Found</title></head>');
    res.write('<body><h1>Page not found</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;