'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    EndOfLineNode = require('../node/endOfLine'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var specialSymbols = lexers.specialSymbols,
    END_OF_LINE = specialSymbols.END_OF_LINE,
    EndOfLineRuleName = ruleNames.EndOfLineRuleName;

var EndOfLineRule = /*#__PURE__*/function (_Rule) {
  _inherits(EndOfLineRule, _Rule);

  function EndOfLineRule() {
    _classCallCheck(this, EndOfLineRule);

    var endOfLineTerminalSymbolContent = END_OF_LINE,
        endOfLineTerminalSymbolDefinition = new TerminalSymbolDefinition(endOfLineTerminalSymbolContent),
        name = EndOfLineRuleName,
        definitions = [endOfLineTerminalSymbolDefinition],
        Node = EndOfLineNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineRule).call(this, name, definitions, Node));
  }

  return EndOfLineRule;
}(Rule);

module.exports = EndOfLineRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUnVsZSIsInJ1bGVOYW1lcyIsIkVuZE9mTGluZU5vZGUiLCJUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJzcGVjaWFsU3ltYm9scyIsIkVORF9PRl9MSU5FIiwiRW5kT2ZMaW5lUnVsZU5hbWUiLCJFbmRPZkxpbmVSdWxlIiwiZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xDb250ZW50IiwiZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxJQUFJLEdBQUdELE9BQU8sQ0FBQyxTQUFELENBQXBCO0FBQUEsSUFDTUUsU0FBUyxHQUFHRixPQUFPLENBQUMsY0FBRCxDQUR6QjtBQUFBLElBRU1HLGFBQWEsR0FBR0gsT0FBTyxDQUFDLG1CQUFELENBRjdCO0FBQUEsSUFHTUksd0JBQXdCLEdBQUdKLE9BQU8sQ0FBQyw4QkFBRCxDQUh4Qzs7QUFLTSxJQUFFSyxjQUFGLEdBQXFCTixNQUFyQixDQUFFTSxjQUFGO0FBQUEsSUFDRUMsV0FERixHQUNrQkQsY0FEbEIsQ0FDRUMsV0FERjtBQUFBLElBRUVDLGlCQUZGLEdBRXdCTCxTQUZ4QixDQUVFSyxpQkFGRjs7SUFJQUMsYTs7O0FBQ0osMkJBQWM7QUFBQTs7QUFDWixRQUFNQyw4QkFBOEIsR0FBR0gsV0FBdkM7QUFBQSxRQUNNSSxpQ0FBaUMsR0FBRyxJQUFJTix3QkFBSixDQUE2QkssOEJBQTdCLENBRDFDO0FBQUEsUUFFTUUsSUFBSSxHQUFHSixpQkFGYjtBQUFBLFFBR01LLFdBQVcsR0FBRyxDQUNaRixpQ0FEWSxDQUhwQjtBQUFBLFFBTU1HLElBQUksR0FBR1YsYUFOYjtBQURZLHNGQVNOUSxJQVRNLEVBU0FDLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYeUJaLEk7O0FBYzVCYSxNQUFNLENBQUNDLE9BQVAsR0FBaUJQLGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRW5kT2ZMaW5lTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZW5kT2ZMaW5lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgRU5EX09GX0xJTkUgfSA9IHNwZWNpYWxTeW1ib2xzLFxuICAgICAgeyBFbmRPZkxpbmVSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBFbmRPZkxpbmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sQ29udGVudCA9IEVORF9PRl9MSU5FLFxuICAgICAgICAgIGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IG5ldyBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24oZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBuYW1lID0gRW5kT2ZMaW5lUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBFbmRPZkxpbmVOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVSdWxlO1xuIl19