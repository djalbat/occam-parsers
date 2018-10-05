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
            node = bnfParser.nodeFromTokens(tokens),
            mappings = {},
            rules = BNFParser.generateRules(node, mappings);

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
            node = bnfParser.nodeFromTokens(tokens),
            rules = BNFParser.generateRules(node, mappings);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tZXRhSlNPTi9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsImRlZmF1bHRNYXBwaW5ncyIsIk1ldGFKU09OUGFyc2VyIiwibWV0YUpTT05QYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwibm9kZSIsIm5vZGVGcm9tVG9rZW5zIiwibWFwcGluZ3MiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJlcnJvciIsImZyb21CTkYiLCJmcm9tQk5GQW5kTWFwcGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLE1BQU1ELFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxlQUFSLENBRGxCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxrQkFBUixDQUZyQjs7SUFJUUksUSxHQUFhTCxNLENBQWJLLFE7OztBQUVSLElBQU1DLFdBQVdELFNBQVNFLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZTCxVQUFVSSxXQUFWLEVBRGxCO0FBQUEsSUFFTUUsa0JBQWtCLEVBRnhCOztJQUlNQyxjOzs7Ozs7Ozs7Ozs0QkFDV1IsRyxFQUFLO0FBQ2xCLFVBQUlTLGlCQUFpQixJQUFyQjs7QUFFQSxVQUFJO0FBQ0YsWUFBTUMsU0FBU04sU0FBU08sYUFBVCxDQUF1QlgsR0FBdkIsQ0FBZjtBQUFBLFlBQ01ZLE9BQU9OLFVBQVVPLGNBQVYsQ0FBeUJILE1BQXpCLENBRGI7QUFBQSxZQUVNSSxXQUFXLEVBRmpCO0FBQUEsWUFHTUMsUUFBUWQsVUFBVWUsYUFBVixDQUF3QkosSUFBeEIsRUFBOEJFLFFBQTlCLENBSGQ7O0FBS0FMLHlCQUFpQixJQUFJRCxjQUFKLENBQW1CTyxLQUFuQixDQUFqQjtBQUNELE9BUEQsQ0FPRSxPQUFPRSxLQUFQLEVBQWMsQ0FFZjs7QUFFRCxhQUFPUixjQUFQO0FBQ0Q7Ozt1Q0FFeUJULEcsRUFBaUM7QUFBQSxVQUE1QmMsUUFBNEIsdUVBQWpCUCxlQUFpQjs7QUFDekQsVUFBSUUsaUJBQWlCLElBQXJCOztBQUVBLFVBQUk7QUFDRixZQUFNQyxTQUFTTixTQUFTTyxhQUFULENBQXVCWCxHQUF2QixDQUFmO0FBQUEsWUFDTVksT0FBT04sVUFBVU8sY0FBVixDQUF5QkgsTUFBekIsQ0FEYjtBQUFBLFlBRU1LLFFBQVFkLFVBQVVlLGFBQVYsQ0FBd0JKLElBQXhCLEVBQThCRSxRQUE5QixDQUZkOztBQUlBTCx5QkFBaUIsSUFBSUQsY0FBSixDQUFtQk8sS0FBbkIsQ0FBakI7QUFDRCxPQU5ELENBTUUsT0FBT0UsS0FBUCxFQUFjLENBRWY7O0FBRUQsYUFBT1IsY0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLGlCQUFpQkQsZUFBZVUsT0FBZixDQUF1QmxCLEdBQXZCLENBQXZCOztBQUVBLGFBQU9TLGNBQVA7QUFDRDs7O2lDQUVtQkssUSxFQUFVO0FBQzVCLFVBQU1MLGlCQUFpQkQsZUFBZVcsa0JBQWYsQ0FBa0NuQixHQUFsQyxFQUF1Q2MsUUFBdkMsQ0FBdkI7O0FBRUEsYUFBT0wsY0FBUDtBQUVEOzs7O0VBN0MwQlAsWTs7QUFnRDdCa0IsT0FBT0MsTUFBUCxDQUFjYixjQUFkLEVBQThCO0FBQzVCUjtBQUQ0QixDQUE5Qjs7QUFJQXNCLE9BQU9DLE9BQVAsR0FBaUJmLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGJuZiA9IHJlcXVpcmUoJy4vYm5mJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICBkZWZhdWx0TWFwcGluZ3MgPSB7fTtcblxuY2xhc3MgTWV0YUpTT05QYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUJORihibmYpIHtcbiAgICBsZXQgbWV0YUpTT05QYXJzZXIgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICAgIG5vZGUgPSBibmZQYXJzZXIubm9kZUZyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICAgIG1hcHBpbmdzID0ge30sXG4gICAgICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKG5vZGUsIG1hcHBpbmdzKTtcblxuICAgICAgbWV0YUpTT05QYXJzZXIgPSBuZXcgTWV0YUpTT05QYXJzZXIocnVsZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUpTT05QYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJORkFuZE1hcHBpbmdzKGJuZiwgbWFwcGluZ3MgPSBkZWZhdWx0TWFwcGluZ3MpIHtcbiAgICBsZXQgbWV0YUpTT05QYXJzZXIgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICAgIG5vZGUgPSBibmZQYXJzZXIubm9kZUZyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSwgbWFwcGluZ3MpO1xuXG4gICAgICBtZXRhSlNPTlBhcnNlciA9IG5ldyBNZXRhSlNPTlBhcnNlcihydWxlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgIH1cblxuICAgIHJldHVybiBtZXRhSlNPTlBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtZXRhSlNPTlBhcnNlciA9IE1ldGFKU09OUGFyc2VyLmZyb21CTkYoYm5mKTtcblxuICAgIHJldHVybiBtZXRhSlNPTlBhcnNlcjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21NYXBwaW5ncyhtYXBwaW5ncykge1xuICAgIGNvbnN0IG1ldGFKU09OUGFyc2VyID0gTWV0YUpTT05QYXJzZXIuZnJvbUJORkFuZE1hcHBpbmdzKGJuZiwgbWFwcGluZ3MpO1xuXG4gICAgcmV0dXJuIG1ldGFKU09OUGFyc2VyO1xuICAgIFxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTWV0YUpTT05QYXJzZXIsIHtcbiAgYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZXRhSlNPTlBhcnNlcjtcbiJdfQ==