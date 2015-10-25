'use strict';

/**
 * check if a number is in range (limits included)
 * @param   number  min  lower limit
 * @param   number  max  upper limit
 * @returns Boolean true if number is in range, false otherwise
 */
Number.prototype.isBetween = function (min, max) {
  return ((this >= min) && (this <= max));
};

/**
 * check if a string is a valida mongodb ObjectID
 * @returns Boolean true if string is a valid ObjectID, false otherwise
 */
String.prototype.isObjectID = function() {
  return this.match(/^[0-9a-fA-F]{24}$/) !== null;
};

module.exports = {

  /**
   * check if a string is a valida mongodb ObjectID
   * @param   string  string to verify
   * @returns Boolean true if string is a valid ObjectID, false otherwise
   */
  isObjectID: function(string) {
    return string.match(/^[0-9a-fA-F]{24}$/) !== null;
  },

  /**
   * check if a variable is a number
   * @param   n       variable to verify
   * @returns Boolean true if variable is a number, false otherwise
   **/
  isNumber: function(n) {
     return n == parseFloat(n);
  },

  /**
   * check if a variable is an even number
   * @param   n       variable to verify
   * @returns Boolean true if variable is an even number, false otherwise
   **/
  isEven: function(n) {
     return this.isNumber(n) && (n % 2 === 0);
  },

  /**
  * check if a variable is an odd number
  * @param   n       variable to verify
  * @returns Boolean true if variable is an odd number, false otherwise
   **/
  isOdd: function(n) {
     return this.isNumber(n) && (Math.abs(n) % 2 == 1);
  },

  /**
   * return a random integer number between min and max (included)
   * @param   min lower range limit
   * @param   max upper range limit
   * @returns int random integer number
   * source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   **/
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
  },

  /**
   * return the sum of numeric items in the Array
   * @param   a      array to sum
   * @returns Number sum of numeric items
   */
  arraySumNumbers: function (a) {
    var result = 0;

    for (var i = 0; i < a.length; i++) {
      if (a[i] == parseFloat(a[i])) {
        result += a[i];
      }
    }

    return result;
  }

};
