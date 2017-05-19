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
                  var lines = BNFLexer.linesFromGrammar(grammar),
                      productions = BNFParser.parse(lines, significantTokenTypes, Object.assign(mappings, additionalMappings)),
                      ///
                  florenceParser = new FlorenceParser(productions);

                  return florenceParser;
            }
      }, {
            key: 'fromGrammar',
            value: function fromGrammar(grammar) {
                  var lines = BNFLexer.linesFromGrammar(grammar),
                      productions = BNFParser.parse(lines, significantTokenTypes, mappings),
                      florenceParser = new FlorenceParser(productions);

                  return florenceParser;
            }
      }]);

      return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJtYXBwaW5ncyIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImdldFNpZ25pZmljYW50VG9rZW5UeXBlcyIsIkZsb3JlbmNlUGFyc2VyIiwiYWRkaXRpb25hbE1hcHBpbmdzIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsIk9iamVjdCIsImFzc2lnbiIsImZsb3JlbmNlUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNRSxXQUFXRixRQUFRLFlBQVIsQ0FEakI7QUFBQSxJQUVNRyxZQUFZSCxRQUFRLGVBQVIsQ0FGbEI7QUFBQSxJQUdNSSxlQUFlSixRQUFRLGtCQUFSLENBSHJCOztJQUtRSyxRLEdBQTRCTixNLENBQTVCTSxRO0lBQVVDLGEsR0FBa0JQLE0sQ0FBbEJPLGE7OztBQUVsQixJQUFNQyx3QkFBd0JELGNBQWNFLHdCQUFkLEVBQTlCOztJQUVNQyxjOzs7Ozs7Ozs7OzttREFDMEJDLGtCLEVBQW9CO0FBQ2hELHNCQUFNQyxRQUFRTixTQUFTTyxnQkFBVCxDQUEwQlgsT0FBMUIsQ0FBZDtBQUFBLHNCQUNNWSxjQUFjVixVQUFVVyxLQUFWLENBQWdCSCxLQUFoQixFQUF1QkoscUJBQXZCLEVBQThDUSxPQUFPQyxNQUFQLENBQWNkLFFBQWQsRUFBd0JRLGtCQUF4QixDQUE5QyxDQURwQjtBQUFBLHNCQUNnSDtBQUMxR08sbUNBQWlCLElBQUlSLGNBQUosQ0FBbUJJLFdBQW5CLENBRnZCOztBQUlBLHlCQUFPSSxjQUFQO0FBQ0Q7Ozt3Q0FFa0JoQixPLEVBQVM7QUFDMUIsc0JBQU1VLFFBQVFOLFNBQVNPLGdCQUFULENBQTBCWCxPQUExQixDQUFkO0FBQUEsc0JBQ01ZLGNBQWNWLFVBQVVXLEtBQVYsQ0FBZ0JILEtBQWhCLEVBQXVCSixxQkFBdkIsRUFBOENMLFFBQTlDLENBRHBCO0FBQUEsc0JBRU1lLGlCQUFpQixJQUFJUixjQUFKLENBQW1CSSxXQUFuQixDQUZ2Qjs7QUFJQSx5QkFBT0ksY0FBUDtBQUNEOzs7O0VBZjBCYixZOztBQWtCN0JjLE9BQU9DLE9BQVAsR0FBaUJWLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi9tYXBwaW5ncycpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpO1xuXG5jb25zdCB7IEJORkxleGVyLCBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEZsb3JlbmNlTGV4ZXIuZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzKCk7XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21BZGRpdGlvbmFsTWFwcGluZ3MoYWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgY29uc3QgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIE9iamVjdC5hc3NpZ24obWFwcGluZ3MsIGFkZGl0aW9uYWxNYXBwaW5ncykpLCAvLy9cbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICAgIGNvbnN0IGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=