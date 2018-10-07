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
    bnfParser = BNFParser.fromNothing(),
    defaultMappings = {};

var MetaJSONParser = function (_CommonParser) {
  _inherits(MetaJSONParser, _CommonParser);

  function MetaJSONParser() {
    _classCallCheck(this, MetaJSONParser);

    return _possibleConstructorReturn(this, (MetaJSONParser.__proto__ || Object.getPrototypeOf(MetaJSONParser)).apply(this, arguments));
  }

  _createClass(MetaJSONParser, null, [{
    key: 'fromBNF',
    value: function fromBNF(bnf) {
      var metaJSONParser = null;

      try {
        var tokens = bnfLexer.tokensFromBNF(bnf),
            rulesNode = bnfParser.rulesNodeFromTokens(tokens),
            mappings = {},
            rules = BNFParser.generateRules(rulesNode, mappings);

        metaJSONParser = new MetaJSONParser(rules);
      } catch (error) {}

      return metaJSONParser;
    }
  }, {
    key: 'fromBNFAndMappings',
    value: function fromBNFAndMappings(bnf) {
      var mappings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMappings;

      var metaJSONParser = null;

      try {
        var tokens = bnfLexer.tokensFromBNF(bnf),
            rulesNode = bnfParser.rulesNodeFromTokens(tokens),
            rules = BNFParser.generateRules(rulesNode, mappings);

        metaJSONParser = new MetaJSONParser(rules);
      } catch (error) {}

      return metaJSONParser;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var metaJSONParser = MetaJSONParser.fromBNF(bnf);

      return metaJSONParser;
    }
  }, {
    key: 'fromMappings',
    value: function fromMappings(mappings) {
      var metaJSONParser = MetaJSONParser.fromBNFAndMappings(bnf, mappings);

      return metaJSONParser;
    }
  }]);

  return MetaJSONParser;
}(CommonParser);

Object.assign(MetaJSONParser, {
  bnf: bnf
});

module.exports = MetaJSONParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tZXRhSlNPTi9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsImRlZmF1bHRNYXBwaW5ncyIsIk1ldGFKU09OUGFyc2VyIiwibWV0YUpTT05QYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXNOb2RlIiwicnVsZXNOb2RlRnJvbVRva2VucyIsIm1hcHBpbmdzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwiZXJyb3IiLCJmcm9tQk5GIiwiZnJvbUJORkFuZE1hcHBpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxNQUFNRCxRQUFRLE9BQVIsQ0FBWjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsZUFBUixDQURsQjtBQUFBLElBRU1HLGVBQWVILFFBQVEsa0JBQVIsQ0FGckI7O0lBSVFJLFEsR0FBYUwsTSxDQUFiSyxROzs7QUFFUixJQUFNQyxXQUFXRCxTQUFTRSxXQUFULEVBQWpCO0FBQUEsSUFDTUMsWUFBWUwsVUFBVUksV0FBVixFQURsQjtBQUFBLElBRU1FLGtCQUFrQixFQUZ4Qjs7SUFJTUMsYzs7Ozs7Ozs7Ozs7NEJBQ1dSLEcsRUFBSztBQUNsQixVQUFJUyxpQkFBaUIsSUFBckI7O0FBRUEsVUFBSTtBQUNGLFlBQU1DLFNBQVNOLFNBQVNPLGFBQVQsQ0FBdUJYLEdBQXZCLENBQWY7QUFBQSxZQUNNWSxZQUFZTixVQUFVTyxtQkFBVixDQUE4QkgsTUFBOUIsQ0FEbEI7QUFBQSxZQUVNSSxXQUFXLEVBRmpCO0FBQUEsWUFHTUMsUUFBUWQsVUFBVWUsYUFBVixDQUF3QkosU0FBeEIsRUFBbUNFLFFBQW5DLENBSGQ7O0FBS0FMLHlCQUFpQixJQUFJRCxjQUFKLENBQW1CTyxLQUFuQixDQUFqQjtBQUNELE9BUEQsQ0FPRSxPQUFPRSxLQUFQLEVBQWMsQ0FFZjs7QUFFRCxhQUFPUixjQUFQO0FBQ0Q7Ozt1Q0FFeUJULEcsRUFBaUM7QUFBQSxVQUE1QmMsUUFBNEIsdUVBQWpCUCxlQUFpQjs7QUFDekQsVUFBSUUsaUJBQWlCLElBQXJCOztBQUVBLFVBQUk7QUFDRixZQUFNQyxTQUFTTixTQUFTTyxhQUFULENBQXVCWCxHQUF2QixDQUFmO0FBQUEsWUFDTVksWUFBWU4sVUFBVU8sbUJBQVYsQ0FBOEJILE1BQTlCLENBRGxCO0FBQUEsWUFFTUssUUFBUWQsVUFBVWUsYUFBVixDQUF3QkosU0FBeEIsRUFBbUNFLFFBQW5DLENBRmQ7O0FBSUFMLHlCQUFpQixJQUFJRCxjQUFKLENBQW1CTyxLQUFuQixDQUFqQjtBQUNELE9BTkQsQ0FNRSxPQUFPRSxLQUFQLEVBQWMsQ0FFZjs7QUFFRCxhQUFPUixjQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsaUJBQWlCRCxlQUFlVSxPQUFmLENBQXVCbEIsR0FBdkIsQ0FBdkI7O0FBRUEsYUFBT1MsY0FBUDtBQUNEOzs7aUNBRW1CSyxRLEVBQVU7QUFDNUIsVUFBTUwsaUJBQWlCRCxlQUFlVyxrQkFBZixDQUFrQ25CLEdBQWxDLEVBQXVDYyxRQUF2QyxDQUF2Qjs7QUFFQSxhQUFPTCxjQUFQO0FBRUQ7Ozs7RUE3QzBCUCxZOztBQWdEN0JrQixPQUFPQyxNQUFQLENBQWNiLGNBQWQsRUFBOEI7QUFDNUJSO0FBRDRCLENBQTlCOztBQUlBc0IsT0FBT0MsT0FBUCxHQUFpQmYsY0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGRlZmF1bHRNYXBwaW5ncyA9IHt9O1xuXG5jbGFzcyBNZXRhSlNPTlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGxldCBtZXRhSlNPTlBhcnNlciA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgICAgcnVsZXNOb2RlID0gYm5mUGFyc2VyLnJ1bGVzTm9kZUZyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICAgIG1hcHBpbmdzID0ge30sXG4gICAgICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKHJ1bGVzTm9kZSwgbWFwcGluZ3MpO1xuXG4gICAgICBtZXRhSlNPTlBhcnNlciA9IG5ldyBNZXRhSlNPTlBhcnNlcihydWxlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBtZXRhSlNPTlBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQk5GQW5kTWFwcGluZ3MoYm5mLCBtYXBwaW5ncyA9IGRlZmF1bHRNYXBwaW5ncykge1xuICAgIGxldCBtZXRhSlNPTlBhcnNlciA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgICAgcnVsZXNOb2RlID0gYm5mUGFyc2VyLnJ1bGVzTm9kZUZyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMocnVsZXNOb2RlLCBtYXBwaW5ncyk7XG5cbiAgICAgIG1ldGFKU09OUGFyc2VyID0gbmV3IE1ldGFKU09OUGFyc2VyKHJ1bGVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFKU09OUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG1ldGFKU09OUGFyc2VyID0gTWV0YUpTT05QYXJzZXIuZnJvbUJORihibmYpO1xuXG4gICAgcmV0dXJuIG1ldGFKU09OUGFyc2VyO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU1hcHBpbmdzKG1hcHBpbmdzKSB7XG4gICAgY29uc3QgbWV0YUpTT05QYXJzZXIgPSBNZXRhSlNPTlBhcnNlci5mcm9tQk5GQW5kTWFwcGluZ3MoYm5mLCBtYXBwaW5ncyk7XG5cbiAgICByZXR1cm4gbWV0YUpTT05QYXJzZXI7XG4gICAgXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihNZXRhSlNPTlBhcnNlciwge1xuICBibmZcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1ldGFKU09OUGFyc2VyO1xuIl19