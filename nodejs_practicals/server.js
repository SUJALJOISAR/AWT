// Import the HTTP module
import http from 'http';

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with a status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Write a response to the client
  res.end('Hello, Node.js server!\n');
});

// Start the server and listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//just make one directory and one server.js file
//open terminal and cd that directory name and do npm init
//then in package.json file add "type":"module"
//then make one file server.js in that directory ,write server code  and write this node server.js in terminal