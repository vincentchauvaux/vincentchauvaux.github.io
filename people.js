

var monbtne = document.getElementById('monbtnd');
var people = document.getElementById('people');

var gens = []

monbtne.addEventListener("click", function(){
    

    fetch("https://ghibliapi.herokuapp.com/people")
    .then(reponse => reponse.json())
    .then(data => gens = data);
   
    
    for (let gen of gens){
        people.innerHTML += gen.name +"<br>" ;
    };
    

});