'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Production = require('../production'),
    EndOfLineNode = require('../node/endOfLine'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer,
    specialSymbols = ExtendedBNFLexer.specialSymbols,
    END_OF_LINE = specialSymbols.END_OF_LINE;

var EndOfLineProduction = function (_Production) {
      _inherits(EndOfLineProduction, _Production);

      function EndOfLineProduction() {
            _classCallCheck(this, EndOfLineProduction);

            var endOfLineTerminalSymbolContent = END_OF_LINE,
                endOfLineTerminalSymbolDefinition = new TerminalSymbolDefinition(endOfLineTerminalSymbolContent),
                name = 'endOfLine',
                definitions = [endOfLineTerminalSymbolDefinition],
                Node = EndOfLineNode;

            return _possibleConstructorReturn(this, (EndOfLineProduction.__proto__ || Object.getPrototypeOf(EndOfLineProduction)).call(this, name, definitions, Node));
      }

      return EndOfLineProduction;
}(Production);

module.exports = EndOfLineProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL2VuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbiIsIkVuZE9mTGluZU5vZGUiLCJUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJFeHRlbmRlZEJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJFTkRfT0ZfTElORSIsIkVuZE9mTGluZVByb2R1Y3Rpb24iLCJlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsYUFBYUQsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUUsZ0JBQWdCRixRQUFRLG1CQUFSLENBRHRCO0FBQUEsSUFFTUcsMkJBQTJCSCxRQUFRLDhCQUFSLENBRmpDOztBQUlNLElBQUVJLGdCQUFGLEdBQXVCTCxNQUF2QixDQUFFSyxnQkFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELGdCQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsV0FGRixHQUVrQkQsY0FGbEIsQ0FFRUMsV0FGRjs7SUFJQUMsbUI7OztBQUNKLHFDQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLGlDQUFpQ0YsV0FBdkM7QUFBQSxnQkFDTUcsb0NBQW9DLElBQUlOLHdCQUFKLENBQTZCSyw4QkFBN0IsQ0FEMUM7QUFBQSxnQkFFTUUsT0FBTyxXQUZiO0FBQUEsZ0JBR01DLGNBQWMsQ0FDWkYsaUNBRFksQ0FIcEI7QUFBQSxnQkFNTUcsT0FBT1YsYUFOYjs7QUFEWSw2SUFTTlEsSUFUTSxFQVNBQyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWCtCWCxVOztBQWNsQ1ksT0FBT0MsT0FBUCxHQUFpQlAsbUJBQWpCIiwiZmlsZSI6ImVuZE9mTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBFbmRPZkxpbmVOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9lbmRPZkxpbmUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBFeHRlbmRlZEJORkxleGVyLFxuICAgICAgeyBFTkRfT0ZfTElORSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEVuZE9mTGluZVByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xDb250ZW50ID0gRU5EX09GX0xJTkUsXG4gICAgICAgICAgZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gbmV3IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbihlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSAnZW5kT2ZMaW5lJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IEVuZE9mTGluZU5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVByb2R1Y3Rpb247XG4iXX0=