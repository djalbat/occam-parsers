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

var lexers = require("occam-lexers");

var bnf = require("./bnf"),
    BNFParser = require("../bnf/parser"),
    CommonParser = require("../common/parser");

var BNFLexer = lexers.BNFLexer;
var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing();

var BasicParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(BasicParser, _CommonParser);

  function BasicParser() {
    _classCallCheck(this, BasicParser);

    return _possibleConstructorReturn(this, _getPrototypeOf(BasicParser).apply(this, arguments));
  }

  _createClass(BasicParser, null, [{
    key: "fromBNF",
    value: function fromBNF(bnf) {
      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          basicParser = new BasicParser(rules);
      return basicParser;
    }
  }, {
    key: "fromRules",
    value: function fromRules(rules) {
      var basicParser = new BasicParser(rules);
      return basicParser;
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      var basicParser = BasicParser.fromBNF(bnf);
      return basicParser;
    }
  }]);

  return BasicParser;
}(CommonParser);

Object.assign(BasicParser, {
  bnf: bnf
});
module.exports = BasicParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiYm5mIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiQk5GTGV4ZXIiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQmFzaWNQYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJiYXNpY1BhcnNlciIsImZyb21CTkYiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXRCOztBQUVBLElBQU1DLEdBQUcsR0FBR0QsT0FBTyxDQUFDLE9BQUQsQ0FBbkI7QUFBQSxJQUNNRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxlQUFELENBRHpCO0FBQUEsSUFFTUcsWUFBWSxHQUFHSCxPQUFPLENBQUMsa0JBQUQsQ0FGNUI7O0lBSVFJLFEsR0FBYUwsTSxDQUFiSyxRO0FBRVIsSUFBTUMsUUFBUSxHQUFHRCxRQUFRLENBQUNFLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxTQUFTLEdBQUdMLFNBQVMsQ0FBQ0ksV0FBVixFQURsQjs7SUFHTUUsVzs7Ozs7Ozs7Ozs7NEJBQ1dQLEcsRUFBSztBQUNsQixVQUFNUSxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QlQsR0FBdkIsQ0FBZjtBQUFBLFVBQ01VLEtBQUssR0FBR0osU0FBUyxDQUFDSyxlQUFWLENBQTBCSCxNQUExQixDQURkO0FBQUEsVUFFTUksV0FBVyxHQUFHLElBQUlMLFdBQUosQ0FBZ0JHLEtBQWhCLENBRnBCO0FBSUEsYUFBT0UsV0FBUDtBQUNEOzs7OEJBRWdCRixLLEVBQU87QUFDdEIsVUFBTUUsV0FBVyxHQUFHLElBQUlMLFdBQUosQ0FBZ0JHLEtBQWhCLENBQXBCO0FBRUEsYUFBT0UsV0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLFdBQVcsR0FBR0wsV0FBVyxDQUFDTSxPQUFaLENBQW9CYixHQUFwQixDQUFwQjtBQUVBLGFBQU9ZLFdBQVA7QUFDRDs7OztFQW5CdUJWLFk7O0FBc0IxQlksTUFBTSxDQUFDQyxNQUFQLENBQWNSLFdBQWQsRUFBMkI7QUFDekJQLEVBQUFBLEdBQUcsRUFBSEE7QUFEeUIsQ0FBM0I7QUFJQWdCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlYsV0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZShcIm9jY2FtLWxleGVyc1wiKTtcblxuY29uc3QgYm5mID0gcmVxdWlyZShcIi4vYm5mXCIpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZShcIi4uL2JuZi9wYXJzZXJcIiksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKFwiLi4vY29tbW9uL3BhcnNlclwiKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgQmFzaWNQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUJORihibmYpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykge1xuICAgIGNvbnN0IGJhc2ljUGFyc2VyID0gbmV3IEJhc2ljUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBiYXNpY1BhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21CTkYoYm5mKTtcblxuICAgIHJldHVybiBiYXNpY1BhcnNlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEJhc2ljUGFyc2VyLCB7XG4gIGJuZlxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNQYXJzZXI7XG4iXX0=