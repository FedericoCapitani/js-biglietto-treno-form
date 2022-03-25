// prendere i dati in input dall'utente
var full_name;
var km_da_percorre;
var eta;

const tariffa = 0.21;
let prezzo

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
    const n_carrozza = document.getElementById('n_carrozza')
    const numero_carrozza = Math.ceil(Math.random() * 20);
    let carrozza = `<p>${numero_carrozza}</p>`;
    n_carrozza.insertAdjacentHTML("afterend", carrozza);

    // codice CP
    const n_codice = document.getElementById('codice_passeggero')
    const numero_codice = Math.ceil(Math.random() * 99999);
    let codice = `<p>${numero_codice}</p>`;
    n_codice.insertAdjacentHTML("afterend", codice);

    // prezzo biglietto
    if (eta == "minorenne") {
        prezzo = (((km_da_percorrere * tariffa) / 5 ) * 4).toFixed(2);
        const prz_biglietto = document.getElementById('prezzo');
        let prezzo_biglietto = `<p>${prezzo}€ </p>`;
        prz_biglietto.insertAdjacentHTML("afterend", prezzo_biglietto);
    } else if (eta == "over65") {
        prezzo = (((km_da_percorrere * tariffa) / 5 ) * 3).toFixed(2);
        const prz_biglietto = document.getElementById('prezzo');
        let prezzo_biglietto = `<p>${prezzo}€ </p>`;
        prz_biglietto.insertAdjacentHTML("afterend", prezzo_biglietto);
    } else {
        prezzo = (km_da_percorrere * tariffa).toFixed(2);
        const prz_biglietto = document.getElementById('prezzo');
        let prezzo_biglietto = `<p>${prezzo}€ </p>`;
        prz_biglietto.insertAdjacentHTML("afterend", prezzo_biglietto);
    }
});

// cancellare i dati generati

let annula = document.getElementById('annulla');
annula.addEventListener("click", function() {
    
});
