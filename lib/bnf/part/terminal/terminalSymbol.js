"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _terminal = _interopRequireDefault(require("../../part/terminal"));

var _terminal2 = _interopRequireDefault(require("../../../common/node/terminal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TerminalSymbolPart = /*#__PURE__*/function (_TerminalPart) {
  _inherits(TerminalSymbolPart, _TerminalPart);

  var _super = _createSuper(TerminalSymbolPart);

  function TerminalSymbolPart(content) {
    var _this;

    _classCallCheck(this, TerminalSymbolPart);

    _this = _super.call(this);
    _this.content = content;
    return _this;
  }

  _createClass(TerminalSymbolPart, [{
    key: "parse",
    value: function parse(context) {
      var terminalNode = null;
      var nextSignificantToken = context.getNextSignificantToken(),
          significantToken = nextSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            parsed = content === this.content;

        if (parsed) {
          terminalNode = _terminal2["default"].fromSignificantToken(significantToken);
        }
      }

      return terminalNode;
    }
  }, {
    key: "asString",
    value: function asString() {
      var content = this.content.replace(/\\/, "\\\\"),
          string = "\"".concat(content, "\"");
      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(TerminalSymbolPart.prototype), "clone", this).call(this, TerminalSymbolPart, this.content);
    }
  }]);

  return TerminalSymbolPart;
}(_terminal["default"]);

exports["default"] = TerminalSymbolPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsU3ltYm9sUGFydCIsImNvbnRlbnQiLCJjb250ZXh0IiwidGVybWluYWxOb2RlIiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRDb250ZW50IiwicGFyc2VkIiwiVGVybWluYWxOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJyZXBsYWNlIiwic3RyaW5nIiwiVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGtCOzs7OztBQUNuQiw4QkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUFBOztBQUNuQjtBQUVBLFVBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUhtQjtBQUlwQjs7OzswQkFFS0MsTyxFQUFTO0FBQ2IsVUFBSUMsWUFBWSxHQUFHLElBQW5CO0FBRUEsVUFBTUMsb0JBQW9CLEdBQUdGLE9BQU8sQ0FBQ0csdUJBQVIsRUFBN0I7QUFBQSxVQUNDQyxnQkFBZ0IsR0FBR0Ysb0JBRHBCLENBSGEsQ0FJNkI7O0FBRTFDLFVBQUlFLGdCQUFnQixLQUFLLElBQXpCLEVBQStCO0FBQzdCLFlBQU1MLE9BQU8sR0FBR0ssZ0JBQWdCLENBQUNDLFVBQWpCLEVBQWhCO0FBQUEsWUFDTUMsTUFBTSxHQUFJUCxPQUFPLEtBQUssS0FBS0EsT0FEakM7O0FBR0EsWUFBSU8sTUFBSixFQUFZO0FBQ1ZMLFVBQUFBLFlBQVksR0FBR00sc0JBQWFDLG9CQUFiLENBQWtDSixnQkFBbEMsQ0FBZjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0gsWUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNRixPQUFPLEdBQUcsS0FBS0EsT0FBTCxDQUFhVSxPQUFiLENBQXFCLElBQXJCLEVBQTJCLE1BQTNCLENBQWhCO0FBQUEsVUFDTUMsTUFBTSxlQUFPWCxPQUFQLE9BRFo7QUFHQSxhQUFPVyxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLDJGQUFtQlosa0JBQW5CLEVBQXVDLEtBQUtDLE9BQTVDO0FBQXVEOzs7O0VBaENuQlksb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiO1xuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybWluYWxTeW1ib2xQYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IoY29udGVudCkge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSxcblx0XHRcdFx0XHRzaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHBhcnNlZCA9IChjb250ZW50ID09PSB0aGlzLmNvbnRlbnQpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG4gIFxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50LnJlcGxhY2UoL1xcXFwvLCBcIlxcXFxcXFxcXCIpLFxuICAgICAgICAgIHN0cmluZyA9IGBcIiR7Y29udGVudH1cImA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoVGVybWluYWxTeW1ib2xQYXJ0LCB0aGlzLmNvbnRlbnQpOyB9XG59XG4iXX0=