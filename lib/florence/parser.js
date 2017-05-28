'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var grammar = require('./grammar'),
    mappings = require('./mappings'),
    CommonParser = require('../common/parser'),
    PrimitiveParser = require('../primitive/parser');

var BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;


var significantTokenTypes = FlorenceLexer.getSignificantTokenTypes();

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromAdditionalMappings',
    value: function fromAdditionalMappings(additionalMappings) {
      var florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, Object.assign(mappings, additionalMappings)); ///

      return florenceParser;
    }
  }, {
    key: 'fromGrammarAndMappings',
    value: function fromGrammarAndMappings(grammar, mappings) {
      var lines = BNFLexer.linesFromGrammar(grammar),
          productions = PrimitiveParser.parse(lines, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJtYXBwaW5ncyIsIkNvbW1vblBhcnNlciIsIlByaW1pdGl2ZVBhcnNlciIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImdldFNpZ25pZmljYW50VG9rZW5UeXBlcyIsIkZsb3JlbmNlUGFyc2VyIiwiYWRkaXRpb25hbE1hcHBpbmdzIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tR3JhbW1hckFuZE1hcHBpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxZQUFSLENBRGpCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxrQkFBUixDQUZyQjtBQUFBLElBR01JLGtCQUFrQkosUUFBUSxxQkFBUixDQUh4Qjs7SUFLUUssUSxHQUE0Qk4sTSxDQUE1Qk0sUTtJQUFVQyxhLEdBQWtCUCxNLENBQWxCTyxhOzs7QUFFbEIsSUFBTUMsd0JBQXdCRCxjQUFjRSx3QkFBZCxFQUE5Qjs7SUFFTUMsYzs7Ozs7Ozs7Ozs7MkNBQzBCQyxrQixFQUFvQjtBQUNoRCxVQUFNQyxpQkFBaUJGLGVBQWVHLHNCQUFmLENBQXNDWCxPQUF0QyxFQUErQ1ksT0FBT0MsTUFBUCxDQUFjWixRQUFkLEVBQXdCUSxrQkFBeEIsQ0FBL0MsQ0FBdkIsQ0FEZ0QsQ0FDb0U7O0FBRXBILGFBQU9DLGNBQVA7QUFDRDs7OzJDQUU2QlYsTyxFQUFTQyxRLEVBQVU7QUFDL0MsVUFBTWEsUUFBUVYsU0FBU1csZ0JBQVQsQ0FBMEJmLE9BQTFCLENBQWQ7QUFBQSxVQUNNZ0IsY0FBY2IsZ0JBQWdCYyxLQUFoQixDQUFzQkgsS0FBdEIsRUFBNkJSLHFCQUE3QixFQUFvREwsUUFBcEQsQ0FEcEI7QUFBQSxVQUVNUyxpQkFBaUIsSUFBSUYsY0FBSixDQUFtQlEsV0FBbkIsQ0FGdkI7O0FBSUEsYUFBT04sY0FBUDtBQUNEOzs7O0VBYjBCUixZOztBQWdCN0JnQixPQUFPQyxPQUFQLEdBQWlCWCxjQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgICBtYXBwaW5ncyA9IHJlcXVpcmUoJy4vbWFwcGluZ3MnKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFByaW1pdGl2ZVBhcnNlciA9IHJlcXVpcmUoJy4uL3ByaW1pdGl2ZS9wYXJzZXInKTtcblxuY29uc3QgeyBCTkZMZXhlciwgRmxvcmVuY2VMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBGbG9yZW5jZUxleGVyLmdldFNpZ25pZmljYW50VG9rZW5UeXBlcygpO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQWRkaXRpb25hbE1hcHBpbmdzKGFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhncmFtbWFyLCBPYmplY3QuYXNzaWduKG1hcHBpbmdzLCBhZGRpdGlvbmFsTWFwcGluZ3MpKTsgLy8vXG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhncmFtbWFyLCBtYXBwaW5ncykge1xuICAgIGNvbnN0IGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBwcm9kdWN0aW9ucyA9IFByaW1pdGl2ZVBhcnNlci5wYXJzZShsaW5lcywgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=