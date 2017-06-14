'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol');

var LazyQuantifierDefinition = function (_Definition) {
  _inherits(LazyQuantifierDefinition, _Definition);

  function LazyQuantifierDefinition() {
    _classCallCheck(this, LazyQuantifierDefinition);

    var questionMarkTerminalSymbolContent = '?',
        questionMarkTerminalSymbolNoWhitespace = true,
        questionMarkTerminalSymbolPart = new TerminalSymbolPart(questionMarkTerminalSymbolContent, questionMarkTerminalSymbolNoWhitespace),
        parts = [questionMarkTerminalSymbolPart];

    return _possibleConstructorReturn(this, (LazyQuantifierDefinition.__proto__ || Object.getPrototypeOf(LazyQuantifierDefinition)).call(this, parts));
  }

  return LazyQuantifierDefinition;
}(Definition);

module.exports = LazyQuantifierDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9sYXp5UXVhbnRpZmllci5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIkxhenlRdWFudGlmaWVyRGVmaW5pdGlvbiIsInF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCIsInF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sTm9XaGl0ZXNwYWNlIiwicXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsa0NBQVIsQ0FEM0I7O0lBR01FLHdCOzs7QUFDSixzQ0FBYztBQUFBOztBQUNaLFFBQU1DLG9DQUFvQyxHQUExQztBQUFBLFFBQ01DLHlDQUF5QyxJQUQvQztBQUFBLFFBRU1DLGlDQUFpQyxJQUFJSixrQkFBSixDQUF1QkUsaUNBQXZCLEVBQTBEQyxzQ0FBMUQsQ0FGdkM7QUFBQSxRQUdNRSxRQUFRLENBQ05ELDhCQURNLENBSGQ7O0FBRFksK0lBUU5DLEtBUk07QUFTYjs7O0VBVm9DUCxVOztBQWF2Q1EsT0FBT0MsT0FBUCxHQUFpQk4sd0JBQWpCIiwiZmlsZSI6ImxhenlRdWFudGlmaWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvdGVybWluYWxTeW1ib2wnKTtcblxuY2xhc3MgTGF6eVF1YW50aWZpZXJEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9ICc/JyxcbiAgICAgICAgICBxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbE5vV2hpdGVzcGFjZSA9IHRydWUsXG4gICAgICAgICAgcXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQsIHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sTm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMYXp5UXVhbnRpZmllckRlZmluaXRpb247XG4iXX0=