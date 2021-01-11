"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _terminal = _interopRequireDefault(require("../../part/terminal"));

var _terminal2 = _interopRequireDefault(require("../../../common/node/terminal"));

var _array = require("../../../utilities/array");

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

var RegularExpressionPart = /*#__PURE__*/function (_TerminalPart) {
  _inherits(RegularExpressionPart, _TerminalPart);

  var _super = _createSuper(RegularExpressionPart);

  function RegularExpressionPart(regularExpression) {
    var _this;

    _classCallCheck(this, RegularExpressionPart);

    _this = _super.call(this);
    _this.regularExpression = regularExpression;
    return _this;
  }

  _createClass(RegularExpressionPart, [{
    key: "parse",
    value: function parse(nodes, context, callback) {
      var parsed;
      var terminalNode = null;
      var savedIndex = context.getSavedIndex(),
          nextSignificantToken = context.getNextSignificantToken(),
          significantToken = nextSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            matches = content.match(this.regularExpression);

        if (matches !== null) {
          var firstMatch = (0, _array.first)(matches);

          if (firstMatch === content) {
            terminalNode = _terminal2["default"].fromSignificantToken(significantToken);
          }
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
      var regularExpressionString = this.regularExpression.toString(),
          string = regularExpressionString; ///

      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(RegularExpressionPart.prototype), "clone", this).call(this, RegularExpressionPart, this.regularExpression);
    }
  }]);

  return RegularExpressionPart;
}(_terminal["default"]);

exports["default"] = RegularExpressionPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlJlZ3VsYXJFeHByZXNzaW9uUGFydCIsInJlZ3VsYXJFeHByZXNzaW9uIiwibm9kZXMiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJwYXJzZWQiLCJ0ZXJtaW5hbE5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiVGVybWluYWxOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwicG9wIiwiYmFja3RyYWNrIiwicmVndWxhckV4cHJlc3Npb25TdHJpbmciLCJ0b1N0cmluZyIsInN0cmluZyIsIlRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxxQjs7Ozs7QUFDbkIsaUNBQVlDLGlCQUFaLEVBQStCO0FBQUE7O0FBQUE7O0FBQzdCO0FBRUEsVUFBS0EsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUg2QjtBQUk5Qjs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFEsRUFBVTtBQUM5QixVQUFJQyxNQUFKO0FBRUEsVUFBSUMsWUFBWSxHQUFHLElBQW5CO0FBRUEsVUFBTUMsVUFBVSxHQUFHSixPQUFPLENBQUNLLGFBQVIsRUFBbkI7QUFBQSxVQUNJQyxvQkFBb0IsR0FBR04sT0FBTyxDQUFDTyx1QkFBUixFQUQzQjtBQUFBLFVBRUNDLGdCQUFnQixHQUFHRixvQkFGcEIsQ0FMOEIsQ0FPWTs7QUFFMUMsVUFBSUUsZ0JBQWdCLEtBQUssSUFBekIsRUFBK0I7QUFDN0IsWUFBTUMsT0FBTyxHQUFHRCxnQkFBZ0IsQ0FBQ0UsVUFBakIsRUFBaEI7QUFBQSxZQUNNQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csS0FBUixDQUFjLEtBQUtkLGlCQUFuQixDQURoQjs7QUFHQSxZQUFJYSxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEIsY0FBTUUsVUFBVSxHQUFHLGtCQUFNRixPQUFOLENBQW5COztBQUVBLGNBQUlFLFVBQVUsS0FBS0osT0FBbkIsRUFBNEI7QUFDMUJOLFlBQUFBLFlBQVksR0FBR1csc0JBQWFDLG9CQUFiLENBQWtDUCxnQkFBbEMsQ0FBZjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRE4sTUFBQUEsTUFBTSxHQUFJQyxZQUFZLEtBQUssSUFBM0I7O0FBRUEsVUFBSUQsTUFBSixFQUFZO0FBQ1ZILFFBQUFBLEtBQUssQ0FBQ2lCLElBQU4sQ0FBV2IsWUFBWDs7QUFFQSxZQUFJRixRQUFKLEVBQWM7QUFDWkMsVUFBQUEsTUFBTSxHQUFHRCxRQUFRLEVBQWpCOztBQUVBLGNBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ1hILFlBQUFBLEtBQUssQ0FBQ2tCLEdBQU47QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsVUFBSSxDQUFDZixNQUFMLEVBQWE7QUFDWEYsUUFBQUEsT0FBTyxDQUFDa0IsU0FBUixDQUFrQmQsVUFBbEI7QUFDRDs7QUFFRCxhQUFPRixNQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1pQix1QkFBdUIsR0FBRyxLQUFLckIsaUJBQUwsQ0FBdUJzQixRQUF2QixFQUFoQztBQUFBLFVBQ0lDLE1BQU0sR0FBR0YsdUJBRGIsQ0FEUyxDQUU2Qjs7QUFFdEMsYUFBT0UsTUFBUDtBQUNEOzs7NEJBRU87QUFBRSw4RkFBbUJ4QixxQkFBbkIsRUFBMEMsS0FBS0MsaUJBQS9DO0FBQW9FOzs7O0VBekQ3QndCLG9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBUZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWd1bGFyRXhwcmVzc2lvblBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihyZWd1bGFyRXhwcmVzc2lvbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBwYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuZ2V0U2F2ZWRJbmRleCgpLFxuXHRcdCAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuXHRcdFx0XHRcdHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgICBpZiAoZmlyc3RNYXRjaCA9PT0gY29udGVudCkge1xuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlZCA9ICh0ZXJtaW5hbE5vZGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaCh0ZXJtaW5hbE5vZGUpO1xuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIG5vZGVzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblN0cmluZyA9IHRoaXMucmVndWxhckV4cHJlc3Npb24udG9TdHJpbmcoKSxcblx0XHQgICAgICBzdHJpbmcgPSByZWd1bGFyRXhwcmVzc2lvblN0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShSZWd1bGFyRXhwcmVzc2lvblBhcnQsIHRoaXMucmVndWxhckV4cHJlc3Npb24pOyB9XG59XG4iXX0=