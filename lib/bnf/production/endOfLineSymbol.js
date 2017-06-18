'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Production = require('../production'),
    EndOfLineSymbolNode = require('../node/endOfLineSymbol'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    END_OF_LINE = specialSymbols.END_OF_LINE;

var EndOfLineSymbolProduction = function (_Production) {
      _inherits(EndOfLineSymbolProduction, _Production);

      function EndOfLineSymbolProduction() {
            _classCallCheck(this, EndOfLineSymbolProduction);

            var endOfLineTerminalSymbolContent = END_OF_LINE,
                endOfLineTerminalSymbolDefinition = new TerminalSymbolDefinition(endOfLineTerminalSymbolContent),
                name = 'endOfLineSymbol',
                definitions = [endOfLineTerminalSymbolDefinition],
                Node = EndOfLineSymbolNode;

            return _possibleConstructorReturn(this, (EndOfLineSymbolProduction.__proto__ || Object.getPrototypeOf(EndOfLineSymbolProduction)).call(this, name, definitions, Node));
      }

      return EndOfLineSymbolProduction;
}(Production);

module.exports = EndOfLineSymbolProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9lbmRPZkxpbmVTeW1ib2wuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJFbmRPZkxpbmVTeW1ib2xOb2RlIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsIkVORF9PRl9MSU5FIiwiRW5kT2ZMaW5lU3ltYm9sUHJvZHVjdGlvbiIsImVuZE9mTGluZVRlcm1pbmFsU3ltYm9sQ29udGVudCIsImVuZE9mTGluZVRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxhQUFhRCxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNRSxzQkFBc0JGLFFBQVEseUJBQVIsQ0FENUI7QUFBQSxJQUVNRywyQkFBMkJILFFBQVEsOEJBQVIsQ0FGakM7O0FBSU0sSUFBRUksUUFBRixHQUFlTCxNQUFmLENBQUVLLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsV0FGRixHQUVrQkQsY0FGbEIsQ0FFRUMsV0FGRjs7SUFJQUMseUI7OztBQUNKLDJDQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLGlDQUFpQ0YsV0FBdkM7QUFBQSxnQkFDTUcsb0NBQW9DLElBQUlOLHdCQUFKLENBQTZCSyw4QkFBN0IsQ0FEMUM7QUFBQSxnQkFFTUUsT0FBTyxpQkFGYjtBQUFBLGdCQUdNQyxjQUFjLENBQ1pGLGlDQURZLENBSHBCO0FBQUEsZ0JBTU1HLE9BQU9WLG1CQU5iOztBQURZLHlKQVNOUSxJQVRNLEVBU0FDLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYcUNYLFU7O0FBY3hDWSxPQUFPQyxPQUFQLEdBQWlCUCx5QkFBakIiLCJmaWxlIjoiZW5kT2ZMaW5lU3ltYm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIEVuZE9mTGluZVN5bWJvbE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2VuZE9mTGluZVN5bWJvbCcpLFxuICAgICAgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgRU5EX09GX0xJTkUgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBFbmRPZkxpbmVTeW1ib2xQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sQ29udGVudCA9IEVORF9PRl9MSU5FLFxuICAgICAgICAgIGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IG5ldyBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24oZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBuYW1lID0gJ2VuZE9mTGluZVN5bWJvbCcsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBFbmRPZkxpbmVTeW1ib2xOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVTeW1ib2xQcm9kdWN0aW9uO1xuIl19