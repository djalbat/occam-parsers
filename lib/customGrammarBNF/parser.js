"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BNFParser = require("../bnf/parser");

var CustomGrammarBNFParser = /*#__PURE__*/function (_BNFParser) {
  _inherits(CustomGrammarBNFParser, _BNFParser);

  function CustomGrammarBNFParser() {
    _classCallCheck(this, CustomGrammarBNFParser);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomGrammarBNFParser).apply(this, arguments));
  }

  _createClass(CustomGrammarBNFParser, null, [{
    key: "fromNothing",
    value: function fromNothing() {
      var bnfParser = BNFParser.fromNothing(),
          rules = bnfParser.getRules(),
          customGrammarBNFParser = new CustomGrammarBNFParser(rules);
      return customGrammarBNFParser;
    }
  }]);

  return CustomGrammarBNFParser;
}(BNFParser);

module.exports = CustomGrammarBNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJCTkZQYXJzZXIiLCJyZXF1aXJlIiwiQ3VzdG9tR3JhbW1hckJORlBhcnNlciIsImJuZlBhcnNlciIsImZyb21Ob3RoaW5nIiwicnVsZXMiLCJnZXRSdWxlcyIsImN1c3RvbUdyYW1tYXJCTkZQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQXpCOztJQUVNQyxzQjs7Ozs7Ozs7Ozs7a0NBQ2lCO0FBQ25CLFVBQU1DLFNBQVMsR0FBR0gsU0FBUyxDQUFDSSxXQUFWLEVBQWxCO0FBQUEsVUFDTUMsS0FBSyxHQUFHRixTQUFTLENBQUNHLFFBQVYsRUFEZDtBQUFBLFVBRU1DLHNCQUFzQixHQUFHLElBQUlMLHNCQUFKLENBQTJCRyxLQUEzQixDQUYvQjtBQUlBLGFBQU9FLHNCQUFQO0FBQ0Q7Ozs7RUFQa0NQLFM7O0FBVXJDUSxNQUFNLENBQUNDLE9BQVAsR0FBaUJQLHNCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBCTkZQYXJzZXIgPSByZXF1aXJlKFwiLi4vYm5mL3BhcnNlclwiKTtcblxuY2xhc3MgQ3VzdG9tR3JhbW1hckJORlBhcnNlciBleHRlbmRzIEJORlBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5nZXRSdWxlcygpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgPSBuZXcgQ3VzdG9tR3JhbW1hckJORlBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckJORlBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN1c3RvbUdyYW1tYXJCTkZQYXJzZXI7XG4iXX0=