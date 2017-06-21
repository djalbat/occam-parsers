'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

var OptionalPartDefinition = function (_SequenceOfPartsDefin) {
  _inherits(OptionalPartDefinition, _SequenceOfPartsDefin);

  function OptionalPartDefinition() {
    _classCallCheck(this, OptionalPartDefinition);

    var questionMarkTerminalSymbolContent = '?';

    return _possibleConstructorReturn(this, (OptionalPartDefinition.__proto__ || Object.getPrototypeOf(OptionalPartDefinition)).call(this, questionMarkTerminalSymbolContent));
  }

  return OptionalPartDefinition;
}(SequenceOfPartsDefinition);

module.exports = OptionalPartDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL29wdGlvbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIiwicmVxdWlyZSIsIk9wdGlvbmFsUGFydERlZmluaXRpb24iLCJxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSw0QkFBNEJDLFFBQVEsK0JBQVIsQ0FBbEM7O0lBRU1DLHNCOzs7QUFDSixvQ0FBYztBQUFBOztBQUNaLFFBQU1DLG9DQUFvQyxHQUExQzs7QUFEWSwySUFHTkEsaUNBSE07QUFJYjs7O0VBTGtDSCx5Qjs7QUFRckNJLE9BQU9DLE9BQVAsR0FBaUJILHNCQUFqQiIsImZpbGUiOiJvcHRpb25hbFBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jbGFzcyBPcHRpb25hbFBhcnREZWZpbml0aW9uIGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9ICc/JztcbiAgICBcbiAgICBzdXBlcihxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3B0aW9uYWxQYXJ0RGVmaW5pdGlvbjtcbiJdfQ==