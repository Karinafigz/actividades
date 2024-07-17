function arreglonumero(){
    //array
    const numbers=[11,2,31,4,5,36,7,48,95,104,131,12];
    //ordenar los numeros de menor  a mayor
    numbers.sort((a,b)=> a-b);
    console.log("Los numeros ordenados de menor a mayor son : " + numbers);

    //sacar el promedio de la suma del array
    let sum = numbers.reduce((a, b) => a + b);
    let promedio= sum / numbers.length;
    console.log("El promedio total es: " , promedio);

  //funcion para sacar numeros primos
  function primos(num) {
     if (num <= 1) return false; 
     for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; 
    }
        return true; 
    }

  let numeroprimos = numbers.filter(primos);
  console.log("Los numeros primos son:", numeroprimos);

}
arreglonumero();