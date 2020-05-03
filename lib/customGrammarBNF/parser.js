"use strict";

var _parser = _interopRequireDefault(require("../bnf/parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CustomGrammarBNFParser = /*#__PURE__*/function (_BNFParser) {
  _inherits(CustomGrammarBNFParser, _BNFParser);

  function CustomGrammarBNFParser() {
    _classCallCheck(this, CustomGrammarBNFParser);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomGrammarBNFParser).apply(this, arguments));
  }

  _createClass(CustomGrammarBNFParser, null, [{
    key: "fromNothing",
    value: function fromNothing() {
      var bnfParser = _parser["default"].fromNothing(),
          rules = bnfParser.getRules(),
          customGrammarBNFParser = new CustomGrammarBNFParser(rules);

      return customGrammarBNFParser;
    }
  }]);

  return CustomGrammarBNFParser;
}(_parser["default"]);

module.exports = CustomGrammarBNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyQk5GUGFyc2VyIiwiYm5mUGFyc2VyIiwiQk5GUGFyc2VyIiwiZnJvbU5vdGhpbmciLCJydWxlcyIsImdldFJ1bGVzIiwiY3VzdG9tR3JhbW1hckJORlBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLHNCOzs7Ozs7Ozs7OztrQ0FDaUI7QUFDbkIsVUFBTUMsU0FBUyxHQUFHQyxtQkFBVUMsV0FBVixFQUFsQjtBQUFBLFVBQ01DLEtBQUssR0FBR0gsU0FBUyxDQUFDSSxRQUFWLEVBRGQ7QUFBQSxVQUVNQyxzQkFBc0IsR0FBRyxJQUFJTixzQkFBSixDQUEyQkksS0FBM0IsQ0FGL0I7O0FBSUEsYUFBT0Usc0JBQVA7QUFDRDs7OztFQVBrQ0osa0I7O0FBVXJDSyxNQUFNLENBQUNDLE9BQVAsR0FBaUJSLHNCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQk5GUGFyc2VyIGZyb20gXCIuLi9ibmYvcGFyc2VyXCI7XG5cbmNsYXNzIEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgZXh0ZW5kcyBCTkZQYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GUGFyc2VyID0gbmV3IEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXN0b21HcmFtbWFyQk5GUGFyc2VyO1xuIl19