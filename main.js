//ESERCIZIO 1

// window.addEventListener('load', function () {

//     function analizzaTesto(stringa) {

//         const stringaOriginale = stringa;
//         const minuscolo = stringaOriginale.toLowerCase();
//         const spazi = stringaOriginale.trim();
//         const contienePezziStringa = stringaOriginale.includes("IS") || stringaOriginale.includes("JavaScript");
//         const numeroCaratteri = stringaOriginale.length;

//         let invertiStringa = '';
//         for (let i = stringaOriginale.length - 1; i >= 0; i--) {
//             invertiStringa += stringaOriginale[i];
//         }

//         const risultato = {
//             originale: stringaOriginale,
//             minuscolo: minuscolo,
//             senzaSpazi: spazi,
//             numeroCaratteri: numeroCaratteri,
//             contieneJS: contienePezziStringa,
//             invertita: invertiStringa,
//         };

//         return risultato;
//     }

//     const risultato = analizzaTesto('Ecco il risultato!');
//     console.log(risultato);

// });



//ESERCIZIO 2

// window.addEventListener('load', function () {

//     function riempiArray(numeroElementi, valoreMinimo, valoreMassimo) {

//         const arrayVuoto = [];
//         for (let i = 0; i < numeroElementi; i++) {
//             const numeroRandom = Math.floor(Math.random() * (valoreMassimo - valoreMinimo + 1)) + valoreMinimo;
//             arrayVuoto.push(numeroRandom);
//         }

//         return arrayVuoto;

//     }


//     function contaPariDispari(conta) {
//         let pari = 0;
//         let dispari = 0;

//         for (let i = 0; i < conta.length; i++) {
//             const numero = conta[i];
//             if (numero / 2 === numero / 2) {
//                 pari++;
//             } else {
//                 dispari++;
//             }
//         }

//         return pari, dispari;
//     }


//     let arrayCasuale = riempiArray(10, 2, 50);
//     console.log(arrayCasuale);

//     let conteggio = contaPariDispari(arrayCasuale);
//     console.log(conteggio);

// });



//ESERCIZIO 3

// window.addEventListener('load', function () {

//     const bottone = document.getElementById('bottoneInvio');

//     bottone.addEventListener('click', function () {

//         const inputUtente = document.getElementById('testoUtente');
//         const testoInserito = inputUtente.value;

//         if (testoInserito === '') {
//             alert('Inserisci del testo prima di inviare!');
//         } else {
//             const body = document.body;
//             const nuovoP = document.createElement('p');
//             nuovoP.innerText += testoInserito;
//             body.appendChild(nuovoP);
//             inputUtente.value = '';
//         }

//     });

// });