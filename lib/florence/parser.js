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

var PrimitiveLexer = lexers.PrimitiveLexer,
    FlorenceLexer = lexers.FlorenceLexer;


var significantTokenTypes = FlorenceLexer.significantTokenTypes();

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
      var lines = PrimitiveLexer.linesFromGrammar(grammar),
          productions = PrimitiveParser.parse(lines, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJtYXBwaW5ncyIsIkNvbW1vblBhcnNlciIsIlByaW1pdGl2ZVBhcnNlciIsIlByaW1pdGl2ZUxleGVyIiwiRmxvcmVuY2VMZXhlciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIkZsb3JlbmNlUGFyc2VyIiwiYWRkaXRpb25hbE1hcHBpbmdzIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tR3JhbW1hckFuZE1hcHBpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxZQUFSLENBRGpCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxrQkFBUixDQUZyQjtBQUFBLElBR01JLGtCQUFrQkosUUFBUSxxQkFBUixDQUh4Qjs7SUFLUUssYyxHQUFrQ04sTSxDQUFsQ00sYztJQUFnQkMsYSxHQUFrQlAsTSxDQUFsQk8sYTs7O0FBRXhCLElBQU1DLHdCQUF3QkQsY0FBY0MscUJBQWQsRUFBOUI7O0lBRU1DLGM7Ozs7Ozs7Ozs7OzJDQUMwQkMsa0IsRUFBb0I7QUFDaEQsVUFBTUMsaUJBQWlCRixlQUFlRyxzQkFBZixDQUFzQ1YsT0FBdEMsRUFBK0NXLE9BQU9DLE1BQVAsQ0FBY1gsUUFBZCxFQUF3Qk8sa0JBQXhCLENBQS9DLENBQXZCLENBRGdELENBQ29FOztBQUVwSCxhQUFPQyxjQUFQO0FBQ0Q7OzsyQ0FFNkJULE8sRUFBU0MsUSxFQUFVO0FBQy9DLFVBQU1ZLFFBQVFULGVBQWVVLGdCQUFmLENBQWdDZCxPQUFoQyxDQUFkO0FBQUEsVUFDTWUsY0FBY1osZ0JBQWdCYSxLQUFoQixDQUFzQkgsS0FBdEIsRUFBNkJQLHFCQUE3QixFQUFvREwsUUFBcEQsQ0FEcEI7QUFBQSxVQUVNUSxpQkFBaUIsSUFBSUYsY0FBSixDQUFtQlEsV0FBbkIsQ0FGdkI7O0FBSUEsYUFBT04sY0FBUDtBQUNEOzs7O0VBYjBCUCxZOztBQWdCN0JlLE9BQU9DLE9BQVAsR0FBaUJYLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi9tYXBwaW5ncycpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgUHJpbWl0aXZlUGFyc2VyID0gcmVxdWlyZSgnLi4vcHJpbWl0aXZlL3BhcnNlcicpO1xuXG5jb25zdCB7IFByaW1pdGl2ZUxleGVyLCBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEZsb3JlbmNlTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzKCk7XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21BZGRpdGlvbmFsTWFwcGluZ3MoYWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tR3JhbW1hckFuZE1hcHBpbmdzKGdyYW1tYXIsIE9iamVjdC5hc3NpZ24obWFwcGluZ3MsIGFkZGl0aW9uYWxNYXBwaW5ncykpOyAvLy9cblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tR3JhbW1hckFuZE1hcHBpbmdzKGdyYW1tYXIsIG1hcHBpbmdzKSB7XG4gICAgY29uc3QgbGluZXMgPSBQcmltaXRpdmVMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgIHByb2R1Y3Rpb25zID0gUHJpbWl0aXZlUGFyc2VyLnBhcnNlKGxpbmVzLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcbiJdfQ==