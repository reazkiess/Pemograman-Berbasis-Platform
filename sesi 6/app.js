const express = require('express');
const app = express();

const siswa = {
    name: "rizky",
    kelas: "ti25e",
    matkul: "pbp"
}

app.get('/', (req,res) => {
    res.send('Hello Express! Server berjalan dengan cepat');
});

app.get('/data', (req, res) => {
    res.json(siswa)
});

app.listen(8000, () => console.log('server express berjalan di  http://localhost:8000'));