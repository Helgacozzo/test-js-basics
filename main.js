window.addEventListener('load', function() {

    function analizzaTesto(stringa) {
      
      const stringaOriginale = stringa;
      const minuscolo = stringaOriginale.toLowerCase();
      const spazi = stringaOriginale.trim();
      const contienePezziStringa = stringaOriginale.includes("IS") || stringaOriginale.includes("JavaScript");
      const numeroCaratteri = stringaOriginale.length;

      let invertiStringa = '';
      for (let i = stringaOriginale.length - 1; i >= 0; i--) {
        invertiStringa += stringaOriginale[i];
      }

      const risultato = {
        originale: stringaOriginale,
        minuscolo: minuscolo,
        senzaSpazi: spazi,
        numeroCaratteri: numeroCaratteri,
        contieneJS: contienePezziStringa,
        invertita: invertiStringa,
      };
      
      return risultato;
    }
  
    const risultato = analizzaTesto('Ecco il risultato!');
    console.log(risultato);
    
  });