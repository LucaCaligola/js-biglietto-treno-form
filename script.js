const km = parseFloat(document.querySelector('km'));
const anni = parseInt(document.querySelector('anni'));
const invia = document.querySelector ('button');





let prezzoPerKm = 0.1927


if (anni < 18) {
    prezzoPerKm=prezzoPerKm * 0.8235
}

else if (anni > 64) {
    prezzoPerKm=prezzoPerKm * 0.4673
}

let prezzoTicket = (prezzoPerKm * km).toFixed(2);

invia.addEventListener ('click',function () {
    console.log (prezzoTicket);
    
}

)