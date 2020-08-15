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

var SignificantTokenTypePart = /*#__PURE__*/function (_TerminalPart) {
  _inherits(SignificantTokenTypePart, _TerminalPart);

  var _super = _createSuper(SignificantTokenTypePart);

  function SignificantTokenTypePart(significantTokenType) {
    var _this;

    _classCallCheck(this, SignificantTokenTypePart);

    _this = _super.call(this);
    _this.significantTokenType = significantTokenType;
    return _this;
  }

  _createClass(SignificantTokenTypePart, [{
    key: "parse",
    value: function parse(nodes, context, callback) {
      var parsed;
      var terminalNode = null;
      var savedIndex = context.getSavedIndex(),
          nextSignificantToken = context.getNextSignificantToken(),
          significantToken = nextSignificantToken; ///

      if (significantToken !== null) {
        var significantTokenType = significantToken.getType();

        if (significantTokenType === this.significantTokenType) {
          terminalNode = _terminal2["default"].fromSignificantToken(significantToken);
        }
      }

      parsed = terminalNode !== null;

      if (parsed) {
        nodes.push(terminalNode);

        if (callback) {
          parsed = callback();

          if (!parsed) {
            nodes.pop();
          }
        }
      }

      if (!parsed) {
        context.backtrack(savedIndex);
      }

      return parsed;
    }
  }, {
    key: "asString",
    value: function asString() {
      var string = "[".concat(this.significantTokenType, "]");
      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(SignificantTokenTypePart.prototype), "clone", this).call(this, SignificantTokenTypePart, this.significantTokenType);
    }
  }]);

  return SignificantTokenTypePart;
}(_terminal["default"]);

exports["default"] = SignificantTokenTypePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwibm9kZXMiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJwYXJzZWQiLCJ0ZXJtaW5hbE5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0VHlwZSIsIlRlcm1pbmFsTm9kZSIsImZyb21TaWduaWZpY2FudFRva2VuIiwicHVzaCIsInBvcCIsImJhY2t0cmFjayIsInN0cmluZyIsIlRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSx3Qjs7Ozs7QUFDbkIsb0NBQVlDLG9CQUFaLEVBQWtDO0FBQUE7O0FBQUE7O0FBQ2hDO0FBRUEsVUFBS0Esb0JBQUwsR0FBNEJBLG9CQUE1QjtBQUhnQztBQUlqQzs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFEsRUFBVTtBQUM5QixVQUFJQyxNQUFKO0FBRUEsVUFBSUMsWUFBWSxHQUFHLElBQW5CO0FBRUEsVUFBTUMsVUFBVSxHQUFHSixPQUFPLENBQUNLLGFBQVIsRUFBbkI7QUFBQSxVQUNJQyxvQkFBb0IsR0FBR04sT0FBTyxDQUFDTyx1QkFBUixFQUQzQjtBQUFBLFVBRUNDLGdCQUFnQixHQUFHRixvQkFGcEIsQ0FMOEIsQ0FPWTs7QUFFMUMsVUFBSUUsZ0JBQWdCLEtBQUssSUFBekIsRUFBK0I7QUFDN0IsWUFBTVYsb0JBQW9CLEdBQUdVLGdCQUFnQixDQUFDQyxPQUFqQixFQUE3Qjs7QUFFQSxZQUFJWCxvQkFBb0IsS0FBSyxLQUFLQSxvQkFBbEMsRUFBd0Q7QUFDdERLLFVBQUFBLFlBQVksR0FBR08sc0JBQWFDLG9CQUFiLENBQWtDSCxnQkFBbEMsQ0FBZjtBQUNEO0FBQ0Y7O0FBRUROLE1BQUFBLE1BQU0sR0FBSUMsWUFBWSxLQUFLLElBQTNCOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWSCxRQUFBQSxLQUFLLENBQUNhLElBQU4sQ0FBV1QsWUFBWDs7QUFFQSxZQUFJRixRQUFKLEVBQWM7QUFDWkMsVUFBQUEsTUFBTSxHQUFHRCxRQUFRLEVBQWpCOztBQUVBLGNBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ1hILFlBQUFBLEtBQUssQ0FBQ2MsR0FBTjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxVQUFJLENBQUNYLE1BQUwsRUFBYTtBQUNYRixRQUFBQSxPQUFPLENBQUNjLFNBQVIsQ0FBa0JWLFVBQWxCO0FBQ0Q7O0FBRUQsYUFBT0YsTUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNYSxNQUFNLGNBQU8sS0FBS2pCLG9CQUFaLE1BQVo7QUFFQSxhQUFPaUIsTUFBUDtBQUNEOzs7NEJBRU87QUFBRSxpR0FBbUJsQix3QkFBbkIsRUFBNkMsS0FBS0Msb0JBQWxEO0FBQTBFOzs7O0VBbkRoQ2tCLG9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBUZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gIH1cblxuICBwYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuZ2V0U2F2ZWRJbmRleCgpLFxuXHRcdCAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuXHRcdFx0XHRcdHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5UeXBlID09PSB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZWQgPSAodGVybWluYWxOb2RlICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIG5vZGVzLnB1c2godGVybWluYWxOb2RlKTtcblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYFske3RoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGV9XWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0LCB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlKTsgfVxufVxuIl19