'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    WildcardNode = require('../node/wildcard'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer,
    specialSymbols = ExtendedBNFLexer.specialSymbols,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ydWxlL3dpbGRjYXJkLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJSdWxlIiwiV2lsZGNhcmROb2RlIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiRXh0ZW5kZWRCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwid2lsZGNhcmQiLCJXaWxkY2FyZFJ1bGUiLCJ3aWxkY2FyZFRlcm1pbmFsU3ltYm9sQ29udGVudCIsIndpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUUsZUFBZUYsUUFBUSxrQkFBUixDQURyQjtBQUFBLElBRU1HLDJCQUEyQkgsUUFBUSw4QkFBUixDQUZqQzs7QUFJTSxJQUFFSSxnQkFBRixHQUF1QkwsTUFBdkIsQ0FBRUssZ0JBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxnQkFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLFFBRkYsR0FFZUQsY0FGZixDQUVFQyxRQUZGOztJQUlBQyxZOzs7QUFDSiw4QkFBYztBQUFBOztBQUNaLGdCQUFNQyxnQ0FBZ0NGLFFBQXRDO0FBQUEsZ0JBQ01HLG1DQUFtQyxJQUFJTix3QkFBSixDQUE2QkssNkJBQTdCLENBRHpDO0FBQUEsZ0JBRU1FLE9BQU8sVUFGYjtBQUFBLGdCQUdNQyxjQUFjLENBQ1pGLGdDQURZLENBSHBCO0FBQUEsZ0JBTU1HLE9BQU9WLFlBTmI7O0FBRFksK0hBU05RLElBVE0sRUFTQUMsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVh3QlgsSTs7QUFjM0JZLE9BQU9DLE9BQVAsR0FBaUJQLFlBQWpCIiwiZmlsZSI6IndpbGRjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFdpbGRjYXJkTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvd2lsZGNhcmQnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBFeHRlbmRlZEJORkxleGVyLFxuICAgICAgeyB3aWxkY2FyZCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIFdpbGRjYXJkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB3aWxkY2FyZFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHdpbGRjYXJkLFxuICAgICAgICAgIHdpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gbmV3IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbih3aWxkY2FyZFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgbmFtZSA9ICd3aWxkY2FyZCcsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICB3aWxkY2FyZFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFdpbGRjYXJkTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2lsZGNhcmRSdWxlO1xuIl19