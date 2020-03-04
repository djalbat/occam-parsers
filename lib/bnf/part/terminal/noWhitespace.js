'use strict';

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

var lexers = require('occam-lexers');

var TerminalPart = require('../../part/terminal'),
    NoWhitespaceNode = require('../../../common/node/terminal/noWhitespace');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vV2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiVGVybWluYWxQYXJ0IiwiTm9XaGl0ZXNwYWNlTm9kZSIsInNwZWNpYWxTeW1ib2xzIiwiTk9fV0hJVEVTUEFDRSIsIk5vV2hpdGVzcGFjZVBhcnQiLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFRva2VuIiwiZ2V0TmV4dFRva2VuIiwidG9rZW4iLCJ0b2tlbldoaXRlc3BhY2VUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwiZnJvbU5vdGhpbmciLCJiYWNrdHJhY2siLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxZQUFZLEdBQUdELE9BQU8sQ0FBQyxxQkFBRCxDQUE1QjtBQUFBLElBQ01FLGdCQUFnQixHQUFHRixPQUFPLENBQUMsNENBQUQsQ0FEaEM7O0FBR00sSUFBRUcsY0FBRixHQUFxQkosTUFBckIsQ0FBRUksY0FBRjtBQUFBLElBQ0VDLGFBREYsR0FDb0JELGNBRHBCLENBQ0VDLGFBREY7O0lBR0FDLGdCOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlO0FBQ25CLFVBQUlDLGdCQUFnQixHQUFHLElBQXZCO0FBRUEsVUFBTUMsVUFBVSxHQUFHRixhQUFhLENBQUNHLGFBQWQsRUFBbkI7QUFBQSxVQUNNQyxTQUFTLEdBQUdKLGFBQWEsQ0FBQ0ssWUFBZCxFQURsQjtBQUFBLFVBRU1DLEtBQUssR0FBR0YsU0FGZCxDQUhtQixDQUtNOztBQUV6QixVQUFJRSxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixZQUFNQyxvQkFBb0IsR0FBR0QsS0FBSyxDQUFDRSxpQkFBTixFQUE3Qjs7QUFFQSxZQUFJLENBQUNELG9CQUFMLEVBQTJCO0FBQ3pCTixVQUFBQSxnQkFBZ0IsR0FBR0wsZ0JBQWdCLENBQUNhLFdBQWpCLEVBQW5CO0FBQ0Q7QUFDRjs7QUFFRFQsTUFBQUEsYUFBYSxDQUFDVSxTQUFkLENBQXdCUixVQUF4QjtBQUVBLGFBQU9ELGdCQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1VLE1BQU0sR0FBR2IsYUFBZixDQURTLENBQ3FCOztBQUU5QixhQUFPYSxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLHlGQUFtQlosZ0JBQW5CO0FBQXVDOzs7O0VBM0JwQkosWTs7QUE4Qi9CaUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZCxnQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBUZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L3Rlcm1pbmFsJyksXG4gICAgICBOb1doaXRlc3BhY2VOb2RlID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwvbm9XaGl0ZXNwYWNlJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIE5vV2hpdGVzcGFjZVBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IG5vV2hpdGVzcGFjZU5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbmZpZ3VyYXRpb24uZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5leHRUb2tlbiA9IGNvbmZpZ3VyYXRpb24uZ2V0TmV4dFRva2VuKCksXG4gICAgICAgICAgdG9rZW4gPSBuZXh0VG9rZW47IC8vL1xuXG4gICAgaWYgKHRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0b2tlbldoaXRlc3BhY2VUb2tlbiA9IHRva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG5cbiAgICAgIGlmICghdG9rZW5XaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgbm9XaGl0ZXNwYWNlTm9kZSA9IE5vV2hpdGVzcGFjZU5vZGUuZnJvbU5vdGhpbmcoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWd1cmF0aW9uLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VOb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gTk9fV0hJVEVTUEFDRTsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShOb1doaXRlc3BhY2VQYXJ0KTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vV2hpdGVzcGFjZVBhcnQ7XG4iXX0=