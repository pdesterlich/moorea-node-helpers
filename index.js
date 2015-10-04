'use strict';

module.exports = {

  /**
   * verifica se una stringa e' un ObjectID valido per mongodb
   * @param string stringa da verificare
   * @returns Boolean true se la stringa e' un ObjectID, false altrimenti
   */
  isObjectID: function(string) {
    return string.match(/^[0-9a-fA-F]{24}$/) !== null;
  },

  /**
   * verifica se una variabile e' un numero
   * @param n variabile da verificare
   * @returns Boolean true se la variabile e' un numero, false altrimenti
   **/
  isNumber: function(n) {
     return n == parseFloat(n);
  },

  /**
   * verifica se una variabile e' un numero pari
   * @param n variabile da verificare
   * @returns Boolean true se la variabile e' un numero pari, false altrimenti
   **/
  isEven: function(n) {
     return this.isNumber(n) && (n % 2 === 0);
  },

  /**
   * verifica se una variabile e' un numero dispari
   * @param n variabile da verificare
   * @returns Boolean true se la variabile e' un numero dispari, false altrimenti
   **/
  isOdd: function(n) {
     return this.isNumber(n) && (Math.abs(n) % 2 == 1);
  },

  /**
   * ritorna un numero intero random compreso tra min e max (inclusi)
   * @param min limite inferiore del range in cui generare il numero
   * @param max limite superiore del range in cui generare il numero
   * @returns int numero random compreso nel range
   * origine: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   **/
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
  }

};
