
let cantidad,descuento,monto,totalPagar

//leer o asignar informcion
cantidad=Number(prompt("ingrese cantidad"))

//proceso
monto=cantidad * 2000000

if(cantidad<10) {
    alert("no tiene descuento")
} else if (cantidad>=10 && cantidad<20) {
    descuento=monto*0.1
} else if (cantidad>=20 && cantidad<30) {
    descuento=monto*0.2
} else if (cantidad>=30) {
    descuento=monto*0.4
}

totalPagar=monto-descuento;
alert("EL total a pagar es: " + totalPagar)