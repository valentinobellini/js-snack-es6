//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


//creo l'array di oggetti contenenti le squadre
const teamsList = [
    {
        "name": "team1",
        "pointsCount": 0,
        "foulsCount" : 0,
    },

    {
        "name": "team2",
        "pointsCount": 0,
        "foulsCount" : 0,
    },

    {
        "name": "team3",
        "pointsCount": 0,
        "foulsCount" : 0,
    },

    {
        "name": "team4",
        "pointsCount": 0,
        "foulsCount" : 0,
    },

    {
        "name": "team5",
        "pointsCount": 0,
        "foulsCount" : 0,
    },
]


//ciclo che itera ogni elemento(oggetto) dell'array e in ognuno socvracrive il valore di pointsCount e foulsCount con il valore randomico generato dalla funzione corrispondente
for (let i=0; i<teamsList.length; i++){
    teamsList[i].pointsCount = points(1,100)
    teamsList[i].foulsCount = fouls(1,40)
}

console.table(teamsList)


//crea un nuovo array contenente solo name e foulsCount
let newArray = teamsList.map(team => ({
    name: team.name,
    falli: team.foulsCount
}));

console.table(newArray);



//funzioni per la generazione casuale di un numero per punti e falli
function points(min, max) {
    return Math.floor(Math.random() * (max-min +1) + min);
}

function fouls(min, max) {
    return Math.floor(Math.random() * (max-min +1) + min)
}