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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL25vV2hpdGVzcGFjZVBhcnQuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwiTk9fV0hJVEVTUEFDRSIsIk5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIiwicGFydFByb2R1Y3Rpb25OYW1lIiwibm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xDb250ZW50Iiwibm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0IiwicGFydFByb2R1Y3Rpb25OYW1lUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsYUFBYUQsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUUscUJBQXFCRixRQUFRLHdCQUFSLENBRDNCO0FBQUEsSUFFTUcscUJBQXFCSCxRQUFRLHdCQUFSLENBRjNCOztBQUlNLElBQUVJLFFBQUYsR0FBZUwsTUFBZixDQUFFSyxRQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsUUFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLGFBRkYsR0FFb0JELGNBRnBCLENBRUVDLGFBRkY7O0lBSUFDLDBCOzs7QUFDSiw0Q0FBYztBQUFBOztBQUNaLGdCQUFNQyxxQkFBcUIsTUFBM0I7QUFBQSxnQkFDTUMsb0NBQW9DSCxhQUQxQztBQUFBLGdCQUVNSSxpQ0FBaUMsSUFBSVIsa0JBQUosQ0FBdUJPLGlDQUF2QixDQUZ2QztBQUFBLGdCQUdNRSx5QkFBeUIsSUFBSVIsa0JBQUosQ0FBdUJLLGtCQUF2QixDQUgvQjtBQUFBLGdCQUlNSSxRQUFRLENBQ05GLDhCQURNLEVBRU5DLHNCQUZNLENBSmQ7O0FBRFksMkpBVU5DLEtBVk07QUFXYjs7O0VBWnNDWCxVOztBQWV6Q1ksT0FBT0MsT0FBUCxHQUFpQlAsMEJBQWpCIiwiZmlsZSI6Im5vV2hpdGVzcGFjZVBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBhcnRQcm9kdWN0aW9uTmFtZSA9ICdwYXJ0JyxcbiAgICAgICAgICBub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBOT19XSElURVNQQUNFLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQobm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwYXJ0UHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbjtcbiJdfQ==