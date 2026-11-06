
const express = require('express');
const app = express();

const port = 8000;

app.get('/', (req, res) => {
    res.send('Selamat datang di server Kelompok Kamiiiiiiiiiii');
});

app.get('/info', (req, res) => {
    res.send(`Server dijalankan pada: ${new Date()}`);
});

app.get('/anggota', (req, res) => {
    res.json([
        'Muhammad Rizky Adianto',
        'Rafly Awaludin',
        'Rasya Adittia',
        'Anzelita Anggraeni'
    ]);
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
});
