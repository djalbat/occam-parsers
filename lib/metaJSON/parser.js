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
            rules = BNFParser.generateRules(rulesNode);

        metaJSONParser = new MetaJSONParser(rules);
      } catch (error) {}

      return metaJSONParser;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      return MetaJSONParser.fromBNF(bnf);
    }
  }]);

  return MetaJSONParser;
}(CommonParser);

Object.assign(MetaJSONParser, {
  bnf: bnf
});

module.exports = MetaJSONParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tZXRhSlNPTi9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIk1ldGFKU09OUGFyc2VyIiwibWV0YUpTT05QYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXNOb2RlIiwicnVsZXNOb2RlRnJvbVRva2VucyIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsImVycm9yIiwiZnJvbUJORiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsTUFBTUQsUUFBUSxPQUFSLENBQVo7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGVBQVIsQ0FEbEI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLGtCQUFSLENBRnJCOztJQUlRSSxRLEdBQWFMLE0sQ0FBYkssUTs7O0FBRVIsSUFBTUMsV0FBV0QsU0FBU0UsV0FBVCxFQUFqQjtBQUFBLElBQ01DLFlBQVlMLFVBQVVJLFdBQVYsRUFEbEI7O0lBR01FLGM7Ozs7Ozs7Ozs7OzRCQUNXUCxHLEVBQUs7QUFDbEIsVUFBSVEsaUJBQWlCLElBQXJCOztBQUVBLFVBQUk7QUFDRixZQUFNQyxTQUFTTCxTQUFTTSxhQUFULENBQXVCVixHQUF2QixDQUFmO0FBQUEsWUFDTVcsWUFBWUwsVUFBVU0sbUJBQVYsQ0FBOEJILE1BQTlCLENBRGxCO0FBQUEsWUFFTUksUUFBUVosVUFBVWEsYUFBVixDQUF3QkgsU0FBeEIsQ0FGZDs7QUFJQUgseUJBQWlCLElBQUlELGNBQUosQ0FBbUJNLEtBQW5CLENBQWpCO0FBQ0QsT0FORCxDQU1FLE9BQU9FLEtBQVAsRUFBYyxDQUVmOztBQUVELGFBQU9QLGNBQVA7QUFDRDs7O2tDQUVvQjtBQUFFLGFBQU9ELGVBQWVTLE9BQWYsQ0FBdUJoQixHQUF2QixDQUFQO0FBQXFDOzs7O0VBakJqQ0UsWTs7QUFvQjdCZSxPQUFPQyxNQUFQLENBQWNYLGNBQWQsRUFBOEI7QUFDNUJQO0FBRDRCLENBQTlCOztBQUlBbUIsT0FBT0MsT0FBUCxHQUFpQmIsY0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgTWV0YUpTT05QYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUJORihibmYpIHtcbiAgICBsZXQgbWV0YUpTT05QYXJzZXIgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICAgIHJ1bGVzTm9kZSA9IGJuZlBhcnNlci5ydWxlc05vZGVGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKHJ1bGVzTm9kZSk7XG5cbiAgICAgIG1ldGFKU09OUGFyc2VyID0gbmV3IE1ldGFKU09OUGFyc2VyKHJ1bGVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFKU09OUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gTWV0YUpTT05QYXJzZXIuZnJvbUJORihibmYpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oTWV0YUpTT05QYXJzZXIsIHtcbiAgYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZXRhSlNPTlBhcnNlcjtcbiJdfQ==