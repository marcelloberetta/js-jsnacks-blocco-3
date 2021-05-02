var zucchine = [
   {
     varietà: 'milanese',
     peso: 3,
     lunghezza: 10
   },
   {
     varietà: 'romana',
     peso: 5,
     lunghezza: 20
   },
   {
     varietà: 'genovese',
     peso: 2,
     lunghezza: 17
   },
   {
     varietà: 'bolognese',
     peso: 2.5,
     lunghezza: 13
   },
   {
     varietà: 'fiorentina',
     peso: 3,
     lunghezza: 17
   },
   {
     varietà: 'barese',
     peso: 2,
     lunghezza: 32
   },
   {
     varietà: 'messinese',
     peso: 1,
     lunghezza: 20
   },
   
 ];
 
 var  small = [];
 var big = [];
 
 for (zucchina of zucchine) {
   if (zucchina.lunghezza <= 15) {
     small.push(zucchina);
   } else {
     big.push(zucchina);
   }
 }
 
 var totPeso = 0;
 
 for (var zucc of small) {
   totPeso += zucc.peso;
 }
 
 console.log('Il peso totale delle zucchine piccole è: ' + totPeso.toFixed(2) + 'kg');
 
 
 for (var zucc of big) {
   totPeso += zucc.peso;
 }
 
 console.log('Il peso totale delle zucchine grandi è: ' + totPeso.toFixed(2) + 'kg');