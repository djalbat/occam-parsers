'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BNFParser = require('../bnf/parser');

var CustomGrammarBNFParser = function (_BNFParser) {
  _inherits(CustomGrammarBNFParser, _BNFParser);

  function CustomGrammarBNFParser() {
    _classCallCheck(this, CustomGrammarBNFParser);

    return _possibleConstructorReturn(this, (CustomGrammarBNFParser.__proto__ || Object.getPrototypeOf(CustomGrammarBNFParser)).apply(this, arguments));
  }

  _createClass(CustomGrammarBNFParser, null, [{
    key: 'fromNothing',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jdXN0b21HcmFtbWFyQk5GL3BhcnNlci5qcyJdLCJuYW1lcyI6WyJCTkZQYXJzZXIiLCJyZXF1aXJlIiwiQ3VzdG9tR3JhbW1hckJORlBhcnNlciIsImJuZlBhcnNlciIsImZyb21Ob3RoaW5nIiwicnVsZXMiLCJnZXRSdWxlcyIsImN1c3RvbUdyYW1tYXJCTkZQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsZUFBUixDQUFsQjs7SUFFTUMsc0I7Ozs7Ozs7Ozs7O2tDQUNpQjtBQUNuQixVQUFNQyxZQUFZSCxVQUFVSSxXQUFWLEVBQWxCO0FBQUEsVUFDTUMsUUFBUUYsVUFBVUcsUUFBVixFQURkO0FBQUEsVUFFTUMseUJBQXlCLElBQUlMLHNCQUFKLENBQTJCRyxLQUEzQixDQUYvQjs7QUFJQSxhQUFPRSxzQkFBUDtBQUNEOzs7O0VBUGtDUCxTOztBQVVyQ1EsT0FBT0MsT0FBUCxHQUFpQlAsc0JBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpO1xuXG5jbGFzcyBDdXN0b21HcmFtbWFyQk5GUGFyc2VyIGV4dGVuZHMgQk5GUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLmdldFJ1bGVzKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckJORlBhcnNlciA9IG5ldyBDdXN0b21HcmFtbWFyQk5GUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyQk5GUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3VzdG9tR3JhbW1hckJORlBhcnNlcjtcbiJdfQ==