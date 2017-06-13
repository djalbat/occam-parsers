'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var EndOfLineSymbolProduction = function (_Production) {
  _inherits(EndOfLineSymbolProduction, _Production);

  function EndOfLineSymbolProduction() {
    _classCallCheck(this, EndOfLineSymbolProduction);

    var endOfLineTerminalSymbolContent = '<END_OF_LINE>',
        endOfLineTerminalSymbolDefinition = new TerminalSymbolDefinition(endOfLineTerminalSymbolContent),
        name = 'endOfLineSymbol',
        definitions = [endOfLineTerminalSymbolDefinition],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (EndOfLineSymbolProduction.__proto__ || Object.getPrototypeOf(EndOfLineSymbolProduction)).call(this, name, definitions, Node));
  }

  return EndOfLineSymbolProduction;
}(Production);

module.exports = EndOfLineSymbolProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9lbmRPZkxpbmVTeW1ib2wuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJFbmRPZkxpbmVTeW1ib2xQcm9kdWN0aW9uIiwiZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xDb250ZW50IiwiZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4QjtBQUFBLElBRU1FLDJCQUEyQkYsUUFBUSw4QkFBUixDQUZqQzs7SUFJTUcseUI7OztBQUNKLHVDQUFjO0FBQUE7O0FBQ1osUUFBTUMsaUNBQWlDLGVBQXZDO0FBQUEsUUFDTUMsb0NBQW9DLElBQUlILHdCQUFKLENBQTZCRSw4QkFBN0IsQ0FEMUM7QUFBQSxRQUVNRSxPQUFPLGlCQUZiO0FBQUEsUUFHTUMsY0FBYyxDQUNaRixpQ0FEWSxDQUhwQjtBQUFBLFFBTU1HLE9BQU9QLGVBTmI7O0FBRFksaUpBU05LLElBVE0sRUFTQUMsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVhxQ1QsVTs7QUFjeENVLE9BQU9DLE9BQVAsR0FBaUJQLHlCQUFqQiIsImZpbGUiOiJlbmRPZkxpbmVTeW1ib2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVTeW1ib2xQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sQ29udGVudCA9ICc8RU5EX09GX0xJTkU+JyxcbiAgICAgICAgICBlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBuZXcgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uKGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgbmFtZSA9ICdlbmRPZkxpbmVTeW1ib2wnLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVTeW1ib2xQcm9kdWN0aW9uO1xuIl19