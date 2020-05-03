"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Rule = require("../rule"),
    ruleNames = require("../ruleNames"),
    NoWhitespacePartNode = require("../node/noWhitespacePart"),
    NoWhitespacePartDefinition = require("../definition/noWhitespacePart");

var NoWhitespacePartRuleName = ruleNames.NoWhitespacePartRuleName;

var NoWhitespacePartRule = /*#__PURE__*/function (_Rule) {
  _inherits(NoWhitespacePartRule, _Rule);

  function NoWhitespacePartRule() {
    _classCallCheck(this, NoWhitespacePartRule);

    var noWhitespacePartDefinition = new NoWhitespacePartDefinition(),
        name = NoWhitespacePartRuleName,
        definitions = [noWhitespacePartDefinition],
        Node = NoWhitespacePartNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespacePartRule).call(this, name, definitions, Node));
  }

  return NoWhitespacePartRule;
}(Rule);

module.exports = NoWhitespacePartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vV2hpdGVzcGFjZVBhcnQuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJydWxlTmFtZXMiLCJOb1doaXRlc3BhY2VQYXJ0Tm9kZSIsIk5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIiwiTm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lIiwiTm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7QUFBQSxJQUNNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBRHpCO0FBQUEsSUFFTUUsb0JBQW9CLEdBQUdGLE9BQU8sQ0FBQywwQkFBRCxDQUZwQztBQUFBLElBR01HLDBCQUEwQixHQUFHSCxPQUFPLENBQUMsZ0NBQUQsQ0FIMUM7O0lBS1FJLHdCLEdBQTZCSCxTLENBQTdCRyx3Qjs7SUFFRkMsb0I7OztBQUNKLGtDQUFjO0FBQUE7O0FBQ1osUUFBTUMsMEJBQTBCLEdBQUcsSUFBSUgsMEJBQUosRUFBbkM7QUFBQSxRQUNNSSxJQUFJLEdBQUdILHdCQURiO0FBQUEsUUFFTUksV0FBVyxHQUFHLENBQ1pGLDBCQURZLENBRnBCO0FBQUEsUUFLTUcsSUFBSSxHQUFHUCxvQkFMYjtBQURZLDZGQVFOSyxJQVJNLEVBUUFDLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWZ0NWLEk7O0FBYW5DVyxNQUFNLENBQUNDLE9BQVAsR0FBaUJOLG9CQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZShcIi4uL3J1bGVcIiksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKFwiLi4vcnVsZU5hbWVzXCIpLFxuICAgICAgTm9XaGl0ZXNwYWNlUGFydE5vZGUgPSByZXF1aXJlKFwiLi4vbm9kZS9ub1doaXRlc3BhY2VQYXJ0XCIpLFxuICAgICAgTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24gPSByZXF1aXJlKFwiLi4vZGVmaW5pdGlvbi9ub1doaXRlc3BhY2VQYXJ0XCIpO1xuXG5jb25zdCB7IE5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBOb1doaXRlc3BhY2VQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSBOb1doaXRlc3BhY2VQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vV2hpdGVzcGFjZVBhcnROb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb1doaXRlc3BhY2VQYXJ0UnVsZTtcbiJdfQ==