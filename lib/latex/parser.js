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
          latexParser = LaTeXParser.fromBNF(bnf, mappings);

      return latexParser;
    }
  }]);

  return LaTeXParser;
}(CommonParser);

Object.assign(LaTeXParser, {
  bnf: bnf
});

module.exports = LaTeXParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9sYXRleC9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkxhVGVYUGFyc2VyIiwibWFwcGluZ3MiLCJsYXRleFBhcnNlciIsInNpZ25pZmljYW50VG9rZW5zIiwic2lnbmlmaWNhbnRUb2tlbnNGcm9tQk5GIiwicnVsZXNOb2RlIiwicnVsZXNOb2RlRnJvbVNpZ25pZmljYW50VG9rZW5zIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwiZXJyb3IiLCJmcm9tQk5GIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxNQUFNRCxRQUFRLE9BQVIsQ0FBWjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsZUFBUixDQURsQjtBQUFBLElBRU1HLGVBQWVILFFBQVEsa0JBQVIsQ0FGckI7O0lBSVFJLFEsR0FBYUwsTSxDQUFiSyxROzs7QUFFUixJQUFNQyxXQUFXRCxTQUFTRSxXQUFULEVBQWpCO0FBQUEsSUFDTUMsWUFBWUwsVUFBVUksV0FBVixFQURsQjs7SUFHTUUsVzs7Ozs7Ozs7Ozs7dUNBQ3NCUCxHLEVBQUtRLFEsRUFBVTtBQUN2QyxVQUFJQyxjQUFjLElBQWxCOztBQUVBLFVBQUk7QUFDRixZQUFNQyxvQkFBb0JOLFNBQVNPLHdCQUFULENBQWtDWCxHQUFsQyxDQUExQjtBQUFBLFlBQ01ZLFlBQVlOLFVBQVVPLDhCQUFWLENBQXlDSCxpQkFBekMsQ0FEbEI7QUFBQSxZQUVNSSxRQUFRYixVQUFVYyxhQUFWLENBQXdCSCxTQUF4QixFQUFtQ0osUUFBbkMsQ0FGZDs7QUFJQUMsc0JBQWMsSUFBSUYsV0FBSixDQUFnQk8sS0FBaEIsQ0FBZDtBQUNELE9BTkQsQ0FNRSxPQUFPRSxLQUFQLEVBQWMsQ0FFZjs7QUFFRCxhQUFPUCxXQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUQsV0FBVyxFQUFqQjtBQUFBLFVBQ01DLGNBQWNGLFlBQVlVLE9BQVosQ0FBb0JqQixHQUFwQixFQUF5QlEsUUFBekIsQ0FEcEI7O0FBR0EsYUFBT0MsV0FBUDtBQUNEOzs7O0VBdEJ1QlAsWTs7QUF5QjFCZ0IsT0FBT0MsTUFBUCxDQUFjWixXQUFkLEVBQTJCO0FBQ3pCUCxPQUFLQTtBQURvQixDQUEzQjs7QUFJQW9CLE9BQU9DLE9BQVAsR0FBaUJkLFdBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGJuZiA9IHJlcXVpcmUoJy4vYm5mJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIExhVGVYUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21CTkZBbmRNYXBwaW5ncyhibmYsIG1hcHBpbmdzKSB7XG4gICAgbGV0IGxhdGV4UGFyc2VyID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VucyA9IGJuZkxleGVyLnNpZ25pZmljYW50VG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgICAgcnVsZXNOb2RlID0gYm5mUGFyc2VyLnJ1bGVzTm9kZUZyb21TaWduaWZpY2FudFRva2VucyhzaWduaWZpY2FudFRva2VucyksXG4gICAgICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKHJ1bGVzTm9kZSwgbWFwcGluZ3MpO1xuXG4gICAgICBsYXRleFBhcnNlciA9IG5ldyBMYVRlWFBhcnNlcihydWxlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBsYXRleFBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtYXBwaW5ncyA9IHt9LFxuICAgICAgICAgIGxhdGV4UGFyc2VyID0gTGFUZVhQYXJzZXIuZnJvbUJORihibmYsIG1hcHBpbmdzKTtcblxuICAgIHJldHVybiBsYXRleFBhcnNlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKExhVGVYUGFyc2VyLCB7XG4gIGJuZjogYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMYVRlWFBhcnNlcjtcbiJdfQ==