let produk = {
    barang: "Mouse Wireless",
    harga: 25000,
    stok: 5,
    diskon: 0.1,

    tampilkanproduk: function() {
        console.log("Nama Barang : " + this.barang);
        console.log("Harga : " + this.harga);
        console.log("Stok : " + this.stok);
    },

    hargadiskon: function() {
        console.log("Harga setelah diskon : " + (this.harga - (this.harga * this.diskon)));
    },

    beliproduk: function(jumlah) {
        if (this.stok <= 0) {
            console.log("Stok habis, anda tidak bisa membeli produk ini");
        } else if (jumlah > this.stok) {
            console.log("Stok tidak cukup, sisa stok tersisa " + this.stok);
        } else {
            this.stok = this.stok - jumlah;
            console.log("Selamat anda berhasil membeli " + jumlah + " " + this.barang);
            console.log("Sisa stok : " + this.stok);
        }
    }
};

produk.tampilkanproduk();
produk.hargadiskon();
produk.beliproduk(1);
produk.beliproduk(2);
