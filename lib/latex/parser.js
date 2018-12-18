'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var bnf = require('./bnf'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser');

var BNFLexer = lexers.BNFLexer;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing();

var LaTeXParser = function (_CommonParser) {
  _inherits(LaTeXParser, _CommonParser);

  function LaTeXParser() {
    _classCallCheck(this, LaTeXParser);

    return _possibleConstructorReturn(this, (LaTeXParser.__proto__ || Object.getPrototypeOf(LaTeXParser)).apply(this, arguments));
  }

  _createClass(LaTeXParser, null, [{
    key: 'fromBNF',
    value: function fromBNF(bnf) {
      var tokens = bnfLexer.tokensFromBNF(bnf),
          rulesNode = bnfParser.rulesNodeFromTokens(tokens),
          rules = BNFParser.generateRules(rulesNode),
          laTeXParser = new LaTeXParser(rules);

      return laTeXParser;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var laTeXParser = LaTeXParser.fromBNF(bnf);

      return laTeXParser;
    }
  }]);

  return LaTeXParser;
}(CommonParser);

Object.assign(LaTeXParser, {
  bnf: bnf
});

module.exports = LaTeXParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9sYXRleC9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkxhVGVYUGFyc2VyIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzTm9kZSIsInJ1bGVzTm9kZUZyb21Ub2tlbnMiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJsYVRlWFBhcnNlciIsImZyb21CTkYiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLE1BQU1ELFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxlQUFSLENBRGxCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxrQkFBUixDQUZyQjs7SUFJUUksUSxHQUFhTCxNLENBQWJLLFE7OztBQUVSLElBQU1DLFdBQVdELFNBQVNFLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZTCxVQUFVSSxXQUFWLEVBRGxCOztJQUdNRSxXOzs7Ozs7Ozs7Ozs0QkFDV1AsRyxFQUFLO0FBQ2xCLFVBQU1RLFNBQVNKLFNBQVNLLGFBQVQsQ0FBdUJULEdBQXZCLENBQWY7QUFBQSxVQUNNVSxZQUFZSixVQUFVSyxtQkFBVixDQUE4QkgsTUFBOUIsQ0FEbEI7QUFBQSxVQUVNSSxRQUFRWCxVQUFVWSxhQUFWLENBQXdCSCxTQUF4QixDQUZkO0FBQUEsVUFHTUksY0FBYyxJQUFJUCxXQUFKLENBQWdCSyxLQUFoQixDQUhwQjs7QUFLQSxhQUFPRSxXQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsY0FBY1AsWUFBWVEsT0FBWixDQUFvQmYsR0FBcEIsQ0FBcEI7O0FBRUEsYUFBT2MsV0FBUDtBQUNEOzs7O0VBZHVCWixZOztBQWlCMUJjLE9BQU9DLE1BQVAsQ0FBY1YsV0FBZCxFQUEyQjtBQUN6QlA7QUFEeUIsQ0FBM0I7O0FBSUFrQixPQUFPQyxPQUFQLEdBQWlCWixXQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBMYVRlWFBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlc05vZGUgPSBibmZQYXJzZXIucnVsZXNOb2RlRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMocnVsZXNOb2RlKSxcbiAgICAgICAgICBsYVRlWFBhcnNlciA9IG5ldyBMYVRlWFBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gbGFUZVhQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbGFUZVhQYXJzZXIgPSBMYVRlWFBhcnNlci5mcm9tQk5GKGJuZik7XG5cbiAgICByZXR1cm4gbGFUZVhQYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihMYVRlWFBhcnNlciwge1xuICBibmZcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExhVGVYUGFyc2VyO1xuIl19