var motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Perez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
];

motoGP.tampilkan = function(){
    var hasil = {};
    
    this.forEach(function(gp){
        var negara = gp.winner.country;
        var nama = gp.winner.firstName + ' ' + gp.winner.lastName;
    
        if(!hasil[negara]) {
            hasil[negara] = {
                winningCircuits: [],
                totalWin: 0
            };
        }
    
        hasil[negara].winningCircuits.push({
            nama: nama,
            lokasi: gp.circuit + ', ' + gp.location
        });
    
        hasil[negara].totalWin++;
    });
    
    for (var negara in hasil) {
        console.log(negara);
        console.log('winningCircuits : ');

        hasil[negara].winningCircuits.forEach(function(data) {
            console.log("name : " + data.nama + ",");
            console.log("winLocation : " + data.lokasi + "\n");
        });

        console.log('totalWin : ' + hasil[negara].totalWin + "\n");
    }
};

motoGP.tampilkan();