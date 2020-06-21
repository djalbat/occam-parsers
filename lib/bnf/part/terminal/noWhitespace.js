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
    value: function parse(configuration) {
      var noWhitespaceNode = null;
      var savedIndex = configuration.getSavedIndex(),
          nextToken = configuration.getNextToken(),
          token = nextToken; ///

      if (token !== null) {
        var tokenWhitespaceToken = token.isWhitespaceToken();

        if (!tokenWhitespaceToken) {
          noWhitespaceNode = _noWhitespace["default"].fromNothing();
        }
      }

      configuration.backtrack(savedIndex);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vV2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJOT19XSElURVNQQUNFIiwic3BlY2lhbFN5bWJvbHMiLCJOb1doaXRlc3BhY2VQYXJ0Iiwibm9XaGl0ZXNwYWNlUGFydCIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2VOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0VG9rZW4iLCJnZXROZXh0VG9rZW4iLCJ0b2tlbiIsInRva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJOb1doaXRlc3BhY2VOb2RlIiwiZnJvbU5vdGhpbmciLCJiYWNrdHJhY2siLCJzdHJpbmciLCJUZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxhLEdBQWtCQywyQixDQUFsQkQsYTs7SUFFYUUsZ0I7Ozs7Ozs7Ozs7Ozs7eUNBQ0U7QUFDbkIsVUFBTUMsZ0JBQWdCLEdBQUcsSUFBekI7QUFFQSxhQUFPQSxnQkFBUDtBQUNEOzs7MEJBRUtDLGEsRUFBZTtBQUNuQixVQUFJQyxnQkFBZ0IsR0FBRyxJQUF2QjtBQUVBLFVBQU1DLFVBQVUsR0FBR0YsYUFBYSxDQUFDRyxhQUFkLEVBQW5CO0FBQUEsVUFDTUMsU0FBUyxHQUFHSixhQUFhLENBQUNLLFlBQWQsRUFEbEI7QUFBQSxVQUVNQyxLQUFLLEdBQUdGLFNBRmQsQ0FIbUIsQ0FLTTs7QUFFekIsVUFBSUUsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsWUFBTUMsb0JBQW9CLEdBQUdELEtBQUssQ0FBQ0UsaUJBQU4sRUFBN0I7O0FBRUEsWUFBSSxDQUFDRCxvQkFBTCxFQUEyQjtBQUN6Qk4sVUFBQUEsZ0JBQWdCLEdBQUdRLHlCQUFpQkMsV0FBakIsRUFBbkI7QUFDRDtBQUNGOztBQUVEVixNQUFBQSxhQUFhLENBQUNXLFNBQWQsQ0FBd0JULFVBQXhCO0FBRUEsYUFBT0QsZ0JBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVcsTUFBTSxHQUFHaEIsYUFBZixDQURTLENBQ3FCOztBQUU5QixhQUFPZ0IsTUFBUDtBQUNEOzs7NEJBRU87QUFBRSx5RkFBbUJkLGdCQUFuQjtBQUF1Qzs7OztFQWpDTGUsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VOb2RlIGZyb20gXCIuLi8uLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbC9ub1doaXRlc3BhY2VcIjtcblxuY29uc3QgeyBOT19XSElURVNQQUNFIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9XaGl0ZXNwYWNlUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIGlzTm9XaGl0ZXNwYWNlUGFydCgpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VQYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VQYXJ0O1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbikge1xuICAgIGxldCBub1doaXRlc3BhY2VOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb25maWd1cmF0aW9uLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0VG9rZW4gPSBjb25maWd1cmF0aW9uLmdldE5leHRUb2tlbigpLFxuICAgICAgICAgIHRva2VuID0gbmV4dFRva2VuOyAvLy9cblxuICAgIGlmICh0b2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSB0b2tlbi5pc1doaXRlc3BhY2VUb2tlbigpO1xuXG4gICAgICBpZiAoIXRva2VuV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICAgIG5vV2hpdGVzcGFjZU5vZGUgPSBOb1doaXRlc3BhY2VOb2RlLmZyb21Ob3RoaW5nKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlTm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IE5PX1dISVRFU1BBQ0U7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoTm9XaGl0ZXNwYWNlUGFydCk7IH1cbn1cbiJdfQ==