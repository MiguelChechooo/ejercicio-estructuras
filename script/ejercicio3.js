
let nombre, Sbruto, deducciones, bonificacion, Sneto, nombree2, Sbruto2, deducciones2, bonificacion2, Sneto2

nombre = prompt("Ingrese su nombre")
Sbruto = Number(prompt("Ingrese su salario bruto"))
deducciones = Number(prompt("Ingrese el valor de sus deudas"))
bonificacion = Number(prompt("Ingrese el valor de su bonificacion"))
nombre2 = prompt("Ingrese su nombre")
Sbruto2 = Number(prompt("Ingrese su salario bruto"))
deducciones2 = Number(prompt("Ingrese el valor de sus deudas"))
bonificacion2 = Number(prompt("Ingrese el valor de su bonificacion"))

Sneto = Sbruto+bonificacion+deducciones
Sneto2 = Sbruto2+bonificacion2+deducciones2

if(Sneto<Sneto2){
    alert("El que mas salario neto tiene es: " + nombree2)
} else if(Sneto>Sneto2){
    alert("El que mas salario neto tiene es: " + nombre)
}