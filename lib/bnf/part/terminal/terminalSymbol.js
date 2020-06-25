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
      var savedIndex = context.getSavedIndex(),
          nextSignificantToken = context.getNextSignificantToken(),
          significantToken = nextSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            parsed = content === this.content;

        if (parsed) {
          terminalNode = _terminal2["default"].fromSignificantToken(significantToken);
        }
      }

      if (terminalNode === null) {
        context.backtrack(savedIndex);
      }

      return terminalNode;
    }
  }, {
    key: "asString",
    value: function asString() {
      var string = "\"".concat(this.content, "\"");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsU3ltYm9sUGFydCIsImNvbnRlbnQiLCJjb250ZXh0IiwidGVybWluYWxOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldENvbnRlbnQiLCJwYXJzZWQiLCJUZXJtaW5hbE5vZGUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsImJhY2t0cmFjayIsInN0cmluZyIsIlRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxrQjs7Ozs7QUFDbkIsOEJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFBQTs7QUFDbkI7QUFFQSxVQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFIbUI7QUFJcEI7Ozs7MEJBRUtDLE8sRUFBUztBQUNiLFVBQUlDLFlBQVksR0FBRyxJQUFuQjtBQUVBLFVBQU1DLFVBQVUsR0FBR0YsT0FBTyxDQUFDRyxhQUFSLEVBQW5CO0FBQUEsVUFDSUMsb0JBQW9CLEdBQUdKLE9BQU8sQ0FBQ0ssdUJBQVIsRUFEM0I7QUFBQSxVQUVDQyxnQkFBZ0IsR0FBR0Ysb0JBRnBCLENBSGEsQ0FLNkI7O0FBRTFDLFVBQUlFLGdCQUFnQixLQUFLLElBQXpCLEVBQStCO0FBQzdCLFlBQU1QLE9BQU8sR0FBR08sZ0JBQWdCLENBQUNDLFVBQWpCLEVBQWhCO0FBQUEsWUFDTUMsTUFBTSxHQUFJVCxPQUFPLEtBQUssS0FBS0EsT0FEakM7O0FBR0EsWUFBSVMsTUFBSixFQUFZO0FBQ1ZQLFVBQUFBLFlBQVksR0FBR1Esc0JBQWFDLG9CQUFiLENBQWtDSixnQkFBbEMsQ0FBZjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUwsWUFBWSxLQUFLLElBQXJCLEVBQTJCO0FBQ3pCRCxRQUFBQSxPQUFPLENBQUNXLFNBQVIsQ0FBa0JULFVBQWxCO0FBQ0Q7O0FBRUQsYUFBT0QsWUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNVyxNQUFNLGVBQU8sS0FBS2IsT0FBWixPQUFaO0FBRUEsYUFBT2EsTUFBUDtBQUNEOzs7NEJBRU87QUFBRSwyRkFBbUJkLGtCQUFuQixFQUF1QyxLQUFLQyxPQUE1QztBQUF1RDs7OztFQXBDbkJjLG9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBUZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsU3ltYm9sUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcbiAgICBzdXBlcigpO1xuICAgIFxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBwYXJzZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuZ2V0U2F2ZWRJbmRleCgpLFxuXHRcdCAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuXHRcdFx0XHRcdHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgcGFyc2VkID0gKGNvbnRlbnQgPT09IHRoaXMuY29udGVudCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbiAgXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGBcIiR7dGhpcy5jb250ZW50fVwiYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShUZXJtaW5hbFN5bWJvbFBhcnQsIHRoaXMuY29udGVudCk7IH1cbn1cbiJdfQ==