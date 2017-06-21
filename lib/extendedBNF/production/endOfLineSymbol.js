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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL2VuZE9mTGluZVN5bWJvbC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbiIsIkVuZE9mTGluZVN5bWJvbE5vZGUiLCJUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwiRU5EX09GX0xJTkUiLCJFbmRPZkxpbmVTeW1ib2xQcm9kdWN0aW9uIiwiZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xDb250ZW50IiwiZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGFBQWFELFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01FLHNCQUFzQkYsUUFBUSx5QkFBUixDQUQ1QjtBQUFBLElBRU1HLDJCQUEyQkgsUUFBUSw4QkFBUixDQUZqQzs7QUFJTSxJQUFFSSxRQUFGLEdBQWVMLE1BQWYsQ0FBRUssUUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELFFBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxXQUZGLEdBRWtCRCxjQUZsQixDQUVFQyxXQUZGOztJQUlBQyx5Qjs7O0FBQ0osMkNBQWM7QUFBQTs7QUFDWixnQkFBTUMsaUNBQWlDRixXQUF2QztBQUFBLGdCQUNNRyxvQ0FBb0MsSUFBSU4sd0JBQUosQ0FBNkJLLDhCQUE3QixDQUQxQztBQUFBLGdCQUVNRSxPQUFPLGlCQUZiO0FBQUEsZ0JBR01DLGNBQWMsQ0FDWkYsaUNBRFksQ0FIcEI7QUFBQSxnQkFNTUcsT0FBT1YsbUJBTmI7O0FBRFkseUpBU05RLElBVE0sRUFTQUMsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVhxQ1gsVTs7QUFjeENZLE9BQU9DLE9BQVAsR0FBaUJQLHlCQUFqQiIsImZpbGUiOiJlbmRPZkxpbmVTeW1ib2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgRW5kT2ZMaW5lU3ltYm9sTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZW5kT2ZMaW5lU3ltYm9sJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBFTkRfT0ZfTElORSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEVuZE9mTGluZVN5bWJvbFByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xDb250ZW50ID0gRU5EX09GX0xJTkUsXG4gICAgICAgICAgZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gbmV3IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbihlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSAnZW5kT2ZMaW5lU3ltYm9sJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IEVuZE9mTGluZVN5bWJvbE5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVN5bWJvbFByb2R1Y3Rpb247XG4iXX0=