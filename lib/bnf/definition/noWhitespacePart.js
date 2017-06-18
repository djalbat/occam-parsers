'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    TerminalSymbolPart = require('../part/terminalSymbol'),
    ProductionNamePart = require('../part/productionName');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var NoWhitespacePartDefinition = function (_Definition) {
      _inherits(NoWhitespacePartDefinition, _Definition);

      function NoWhitespacePartDefinition() {
            _classCallCheck(this, NoWhitespacePartDefinition);

            var partProductionName = 'part',
                noWhitespaceTerminalSymbolContent = NO_WHITESPACE,
                noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent),
                partProductionNamePart = new ProductionNamePart(partProductionName),
                parts = [noWhitespaceTerminalSymbolPart, partProductionNamePart];

            return _possibleConstructorReturn(this, (NoWhitespacePartDefinition.__proto__ || Object.getPrototypeOf(NoWhitespacePartDefinition)).call(this, parts));
      }

      return NoWhitespacePartDefinition;
}(Definition);

module.exports = NoWhitespacePartDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ub1doaXRlc3BhY2VQYXJ0LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwiQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsIk5PX1dISVRFU1BBQ0UiLCJOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsInBhcnRQcm9kdWN0aW9uTmFtZSIsIm5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRQcm9kdWN0aW9uTmFtZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGFBQWFELFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01FLHFCQUFxQkYsUUFBUSx3QkFBUixDQUQzQjtBQUFBLElBRU1HLHFCQUFxQkgsUUFBUSx3QkFBUixDQUYzQjs7QUFJTSxJQUFFSSxRQUFGLEdBQWVMLE1BQWYsQ0FBRUssUUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELFFBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxhQUZGLEdBRW9CRCxjQUZwQixDQUVFQyxhQUZGOztJQUlBQywwQjs7O0FBQ0osNENBQWM7QUFBQTs7QUFDWixnQkFBTUMscUJBQXFCLE1BQTNCO0FBQUEsZ0JBQ01DLG9DQUFvQ0gsYUFEMUM7QUFBQSxnQkFFTUksaUNBQWlDLElBQUlSLGtCQUFKLENBQXVCTyxpQ0FBdkIsQ0FGdkM7QUFBQSxnQkFHTUUseUJBQXlCLElBQUlSLGtCQUFKLENBQXVCSyxrQkFBdkIsQ0FIL0I7QUFBQSxnQkFJTUksUUFBUSxDQUNORiw4QkFETSxFQUVOQyxzQkFGTSxDQUpkOztBQURZLDJKQVVOQyxLQVZNO0FBV2I7OztFQVpzQ1gsVTs7QUFlekNZLE9BQU9DLE9BQVAsR0FBaUJQLDBCQUFqQiIsImZpbGUiOiJub1doaXRlc3BhY2VQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwYXJ0UHJvZHVjdGlvbk5hbWUgPSAncGFydCcsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xDb250ZW50ID0gTk9fV0hJVEVTUEFDRSxcbiAgICAgICAgICBub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocGFydFByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIHBhcnRQcm9kdWN0aW9uTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb247XG4iXX0=