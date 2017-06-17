'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var grammar = require('./grammar'),
    mappings = require('./mappings'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    parserUtil = require('../util/parser');

var BNFLexer = lexers.BNFLexer;

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, [{
    key: 'findProduction',
    value: function findProduction(productionName) {
      var productions = this.getProductions();

      return parserUtil.findProduction(productionName, productions);
    }
  }], [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJtYXBwaW5ncyIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsInBhcnNlclV0aWwiLCJCTkZMZXhlciIsIkZsb3JlbmNlUGFyc2VyIiwicHJvZHVjdGlvbk5hbWUiLCJwcm9kdWN0aW9ucyIsImdldFByb2R1Y3Rpb25zIiwiZmluZFByb2R1Y3Rpb24iLCJhZGRpdGlvbmFsTWFwcGluZ3MiLCJmbG9yZW5jZVBhcnNlciIsImZyb21HcmFtbWFyQW5kTWFwcGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJnZW5lcmF0ZVByb2R1Y3Rpb25zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNRSxXQUFXRixRQUFRLFlBQVIsQ0FEakI7QUFBQSxJQUVNRyxZQUFZSCxRQUFRLGVBQVIsQ0FGbEI7QUFBQSxJQUdNSSxlQUFlSixRQUFRLGtCQUFSLENBSHJCO0FBQUEsSUFJTUssYUFBYUwsUUFBUSxnQkFBUixDQUpuQjs7SUFNUU0sUSxHQUFhUCxNLENBQWJPLFE7O0lBRUZDLGM7Ozs7Ozs7Ozs7O21DQWtCV0MsYyxFQUFnQjtBQUM3QixVQUFNQyxjQUFjLEtBQUtDLGNBQUwsRUFBcEI7O0FBRUEsYUFBT0wsV0FBV00sY0FBWCxDQUEwQkgsY0FBMUIsRUFBMENDLFdBQTFDLENBQVA7QUFDRDs7OzJDQXJCNkJHLGtCLEVBQW9CO0FBQ2hELFVBQU1DLGlCQUFpQk4sZUFBZU8sc0JBQWYsQ0FBc0NiLE9BQXRDLEVBQStDYyxPQUFPQyxNQUFQLENBQWNkLFFBQWQsRUFBd0JVLGtCQUF4QixDQUEvQyxDQUF2QixDQURnRCxDQUNvRTs7QUFFcEgsYUFBT0MsY0FBUDtBQUNEOzs7MkNBRTZCWixPLEVBQVNDLFEsRUFBVTtBQUMvQyxVQUFNZSxXQUFXWCxTQUFTWSxXQUFULEVBQWpCO0FBQUEsVUFDTUMsWUFBWWhCLFVBQVVlLFdBQVYsRUFEbEI7QUFBQSxVQUVNRSxRQUFRSCxTQUFTSSxnQkFBVCxDQUEwQnBCLE9BQTFCLENBRmQ7QUFBQSxVQUdNcUIsT0FBT0gsVUFBVUksYUFBVixDQUF3QkgsS0FBeEIsQ0FIYjtBQUFBLFVBSU1YLGNBQWNOLFVBQVVxQixtQkFBVixDQUE4QkYsSUFBOUIsRUFBb0NwQixRQUFwQyxDQUpwQjtBQUFBLFVBS01XLGlCQUFpQixJQUFJTixjQUFKLENBQW1CRSxXQUFuQixDQUx2Qjs7QUFPQSxhQUFPSSxjQUFQO0FBQ0Q7Ozs7RUFoQjBCVCxZOztBQXlCN0JxQixPQUFPQyxPQUFQLEdBQWlCbkIsY0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgICAgbWFwcGluZ3MgPSByZXF1aXJlKCcuL21hcHBpbmdzJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBwYXJzZXJVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9wYXJzZXInKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQWRkaXRpb25hbE1hcHBpbmdzKGFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhncmFtbWFyLCBPYmplY3QuYXNzaWduKG1hcHBpbmdzLCBhZGRpdGlvbmFsTWFwcGluZ3MpKTsgLy8vXG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tR3JhbW1hckFuZE1hcHBpbmdzKGdyYW1tYXIsIG1hcHBpbmdzKSB7XG4gICAgY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGxpbmVzID0gYm5mTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBub2RlID0gYm5mUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLmdlbmVyYXRlUHJvZHVjdGlvbnMobm9kZSwgbWFwcGluZ3MpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuXG4gIGZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbnMgPSB0aGlzLmdldFByb2R1Y3Rpb25zKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyVXRpbC5maW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSwgcHJvZHVjdGlvbnMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=