window.addEventListener('load', function() {

    function analizzaTesto(stringa) {

      const spazi = stringa.trim();
      const minuscolo = spazi.toLowerCase();
      const contienePezziStringa = spazi.includes("IS") || spazi.includes("JavaScript");
      const numeroCaratteri = spazi.length;

      let invertiStringa = '';
      for (let i = spazi.length - 1; i >= 0; i--) {
        invertiStringa += spazi[i];
      }
    
  });
  