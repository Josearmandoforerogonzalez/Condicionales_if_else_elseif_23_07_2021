
let nombre = prompt("hola, cual es tu nombre?");
let numero = prompt(`
ingresa el numero correspondiente a donde deseas ingresar
     
     1. ingreso por reconocimiento de voz
     2. ingreso por contraseña
     3. reconocimiento dactilar 
`);


if(numero == 1){
    alert(`
Bienvenido 
has escogido ingreso por reconocimiento de voz
como no esta disponible el uso del microfono ingresa la contraseña que esta en la siguiente opcion
    `);
    let contraseña = parseInt(prompt(`
     ingresa la contraseña 
     "la contraseña es 123"`))
     if (contraseña == 123) {
         alert(`
         ${nombre} has ingresado correctamente
         `);
    
     } else {
     alert(`opcion no reconocida`);
    
     } ;


   
};




if(numero == 2){
    alert(`
    Bienvenido 
    has escogido ingreso por conraseña
    `);
    let contraseñaDos = parseInt(prompt(`
     ingresa la contraseña 
     "la contraseña es 1234"`))
     if (contraseñaDos == 1234) {
         alert(`
         ${nombre} has ingresado correctamente
         `);
    
     } else {
     alert(`opcion no reconocida`);
    
     } 



};





if(numero == 3){
    alert(`
Bienvenido 
has escogido ingreso por reconocimiento dactilar
como no esta disponible el uso de sensores ingresa la contraseña que esta en la siguiente opcion
    `);
    let contraseñaTres = parseInt(prompt(`
     ingresa la contraseña 
     "la contraseña es 12345"`))
     if (contraseñaTres == 12345) {
         alert(`
         ${nombre} has ingresado correctamente
         `);
    
     } else {
     alert(`opcion no reconocida`);
    
     } 



}else{
    alert(`opcion no valida`)
}

