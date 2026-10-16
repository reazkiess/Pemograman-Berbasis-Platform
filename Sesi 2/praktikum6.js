const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukan Nama Mahasiswa : ", function(nama){
    rl.question("Masukan Nilai Tugas : ", function(nilaiT){

        nilaiT = parseFloat(nilaiT.replace(',', '.'));
        
        rl.question("Masukan Nilai UTS : ", function(nilaiUts){
            nilaiUts = parseFloat(nilaiUts.replace(',', '.'));
            
            rl.question("Masukan Nilai UAS : ", function(nilaiUas){
                nilaiUas = parseFloat(nilaiUas.replace(',', '.'));

                const bobotT = 0.30;
                const bobotUts = 0.30;
                const bobotUas = 0.40;

                if (isNaN(nilaiT) || isNaN(nilaiUts) || isNaN(nilaiUas)) {
                    console.log("Pastikan yang dimasukan adalah ANGKA");
                } else {
                    const nilaiAkhir = (nilaiT * bobotT) + (nilaiUts * bobotUts) + (nilaiUas * bobotUas);

                    if (nilaiAkhir >= 90){
                        grade = "A"
                    }else if(nilaiAkhir >= 80){
                        grade = "B"
                    }else if(nilaiAkhir >= 70){
                        grade = "C"
                    }else if(nilaiAkhir >= 60){
                        grade = "D"
                    }else if(nilaiAkhir >= 10){
                        grade = "E"
                    }
                    
                    console.log("Nama Mahasiswa :", nama);
                    console.log("Nilai Tugas    :", nilaiT);
                    console.log("Nilai UTS      :", nilaiUts);
                    console.log("Nilai UAS      :", nilaiUas);
                    console.log("Nilai Akhir    :", nilaiAkhir.toFixed(2));
                    console.log("Grade          :", grade);
                    
                }

                rl.close();
            });
        });
    });
});