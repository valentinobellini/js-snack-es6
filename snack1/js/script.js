//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

const bicycleList = [
    {
        "name": "bicycle1",
        "weight": 7
    },

    {
        "name": "bicycle2",
        "weight": 8
    },

    {
        "name": "bicycle3",
        "weight": 5
    },

    {
        "name": "bicycle4",
        "weight": 6
    },

    {
        "name": "bicycle5",
        "weight": 4
    }
]

const display = document.getElementById("display")

let lowerWeight= 100;
let lowerWeightName= "";

for ( let i = 0; i < bicycleList.length; i++ ){
    if(bicycleList[i].weight < lowerWeight){
        lowerWeight = bicycleList[i].weight;
        lowerWeightName = bicycleList[i].name
    }
}

console.log(lowerWeight);
console.log(lowerWeightName);

display.innerHTML = `La bici ${lowerWeightName}, con il peso di ${lowerWeight} kg è quella più leggera`