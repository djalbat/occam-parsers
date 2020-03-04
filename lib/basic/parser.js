'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require('occam-lexers');

var bnf = require('./bnf'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiYm5mIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiQk5GTGV4ZXIiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQmFzaWNQYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJiYXNpY1BhcnNlciIsImZyb21CTkYiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXRCOztBQUVBLElBQU1DLEdBQUcsR0FBR0QsT0FBTyxDQUFDLE9BQUQsQ0FBbkI7QUFBQSxJQUNNRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxlQUFELENBRHpCO0FBQUEsSUFFTUcsWUFBWSxHQUFHSCxPQUFPLENBQUMsa0JBQUQsQ0FGNUI7O0lBSVFJLFEsR0FBYUwsTSxDQUFiSyxRO0FBRVIsSUFBTUMsUUFBUSxHQUFHRCxRQUFRLENBQUNFLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxTQUFTLEdBQUdMLFNBQVMsQ0FBQ0ksV0FBVixFQURsQjs7SUFHTUUsVzs7Ozs7Ozs7Ozs7NEJBQ1dQLEcsRUFBSztBQUNsQixVQUFNUSxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QlQsR0FBdkIsQ0FBZjtBQUFBLFVBQ01VLEtBQUssR0FBR0osU0FBUyxDQUFDSyxlQUFWLENBQTBCSCxNQUExQixDQURkO0FBQUEsVUFFTUksV0FBVyxHQUFHLElBQUlMLFdBQUosQ0FBZ0JHLEtBQWhCLENBRnBCO0FBSUEsYUFBT0UsV0FBUDtBQUNEOzs7OEJBRWdCRixLLEVBQU87QUFDdEIsVUFBTUUsV0FBVyxHQUFHLElBQUlMLFdBQUosQ0FBZ0JHLEtBQWhCLENBQXBCO0FBRUEsYUFBT0UsV0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLFdBQVcsR0FBR0wsV0FBVyxDQUFDTSxPQUFaLENBQW9CYixHQUFwQixDQUFwQjtBQUVBLGFBQU9ZLFdBQVA7QUFDRDs7OztFQW5CdUJWLFk7O0FBc0IxQlksTUFBTSxDQUFDQyxNQUFQLENBQWNSLFdBQWQsRUFBMkI7QUFDekJQLEVBQUFBLEdBQUcsRUFBSEE7QUFEeUIsQ0FBM0I7QUFJQWdCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlYsV0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBCYXNpY1BhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBiYXNpY1BhcnNlciA9IG5ldyBCYXNpY1BhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gYmFzaWNQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7XG4gICAgY29uc3QgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbUJORihibmYpO1xuXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQmFzaWNQYXJzZXIsIHtcbiAgYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY1BhcnNlcjtcbiJdfQ==