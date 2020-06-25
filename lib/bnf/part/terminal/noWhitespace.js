"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _terminal = _interopRequireDefault(require("../../part/terminal"));

var _noWhitespace = _interopRequireDefault(require("../../../common/node/terminal/noWhitespace"));

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

var NO_WHITESPACE = _occamLexers.specialSymbols.NO_WHITESPACE;

var NoWhitespacePart = /*#__PURE__*/function (_TerminalPart) {
  _inherits(NoWhitespacePart, _TerminalPart);

  var _super = _createSuper(NoWhitespacePart);

  function NoWhitespacePart() {
    _classCallCheck(this, NoWhitespacePart);

    return _super.apply(this, arguments);
  }

  _createClass(NoWhitespacePart, [{
    key: "isNoWhitespacePart",
    value: function isNoWhitespacePart() {
      var noWhitespacePart = true;
      return noWhitespacePart;
    }
  }, {
    key: "parse",
    value: function parse(context) {
      var noWhitespaceNode = null;
      var savedIndex = context.getSavedIndex(),
          nextToken = context.getNextToken(),
          token = nextToken; ///

      if (token !== null) {
        var tokenWhitespaceToken = token.isWhitespaceToken();

        if (!tokenWhitespaceToken) {
          noWhitespaceNode = _noWhitespace["default"].fromNothing();
        }
      }

      context.backtrack(savedIndex);
      return noWhitespaceNode;
    }
  }, {
    key: "asString",
    value: function asString() {
      var string = NO_WHITESPACE; ///

      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(NoWhitespacePart.prototype), "clone", this).call(this, NoWhitespacePart);
    }
  }]);

  return NoWhitespacePart;
}(_terminal["default"]);

exports["default"] = NoWhitespacePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vV2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJOT19XSElURVNQQUNFIiwic3BlY2lhbFN5bWJvbHMiLCJOb1doaXRlc3BhY2VQYXJ0Iiwibm9XaGl0ZXNwYWNlUGFydCIsImNvbnRleHQiLCJub1doaXRlc3BhY2VOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0VG9rZW4iLCJnZXROZXh0VG9rZW4iLCJ0b2tlbiIsInRva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJOb1doaXRlc3BhY2VOb2RlIiwiZnJvbU5vdGhpbmciLCJiYWNrdHJhY2siLCJzdHJpbmciLCJUZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxhLEdBQWtCQywyQixDQUFsQkQsYTs7SUFFYUUsZ0I7Ozs7Ozs7Ozs7Ozs7eUNBQ0U7QUFDbkIsVUFBTUMsZ0JBQWdCLEdBQUcsSUFBekI7QUFFQSxhQUFPQSxnQkFBUDtBQUNEOzs7MEJBRUtDLE8sRUFBUztBQUNiLFVBQUlDLGdCQUFnQixHQUFHLElBQXZCO0FBRUEsVUFBTUMsVUFBVSxHQUFHRixPQUFPLENBQUNHLGFBQVIsRUFBbkI7QUFBQSxVQUNNQyxTQUFTLEdBQUdKLE9BQU8sQ0FBQ0ssWUFBUixFQURsQjtBQUFBLFVBRU1DLEtBQUssR0FBR0YsU0FGZCxDQUhhLENBS1k7O0FBRXpCLFVBQUlFLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCLFlBQU1DLG9CQUFvQixHQUFHRCxLQUFLLENBQUNFLGlCQUFOLEVBQTdCOztBQUVBLFlBQUksQ0FBQ0Qsb0JBQUwsRUFBMkI7QUFDekJOLFVBQUFBLGdCQUFnQixHQUFHUSx5QkFBaUJDLFdBQWpCLEVBQW5CO0FBQ0Q7QUFDRjs7QUFFRFYsTUFBQUEsT0FBTyxDQUFDVyxTQUFSLENBQWtCVCxVQUFsQjtBQUVBLGFBQU9ELGdCQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1XLE1BQU0sR0FBR2hCLGFBQWYsQ0FEUyxDQUNxQjs7QUFFOUIsYUFBT2dCLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUseUZBQW1CZCxnQkFBbkI7QUFBdUM7Ozs7RUFqQ0xlLG9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlTm9kZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwvbm9XaGl0ZXNwYWNlXCI7XG5cbmNvbnN0IHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vV2hpdGVzcGFjZVBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBpc05vV2hpdGVzcGFjZVBhcnQoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlUGFydCA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlUGFydDtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQpIHtcbiAgICBsZXQgbm9XaGl0ZXNwYWNlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dFRva2VuID0gY29udGV4dC5nZXROZXh0VG9rZW4oKSxcbiAgICAgICAgICB0b2tlbiA9IG5leHRUb2tlbjsgLy8vXG5cbiAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRva2VuV2hpdGVzcGFjZVRva2VuID0gdG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcblxuICAgICAgaWYgKCF0b2tlbldoaXRlc3BhY2VUb2tlbikge1xuICAgICAgICBub1doaXRlc3BhY2VOb2RlID0gTm9XaGl0ZXNwYWNlTm9kZS5mcm9tTm90aGluZygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBOT19XSElURVNQQUNFOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKE5vV2hpdGVzcGFjZVBhcnQpOyB9XG59XG4iXX0=