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
        var significantTokens = bnfLexer.significantTokensFromBNF(bnf),
            rulesNode = bnfParser.rulesNodeFromSignificantTokens(significantTokens),
            rules = BNFParser.generateRules(rulesNode, mappings);

        latexParser = new LaTeXParser(rules);
      } catch (error) {}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9sYXRleC9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkxhVGVYUGFyc2VyIiwibWFwcGluZ3MiLCJsYXRleFBhcnNlciIsInNpZ25pZmljYW50VG9rZW5zIiwic2lnbmlmaWNhbnRUb2tlbnNGcm9tQk5GIiwicnVsZXNOb2RlIiwicnVsZXNOb2RlRnJvbVNpZ25pZmljYW50VG9rZW5zIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwiZXJyb3IiLCJmcm9tQk5GQW5kTWFwcGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLE1BQU1ELFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxlQUFSLENBRGxCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxrQkFBUixDQUZyQjs7SUFJUUksUSxHQUFhTCxNLENBQWJLLFE7OztBQUVSLElBQU1DLFdBQVdELFNBQVNFLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZTCxVQUFVSSxXQUFWLEVBRGxCOztJQUdNRSxXOzs7Ozs7Ozs7Ozt1Q0FDc0JQLEcsRUFBS1EsUSxFQUFVO0FBQ3ZDLFVBQUlDLGNBQWMsSUFBbEI7O0FBRUEsVUFBSTtBQUNGLFlBQU1DLG9CQUFvQk4sU0FBU08sd0JBQVQsQ0FBa0NYLEdBQWxDLENBQTFCO0FBQUEsWUFDTVksWUFBWU4sVUFBVU8sOEJBQVYsQ0FBeUNILGlCQUF6QyxDQURsQjtBQUFBLFlBRU1JLFFBQVFiLFVBQVVjLGFBQVYsQ0FBd0JILFNBQXhCLEVBQW1DSixRQUFuQyxDQUZkOztBQUlBQyxzQkFBYyxJQUFJRixXQUFKLENBQWdCTyxLQUFoQixDQUFkO0FBQ0QsT0FORCxDQU1FLE9BQU9FLEtBQVAsRUFBYyxDQUVmOztBQUVELGFBQU9QLFdBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNRCxXQUFXLEVBQWpCO0FBQUEsVUFDTUMsY0FBY0YsWUFBWVUsa0JBQVosQ0FBK0JqQixHQUEvQixFQUFvQ1EsUUFBcEMsQ0FEcEI7O0FBR0EsYUFBT0MsV0FBUDtBQUNEOzs7O0VBdEJ1QlAsWTs7QUF5QjFCZ0IsT0FBT0MsTUFBUCxDQUFjWixXQUFkLEVBQTJCO0FBQ3pCUCxPQUFLQTtBQURvQixDQUEzQjs7QUFJQW9CLE9BQU9DLE9BQVAsR0FBaUJkLFdBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGJuZiA9IHJlcXVpcmUoJy4vYm5mJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIExhVGVYUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21CTkZBbmRNYXBwaW5ncyhibmYsIG1hcHBpbmdzKSB7XG4gICAgbGV0IGxhdGV4UGFyc2VyID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VucyA9IGJuZkxleGVyLnNpZ25pZmljYW50VG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgICAgcnVsZXNOb2RlID0gYm5mUGFyc2VyLnJ1bGVzTm9kZUZyb21TaWduaWZpY2FudFRva2VucyhzaWduaWZpY2FudFRva2VucyksXG4gICAgICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKHJ1bGVzTm9kZSwgbWFwcGluZ3MpO1xuXG4gICAgICBsYXRleFBhcnNlciA9IG5ldyBMYVRlWFBhcnNlcihydWxlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBsYXRleFBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtYXBwaW5ncyA9IHt9LFxuICAgICAgICAgIGxhdGV4UGFyc2VyID0gTGFUZVhQYXJzZXIuZnJvbUJORkFuZE1hcHBpbmdzKGJuZiwgbWFwcGluZ3MpO1xuXG4gICAgcmV0dXJuIGxhdGV4UGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTGFUZVhQYXJzZXIsIHtcbiAgYm5mOiBibmZcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExhVGVYUGFyc2VyO1xuIl19