// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// if (x === 23) console.log(23);

// const calcEdad = nacimiento => 2037 - nacimiento;
// console.log();

const temperaturas = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//Amplitud de la temperatura: diferencia de ambas
//Calcular temperatura mas lata y la mas baja
//Ver el error en el sensor y que hacer cuando ocurre esto

//2.-
//Como ignorar los errores
//Encontrar el maximo valor en el array y el minimo
//Restar el maximo y minimo

//RESOLVEMOS: Encontrar el maximo valor en el array y el minimo
// const calcTempeAmp = function (temp) {
//   let max = temp[0];
//   let min = temp[0];

//   for (let i = 0; i < temp.length; i++) {
//     const curTemp = temp[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(
//     'La temperatura máxima es: ' + max + ' y  la temperatura minima es: ' + min
//   );
// };

// calcTempeAmp([3, 7, 4, 1, 8]);

//RESOLVEMOS: Diferencia de los valores max y min
// const calcTempeAmp = function (temp) {
//   let max = temp[0];
//   let min = temp[0];

//   for (let i = 0; i < temp.length; i++) {
//     const curTemp = temp[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(
//     'La temperatura máxima es: ' + max + ' y  la temperatura minima es: ' + min
//   );
//   return max - min;
// };

// const amplitud = calcTempeAmp(temperaturas);
// console.log(amplitud);

//RESOLVEMOS: Fucionar 2 matrices
const tempeConcat = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);

  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(
    'La temperatura máxima es: ' + max + ' y  la temperatura minima es: ' + min
  );
  console.log('La diferencia de temperaturas es :');
  return max - min;
};

const amplitudConcat = tempeConcat([3, 5, 1], [9, 0, 5]);
console.log(amplitudConcat);
