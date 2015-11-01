# moorea-node-helpers

[![Dependency Status](https://david-dm.org/pdesterlich/moorea-node-helpers.svg?theme=shields.io)](https://david-dm.org/pdesterlich/moorea-node-helpers) [![devDependency Status](https://david-dm.org/pdesterlich/moorea-node-helpers/dev-status.svg?theme=shields.io)](https://david-dm.org/pdesterlich/moorea-node-helpers#info=devDependencies)

a collection of helper functions for node projects

## Install

`npm install moorea-node-helpers`

## API

### prototypes

`Number.isBetween(min, max)`: check if a number is in range (limits included)

`String.isObjectID()`: check if a string is a valid mongodb ObjectID

### functions

`isObjectID(string)`: check if a string is a valid mongodb ObjectID

`isNumber(number)`: check if a variable is a number

`isEven(number)`: check if a number is even

`isOdd(number)`: check if a number is odd

`getRandomInt(min, max)`: returns a random int number between min and max (included)

`arraySumNumbers(array)`: return the sum of numeric items in an array

`isEmpty(object)`: check if object is empty (has no properties)
