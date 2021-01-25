//mes selecteur

var monbtna = document.getElementById('monbtna');
var monparapha = document.getElementById('monparapha');

var monbtnb = document.getElementById('monbtnb');
var monparaphb = document.getElementById('monparaphb');

var monbtnc = document.getElementById('monbtnc');
var monparaphc = document.getElementById('monparaphc');

var monbtnd = document.getElementById('monbtnd');
var liste = document.getElementById('liste');


//mes variables

var eleves = ["Roberto","Rajae","Dardan","Nadia","Jean-Michel","Ilias"]
var films = []

// mes evenements

monbtna.addEventListener("click", function(){
    monparapha.style.color = "green";
});

monbtnb.addEventListener("click", function(){
    monparaphb.style.color = "red";
});

monbtnc.addEventListener("click", function(){
    for (let eleve of eleves){
        monparaphc.innerHTML += "bravo " + eleve + "<br>";
    }
});

monbtnd.addEventListener("click", function(){
    

    fetch("https://ghibliapi.herokuapp.com/films")
    .then(reponse => reponse.json())
    .then(data => films = data);
   
    
    for (let film of films){
        liste.innerHTML += film.title +"<br>" ;
    };
    
});


