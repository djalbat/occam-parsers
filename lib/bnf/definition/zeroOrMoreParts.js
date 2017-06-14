'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

var ZeroOrMorePartsDefinition = function (_SequenceOfPartsDefin) {
  _inherits(ZeroOrMorePartsDefinition, _SequenceOfPartsDefin);

  function ZeroOrMorePartsDefinition() {
    _classCallCheck(this, ZeroOrMorePartsDefinition);

    var asteriskTerminalSymbolContent = '*';

    return _possibleConstructorReturn(this, (ZeroOrMorePartsDefinition.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsDefinition)).call(this, asteriskTerminalSymbolContent));
  }

  return ZeroOrMorePartsDefinition;
}(SequenceOfPartsDefinition);

module.exports = ZeroOrMorePartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi96ZXJvT3JNb3JlUGFydHMuanMiXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJaZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uIiwiYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSw0QkFBNEJDLFFBQVEsK0JBQVIsQ0FBbEM7O0lBRU1DLHlCOzs7QUFDSix1Q0FBYztBQUFBOztBQUNaLFFBQU1DLGdDQUFnQyxHQUF0Qzs7QUFEWSxpSkFHTkEsNkJBSE07QUFJYjs7O0VBTHFDSCx5Qjs7QUFReENJLE9BQU9DLE9BQVAsR0FBaUJILHlCQUFqQiIsImZpbGUiOiJ6ZXJvT3JNb3JlUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jbGFzcyBaZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uIGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGFzdGVyaXNrVGVybWluYWxTeW1ib2xDb250ZW50ID0gJyonO1xuXG4gICAgc3VwZXIoYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVBhcnRzRGVmaW5pdGlvbjtcbiJdfQ==