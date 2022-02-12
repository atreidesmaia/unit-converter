
/*length*/
let lengthEl = document.getElementById("length")
/*volume*/
let volumeEl = document.getElementById("volume")
/*mass*/
let massEl = document.getElementById("mass")

let theUnit = 0

let nMeter = 0
let nFeet = 0

let nLiter = 0
let nGallon = 0

function conversion(val){
    
    /*let val = document.querySelector("input").value*/
    
        theUnit = val 

        nFeet = Math.round((3.281 * val)*1000)/1000
        nMeter = Math.round((val/3.281)*1000)/1000

        nLiter = Math.round((3.785 * val)*1000)/1000
        nGallon = Math.round((val/3.785)*1000)/1000

        nPound = Math.round((2.205 * val)*1000)/1000
        nKilogram = Math.round((val/2.204)*1000)/1000



        lengthEl.textContent = theUnit + " meters = " + nFeet + " feet | " + theUnit + " feet = " + nMeter + " meters"
        volumeEl.textContent = theUnit + " liters = " + nGallon + " gallons | " + theUnit + " gallons = " + nLiter + " liters"
        massEl.textContent = theUnit + " kilograms = " + nPound + " pounds | " + theUnit + " pounds = " + nKilogram + " kilograms" 
}


