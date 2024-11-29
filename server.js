const http = require('http');

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow cross-origin requests (optional)

  // Check the request URL and method
  if (req.url === '/api' && req.method === 'GET') {
    // Response JSON object
    const response = {
      message: 'Welcome to the API!',
      status: 200,
    };

    // Send the JSON response
    res.writeHead(200);
    res.end(JSON.stringify(response));
  } else {
    // Handle invalid routes
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not Found', status: 404 }));
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});
