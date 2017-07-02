'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    WildcardNode = require('../node/wildcard'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    wildcard = specialSymbols.wildcard;

var WildcardRule = function (_Rule) {
      _inherits(WildcardRule, _Rule);

      function WildcardRule() {
            _classCallCheck(this, WildcardRule);

            var wildcardTerminalSymbolContent = wildcard,
                wildcardTerminalSymbolDefinition = new TerminalSymbolDefinition(wildcardTerminalSymbolContent),
                name = 'wildcard',
                definitions = [wildcardTerminalSymbolDefinition],
                Node = WildcardNode;

            return _possibleConstructorReturn(this, (WildcardRule.__proto__ || Object.getPrototypeOf(WildcardRule)).call(this, name, definitions, Node));
      }

      return WildcardRule;
}(Rule);

module.exports = WildcardRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS93aWxkY2FyZC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUnVsZSIsIldpbGRjYXJkTm9kZSIsIlRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJ3aWxkY2FyZCIsIldpbGRjYXJkUnVsZSIsIndpbGRjYXJkVGVybWluYWxTeW1ib2xDb250ZW50Iiwid2lsZGNhcmRUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxlQUFlRixRQUFRLGtCQUFSLENBRHJCO0FBQUEsSUFFTUcsMkJBQTJCSCxRQUFRLDhCQUFSLENBRmpDOztBQUlNLElBQUVJLFFBQUYsR0FBZUwsTUFBZixDQUFFSyxRQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsUUFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLFFBRkYsR0FFZUQsY0FGZixDQUVFQyxRQUZGOztJQUlBQyxZOzs7QUFDSiw4QkFBYztBQUFBOztBQUNaLGdCQUFNQyxnQ0FBZ0NGLFFBQXRDO0FBQUEsZ0JBQ01HLG1DQUFtQyxJQUFJTix3QkFBSixDQUE2QkssNkJBQTdCLENBRHpDO0FBQUEsZ0JBRU1FLE9BQU8sVUFGYjtBQUFBLGdCQUdNQyxjQUFjLENBQ1pGLGdDQURZLENBSHBCO0FBQUEsZ0JBTU1HLE9BQU9WLFlBTmI7O0FBRFksK0hBU05RLElBVE0sRUFTQUMsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVh3QlgsSTs7QUFjM0JZLE9BQU9DLE9BQVAsR0FBaUJQLFlBQWpCIiwiZmlsZSI6IndpbGRjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFdpbGRjYXJkTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvd2lsZGNhcmQnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IHdpbGRjYXJkIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgV2lsZGNhcmRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHdpbGRjYXJkVGVybWluYWxTeW1ib2xDb250ZW50ID0gd2lsZGNhcmQsXG4gICAgICAgICAgd2lsZGNhcmRUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBuZXcgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uKHdpbGRjYXJkVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBuYW1lID0gJ3dpbGRjYXJkJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHdpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gV2lsZGNhcmROb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaWxkY2FyZFJ1bGU7XG4iXX0=