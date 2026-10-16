let studentScore = [
    {
        name: "Andi",
        score: 90
    },
    {
        name: "Rudi",
        score: 80
    },
    {
        name: "Dira",
        score: 100
    },
];

function urutkanSiswa(data){
    data.sort(function(a, b){
        return b.score - a.score;
    });

    return data;
}

console.log(urutkanSiswa(studentScore))