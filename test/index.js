'use strict';

var
  should  = require('chai').should(),
  Helpers = require('../');

describe('moorea-node-helpers', function () {

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

});
