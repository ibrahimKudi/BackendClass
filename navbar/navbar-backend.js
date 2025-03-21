const http = require('http')
const fs = require('fs')


const homePage = fs.readFileSync('./navbar.html')
const homeStyles = fs.readFileSync('./navbar.css')
const homeJs = fs.readFileSync('./navbar.js')
const aboutPage = fs.readFileSync('./about.html')
const aboutStyles = fs.readFileSync('./about.css')
const registerPage = fs.readFileSync('./register.html')
const registerStyle = fs.readFileSync('./register.css')
const registerJs = fs.readFileSync('./register.js')
const servicePage = fs.readFileSync('./service.html')
const aboutImg = fs.readFileSync('./image/about-img-1.png')



const server = http.createServer((req, res) => {
    const url = req.url
    if (url ==='/'){
        res.writeHead(200, {"content-Type": 'text/html'})
        res.write(homePage)
        res.end();
    }else if(url === "/navbar.css") {
        res.writeHead(200, {"content-Type": 'text/css'})
        res.write(homeStyles)
        res.end();
    }else if(url === "/navbar.js") {
        res.writeHead(200, {"content-Type": 'text/Js'})
        res.write(homeJs)
        res.end();
    }else if(url === "/about.html") {
        res.writeHead(200, {"content-Type": 'text/html'})
        res.write(aboutPage)
        res.end('<h1> welcome to About page</h1>');
    }else if(url === "/register.html") {
        res.writeHead(200, {"content-Type": 'text/html'})
        res.write(registerPage)
        res.end('')
    }else if(url === "/register.css") {
        res.writeHead(200, {"content-Type": 'text/css'})
        res.write(registerStyle)
        res.end();
    }else if(url === "/register.js") {
        res.writeHead(200, {"content-Type": 'text/js'})
        res.write(registerJs)
        res.end();
    }else if(url === "/about.css") {
        res.writeHead(200, {"content-Type": 'text/css'})
        res.write(aboutStyles)
        res.end();
    }else if(url === "/service.html") {
        res.writeHead(200, {"content-Type": 'text/html'})
        res.write(servicePage)
        res.end();
    }else if(url === "/about-img-1.png") {
        res.writeHead(200, {"content-Type": 'image/png'})
        res.write(aboutImg)
        res.end();
    }
    else{
        res.writeHead(404, {'content-Type': 'text/html'})
        res.end('<h1>Error page</h1>')
    }
    
})

port = 5000

server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})