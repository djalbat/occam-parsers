"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));

var _terminalSymbol = _interopRequireDefault(require("../part/terminal/terminalSymbol"));

var _array = require("../../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TerminalSymbolNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(TerminalSymbolNode, _NonTerminalNode);

  var _super = _createSuper(TerminalSymbolNode);

  function TerminalSymbolNode() {
    var _this;

    _classCallCheck(this, TerminalSymbolNode);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "regularExpression", /^"((?:\\.|[^"\\])*)"$/);

    return _this;
  }

  _createClass(TerminalSymbolNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var content = this.getContent(),
          terminalSymbolPart = new _terminalSymbol["default"](content);
      return terminalSymbolPart;
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var childNodes = this.getChildNodes(),
          firstChildNode = (0, _array.first)(childNodes),
          terminalNode = firstChildNode,
          ///
      terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(this.regularExpression),
          secondMatch = (0, _array.second)(matches),
          content = secondMatch.replace(/\\\\/g, "\\").replace(/\\"/g, "\"");
      return content;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return _nonTerminal["default"].fromRuleNameAndChildNodes(TerminalSymbolNode, ruleName, childNodes);
    }
  }]);

  return TerminalSymbolNode;
}(_nonTerminal["default"]);

exports["default"] = TerminalSymbolNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsU3ltYm9sTm9kZSIsImxvb2tBaGVhZCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidGVybWluYWxTeW1ib2xQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJyZWd1bGFyRXhwcmVzc2lvbiIsInNlY29uZE1hdGNoIiwicmVwbGFjZSIsInJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7d0VBQ0MsdUI7Ozs7Ozs7aUNBRVBDLFMsRUFBVztBQUN0QixVQUFNQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUFoQjtBQUFBLFVBQ01DLGtCQUFrQixHQUFHLElBQUlDLDBCQUFKLENBQXVCSCxPQUF2QixDQUQzQjtBQUdBLGFBQU9FLGtCQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1FLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsY0FBYyxHQUFHLGtCQUFNRixVQUFOLENBRHZCO0FBQUEsVUFFTUcsWUFBWSxHQUFHRCxjQUZyQjtBQUFBLFVBRXNDO0FBQ2hDRSxNQUFBQSxtQkFBbUIsR0FBR0QsWUFBWSxDQUFDTixVQUFiLEVBSDVCO0FBQUEsVUFJTVEsT0FBTyxHQUFHRCxtQkFBbUIsQ0FBQ0UsS0FBcEIsQ0FBMEIsS0FBS0MsaUJBQS9CLENBSmhCO0FBQUEsVUFLTUMsV0FBVyxHQUFHLG1CQUFPSCxPQUFQLENBTHBCO0FBQUEsVUFNTVQsT0FBTyxHQUFHWSxXQUFXLENBQUNDLE9BQVosQ0FBb0IsT0FBcEIsRUFBNkIsSUFBN0IsRUFBbUNBLE9BQW5DLENBQTJDLE1BQTNDLEVBQW1ELElBQW5ELENBTmhCO0FBUUEsYUFBT2IsT0FBUDtBQUNEOzs7OENBRWdDYyxRLEVBQVVWLFUsRUFBWTtBQUFFLGFBQU9XLHdCQUFnQkMseUJBQWhCLENBQTBDbEIsa0JBQTFDLEVBQThEZ0IsUUFBOUQsRUFBd0VWLFVBQXhFLENBQVA7QUFBNkY7Ozs7RUF0QnhHVyx1QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFN5bWJvbE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXCIoKD86XFxcXC58W15cIlxcXFxdKSopXCIkLztcblxuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY29udGVudCk7XG5cbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xQYXJ0O1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVDb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIGNvbnRlbnQgPSBzZWNvbmRNYXRjaC5yZXBsYWNlKC9cXFxcXFxcXC9nLCBcIlxcXFxcIikucmVwbGFjZSgvXFxcXFwiL2csIFwiXFxcIlwiKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFRlcm1pbmFsU3ltYm9sTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbiJdfQ==