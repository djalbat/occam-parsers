'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    ruleNames = require('../ruleNames'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol');

var SequenceOfPartsDefinition = function (_Definition) {
  _inherits(SequenceOfPartsDefinition, _Definition);

  function SequenceOfPartsDefinition(terminalSymbolContent) {
    _classCallCheck(this, SequenceOfPartsDefinition);

    var partRuleName = ruleNames.PartRule,
        terminalSymbolNoWhitespace = true,
        partRuleNamePart = new RuleNamePart(partRuleName),
        terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, terminalSymbolNoWhitespace),
        parts = [partRuleNamePart, terminalSymbolPart];

    return _possibleConstructorReturn(this, (SequenceOfPartsDefinition.__proto__ || Object.getPrototypeOf(SequenceOfPartsDefinition)).call(this, parts));
  }

  return SequenceOfPartsDefinition;
}(Definition);

module.exports = SequenceOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJydWxlTmFtZXMiLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIiwidGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFJ1bGVOYW1lIiwiUGFydFJ1bGUiLCJ0ZXJtaW5hbFN5bWJvbE5vV2hpdGVzcGFjZSIsInBhcnRSdWxlTmFtZVBhcnQiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLFlBQVlELFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1FLGVBQWVGLFFBQVEsOEJBQVIsQ0FGckI7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsaUNBQVIsQ0FIM0I7O0lBS01JLHlCOzs7QUFDSixxQ0FBWUMscUJBQVosRUFBbUM7QUFBQTs7QUFDakMsUUFBTUMsZUFBZUwsVUFBVU0sUUFBL0I7QUFBQSxRQUNNQyw2QkFBNkIsSUFEbkM7QUFBQSxRQUVNQyxtQkFBbUIsSUFBSVAsWUFBSixDQUFpQkksWUFBakIsQ0FGekI7QUFBQSxRQUdNSSxxQkFBcUIsSUFBSVAsa0JBQUosQ0FBdUJFLHFCQUF2QixFQUE4Q0csMEJBQTlDLENBSDNCO0FBQUEsUUFJTUcsUUFBUSxDQUNORixnQkFETSxFQUVOQyxrQkFGTSxDQUpkOztBQURpQyxpSkFVM0JDLEtBVjJCO0FBV2xDOzs7RUFacUNaLFU7O0FBZXhDYSxPQUFPQyxPQUFQLEdBQWlCVCx5QkFBakIiLCJmaWxlIjoic2VxdWVuY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNsYXNzIFNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IodGVybWluYWxTeW1ib2xDb250ZW50KSB7XG4gICAgY29uc3QgcGFydFJ1bGVOYW1lID0gcnVsZU5hbWVzLlBhcnRSdWxlLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sTm9XaGl0ZXNwYWNlID0gdHJ1ZSxcbiAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChwYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodGVybWluYWxTeW1ib2xDb250ZW50LCB0ZXJtaW5hbFN5bWJvbE5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb247XG4iXX0=