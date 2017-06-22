'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Production = require('../production'),
    EndOfLineNode = require('../node/epsilon'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer,
    specialSymbols = ExtendedBNFLexer.specialSymbols,
    epsilon = specialSymbols.epsilon;

var EpsilonProduction = function (_Production) {
      _inherits(EpsilonProduction, _Production);

      function EpsilonProduction() {
            _classCallCheck(this, EpsilonProduction);

            var epsilonTerminalSymbolContent = epsilon,
                epsilonTerminalSymbolDefinition = new TerminalSymbolDefinition(epsilonTerminalSymbolContent),
                name = 'epsilon',
                definitions = [epsilonTerminalSymbolDefinition],
                Node = EndOfLineNode;

            return _possibleConstructorReturn(this, (EpsilonProduction.__proto__ || Object.getPrototypeOf(EpsilonProduction)).call(this, name, definitions, Node));
      }

      return EpsilonProduction;
}(Production);

module.exports = EpsilonProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL2Vwc2lsb24uanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJFbmRPZkxpbmVOb2RlIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiRXh0ZW5kZWRCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwiZXBzaWxvbiIsIkVwc2lsb25Qcm9kdWN0aW9uIiwiZXBzaWxvblRlcm1pbmFsU3ltYm9sQ29udGVudCIsImVwc2lsb25UZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsYUFBYUQsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUUsZ0JBQWdCRixRQUFRLGlCQUFSLENBRHRCO0FBQUEsSUFFTUcsMkJBQTJCSCxRQUFRLDhCQUFSLENBRmpDOztBQUlNLElBQUVJLGdCQUFGLEdBQXVCTCxNQUF2QixDQUFFSyxnQkFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELGdCQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsT0FGRixHQUVjRCxjQUZkLENBRUVDLE9BRkY7O0lBSUFDLGlCOzs7QUFDSixtQ0FBYztBQUFBOztBQUNaLGdCQUFNQywrQkFBK0JGLE9BQXJDO0FBQUEsZ0JBQ01HLGtDQUFrQyxJQUFJTix3QkFBSixDQUE2QkssNEJBQTdCLENBRHhDO0FBQUEsZ0JBRU1FLE9BQU8sU0FGYjtBQUFBLGdCQUdNQyxjQUFjLENBQ1pGLCtCQURZLENBSHBCO0FBQUEsZ0JBTU1HLE9BQU9WLGFBTmI7O0FBRFkseUlBU05RLElBVE0sRUFTQUMsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVg2QlgsVTs7QUFjaENZLE9BQU9DLE9BQVAsR0FBaUJQLGlCQUFqQiIsImZpbGUiOiJlcHNpbG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIEVuZE9mTGluZU5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2Vwc2lsb24nKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBFeHRlbmRlZEJORkxleGVyLFxuICAgICAgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgRXBzaWxvblByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZXBzaWxvblRlcm1pbmFsU3ltYm9sQ29udGVudCA9IGVwc2lsb24sXG4gICAgICAgICAgZXBzaWxvblRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IG5ldyBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24oZXBzaWxvblRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgbmFtZSA9ICdlcHNpbG9uJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGVwc2lsb25UZXJtaW5hbFN5bWJvbERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBFbmRPZkxpbmVOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uUHJvZHVjdGlvbjtcbiJdfQ==