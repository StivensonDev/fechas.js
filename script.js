const fecha = new Date()
console.log(fecha.toLocaleDateString("es-GB"))

const nacimiento = new Date(1989, 1, 8)
console.log(nacimiento.toLocaleDateString("es-GB"))

const diferencia = fecha > nacimiento
console.log(diferencia) 

const diaNacimiento = nacimiento.getDate()
console.log(diaNacimiento)

const mesNacimiento = nacimiento.getMonth() +1
console.log(mesNacimiento)

const anyoNacimiento = nacimiento.getFullYear()
console.log(anyoNacimiento)
