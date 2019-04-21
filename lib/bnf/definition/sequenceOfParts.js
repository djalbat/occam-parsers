'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ruleNames = require('../ruleNames'),
    Definition = require('../definition'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol');

var PartRuleName = ruleNames.PartRuleName;

var SequenceOfPartsDefinition = function (_Definition) {
  _inherits(SequenceOfPartsDefinition, _Definition);

  function SequenceOfPartsDefinition(terminalSymbolContent) {
    _classCallCheck(this, SequenceOfPartsDefinition);

    var noWhitespace = void 0;

    noWhitespace = false;

    var partRuleName = PartRuleName,
        partRuleNamePart = new RuleNamePart(partRuleName, noWhitespace);

    noWhitespace = true;

    var terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, noWhitespace),
        parts = [partRuleNamePart, terminalSymbolPart];

    return _possibleConstructorReturn(this, (SequenceOfPartsDefinition.__proto__ || Object.getPrototypeOf(SequenceOfPartsDefinition)).call(this, parts));
  }

  return SequenceOfPartsDefinition;
}(Definition);

module.exports = SequenceOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsicnVsZU5hbWVzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJQYXJ0UnVsZU5hbWUiLCJTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIiwidGVybWluYWxTeW1ib2xDb250ZW50Iiwibm9XaGl0ZXNwYWNlIiwicGFydFJ1bGVOYW1lIiwicGFydFJ1bGVOYW1lUGFydCIsInRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSw4QkFBUixDQUZyQjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSxpQ0FBUixDQUgzQjs7SUFLUUksWSxHQUFpQkwsUyxDQUFqQkssWTs7SUFFRkMseUI7OztBQUNKLHFDQUFZQyxxQkFBWixFQUFtQztBQUFBOztBQUNqQyxRQUFJQyxxQkFBSjs7QUFFQUEsbUJBQWUsS0FBZjs7QUFFQSxRQUFNQyxlQUFlSixZQUFyQjtBQUFBLFFBQ01LLG1CQUFtQixJQUFJUCxZQUFKLENBQWlCTSxZQUFqQixFQUErQkQsWUFBL0IsQ0FEekI7O0FBR0FBLG1CQUFlLElBQWY7O0FBRUEsUUFBTUcscUJBQXFCLElBQUlQLGtCQUFKLENBQXVCRyxxQkFBdkIsRUFBOENDLFlBQTlDLENBQTNCO0FBQUEsUUFDTUksUUFBUSxDQUNORixnQkFETSxFQUVOQyxrQkFGTSxDQURkOztBQVZpQyxpSkFnQjNCQyxLQWhCMkI7QUFpQmxDOzs7RUFsQnFDVixVOztBQXFCeENXLE9BQU9DLE9BQVAsR0FBaUJSLHlCQUFqQiIsImZpbGUiOiJzZXF1ZW5jZU9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0ZXJtaW5hbFN5bWJvbENvbnRlbnQpIHtcbiAgICBsZXQgbm9XaGl0ZXNwYWNlO1xuXG4gICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG5cbiAgICBjb25zdCBwYXJ0UnVsZU5hbWUgPSBQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocGFydFJ1bGVOYW1lLCBub1doaXRlc3BhY2UpO1xuXG4gICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcblxuICAgIGNvbnN0IHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uO1xuIl19