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

var BasicParser = function (_CommonParser) {
  _inherits(BasicParser, _CommonParser);

  function BasicParser() {
    _classCallCheck(this, BasicParser);

    return _possibleConstructorReturn(this, (BasicParser.__proto__ || Object.getPrototypeOf(BasicParser)).apply(this, arguments));
  }

  _createClass(BasicParser, null, [{
    key: 'fromBNF',
    value: function fromBNF(bnf) {
      var basicParser = null;

      try {
        var tokens = bnfLexer.tokensFromBNF(bnf),
            rulesNode = bnfParser.rulesNodeFromTokens(tokens),
            mappings = {},
            rules = BNFParser.generateRules(rulesNode, mappings);

        basicParser = new BasicParser(rules);
      } catch (error) {}

      return basicParser;
    }
  }, {
    key: 'fromNothing',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkJhc2ljUGFyc2VyIiwiYmFzaWNQYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXNOb2RlIiwicnVsZXNOb2RlRnJvbVRva2VucyIsIm1hcHBpbmdzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwiZXJyb3IiLCJmcm9tQk5GIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxNQUFNRCxRQUFRLE9BQVIsQ0FBWjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsZUFBUixDQURsQjtBQUFBLElBRU1HLGVBQWVILFFBQVEsa0JBQVIsQ0FGckI7O0lBSVFJLFEsR0FBYUwsTSxDQUFiSyxROzs7QUFFUixJQUFNQyxXQUFXRCxTQUFTRSxXQUFULEVBQWpCO0FBQUEsSUFDTUMsWUFBWUwsVUFBVUksV0FBVixFQURsQjs7SUFHTUUsVzs7Ozs7Ozs7Ozs7NEJBQ1dQLEcsRUFBSztBQUNsQixVQUFJUSxjQUFjLElBQWxCOztBQUVBLFVBQUk7QUFDRixZQUFNQyxTQUFTTCxTQUFTTSxhQUFULENBQXVCVixHQUF2QixDQUFmO0FBQUEsWUFDTVcsWUFBWUwsVUFBVU0sbUJBQVYsQ0FBOEJILE1BQTlCLENBRGxCO0FBQUEsWUFFTUksV0FBVyxFQUZqQjtBQUFBLFlBR01DLFFBQVFiLFVBQVVjLGFBQVYsQ0FBd0JKLFNBQXhCLEVBQW1DRSxRQUFuQyxDQUhkOztBQUtBTCxzQkFBYyxJQUFJRCxXQUFKLENBQWdCTyxLQUFoQixDQUFkO0FBQ0QsT0FQRCxDQU9FLE9BQU9FLEtBQVAsRUFBYyxDQUVmOztBQUVELGFBQU9SLFdBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxjQUFjRCxZQUFZVSxPQUFaLENBQW9CakIsR0FBcEIsQ0FBcEI7O0FBRUEsYUFBT1EsV0FBUDtBQUNEOzs7O0VBdEJ1Qk4sWTs7QUF5QjFCZ0IsT0FBT0MsTUFBUCxDQUFjWixXQUFkLEVBQTJCO0FBQ3pCUDtBQUR5QixDQUEzQjs7QUFJQW9CLE9BQU9DLE9BQVAsR0FBaUJkLFdBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGJuZiA9IHJlcXVpcmUoJy4vYm5mJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIEJhc2ljUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgbGV0IGJhc2ljUGFyc2VyID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgICBydWxlc05vZGUgPSBibmZQYXJzZXIucnVsZXNOb2RlRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgICAgbWFwcGluZ3MgPSB7fSxcbiAgICAgICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMocnVsZXNOb2RlLCBtYXBwaW5ncyk7XG5cbiAgICAgIGJhc2ljUGFyc2VyID0gbmV3IEJhc2ljUGFyc2VyKHJ1bGVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbUJORihibmYpO1xuXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQmFzaWNQYXJzZXIsIHtcbiAgYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY1BhcnNlcjtcbiJdfQ==