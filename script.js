const invia = document.querySelector ('button');

invia.addEventListener ('click',function () {

    const km = parseFloat(document.querySelector("#km").value);
    const anni = parseInt(document.querySelector("#anni").value);
    const credenziali = document.querySelector("#credenziali").value;

    
    let prezzoPerKm = 0.1927


    if (anni < 18) {
        prezzoPerKm=prezzoPerKm * 0.8235
    }

    else if (anni > 64) {
        prezzoPerKm=prezzoPerKm * 0.4673
    }

    let prezzoTicket = (prezzoPerKm * km).toFixed(2);
        console.log (prezzoTicket);

})

// document.getElementById ("output").innerHTML = 'il costo del biglietto è di: ' + prezzoTicket