'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var grammar = require('./grammar'),
    mappings = require('./mappings'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser');

var BNFLexer = lexers.BNFLexer;

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
      var bnfLexer = BNFLexer.fromNothing(),
          bnfParser = BNFParser.fromNothing(),
          lines = bnfLexer.linesFromGrammar(grammar),
          node = bnfParser.nodeFromLines(lines),
          productions = BNFParser.generateProductions(node, mappings),
          florenceParser = new FlorenceParser(productions);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJtYXBwaW5ncyIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJORkxleGVyIiwiRmxvcmVuY2VQYXJzZXIiLCJhZGRpdGlvbmFsTWFwcGluZ3MiLCJmbG9yZW5jZVBhcnNlciIsImZyb21HcmFtbWFyQW5kTWFwcGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJwcm9kdWN0aW9ucyIsImdlbmVyYXRlUHJvZHVjdGlvbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFVBQVVELFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01FLFdBQVdGLFFBQVEsWUFBUixDQURqQjtBQUFBLElBRU1HLFlBQVlILFFBQVEsZUFBUixDQUZsQjtBQUFBLElBR01JLGVBQWVKLFFBQVEsa0JBQVIsQ0FIckI7O0lBS1FLLFEsR0FBYU4sTSxDQUFiTSxROztJQUVGQyxjOzs7Ozs7Ozs7OzsyQ0FDMEJDLGtCLEVBQW9CO0FBQ2hELFVBQU1DLGlCQUFpQkYsZUFBZUcsc0JBQWYsQ0FBc0NSLE9BQXRDLEVBQStDUyxPQUFPQyxNQUFQLENBQWNULFFBQWQsRUFBd0JLLGtCQUF4QixDQUEvQyxDQUF2QixDQURnRCxDQUNvRTs7QUFFcEgsYUFBT0MsY0FBUDtBQUNEOzs7MkNBRTZCUCxPLEVBQVNDLFEsRUFBVTtBQUMvQyxVQUFNVSxXQUFXUCxTQUFTUSxXQUFULEVBQWpCO0FBQUEsVUFDTUMsWUFBWVgsVUFBVVUsV0FBVixFQURsQjtBQUFBLFVBRU1FLFFBQVFILFNBQVNJLGdCQUFULENBQTBCZixPQUExQixDQUZkO0FBQUEsVUFHTWdCLE9BQU9ILFVBQVVJLGFBQVYsQ0FBd0JILEtBQXhCLENBSGI7QUFBQSxVQUlNSSxjQUFjaEIsVUFBVWlCLG1CQUFWLENBQThCSCxJQUE5QixFQUFvQ2YsUUFBcEMsQ0FKcEI7QUFBQSxVQUtNTSxpQkFBaUIsSUFBSUYsY0FBSixDQUFtQmEsV0FBbkIsQ0FMdkI7O0FBT0EsYUFBT1gsY0FBUDtBQUNEOzs7O0VBaEIwQkosWTs7QUFtQjdCaUIsT0FBT0MsT0FBUCxHQUFpQmhCLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi9tYXBwaW5ncycpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21BZGRpdGlvbmFsTWFwcGluZ3MoYWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tR3JhbW1hckFuZE1hcHBpbmdzKGdyYW1tYXIsIE9iamVjdC5hc3NpZ24obWFwcGluZ3MsIGFkZGl0aW9uYWxNYXBwaW5ncykpOyAvLy9cblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21HcmFtbWFyQW5kTWFwcGluZ3MoZ3JhbW1hciwgbWFwcGluZ3MpIHtcbiAgICBjb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbGluZXMgPSBibmZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgIG5vZGUgPSBibmZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgcHJvZHVjdGlvbnMgPSBCTkZQYXJzZXIuZ2VuZXJhdGVQcm9kdWN0aW9ucyhub2RlLCBtYXBwaW5ncyksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=