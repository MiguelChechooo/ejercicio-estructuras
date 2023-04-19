let edad1, edad2, nombre1, nombre2;

edad1 = Number(prompt("Ingrese la edad del hermano 1"))
edad2 = Number(prompt("Ingrese la edad del hermano 2"))
nombre1 = prompt("Ingrese el nombre del hermano 1")
nombre2 = prompt("Ingrese el nombre del hermano 2")

if(edad1>edad2){
    alert("El hermano mayor es:" + nombre1)
} else{
    alert("El hermano mayor es:" + nombre2)
}