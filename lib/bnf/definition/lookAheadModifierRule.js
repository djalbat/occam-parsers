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
            nonWhitespace = true,
                terminalSymbolPart = new TerminalSymbolPart(content, nonWhitespace),
                parts = [terminalSymbolPart];

            return _possibleConstructorReturn(this, (LookAheadModifierRuleDefinition.__proto__ || Object.getPrototypeOf(LookAheadModifierRuleDefinition)).call(this, parts));
      }

      return LookAheadModifierRuleDefinition;
}(Definition);

module.exports = LookAheadModifierRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9sb29rQWhlYWRNb2RpZmllclJ1bGUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJzcGVjaWFsU3ltYm9scyIsImV4Y2xhbWF0aW9uTWFyayIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJjb250ZW50Iiwibm9uV2hpdGVzcGFjZSIsInRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsYUFBYUQsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUUscUJBQXFCRixRQUFRLGlDQUFSLENBRDNCOztBQUdNLElBQUVHLGNBQUYsR0FBcUJKLE1BQXJCLENBQUVJLGNBQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3NCRCxjQUR0QixDQUNFQyxlQURGOztJQUdBQywrQjs7O0FBQ0osaURBQWM7QUFBQTs7QUFDWixnQkFBTUMsVUFBVUYsZUFBaEI7QUFBQSxnQkFBa0M7QUFDNUJHLDRCQUFnQixJQUR0QjtBQUFBLGdCQUVNQyxxQkFBcUIsSUFBSU4sa0JBQUosQ0FBdUJJLE9BQXZCLEVBQWdDQyxhQUFoQyxDQUYzQjtBQUFBLGdCQUdNRSxRQUFRLENBQ05ELGtCQURNLENBSGQ7O0FBRFkscUtBUU5DLEtBUk07QUFTYjs7O0VBVjJDUixVOztBQWE5Q1MsT0FBT0MsT0FBUCxHQUFpQk4sK0JBQWpCIiwiZmlsZSI6Imxvb2tBaGVhZE1vZGlmaWVyUnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgTG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZXhjbGFtYXRpb25NYXJrLCAgLy8vXG4gICAgICAgICAgbm9uV2hpdGVzcGFjZSA9IHRydWUsXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjb250ZW50LCBub25XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb247XG4iXX0=