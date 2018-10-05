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
    key: 'fromBNFAndMappings',
    value: function fromBNFAndMappings(bnf, mappings) {
      var latexParser = null;

      try {
        var tokens = bnfLexer.tokensFromBNF(bnf),
            rulesNode = bnfParser.rulesNodeFromTokens(tokens),
            rules = BNFParser.generateRules(rulesNode, mappings);

        latexParser = new LaTeXParser(rules);
      } catch (error) {}

      return latexParser;
    }
  }, {
    key: 'fromMappings',
    value: function fromMappings(mappings) {
      var latexParser = LaTeXParser.fromBNFAndMappings(bnf, mappings);

      return latexParser;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var mappings = {},
          latexParser = LaTeXParser.fromBNFAndMappings(bnf, mappings);

      return latexParser;
    }
  }]);

  return LaTeXParser;
}(CommonParser);

Object.assign(LaTeXParser, {
  bnf: bnf
});

module.exports = LaTeXParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9sYXRleC9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkxhVGVYUGFyc2VyIiwibWFwcGluZ3MiLCJsYXRleFBhcnNlciIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlc05vZGUiLCJydWxlc05vZGVGcm9tVG9rZW5zIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwiZXJyb3IiLCJmcm9tQk5GQW5kTWFwcGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLE1BQU1ELFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxlQUFSLENBRGxCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxrQkFBUixDQUZyQjs7SUFJUUksUSxHQUFhTCxNLENBQWJLLFE7OztBQUVSLElBQU1DLFdBQVdELFNBQVNFLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZTCxVQUFVSSxXQUFWLEVBRGxCOztJQUdNRSxXOzs7Ozs7Ozs7Ozt1Q0FDc0JQLEcsRUFBS1EsUSxFQUFVO0FBQ3ZDLFVBQUlDLGNBQWMsSUFBbEI7O0FBRUEsVUFBSTtBQUNGLFlBQU1DLFNBQVNOLFNBQVNPLGFBQVQsQ0FBdUJYLEdBQXZCLENBQWY7QUFBQSxZQUNNWSxZQUFZTixVQUFVTyxtQkFBVixDQUE4QkgsTUFBOUIsQ0FEbEI7QUFBQSxZQUVNSSxRQUFRYixVQUFVYyxhQUFWLENBQXdCSCxTQUF4QixFQUFtQ0osUUFBbkMsQ0FGZDs7QUFJQUMsc0JBQWMsSUFBSUYsV0FBSixDQUFnQk8sS0FBaEIsQ0FBZDtBQUNELE9BTkQsQ0FNRSxPQUFPRSxLQUFQLEVBQWMsQ0FFZjs7QUFFRCxhQUFPUCxXQUFQO0FBQ0Q7OztpQ0FFbUJELFEsRUFBVTtBQUM1QixVQUFNQyxjQUFjRixZQUFZVSxrQkFBWixDQUErQmpCLEdBQS9CLEVBQW9DUSxRQUFwQyxDQUFwQjs7QUFFQSxhQUFPQyxXQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUQsV0FBVyxFQUFqQjtBQUFBLFVBQ01DLGNBQWNGLFlBQVlVLGtCQUFaLENBQStCakIsR0FBL0IsRUFBb0NRLFFBQXBDLENBRHBCOztBQUdBLGFBQU9DLFdBQVA7QUFDRDs7OztFQTVCdUJQLFk7O0FBK0IxQmdCLE9BQU9DLE1BQVAsQ0FBY1osV0FBZCxFQUEyQjtBQUN6QlA7QUFEeUIsQ0FBM0I7O0FBSUFvQixPQUFPQyxPQUFQLEdBQWlCZCxXQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBMYVRlWFBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQk5GQW5kTWFwcGluZ3MoYm5mLCBtYXBwaW5ncykge1xuICAgIGxldCBsYXRleFBhcnNlciA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgICAgcnVsZXNOb2RlID0gYm5mUGFyc2VyLnJ1bGVzTm9kZUZyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMocnVsZXNOb2RlLCBtYXBwaW5ncyk7XG5cbiAgICAgIGxhdGV4UGFyc2VyID0gbmV3IExhVGVYUGFyc2VyKHJ1bGVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhdGV4UGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXBwaW5ncyhtYXBwaW5ncykge1xuICAgIGNvbnN0IGxhdGV4UGFyc2VyID0gTGFUZVhQYXJzZXIuZnJvbUJORkFuZE1hcHBpbmdzKGJuZiwgbWFwcGluZ3MpO1xuXG4gICAgcmV0dXJuIGxhdGV4UGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG1hcHBpbmdzID0ge30sXG4gICAgICAgICAgbGF0ZXhQYXJzZXIgPSBMYVRlWFBhcnNlci5mcm9tQk5GQW5kTWFwcGluZ3MoYm5mLCBtYXBwaW5ncyk7XG5cbiAgICByZXR1cm4gbGF0ZXhQYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihMYVRlWFBhcnNlciwge1xuICBibmZcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExhVGVYUGFyc2VyO1xuIl19