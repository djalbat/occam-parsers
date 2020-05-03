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

var PlainParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(PlainParser, _CommonParser);

  function PlainParser() {
    _classCallCheck(this, PlainParser);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlainParser).apply(this, arguments));
  }

  _createClass(PlainParser, null, [{
    key: "fromBNF",
    value: function fromBNF(bnf) {
      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          plainParser = new PlainParser(rules);
      return plainParser;
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      var plainParser = PlainParser.fromBNF(bnf);
      return plainParser;
    }
  }]);

  return PlainParser;
}(CommonParser);

Object.assign(PlainParser, {
  bnf: bnf
});
module.exports = PlainParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiYm5mIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiQk5GTGV4ZXIiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiUGxhaW5QYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJwbGFpblBhcnNlciIsImZyb21CTkYiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXRCOztBQUVBLElBQU1DLEdBQUcsR0FBR0QsT0FBTyxDQUFDLE9BQUQsQ0FBbkI7QUFBQSxJQUNNRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxlQUFELENBRHpCO0FBQUEsSUFFTUcsWUFBWSxHQUFHSCxPQUFPLENBQUMsa0JBQUQsQ0FGNUI7O0lBSVFJLFEsR0FBYUwsTSxDQUFiSyxRO0FBRVIsSUFBTUMsUUFBUSxHQUFHRCxRQUFRLENBQUNFLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxTQUFTLEdBQUdMLFNBQVMsQ0FBQ0ksV0FBVixFQURsQjs7SUFHTUUsVzs7Ozs7Ozs7Ozs7NEJBQ1dQLEcsRUFBSztBQUNsQixVQUFNUSxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QlQsR0FBdkIsQ0FBZjtBQUFBLFVBQ01VLEtBQUssR0FBR0osU0FBUyxDQUFDSyxlQUFWLENBQTBCSCxNQUExQixDQURkO0FBQUEsVUFFTUksV0FBVyxHQUFHLElBQUlMLFdBQUosQ0FBZ0JHLEtBQWhCLENBRnBCO0FBSUEsYUFBT0UsV0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLFdBQVcsR0FBR0wsV0FBVyxDQUFDTSxPQUFaLENBQW9CYixHQUFwQixDQUFwQjtBQUVBLGFBQU9ZLFdBQVA7QUFDRDs7OztFQWJ1QlYsWTs7QUFnQjFCWSxNQUFNLENBQUNDLE1BQVAsQ0FBY1IsV0FBZCxFQUEyQjtBQUN6QlAsRUFBQUEsR0FBRyxFQUFIQTtBQUR5QixDQUEzQjtBQUlBZ0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixXQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKFwib2NjYW0tbGV4ZXJzXCIpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKFwiLi9ibmZcIiksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKFwiLi4vYm5mL3BhcnNlclwiKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoXCIuLi9jb21tb24vcGFyc2VyXCIpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBQbGFpblBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBwbGFpblBhcnNlciA9IG5ldyBQbGFpblBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gcGxhaW5QYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcGxhaW5QYXJzZXIgPSBQbGFpblBhcnNlci5mcm9tQk5GKGJuZik7XG5cbiAgICByZXR1cm4gcGxhaW5QYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihQbGFpblBhcnNlciwge1xuICBibmZcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYWluUGFyc2VyO1xuIl19