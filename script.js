// Appel de mes variables
let nom = document.getElementById('nom');
let taille = document.getElementById('taille');
let poid = document.getElementById('poid');
let sexe = document.getElementById('sexe');
let couleurCheveux = document.getElementById('couleur-cheveux');
let tableau = document.getElementById('tableau');



// Ecouteurs
tableau.addEventListener('click', updatePage);



//Promesses
fetch("https://swapi.dev/api/people/").then((data)=> {
    data.json().then((data) => {
        tableau = data;
        console.log(tableau.results);
    })
})



function updatePage(){

    function random(min, max)
    {
        return Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    }

    let id = random(0,10);


    nom.innerHTML = tableau.results[id]["name"];
    taille.innerText = tableau.results[id]["height"] + " cm";
    poid.innerText = tableau.results[id]["mass"] + " kg";
    sexe.innerText = tableau.results[id]["gender"];
    couleurCheveux.innerHTML = tableau.results[id]["hair_color"];
}


