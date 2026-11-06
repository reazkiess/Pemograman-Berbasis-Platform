// // const http =  require('http');

// // const server = http.createServer((req, res)=>{
// //     const data = {
// //         nama: "Muhammad Rizky Adianto",
// //         matkul: "Pemograman Berbasis Platform",
// //         server: "Node.js",
// //     }
// //     res.writeHead(200, {'Content-Type': 'application/json'});
// //     res.end(JSON.stringify(data));
// // });

// // server.listen(8000, () => {
// //     console.log('Server JSON berjalan di http://localhost:8000');
// // });

// const http = require('http');
// const port = 8000;

// http.createServer((req, res) => {
//     res.writeHead(200);
//     if(req.url == '/'){
//         res.write('<html><body><h2>Anda Berada Pada Halaman index</h2></body></html>');
//     }
//     else if(req.url == '/siswa'){
//         res.write('<html><body><h2>Anda Berada Pada Halaman Siswa</h2></body></html>');
//     }
//     else if(req.url == '/dosen'){
//         res.write('<html><body><h2>Anda Berada Pada Halaman Dosen</h2></body></html>');
//     }
//     else if(req.url == '/admin'){
//         res.write('<html><body><h2>Anda Berada Pada Halaman Admin</h2></body></html>');
//     }
//     else{
//         res.write('<html><body><h2>Page Not Found (404) </h2></body></html>');
//     }
// }).listen(port, () => {
//     console.log(`Server is listening on port ${port}`)
// })