'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    TerminalSymbolPart = require('../part/terminalSymbol'),
    ProductionNamePart = require('../part/productionName');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer,
    specialSymbols = ExtendedBNFLexer.specialSymbols,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL25vV2hpdGVzcGFjZVBhcnQuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJFeHRlbmRlZEJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJOT19XSElURVNQQUNFIiwiTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24iLCJwYXJ0UHJvZHVjdGlvbk5hbWUiLCJub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxhQUFhRCxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRyxxQkFBcUJILFFBQVEsd0JBQVIsQ0FGM0I7O0FBSU0sSUFBRUksZ0JBQUYsR0FBdUJMLE1BQXZCLENBQUVLLGdCQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsZ0JBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxhQUZGLEdBRW9CRCxjQUZwQixDQUVFQyxhQUZGOztJQUlBQywwQjs7O0FBQ0osNENBQWM7QUFBQTs7QUFDWixnQkFBTUMscUJBQXFCLE1BQTNCO0FBQUEsZ0JBQ01DLG9DQUFvQ0gsYUFEMUM7QUFBQSxnQkFFTUksaUNBQWlDLElBQUlSLGtCQUFKLENBQXVCTyxpQ0FBdkIsQ0FGdkM7QUFBQSxnQkFHTUUseUJBQXlCLElBQUlSLGtCQUFKLENBQXVCSyxrQkFBdkIsQ0FIL0I7QUFBQSxnQkFJTUksUUFBUSxDQUNORiw4QkFETSxFQUVOQyxzQkFGTSxDQUpkOztBQURZLDJKQVVOQyxLQVZNO0FBV2I7OztFQVpzQ1gsVTs7QUFlekNZLE9BQU9DLE9BQVAsR0FBaUJQLDBCQUFqQiIsImZpbGUiOiJub1doaXRlc3BhY2VQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBFeHRlbmRlZEJORkxleGVyLFxuICAgICAgeyBOT19XSElURVNQQUNFIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGFydFByb2R1Y3Rpb25OYW1lID0gJ3BhcnQnLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sQ29udGVudCA9IE5PX1dISVRFU1BBQ0UsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIHBhcnRQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHBhcnRQcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uO1xuIl19