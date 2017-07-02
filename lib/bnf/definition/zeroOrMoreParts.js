'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    asterisk = specialSymbols.asterisk;

var ZeroOrMorePartsDefinition = function (_SequenceOfPartsDefin) {
  _inherits(ZeroOrMorePartsDefinition, _SequenceOfPartsDefin);

  function ZeroOrMorePartsDefinition() {
    _classCallCheck(this, ZeroOrMorePartsDefinition);

    var asteriskTerminalSymbolContent = asterisk;

    return _possibleConstructorReturn(this, (ZeroOrMorePartsDefinition.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsDefinition)).call(this, asteriskTerminalSymbolContent));
  }

  return ZeroOrMorePartsDefinition;
}(SequenceOfPartsDefinition);

module.exports = ZeroOrMorePartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi96ZXJvT3JNb3JlUGFydHMuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24iLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwiYXN0ZXJpc2siLCJaZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uIiwiYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyw0QkFBNEJELFFBQVEsK0JBQVIsQ0FBbEM7O0FBRU0sSUFBRUUsUUFBRixHQUFlSCxNQUFmLENBQUVHLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsUUFGRixHQUVlRCxjQUZmLENBRUVDLFFBRkY7O0lBSUFDLHlCOzs7QUFDSix1Q0FBYztBQUFBOztBQUNaLFFBQU1DLGdDQUFnQ0YsUUFBdEM7O0FBRFksaUpBR05FLDZCQUhNO0FBSWI7OztFQUxxQ0wseUI7O0FBUXhDTSxPQUFPQyxPQUFQLEdBQWlCSCx5QkFBakIiLCJmaWxlIjoiemVyb09yTW9yZVBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vc2VxdWVuY2VPZlBhcnRzJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBhc3RlcmlzayB9ID0gc3BlY2lhbFN5bWJvbHM7XG4gIFxuY2xhc3MgWmVyb09yTW9yZVBhcnRzRGVmaW5pdGlvbiBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBhc3Rlcmlza1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9IGFzdGVyaXNrO1xuXG4gICAgc3VwZXIoYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVBhcnRzRGVmaW5pdGlvbjtcbiJdfQ==