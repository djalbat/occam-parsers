"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));

var _regularExpression = _interopRequireDefault(require("../part/terminal/regularExpression"));

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

var RegularExpressionNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(RegularExpressionNode, _NonTerminalNode);

  var _super = _createSuper(RegularExpressionNode);

  function RegularExpressionNode() {
    var _this;

    _classCallCheck(this, RegularExpressionNode);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "regularExpression", /^\/((?:\\.|[^\/])*)\/$/);

    return _this;
  }

  _createClass(RegularExpressionNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var regularExpression = this.getRegularExpression(),
          regularExpressionPart = new _regularExpression["default"](regularExpression);
      return regularExpressionPart;
    }
  }, {
    key: "getRegularExpression",
    value: function getRegularExpression() {
      var childNodes = this.getChildNodes(),
          firstChildNode = (0, _array.first)(childNodes),
          terminalNode = firstChildNode,
          ///
      terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(this.regularExpression),
          secondMatch = (0, _array.second)(matches),
          pattern = secondMatch,
          ///
      regularExpression = new RegExp(pattern); ///

      return regularExpression;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return _nonTerminal["default"].fromRuleNameAndChildNodes(RegularExpressionNode, ruleName, childNodes);
    }
  }]);

  return RegularExpressionNode;
}(_nonTerminal["default"]);

exports["default"] = RegularExpressionNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlJlZ3VsYXJFeHByZXNzaW9uTm9kZSIsImxvb2tBaGVhZCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiZ2V0UmVndWxhckV4cHJlc3Npb24iLCJyZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInBhdHRlcm4iLCJSZWdFeHAiLCJydWxlTmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHFCOzs7Ozs7Ozs7Ozs7Ozs7O3dFQUNDLHdCOzs7Ozs7O2lDQUVQQyxTLEVBQVc7QUFDdEIsVUFBTUMsaUJBQWlCLEdBQUcsS0FBS0Msb0JBQUwsRUFBMUI7QUFBQSxVQUNNQyxxQkFBcUIsR0FBRyxJQUFJQyw2QkFBSixDQUEwQkgsaUJBQTFCLENBRDlCO0FBR0EsYUFBT0UscUJBQVA7QUFDRDs7OzJDQUVzQjtBQUNyQixVQUFNRSxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLGNBQWMsR0FBRyxrQkFBTUYsVUFBTixDQUR2QjtBQUFBLFVBRU1HLFlBQVksR0FBR0QsY0FGckI7QUFBQSxVQUVzQztBQUNoQ0UsTUFBQUEsbUJBQW1CLEdBQUdELFlBQVksQ0FBQ0UsVUFBYixFQUg1QjtBQUFBLFVBSU1DLE9BQU8sR0FBR0YsbUJBQW1CLENBQUNHLEtBQXBCLENBQTBCLEtBQUtYLGlCQUEvQixDQUpoQjtBQUFBLFVBS01ZLFdBQVcsR0FBRyxtQkFBT0YsT0FBUCxDQUxwQjtBQUFBLFVBTU1HLE9BQU8sR0FBR0QsV0FOaEI7QUFBQSxVQU02QjtBQUN2QlosTUFBQUEsaUJBQWlCLEdBQUcsSUFBSWMsTUFBSixDQUFXRCxPQUFYLENBUDFCLENBRHFCLENBUTJCOztBQUVoRCxhQUFPYixpQkFBUDtBQUNEOzs7OENBRWdDZSxRLEVBQVVYLFUsRUFBWTtBQUFFLGFBQU9ZLHdCQUFnQkMseUJBQWhCLENBQTBDbkIscUJBQTFDLEVBQWlFaUIsUUFBakUsRUFBMkVYLFVBQTNFLENBQVA7QUFBZ0c7Ozs7RUF2QnhHWSx1QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9yZWd1bGFyRXhwcmVzc2lvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWd1bGFyRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXFwvKCg/OlxcXFwufFteXFwvXSkqKVxcLyQvO1xuXG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvbiA9IHRoaXMuZ2V0UmVndWxhckV4cHJlc3Npb24oKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBuZXcgUmVndWxhckV4cHJlc3Npb25QYXJ0KHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG4gIH1cblxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVDb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHBhdHRlcm4gPSBzZWNvbmRNYXRjaCwgLy8vXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKHBhdHRlcm4pOyAgLy8vXG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUmVndWxhckV4cHJlc3Npb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxuIl19