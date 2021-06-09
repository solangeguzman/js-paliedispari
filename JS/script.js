// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

/*

function palindroma(parola){
var stringa = parola.split('').reverse().join('');
return stringa;
}

if(parolaUser == palindroma(parolaUser)){
alert('è Palindroma');
}else{
  alert('non è');
}
*/

/*var nameUser = prompt('inserisci una parola')*/

var parola = 'anna';

var parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  
function invertiParola(str){
  var strInversa = str.split('').reverse().join('');  
  return strInversa;
}


// ------------------

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Infine, dichiariamo chi ha vinto.

/* DA RIVEDERE
var pariOdispari= prompt("Inserisci un numero da 1 ..a.. 5!");

function pariOdispari(num1)
{
    if(num1 % 2 === 0)
      return"pari";
    else
    return"dispari";
}

function myFunction() {
    var x = Math.floor((Math.random() * 5) + 1);
    document.getElementById("output").innerHTML = x;
  }
*/ 

   

  