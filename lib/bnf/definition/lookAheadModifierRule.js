'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol');

var specialSymbols = lexers.specialSymbols,
    exclamationMark = specialSymbols.exclamationMark;

var LookAheadModifierRuleDefinition = function (_Definition) {
      _inherits(LookAheadModifierRuleDefinition, _Definition);

      function LookAheadModifierRuleDefinition() {
            _classCallCheck(this, LookAheadModifierRuleDefinition);

            var content = exclamationMark,
                ///
            noWhitespace = true,
                terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace),
                parts = [terminalSymbolPart];

            return _possibleConstructorReturn(this, (LookAheadModifierRuleDefinition.__proto__ || Object.getPrototypeOf(LookAheadModifierRuleDefinition)).call(this, parts));
      }

      return LookAheadModifierRuleDefinition;
}(Definition);

module.exports = LookAheadModifierRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9sb29rQWhlYWRNb2RpZmllclJ1bGUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJzcGVjaWFsU3ltYm9scyIsImV4Y2xhbWF0aW9uTWFyayIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJjb250ZW50Iiwibm9XaGl0ZXNwYWNlIiwidGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxhQUFhRCxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNRSxxQkFBcUJGLFFBQVEsaUNBQVIsQ0FEM0I7O0FBR00sSUFBRUcsY0FBRixHQUFxQkosTUFBckIsQ0FBRUksY0FBRjtBQUFBLElBQ0VDLGVBREYsR0FDc0JELGNBRHRCLENBQ0VDLGVBREY7O0lBR0FDLCtCOzs7QUFDSixpREFBYztBQUFBOztBQUNaLGdCQUFNQyxVQUFVRixlQUFoQjtBQUFBLGdCQUFrQztBQUM1QkcsMkJBQWUsSUFEckI7QUFBQSxnQkFFTUMscUJBQXFCLElBQUlOLGtCQUFKLENBQXVCSSxPQUF2QixFQUFnQ0MsWUFBaEMsQ0FGM0I7QUFBQSxnQkFHTUUsUUFBUSxDQUNORCxrQkFETSxDQUhkOztBQURZLHFLQVFOQyxLQVJNO0FBU2I7OztFQVYyQ1IsVTs7QUFhOUNTLE9BQU9DLE9BQVAsR0FBaUJOLCtCQUFqQiIsImZpbGUiOiJsb29rQWhlYWRNb2RpZmllclJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IGV4Y2xhbWF0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIExvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGV4Y2xhbWF0aW9uTWFyaywgIC8vL1xuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHRydWUsXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbjtcbiJdfQ==