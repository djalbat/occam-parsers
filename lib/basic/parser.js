'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    BasicLexer = lexers.BasicLexer;

var BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser');

var BasicParser = function (_CommonParser) {
      _inherits(BasicParser, _CommonParser);

      function BasicParser() {
            _classCallCheck(this, BasicParser);

            return _possibleConstructorReturn(this, (BasicParser.__proto__ || Object.getPrototypeOf(BasicParser)).apply(this, arguments));
      }

      _createClass(BasicParser, null, [{
            key: 'fromGrammar',
            value: function fromGrammar(grammar) {
                  var lines = BNFLexer.linesFromGrammar(grammar),
                      significantTokenTypes = BasicLexer.getSignificantTokenTypes(),
                      mappings = {},
                      productions = BNFParser.parse(lines, significantTokenTypes, mappings),
                      basicParser = new BasicParser(productions);

                  return basicParser;
            }
      }]);

      return BasicParser;
}(CommonParser);

module.exports = BasicParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiQmFzaWNMZXhlciIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJhc2ljUGFyc2VyIiwiZ3JhbW1hciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImdldFNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsImJhc2ljUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjtBQUFBLElBQ01DLFdBQVdGLE9BQU9FLFFBRHhCO0FBQUEsSUFFTUMsYUFBYUgsT0FBT0csVUFGMUI7O0FBSUEsSUFBTUMsWUFBWUgsUUFBUSxlQUFSLENBQWxCO0FBQUEsSUFDTUksZUFBZUosUUFBUSxrQkFBUixDQURyQjs7SUFHTUssVzs7Ozs7Ozs7Ozs7d0NBQ2VDLE8sRUFBUztBQUMxQixzQkFBTUMsUUFBUU4sU0FBU08sZ0JBQVQsQ0FBMEJGLE9BQTFCLENBQWQ7QUFBQSxzQkFDTUcsd0JBQXdCUCxXQUFXUSx3QkFBWCxFQUQ5QjtBQUFBLHNCQUVNQyxXQUFXLEVBRmpCO0FBQUEsc0JBR01DLGNBQWNULFVBQVVVLEtBQVYsQ0FBZ0JOLEtBQWhCLEVBQXVCRSxxQkFBdkIsRUFBOENFLFFBQTlDLENBSHBCO0FBQUEsc0JBSU1HLGNBQWMsSUFBSVQsV0FBSixDQUFnQk8sV0FBaEIsQ0FKcEI7O0FBTUEseUJBQU9FLFdBQVA7QUFDRDs7OztFQVR1QlYsWTs7QUFZMUJXLE9BQU9DLE9BQVAsR0FBaUJYLFdBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgICBCTkZMZXhlciA9IGxleGVycy5CTkZMZXhlcixcbiAgICAgIEJhc2ljTGV4ZXIgPSBsZXhlcnMuQmFzaWNMZXhlcjtcblxuY29uc3QgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpO1xuXG5jbGFzcyBCYXNpY1BhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgY29uc3QgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEJhc2ljTGV4ZXIuZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzKCksXG4gICAgICAgICAgbWFwcGluZ3MgPSB7fSxcbiAgICAgICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNQYXJzZXI7XG4iXX0=