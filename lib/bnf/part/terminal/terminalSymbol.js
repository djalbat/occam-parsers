"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _terminal = _interopRequireDefault(require("../../part/terminal"));

var _terminal2 = _interopRequireDefault(require("../../../common/node/terminal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      var parsed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsU3ltYm9sUGFydCIsImNvbnRlbnQiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInBhcnNlZCIsInRlcm1pbmFsTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRDb250ZW50IiwiVGVybWluYWxOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwicG9wIiwiYmFja3RyYWNrIiwicmVwbGFjZSIsInN0cmluZyIsIlRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxrQjs7Ozs7QUFDbkIsOEJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFBQTs7QUFDbkI7QUFFQSxVQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFIbUI7QUFJcEI7Ozs7MEJBRUtDLEssRUFBT0MsTyxFQUFTQyxRLEVBQVU7QUFDOUIsVUFBSUMsTUFBSjtBQUVBLFVBQUlDLFlBQVksR0FBRyxJQUFuQjtBQUVBLFVBQU1DLFVBQVUsR0FBR0osT0FBTyxDQUFDSyxhQUFSLEVBQW5CO0FBQUEsVUFDSUMsb0JBQW9CLEdBQUdOLE9BQU8sQ0FBQ08sdUJBQVIsRUFEM0I7QUFBQSxVQUVDQyxnQkFBZ0IsR0FBR0Ysb0JBRnBCLENBTDhCLENBT1k7O0FBRTFDLFVBQUlFLGdCQUFnQixLQUFLLElBQXpCLEVBQStCO0FBQzdCLFlBQU1WLE9BQU8sR0FBR1UsZ0JBQWdCLENBQUNDLFVBQWpCLEVBQWhCOztBQUVBLFlBQUlYLE9BQU8sS0FBSyxLQUFLQSxPQUFyQixFQUE4QjtBQUM1QkssVUFBQUEsWUFBWSxHQUFHTyxzQkFBYUMsb0JBQWIsQ0FBa0NILGdCQUFsQyxDQUFmO0FBQ0Q7QUFDRjs7QUFFRE4sTUFBQUEsTUFBTSxHQUFJQyxZQUFZLEtBQUssSUFBM0I7O0FBRUEsVUFBSUQsTUFBSixFQUFZO0FBQ1ZILFFBQUFBLEtBQUssQ0FBQ2EsSUFBTixDQUFXVCxZQUFYOztBQUVBLFlBQUlGLFFBQUosRUFBYztBQUNaQyxVQUFBQSxNQUFNLEdBQUdELFFBQVEsRUFBakI7O0FBRUEsY0FBSSxDQUFDQyxNQUFMLEVBQWE7QUFDWEgsWUFBQUEsS0FBSyxDQUFDYyxHQUFOO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFVBQUksQ0FBQ1gsTUFBTCxFQUFhO0FBQ1hGLFFBQUFBLE9BQU8sQ0FBQ2MsU0FBUixDQUFrQlYsVUFBbEI7QUFDRDs7QUFFRCxhQUFPRixNQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1KLE9BQU8sR0FBRyxLQUFLQSxPQUFMLENBQWFpQixPQUFiLENBQXFCLElBQXJCLEVBQTJCLE1BQTNCLENBQWhCO0FBQUEsVUFDTUMsTUFBTSxlQUFPbEIsT0FBUCxPQURaO0FBR0EsYUFBT2tCLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsMkZBQW1CbkIsa0JBQW5CLEVBQXVDLEtBQUtDLE9BQTVDO0FBQXVEOzs7O0VBcERuQm1CLG9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBUZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsU3ltYm9sUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcbiAgICBzdXBlcigpO1xuICAgIFxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBwYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuZ2V0U2F2ZWRJbmRleCgpLFxuXHRcdCAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuXHRcdFx0XHRcdHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBpZiAoY29udGVudCA9PT0gdGhpcy5jb250ZW50KSB7XG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZWQgPSAodGVybWluYWxOb2RlICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIG5vZGVzLnB1c2godGVybWluYWxOb2RlKTtcblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG4gIFxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50LnJlcGxhY2UoL1xcXFwvLCBcIlxcXFxcXFxcXCIpLFxuICAgICAgICAgIHN0cmluZyA9IGBcIiR7Y29udGVudH1cImA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoVGVybWluYWxTeW1ib2xQYXJ0LCB0aGlzLmNvbnRlbnQpOyB9XG59XG4iXX0=