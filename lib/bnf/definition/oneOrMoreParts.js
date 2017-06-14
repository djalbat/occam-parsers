'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

var OneOrMorePartsDefinition = function (_SequenceOfPartsDefin) {
  _inherits(OneOrMorePartsDefinition, _SequenceOfPartsDefin);

  function OneOrMorePartsDefinition() {
    _classCallCheck(this, OneOrMorePartsDefinition);

    var plusTerminalSymbolContent = '+';

    return _possibleConstructorReturn(this, (OneOrMorePartsDefinition.__proto__ || Object.getPrototypeOf(OneOrMorePartsDefinition)).call(this, plusTerminalSymbolContent));
  }

  return OneOrMorePartsDefinition;
}(SequenceOfPartsDefinition);

module.exports = OneOrMorePartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9vbmVPck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIiwicmVxdWlyZSIsIk9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvbiIsInBsdXNUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSw0QkFBNEJDLFFBQVEsK0JBQVIsQ0FBbEM7O0lBRU1DLHdCOzs7QUFDSixzQ0FBYztBQUFBOztBQUNaLFFBQU1DLDRCQUE0QixHQUFsQzs7QUFEWSwrSUFHTkEseUJBSE07QUFJYjs7O0VBTG9DSCx5Qjs7QUFRdkNJLE9BQU9DLE9BQVAsR0FBaUJILHdCQUFqQiIsImZpbGUiOiJvbmVPck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vc2VxdWVuY2VPZlBhcnRzJyk7XG5cbmNsYXNzIE9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvbiBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwbHVzVGVybWluYWxTeW1ib2xDb250ZW50ID0gJysnO1xuXG4gICAgc3VwZXIocGx1c1Rlcm1pbmFsU3ltYm9sQ29udGVudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPbmVPck1vcmVQYXJ0c0RlZmluaXRpb247XG4iXX0=