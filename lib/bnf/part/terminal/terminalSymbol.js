"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _terminal = _interopRequireDefault(require("../../part/terminal"));

var _terminal2 = _interopRequireDefault(require("../../../common/node/terminal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    value: function parse(nodes, context, callback) {
      var terminalNode = null;
      var savedIndex = context.getSavedIndex(),
          nextSignificantToken = context.getNextSignificantToken(),
          significantToken = nextSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent();

        if (content === this.content) {
          terminalNode = _terminal2["default"].fromSignificantToken(significantToken);
        }
      }

      nodes = terminalNode === null ? null : [].concat(_toConsumableArray(nodes), [terminalNode]);

      if (nodes === null) {
        context.backtrack(savedIndex);
      }

      return nodes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsU3ltYm9sUGFydCIsImNvbnRlbnQiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInRlcm1pbmFsTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRDb250ZW50IiwiVGVybWluYWxOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJiYWNrdHJhY2siLCJyZXBsYWNlIiwic3RyaW5nIiwiVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGtCOzs7OztBQUNuQiw4QkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUFBOztBQUNuQjtBQUVBLFVBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUhtQjtBQUlwQjs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFEsRUFBVTtBQUM5QixVQUFJQyxZQUFZLEdBQUcsSUFBbkI7QUFFQSxVQUFNQyxVQUFVLEdBQUdILE9BQU8sQ0FBQ0ksYUFBUixFQUFuQjtBQUFBLFVBQ0lDLG9CQUFvQixHQUFHTCxPQUFPLENBQUNNLHVCQUFSLEVBRDNCO0FBQUEsVUFFQ0MsZ0JBQWdCLEdBQUdGLG9CQUZwQixDQUg4QixDQUtZOztBQUUxQyxVQUFJRSxnQkFBZ0IsS0FBSyxJQUF6QixFQUErQjtBQUM3QixZQUFNVCxPQUFPLEdBQUdTLGdCQUFnQixDQUFDQyxVQUFqQixFQUFoQjs7QUFFQSxZQUFJVixPQUFPLEtBQUssS0FBS0EsT0FBckIsRUFBOEI7QUFDNUJJLFVBQUFBLFlBQVksR0FBR08sc0JBQWFDLG9CQUFiLENBQWtDSCxnQkFBbEMsQ0FBZjtBQUNEO0FBQ0Y7O0FBRURSLE1BQUFBLEtBQUssR0FBSUcsWUFBWSxLQUFLLElBQWxCLEdBQ0UsSUFERixnQ0FFU0gsS0FGVCxJQUVnQkcsWUFGaEIsRUFBUjs7QUFJQSxVQUFJSCxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQkMsUUFBQUEsT0FBTyxDQUFDVyxTQUFSLENBQWtCUixVQUFsQjtBQUNEOztBQUVELGFBQU9KLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUQsT0FBTyxHQUFHLEtBQUtBLE9BQUwsQ0FBYWMsT0FBYixDQUFxQixJQUFyQixFQUEyQixNQUEzQixDQUFoQjtBQUFBLFVBQ01DLE1BQU0sZUFBT2YsT0FBUCxPQURaO0FBR0EsYUFBT2UsTUFBUDtBQUNEOzs7NEJBRU87QUFBRSwyRkFBbUJoQixrQkFBbkIsRUFBdUMsS0FBS0MsT0FBNUM7QUFBdUQ7Ozs7RUF4Q25CZ0Isb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiO1xuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybWluYWxTeW1ib2xQYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IoY29udGVudCkge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LmdldFNhdmVkSW5kZXgoKSxcblx0XHQgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSxcblx0XHRcdFx0XHRzaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgaWYgKGNvbnRlbnQgPT09IHRoaXMuY29udGVudCkge1xuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbm9kZXMgPSAodGVybWluYWxOb2RlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgIFsgLi4ubm9kZXMsIHRlcm1pbmFsTm9kZSBdO1xuXG4gICAgaWYgKG5vZGVzID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQucmVwbGFjZSgvXFxcXC8sIFwiXFxcXFxcXFxcIiksXG4gICAgICAgICAgc3RyaW5nID0gYFwiJHtjb250ZW50fVwiYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShUZXJtaW5hbFN5bWJvbFBhcnQsIHRoaXMuY29udGVudCk7IH1cbn1cbiJdfQ==