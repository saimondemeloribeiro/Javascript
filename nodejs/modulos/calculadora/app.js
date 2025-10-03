const funcoesMatematica = require('../funcoes_matematica.js');

import {somar, subtrair, multiplicar, dividir} from '../funcoes_matematica.js';
import * as funcoes from '../modelos/funcoes_matematicas.js';

// Exemplo de uso das funções importadas
//const resultadoSoma = funcoesMatematica.soma(5, 3);

console.log('Soma:', somar(5, 3));

console.log('Subtração:', subtrair(10, 4));

console.log('Multiplicação:', multiplicar(9, 9));

console.log('Divisão:', dividir(20, 2));

