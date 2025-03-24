const http = require('http')
const fs = require('fs')

const intro = fs.readFileSync('./intro.html')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'connection-Type': 'text/html'})
    res.end(intro);
})

const port = 5000

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})