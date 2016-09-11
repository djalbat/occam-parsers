'use strict';

class ZeroOrMoreProductionNamesPart {
  constructor(productionName) {
    this.productionName = productionName;
  }

  static fromSymbols(symbols, Parts) {
    var zeroOrMoreProductionNamesPart = null,
        firstSymbol = first(symbols),
        thirdSymbol = third(symbols),
        fourthSymbol = fourth(symbols);

    if (  (firstSymbol === '(')
       && (thirdSymbol === ')')
       && (fourthSymbol === '*')  ) {
      var secondSymbol = second(symbols),
          productionName = secondSymbol;

      symbols.shift();
      symbols.shift();
      symbols.shift();
      symbols.shift();

      zeroOrMoreProductionNamesPart = new ZeroOrMoreProductionNamesPart(productionName);
    }

    return zeroOrMoreProductionNamesPart;
  }
}

module.exports = ZeroOrMoreProductionNamesPart;

function first(array) { return array[0]; }
function second(array) { return array[1]; }
function third(array) { return array[2]; }
function fourth(array) { return array[3]; }
