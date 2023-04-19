
let edad

edad = Number(prompt("Ingrese la edad"))

if(edad<10){
    alert("Es niño (menor de 10 años)")
} else if (edad>=10 && edad<15){
    alert("Es preadolecente (entre 10 y 15 años)")
}else if (edad>=15 && edad<18){
    alert("Es adolecente (entre 15 y 18 años)")
}else if (edad>=18 && edad<50){
    alert("Es adulto (entre 18 y 50 años)")
}else if (edad>=50){
    alert("Es adulto mayor (mayor de 50 años)")
}