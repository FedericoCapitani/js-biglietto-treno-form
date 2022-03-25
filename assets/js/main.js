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
    // scrivere in output i dati generati dall'utente
    // nome
    const nome_passeggero = document.getElementById('nome');
    let nome = `<p>${full_name}</p>`;
    nome_passeggero.insertAdjacentHTML("afterend", nome);
    // offerta
    if (eta == "minorenne") {
        const offerta_min = document.getElementById('tariffa');
        let sconto_min = "<p>sconto minorenni</p>"
        offerta_min.insertAdjacentHTML("afterend", sconto_min);
    } else if (eta == "over65") {
        const offerta_over = document.getElementById('tariffa');
        let sconto_over = "<p>sconto Over 65</p>"
        offerta_over.insertAdjacentHTML("afterend", sconto_over);
    } else {
        const offerta = document.getElementById('tariffa');
        let sconto = "<p>Tariffa normale</p>"
        offerta.insertAdjacentHTML("afterend", sconto);
    }
    // carrozza
    
});

// cancellare i dati generati

let annula = document.getElementById('annulla');
annula.addEventListener("click", function() {
    
});
