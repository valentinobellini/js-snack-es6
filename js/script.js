//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

const bicycleList = [
    {
        "name": "bicycle1",
        "peso": "7"
    },

    {
        "name": "bicycle2",
        "weight": "8"
    },

    {
        "name": "bicycle3",
        "weight": "5"
    },

    {
        "name": "bicycle4",
        "weight": "6"
    },

    {
        "name": "bicycle5",
        "weight": "4"
    }
]

const display = document.getElementById("display")

display.innerHTML = bicycleList[4].name