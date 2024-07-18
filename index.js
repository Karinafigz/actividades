const numeros=[11,2,31,4,5,36,7,48,95,194,131,192];

function arreglonumero(numbers){
    //ordenar los numeros de menor  a mayor
    const resultado= {

      ordenar:function(){
        numbers.sort((a,b)=> a-b);
        return numbers;
      },
      promedio:function(){        
        //sacar el promedio de la suma del array
        let sum = numbers.reduce((a, b) => a + b);
        let promedio= sum / numbers.length;
        return promedio;
      },
     // Método para filtrar los números primos
     primos: function() {
      function esPrimo(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      }

      const numerosPrimos = numeros.filter(esPrimo);
      return numerosPrimos;
    }
  };
// console1 ordenar
const numerosOrdenados = resultado.ordenar();
console.log("Los números ordenados de menor a mayor son:", numerosOrdenados);

// Console2 promedio
const promedio = resultado.promedio();
console.log("El promedio total es:", promedio);

//console3 primos
const numerosPrimos = resultado.primos();
console.log("Los números primos son:", numerosPrimos);
}

arreglonumero(numeros);