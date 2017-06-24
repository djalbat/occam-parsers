'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    EndOfLineNode = require('../node/epsilon'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer,
    specialSymbols = ExtendedBNFLexer.specialSymbols,
    epsilon = specialSymbols.epsilon;

var EpsilonRule = function (_Rule) {
      _inherits(EpsilonRule, _Rule);

      function EpsilonRule() {
            _classCallCheck(this, EpsilonRule);

            var epsilonTerminalSymbolContent = epsilon,
                epsilonTerminalSymbolDefinition = new TerminalSymbolDefinition(epsilonTerminalSymbolContent),
                name = 'epsilon',
                definitions = [epsilonTerminalSymbolDefinition],
                Node = EndOfLineNode;

            return _possibleConstructorReturn(this, (EpsilonRule.__proto__ || Object.getPrototypeOf(EpsilonRule)).call(this, name, definitions, Node));
      }

      return EpsilonRule;
}(Rule);

module.exports = EpsilonRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ydWxlL2Vwc2lsb24uanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlJ1bGUiLCJFbmRPZkxpbmVOb2RlIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiRXh0ZW5kZWRCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwiZXBzaWxvbiIsIkVwc2lsb25SdWxlIiwiZXBzaWxvblRlcm1pbmFsU3ltYm9sQ29udGVudCIsImVwc2lsb25UZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxnQkFBZ0JGLFFBQVEsaUJBQVIsQ0FEdEI7QUFBQSxJQUVNRywyQkFBMkJILFFBQVEsOEJBQVIsQ0FGakM7O0FBSU0sSUFBRUksZ0JBQUYsR0FBdUJMLE1BQXZCLENBQUVLLGdCQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsZ0JBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxPQUZGLEdBRWNELGNBRmQsQ0FFRUMsT0FGRjs7SUFJQUMsVzs7O0FBQ0osNkJBQWM7QUFBQTs7QUFDWixnQkFBTUMsK0JBQStCRixPQUFyQztBQUFBLGdCQUNNRyxrQ0FBa0MsSUFBSU4sd0JBQUosQ0FBNkJLLDRCQUE3QixDQUR4QztBQUFBLGdCQUVNRSxPQUFPLFNBRmI7QUFBQSxnQkFHTUMsY0FBYyxDQUNaRiwrQkFEWSxDQUhwQjtBQUFBLGdCQU1NRyxPQUFPVixhQU5iOztBQURZLDZIQVNOUSxJQVRNLEVBU0FDLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYdUJYLEk7O0FBYzFCWSxPQUFPQyxPQUFQLEdBQWlCUCxXQUFqQiIsImZpbGUiOiJlcHNpbG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIEVuZE9mTGluZU5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2Vwc2lsb24nKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBFeHRlbmRlZEJORkxleGVyLFxuICAgICAgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgRXBzaWxvblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZXBzaWxvblRlcm1pbmFsU3ltYm9sQ29udGVudCA9IGVwc2lsb24sXG4gICAgICAgICAgZXBzaWxvblRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IG5ldyBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24oZXBzaWxvblRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgbmFtZSA9ICdlcHNpbG9uJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGVwc2lsb25UZXJtaW5hbFN5bWJvbERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBFbmRPZkxpbmVOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uUnVsZTtcbiJdfQ==