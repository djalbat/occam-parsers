'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Production = require('../production'),
    WildcardNode = require('../node/wildcard'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer,
    specialSymbols = ExtendedBNFLexer.specialSymbols,
    wildcard = specialSymbols.wildcard;

var WildcardProduction = function (_Production) {
      _inherits(WildcardProduction, _Production);

      function WildcardProduction() {
            _classCallCheck(this, WildcardProduction);

            var wildcardTerminalSymbolContent = wildcard,
                wildcardTerminalSymbolDefinition = new TerminalSymbolDefinition(wildcardTerminalSymbolContent),
                name = 'wildcard',
                definitions = [wildcardTerminalSymbolDefinition],
                Node = WildcardNode;

            return _possibleConstructorReturn(this, (WildcardProduction.__proto__ || Object.getPrototypeOf(WildcardProduction)).call(this, name, definitions, Node));
      }

      return WildcardProduction;
}(Production);

module.exports = WildcardProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL3dpbGRjYXJkLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJQcm9kdWN0aW9uIiwiV2lsZGNhcmROb2RlIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiRXh0ZW5kZWRCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwid2lsZGNhcmQiLCJXaWxkY2FyZFByb2R1Y3Rpb24iLCJ3aWxkY2FyZFRlcm1pbmFsU3ltYm9sQ29udGVudCIsIndpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGFBQWFELFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01FLGVBQWVGLFFBQVEsa0JBQVIsQ0FEckI7QUFBQSxJQUVNRywyQkFBMkJILFFBQVEsOEJBQVIsQ0FGakM7O0FBSU0sSUFBRUksZ0JBQUYsR0FBdUJMLE1BQXZCLENBQUVLLGdCQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsZ0JBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxRQUZGLEdBRWVELGNBRmYsQ0FFRUMsUUFGRjs7SUFJQUMsa0I7OztBQUNKLG9DQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLGdDQUFnQ0YsUUFBdEM7QUFBQSxnQkFDTUcsbUNBQW1DLElBQUlOLHdCQUFKLENBQTZCSyw2QkFBN0IsQ0FEekM7QUFBQSxnQkFFTUUsT0FBTyxVQUZiO0FBQUEsZ0JBR01DLGNBQWMsQ0FDWkYsZ0NBRFksQ0FIcEI7QUFBQSxnQkFNTUcsT0FBT1YsWUFOYjs7QUFEWSwySUFTTlEsSUFUTSxFQVNBQyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWDhCWCxVOztBQWNqQ1ksT0FBT0MsT0FBUCxHQUFpQlAsa0JBQWpCIiwiZmlsZSI6IndpbGRjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFdpbGRjYXJkTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvd2lsZGNhcmQnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBFeHRlbmRlZEJORkxleGVyLFxuICAgICAgeyB3aWxkY2FyZCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIFdpbGRjYXJkUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB3aWxkY2FyZFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHdpbGRjYXJkLFxuICAgICAgICAgIHdpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gbmV3IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbih3aWxkY2FyZFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgbmFtZSA9ICd3aWxkY2FyZCcsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICB3aWxkY2FyZFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFdpbGRjYXJkTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2lsZGNhcmRQcm9kdWN0aW9uO1xuIl19