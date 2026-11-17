const express = require('express');
const router = express.Router();

const paket = [
    {
        id: 1,
        nama: 'silver',
        harga: 10000000,
        kapasitas: [
            { jumlah: 100, biayatambah: 0 },
            { jumlah: 200, biayatambah: 5000000 },
            { jumlah: 300, biayatambah: 10000000 }
        ],
        fasilitas: [
            "Dekorasi Sederhana",
            "Catering",
            "Make up Pengantin",
            "Artis Dangdut"
        ]
    },
    {
        id: 2,
        nama: 'gold',
        harga: 15000000,
        kapasitas: [
            { jumlah: 100, biayatambah: 0 },
            { jumlah: 200, biayatambah: 5000000 },
            { jumlah: 300, biayatambah: 10000000 }
        ],
        fasilitas: [
            "Dekorasi Premium",
            "Catering",
            "Make up Pengantin",
            "Fotografer Profesional",
            "Artis Reality Club"
        ]
    },
    {
        id: 3,
        nama: 'platinum',
        harga: 20000000,
        kapasitas: [
            { jumlah: 100, biayatambah: 0 },
            { jumlah: 200, biayatambah: 5000000 },
            { jumlah: 300, biayatambah: 10000000 }
        ],
        fasilitas: [
            "Dekorasi Eksekutif",
            "Catering Hokben Mahal Bukan Kaleng Kaleng",
            "Make up Artist By Wardah",
            "MC Xaviera",
            "Fotografer & Videografer Profesional",
            "Artis Taylor Swift"
        ]
    }
];

const klien = [
    {
        id: 1,
        nama: "Muhammad Rizky Adianto",
        telepon: "085217847087",
        alamat: "Cicurug"
    },
    {
        id: 2,
        nama: "Warda Amalia",
        telepon: "085721295652",
        alamat: "Kadudampit"
    }
];

const vendor = [
    {
        id: 1,
        nama: "Studio WDFolkss",
        layanan: "Fotografi",
        telepon: "0812345678"
    },
    {
        id: 2,
        nama: "Dekorasi Mang Udin",
        layanan: "Dekorasi",
        telepon: "0821436587"
    },
    {
        id: 3,
        nama: "Catering Neng Anzel",
        layanan: "Catering",
        telepon: "0813245768"
    }
];

router.get('/paket', (req, res) => {
    res.json(paket);
});

// menampilkan paket yang dipilih dengan parameter ID dan jumlah tamu, lalu memunculkan nama paket, kapasitas, 
// total harga, dan seluruh fasilitasnya
router.get('/paket/:id/:jumlah', (req, res) => {
    const id = req.params.id;
    const jumlah = parseInt(req.params.jumlah);

    const data = paket.find(p => p.id == id);

    if (data) {
        for (let kap of data.kapasitas) {
            if (kap.jumlah == jumlah) {
                const total = data.harga + kap.biayatambah;

                let fasilitas = '';

                for (let i = 0; i < data.fasilitas.length; i++) {
                    fasilitas += `<li>${data.fasilitas[i]}</li>`;
                }

                return res.send(`
                    <h3>Paket: ${data.nama}</h3>
                    <p>Kapasitas: ${jumlah} orang</p>
                    <p>Total Harga: Rp${total}</p>
                    <h4>Fasilitas:</h4>
                    <ol>${fasilitas}</ol>
                `);
            }
        }

        res.send('Kapasitas tidak tersedia');
    } else {
        res.send('Paket tidak ditemukan');
    }
});

router.get('/klien', (req, res) => {
    res.json(klien);
});

//mencari data klien yang sudah ada di array of object
router.get('/klien/:id', (req, res) => {
    const id = req.params.id;
    const data = klien.find(k => k.id == id);

    if (data) {
        res.json(data);
    } else {
        res.send('Klien tidak ditemukan');
    }
});

router.post('/klien/:nama', (req, res) => {
    const nama = req.params.nama;
    res.send(`Berhasil menambahkan klien dengan Nama : ${nama}`)
});

router.put('/klien/:id/:nama', (req, res) => {
    const id = req.params.id;
    const nama = req.params.nama;
    res.send(`Data Klien dengan ID : ${id} Berhasil diperbarui dengan nama ${nama}`)
});

router.delete('/klien/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Berhasil menghapus klien dengan ID : ${id}`)
});

router.get('/vendor', (req, res) => {
    res.json(vendor);
});

module.exports = router;
