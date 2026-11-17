const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`<h2>Selamat Datang di Website Wedding Organizer kami</h2>

        <h3>Anggota Kelompok 3 Sebagai WO :</h3>
        <ul>
            <li>Muhammad Rizky Adianto - Ketua Pelaksana</li>
            <li>Rasya Adittia - Perencana Pernikahan</li>
            <li>Muhammad Rafly Awaludin - Kordinator Dekorasi</li>
            <li>Anzelita Anggraeni - Kordinator Konsumsi</li>
        </ul>
        `);
});

app.use('/wedding', require('./wedding'));

app.listen(3000, () => console.log('Server berjalan di http://localhost:3000'))