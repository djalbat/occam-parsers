"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require("occam-lexers");

var TerminalPart = require("../../part/terminal"),
    NoWhitespaceNode = require("../../../common/node/terminal/noWhitespace");

var specialSymbols = lexers.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var NoWhitespacePart = /*#__PURE__*/function (_TerminalPart) {
  _inherits(NoWhitespacePart, _TerminalPart);

  function NoWhitespacePart() {
    _classCallCheck(this, NoWhitespacePart);

    return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespacePart).apply(this, arguments));
  }

  _createClass(NoWhitespacePart, [{
    key: "parse",
    value: function parse(configuration) {
      var noWhitespaceNode = null;
      var savedIndex = configuration.getSavedIndex(),
          nextToken = configuration.getNextToken(),
          token = nextToken; ///

      if (token !== null) {
        var tokenWhitespaceToken = token.isWhitespaceToken();

        if (!tokenWhitespaceToken) {
          noWhitespaceNode = NoWhitespaceNode.fromNothing();
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
}(TerminalPart);

module.exports = NoWhitespacePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vV2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiVGVybWluYWxQYXJ0IiwiTm9XaGl0ZXNwYWNlTm9kZSIsInNwZWNpYWxTeW1ib2xzIiwiTk9fV0hJVEVTUEFDRSIsIk5vV2hpdGVzcGFjZVBhcnQiLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFRva2VuIiwiZ2V0TmV4dFRva2VuIiwidG9rZW4iLCJ0b2tlbldoaXRlc3BhY2VUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwiZnJvbU5vdGhpbmciLCJiYWNrdHJhY2siLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxZQUFZLEdBQUdELE9BQU8sQ0FBQyxxQkFBRCxDQUE1QjtBQUFBLElBQ01FLGdCQUFnQixHQUFHRixPQUFPLENBQUMsNENBQUQsQ0FEaEM7O0FBR00sSUFBRUcsY0FBRixHQUFxQkosTUFBckIsQ0FBRUksY0FBRjtBQUFBLElBQ0VDLGFBREYsR0FDb0JELGNBRHBCLENBQ0VDLGFBREY7O0lBR0FDLGdCOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlO0FBQ25CLFVBQUlDLGdCQUFnQixHQUFHLElBQXZCO0FBRUEsVUFBTUMsVUFBVSxHQUFHRixhQUFhLENBQUNHLGFBQWQsRUFBbkI7QUFBQSxVQUNNQyxTQUFTLEdBQUdKLGFBQWEsQ0FBQ0ssWUFBZCxFQURsQjtBQUFBLFVBRU1DLEtBQUssR0FBR0YsU0FGZCxDQUhtQixDQUtNOztBQUV6QixVQUFJRSxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixZQUFNQyxvQkFBb0IsR0FBR0QsS0FBSyxDQUFDRSxpQkFBTixFQUE3Qjs7QUFFQSxZQUFJLENBQUNELG9CQUFMLEVBQTJCO0FBQ3pCTixVQUFBQSxnQkFBZ0IsR0FBR0wsZ0JBQWdCLENBQUNhLFdBQWpCLEVBQW5CO0FBQ0Q7QUFDRjs7QUFFRFQsTUFBQUEsYUFBYSxDQUFDVSxTQUFkLENBQXdCUixVQUF4QjtBQUVBLGFBQU9ELGdCQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1VLE1BQU0sR0FBR2IsYUFBZixDQURTLENBQ3FCOztBQUU5QixhQUFPYSxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLHlGQUFtQlosZ0JBQW5CO0FBQXVDOzs7O0VBM0JwQkosWTs7QUE4Qi9CaUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZCxnQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZShcIm9jY2FtLWxleGVyc1wiKTtcblxuY29uc3QgVGVybWluYWxQYXJ0ID0gcmVxdWlyZShcIi4uLy4uL3BhcnQvdGVybWluYWxcIiksXG4gICAgICBOb1doaXRlc3BhY2VOb2RlID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsL25vV2hpdGVzcGFjZVwiKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyBOT19XSElURVNQQUNFIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgTm9XaGl0ZXNwYWNlUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgbm9XaGl0ZXNwYWNlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dFRva2VuID0gY29uZmlndXJhdGlvbi5nZXROZXh0VG9rZW4oKSxcbiAgICAgICAgICB0b2tlbiA9IG5leHRUb2tlbjsgLy8vXG5cbiAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRva2VuV2hpdGVzcGFjZVRva2VuID0gdG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcblxuICAgICAgaWYgKCF0b2tlbldoaXRlc3BhY2VUb2tlbikge1xuICAgICAgICBub1doaXRlc3BhY2VOb2RlID0gTm9XaGl0ZXNwYWNlTm9kZS5mcm9tTm90aGluZygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBOT19XSElURVNQQUNFOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKE5vV2hpdGVzcGFjZVBhcnQpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9XaGl0ZXNwYWNlUGFydDtcbiJdfQ==