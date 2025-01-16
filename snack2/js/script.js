//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



const teamsList = [
    {
        "name": "team1",
        "pointsCount": 100,
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

let points = Math.floor(Math.random() * 50) +1;

let fouls = Math.floor(Math.random() * 50) +1;

teamsList[i].pointsCount = points

console.log(teamsList[i].pointsCount);










// for ( let key in teamsList[i]){
    
// }





// console.log(points);



// const display = document.getElementById("display")

// display.innerHTML = bicycleList[4].name