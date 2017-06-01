'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    TerminalSymbolPart = require('../part/terminalSymbol');

var EndOfLineRule = function (_Rule) {
  _inherits(EndOfLineRule, _Rule);

  function EndOfLineRule() {
    _classCallCheck(this, EndOfLineRule);

    var noWhitespace = false,
        endOfLineTerminalSymbolContent = '<END_OF_LINE>',
        endOfLineTerminalSymbolPart = new TerminalSymbolPart(endOfLineTerminalSymbolContent, noWhitespace),
        parts = [endOfLineTerminalSymbolPart];

    return _possibleConstructorReturn(this, (EndOfLineRule.__proto__ || Object.getPrototypeOf(EndOfLineRule)).call(this, parts));
  }

  return EndOfLineRule;
}(Rule);

module.exports = EndOfLineRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJFbmRPZkxpbmVSdWxlIiwibm9XaGl0ZXNwYWNlIiwiZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xDb250ZW50IiwiZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSx3QkFBUixDQUQzQjs7SUFHTUUsYTs7O0FBQ0osMkJBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLEtBQXJCO0FBQUEsUUFDTUMsaUNBQWlDLGVBRHZDO0FBQUEsUUFFTUMsOEJBQThCLElBQUlKLGtCQUFKLENBQXVCRyw4QkFBdkIsRUFBdURELFlBQXZELENBRnBDO0FBQUEsUUFHTUcsUUFBUSxDQUNORCwyQkFETSxDQUhkOztBQURZLHlIQVFOQyxLQVJNO0FBU2I7OztFQVZ5QlAsSTs7QUFhNUJRLE9BQU9DLE9BQVAsR0FBaUJOLGFBQWpCIiwiZmlsZSI6ImVuZE9mTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKTtcblxuY2xhc3MgRW5kT2ZMaW5lUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnPEVORF9PRl9MSU5FPicsXG4gICAgICAgICAgZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVSdWxlO1xuIl19