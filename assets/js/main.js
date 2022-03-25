// prendere i dati in input dall'utente
var full_name;
var km_da_percorre;
var eta;

let genera = document.getElementById('genera');
genera.addEventListener("click", function() {
    full_name = document.getElementById('full_name').value;
    km_da_percorrere = document.getElementById('km_da_percorrere').value;
    eta = document.getElementById('età').value;
    console.log(full_name, km_da_percorrere, eta);

    
});

// cancellare i dati generati

let annula = document.getElementById('annulla');
annula.addEventListener("click", function() {
    
});
