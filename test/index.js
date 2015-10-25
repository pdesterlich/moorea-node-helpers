'use strict';

var
  should  = require('chai').should(),
  Helpers = require('../');

describe('moorea-node-helpers', function () {

  describe('prototypes', function () {

    describe('Number.isBetween', function () {

      var
        rangeMin = 40,
        rangeMax = 60;

      it('should return true for a number in range', function (done) {
        var testNumber = 50;
        testNumber.isBetween(rangeMin, rangeMax).should.equal(true);
        done();
      });

      it('should return false for a number outside range (less than min)', function (done) {
        var testNumber = 30;
        testNumber.isBetween(rangeMin, rangeMax).should.equal(false);
        done();
      });

      it('should return false for a number outside range (more than max)', function (done) {
        var testNumber = 70;
        testNumber.isBetween(rangeMin, rangeMax).should.equal(false);
        done();
      });

    });

    describe('String.isObjectID', function () {

      it('should return true for a string representing a mongodb ObjectID', function (done) {
        var testString = '55253001cec3f7541c54f7f0';
        testString.isObjectID().should.equal(true);
        done();
      });

      it('should return false for any other string', function (done) {
        var testString = 'abcdefghi';
        testString.isObjectID().should.equal(false);
        done();
      });

    });

  });

  describe('functions', function () {

    describe('isObjectID', function () {

      it('should return true for a string representing a mongodb ObjectID', function (done) {
        Helpers.isObjectID('55253001cec3f7541c54f7f0').should.equal(true);
        done();
      });

      it('should return false for any other string', function (done) {
        Helpers.isObjectID('abcdefghi').should.equal(false);
        done();
      });

    });

    describe('isNumber', function () {

      it('should return true for a number', function (done) {
        Helpers.isNumber(23).should.equal(true);
        done();
      });

      it('should return false for any other variable', function (done) {
        Helpers.isNumber('some random string').should.equal(false);
        done();
      });

    });

    describe('isEven', function () {

      it('should return true for an even number', function (done) {
        Helpers.isEven(22).should.equal(true);
        done();
      });

      it('should return false for an odd number', function (done) {
        Helpers.isEven(23).should.equal(false);
        done();
      });

    });

    describe('isOdd', function () {

      it('should return true for an even number', function (done) {
        Helpers.isOdd(23).should.equal(true);
        done();
      });

      it('should return false for an odd number', function (done) {
        Helpers.isOdd(22).should.equal(false);
        done();
      });

    });

    describe('getRandomInt', function () {

      it('should return a number within range (1..100)', function (done) {
        var number = Helpers.getRandomInt(1,100);
        number.should.be.gte(1);
        number.should.be.lte(100);
        done();
      });


    });

    describe('arraySumNumbers', function () {

      it('should return 0 for an empty array', function (done) {
        var testArray = [];
        var number = Helpers.arraySumNumbers(testArray);
        number.should.equal(0);
        done();
      });

      it('should return 0 for an array with no numeric items', function (done) {
        var testArray = ['a', 'b', 'c'];
        var number = Helpers.arraySumNumbers(testArray);
        number.should.equal(0);
        done();
      });

      it('should return the correct sum for an array with only numeric items', function (done) {
        var testArray = [1, 2, 3];
        var number = Helpers.arraySumNumbers(testArray);
        number.should.equal(6);
        done();
      });

      it('should return the correct sum for an array with numeric and non numeric items', function (done) {
        var testArray = [1, 'a', 2, 'b', 3, 'c', undefined, NaN];
        var number = Helpers.arraySumNumbers(testArray);
        number.should.equal(6);
        done();
      });

    });

  });

});
