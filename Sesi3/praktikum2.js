const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;

function mulai() {
    console.log("Pilih Olahraga");
    console.log("1. Lari");
    console.log("2. Push Up");
    console.log("3. Plank");

    rl.question("Pilih Olahraga (1-3) : ", function(pilih) {
        rl.question("Berapa Menit : ", function(jawab) {

            let menit = Number(jawab);

            switch (pilih) {
                case "1":
                    total += menit * 60 / 5;
                    break;

                case "2":
                    total += menit * 200 / 30;
                    break;

                case "3":
                    total += menit * 5;
                    break;

                default:
                    console.log("Tidak ada pilihan");
            }

            rl.question("Olahraga lagi apa tidak? (y/n) ", function(jawab) {
                if (jawab == "y") {
                    mulai();
                } else {
                    console.log("Total Kalori : " + total + " Kalori");
                    rl.close();
                }
            });
        });
    });
}

mulai();