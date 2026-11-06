const http = require('http');
const port = 8000;

const teacher = [
    {
        name : "Rizky",
        class : "TI25E"
    },
    {
        name : "Warda",
        class : "TI25E"
    }
]

const server = http.createServer((req, res) =>{
    res.writeHead(200);
    res.write(JSON.stringify(teacher));
    res.end();
})

server.listen(port, ()=> {
    console.log(`server berjalan di port ${port}`);
})