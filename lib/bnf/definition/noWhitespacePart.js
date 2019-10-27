'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol');

var specialSymbols = lexers.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var NoWhitespacePartDefinition = function (_Definition) {
      _inherits(NoWhitespacePartDefinition, _Definition);

      function NoWhitespacePartDefinition() {
            _classCallCheck(this, NoWhitespacePartDefinition);

            var content = NO_WHITESPACE,
                terminalSymbolPart = new TerminalSymbolPart(content),
                parts = [terminalSymbolPart];

            return _possibleConstructorReturn(this, (NoWhitespacePartDefinition.__proto__ || Object.getPrototypeOf(NoWhitespacePartDefinition)).call(this, parts));
      }

      return NoWhitespacePartDefinition;
}(Definition);

module.exports = NoWhitespacePartDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ub1doaXRlc3BhY2VQYXJ0LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwiVGVybWluYWxTeW1ib2xQYXJ0Iiwic3BlY2lhbFN5bWJvbHMiLCJOT19XSElURVNQQUNFIiwiTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24iLCJjb250ZW50IiwidGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxhQUFhRCxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNRSxxQkFBcUJGLFFBQVEsaUNBQVIsQ0FEM0I7O0FBR00sSUFBRUcsY0FBRixHQUFxQkosTUFBckIsQ0FBRUksY0FBRjtBQUFBLElBQ0VDLGFBREYsR0FDb0JELGNBRHBCLENBQ0VDLGFBREY7O0lBR0FDLDBCOzs7QUFDSiw0Q0FBYztBQUFBOztBQUNaLGdCQUFNQyxVQUFVRixhQUFoQjtBQUFBLGdCQUNNRyxxQkFBcUIsSUFBSUwsa0JBQUosQ0FBdUJJLE9BQXZCLENBRDNCO0FBQUEsZ0JBRU1FLFFBQVEsQ0FDTkQsa0JBRE0sQ0FGZDs7QUFEWSwySkFPTkMsS0FQTTtBQVFiOzs7RUFUc0NQLFU7O0FBWXpDUSxPQUFPQyxPQUFQLEdBQWlCTCwwQkFBakIiLCJmaWxlIjoibm9XaGl0ZXNwYWNlUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBOT19XSElURVNQQUNFLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbjtcbiJdfQ==