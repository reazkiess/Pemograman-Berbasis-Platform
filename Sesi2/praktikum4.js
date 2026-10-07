const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan umur Anda : ", function(umur){
    umur = parseInt(umur);

    console.log("Umur Anda : ", umur);
    console.log("Umur Anda Tahun Depan : ", umur + 1);

rl.close(); });