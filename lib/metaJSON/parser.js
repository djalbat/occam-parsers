'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var bnf = require('./parser/bnf'),
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
        var lines = bnfLexer.linesFromBNF(bnf),
            node = bnfParser.nodeFromLines(lines),
            rules = BNFParser.generateRules(node);

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
        var lines = bnfLexer.linesFromBNF(bnf),
            node = bnfParser.nodeFromLines(lines),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tZXRhSlNPTi9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsImRlZmF1bHRNYXBwaW5ncyIsIk1ldGFKU09OUGFyc2VyIiwibWV0YUpTT05QYXJzZXIiLCJsaW5lcyIsImxpbmVzRnJvbUJORiIsIm5vZGUiLCJub2RlRnJvbUxpbmVzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwiZXJyb3IiLCJtYXBwaW5ncyIsImZyb21CTkYiLCJmcm9tQk5GQW5kTWFwcGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLE1BQU1ELFFBQVEsY0FBUixDQUFaO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxlQUFSLENBRGxCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxrQkFBUixDQUZyQjs7SUFJUUksUSxHQUFhTCxNLENBQWJLLFE7OztBQUVSLElBQU1DLFdBQVdELFNBQVNFLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZTCxVQUFVSSxXQUFWLEVBRGxCO0FBQUEsSUFFTUUsa0JBQWtCLEVBRnhCOztJQUlNQyxjOzs7Ozs7Ozs7Ozs0QkFDV1IsRyxFQUFLO0FBQ2xCLFVBQUlTLGlCQUFpQixJQUFyQjs7QUFFQSxVQUFJO0FBQ0YsWUFBTUMsUUFBUU4sU0FBU08sWUFBVCxDQUFzQlgsR0FBdEIsQ0FBZDtBQUFBLFlBQ01ZLE9BQU9OLFVBQVVPLGFBQVYsQ0FBd0JILEtBQXhCLENBRGI7QUFBQSxZQUVNSSxRQUFRYixVQUFVYyxhQUFWLENBQXdCSCxJQUF4QixDQUZkOztBQUlBSCx5QkFBaUIsSUFBSUQsY0FBSixDQUFtQk0sS0FBbkIsQ0FBakI7QUFDRCxPQU5ELENBTUUsT0FBT0UsS0FBUCxFQUFjLENBRWY7O0FBRUQsYUFBT1AsY0FBUDtBQUNEOzs7dUNBRXlCVCxHLEVBQWlDO0FBQUEsVUFBNUJpQixRQUE0Qix1RUFBakJWLGVBQWlCOztBQUN6RCxVQUFJRSxpQkFBaUIsSUFBckI7O0FBRUEsVUFBSTtBQUNGLFlBQU1DLFFBQVFOLFNBQVNPLFlBQVQsQ0FBc0JYLEdBQXRCLENBQWQ7QUFBQSxZQUNNWSxPQUFPTixVQUFVTyxhQUFWLENBQXdCSCxLQUF4QixDQURiO0FBQUEsWUFFTUksUUFBUWIsVUFBVWMsYUFBVixDQUF3QkgsSUFBeEIsRUFBOEJLLFFBQTlCLENBRmQ7O0FBSUFSLHlCQUFpQixJQUFJRCxjQUFKLENBQW1CTSxLQUFuQixDQUFqQjtBQUNELE9BTkQsQ0FNRSxPQUFPRSxLQUFQLEVBQWMsQ0FFZjs7QUFFRCxhQUFPUCxjQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsaUJBQWlCRCxlQUFlVSxPQUFmLENBQXVCbEIsR0FBdkIsQ0FBdkI7O0FBRUEsYUFBT1MsY0FBUDtBQUNEOzs7aUNBRW1CUSxRLEVBQVU7QUFDNUIsVUFBTVIsaUJBQWlCRCxlQUFlVyxrQkFBZixDQUFrQ25CLEdBQWxDLEVBQXVDaUIsUUFBdkMsQ0FBdkI7O0FBRUEsYUFBT1IsY0FBUDtBQUVEOzs7O0VBNUMwQlAsWTs7QUErQzdCa0IsT0FBT0MsTUFBUCxDQUFjYixjQUFkLEVBQThCO0FBQzVCUixPQUFLQTtBQUR1QixDQUE5Qjs7QUFJQXNCLE9BQU9DLE9BQVAsR0FBaUJmLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGJuZiA9IHJlcXVpcmUoJy4vcGFyc2VyL2JuZicpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgZGVmYXVsdE1hcHBpbmdzID0ge307XG5cbmNsYXNzIE1ldGFKU09OUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgbGV0IG1ldGFKU09OUGFyc2VyID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsaW5lcyA9IGJuZkxleGVyLmxpbmVzRnJvbUJORihibmYpLFxuICAgICAgICAgICAgbm9kZSA9IGJuZlBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSk7XG5cbiAgICAgIG1ldGFKU09OUGFyc2VyID0gbmV3IE1ldGFKU09OUGFyc2VyKHJ1bGVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFKU09OUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21CTkZBbmRNYXBwaW5ncyhibmYsIG1hcHBpbmdzID0gZGVmYXVsdE1hcHBpbmdzKSB7XG4gICAgbGV0IG1ldGFKU09OUGFyc2VyID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsaW5lcyA9IGJuZkxleGVyLmxpbmVzRnJvbUJORihibmYpLFxuICAgICAgICAgICAgbm9kZSA9IGJuZlBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSwgbWFwcGluZ3MpO1xuXG4gICAgICBtZXRhSlNPTlBhcnNlciA9IG5ldyBNZXRhSlNPTlBhcnNlcihydWxlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgIH1cblxuICAgIHJldHVybiBtZXRhSlNPTlBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtZXRhSlNPTlBhcnNlciA9IE1ldGFKU09OUGFyc2VyLmZyb21CTkYoYm5mKTtcblxuICAgIHJldHVybiBtZXRhSlNPTlBhcnNlcjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21NYXBwaW5ncyhtYXBwaW5ncykge1xuICAgIGNvbnN0IG1ldGFKU09OUGFyc2VyID0gTWV0YUpTT05QYXJzZXIuZnJvbUJORkFuZE1hcHBpbmdzKGJuZiwgbWFwcGluZ3MpO1xuXG4gICAgcmV0dXJuIG1ldGFKU09OUGFyc2VyO1xuICAgIFxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTWV0YUpTT05QYXJzZXIsIHtcbiAgYm5mOiBibmZcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1ldGFKU09OUGFyc2VyO1xuIl19