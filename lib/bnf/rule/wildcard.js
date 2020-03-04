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
    WildcardNode = require('../node/wildcard'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var specialSymbols = lexers.specialSymbols,
    wildcard = specialSymbols.wildcard,
    WildcardRuleName = ruleNames.WildcardRuleName;

var WildcardRule = /*#__PURE__*/function (_Rule) {
  _inherits(WildcardRule, _Rule);

  function WildcardRule() {
    _classCallCheck(this, WildcardRule);

    var wildcardTerminalSymbolContent = wildcard,
        wildcardTerminalSymbolDefinition = new TerminalSymbolDefinition(wildcardTerminalSymbolContent),
        name = WildcardRuleName,
        definitions = [wildcardTerminalSymbolDefinition],
        Node = WildcardNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(WildcardRule).call(this, name, definitions, Node));
  }

  return WildcardRule;
}(Rule);

module.exports = WildcardRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbGRjYXJkLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJSdWxlIiwicnVsZU5hbWVzIiwiV2lsZGNhcmROb2RlIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwic3BlY2lhbFN5bWJvbHMiLCJ3aWxkY2FyZCIsIldpbGRjYXJkUnVsZU5hbWUiLCJXaWxkY2FyZFJ1bGUiLCJ3aWxkY2FyZFRlcm1pbmFsU3ltYm9sQ29udGVudCIsIndpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxJQUFJLEdBQUdELE9BQU8sQ0FBQyxTQUFELENBQXBCO0FBQUEsSUFDTUUsU0FBUyxHQUFHRixPQUFPLENBQUMsY0FBRCxDQUR6QjtBQUFBLElBRU1HLFlBQVksR0FBR0gsT0FBTyxDQUFDLGtCQUFELENBRjVCO0FBQUEsSUFHTUksd0JBQXdCLEdBQUdKLE9BQU8sQ0FBQyw4QkFBRCxDQUh4Qzs7QUFLTSxJQUFFSyxjQUFGLEdBQXFCTixNQUFyQixDQUFFTSxjQUFGO0FBQUEsSUFDRUMsUUFERixHQUNlRCxjQURmLENBQ0VDLFFBREY7QUFBQSxJQUVFQyxnQkFGRixHQUV1QkwsU0FGdkIsQ0FFRUssZ0JBRkY7O0lBSUFDLFk7OztBQUNKLDBCQUFjO0FBQUE7O0FBQ1osUUFBTUMsNkJBQTZCLEdBQUdILFFBQXRDO0FBQUEsUUFDTUksZ0NBQWdDLEdBQUcsSUFBSU4sd0JBQUosQ0FBNkJLLDZCQUE3QixDQUR6QztBQUFBLFFBRU1FLElBQUksR0FBR0osZ0JBRmI7QUFBQSxRQUdNSyxXQUFXLEdBQUcsQ0FDWkYsZ0NBRFksQ0FIcEI7QUFBQSxRQU1NRyxJQUFJLEdBQUdWLFlBTmI7QUFEWSxxRkFTTlEsSUFUTSxFQVNBQyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWHdCWixJOztBQWMzQmEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUCxZQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFdpbGRjYXJkTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvd2lsZGNhcmQnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyB3aWxkY2FyZCB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IFdpbGRjYXJkUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgV2lsZGNhcmRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHdpbGRjYXJkVGVybWluYWxTeW1ib2xDb250ZW50ID0gd2lsZGNhcmQsXG4gICAgICAgICAgd2lsZGNhcmRUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBuZXcgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uKHdpbGRjYXJkVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBuYW1lID0gV2lsZGNhcmRSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHdpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gV2lsZGNhcmROb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaWxkY2FyZFJ1bGU7XG4iXX0=