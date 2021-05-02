var zucchina = [
   {varietà: 'milanese',
   peso: 1,
   lunghezza: 10,
 },
   {varietà: 'romana',
   peso: 3,
   lunghezza: 5,
 },
   {varietà: 'fiorentina',
   peso: 2,
   lunghezza: 15,
 },
   {varietà: 'veneta',
   peso: 5,
   lunghezza: 13,
 },
   {varietà: 'genovese',
   peso: 1,
   lunghezza: 12,
 },
   {varietà: 'torinese',
   peso: 4,
   lunghezza: 7,
   }
 ];
 
 var sum = 0;
 for( var chiave of zucchina){
   console.log(chiave.peso)
   sum += chiave.peso;
 }
 
 console.log("La somma è : " + sum)