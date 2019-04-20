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

    var lookAhead = false,
        partRuleName = PartRuleName,
        partRuleNamePart = new RuleNamePart(partRuleName, lookAhead, noWhitespace);

    noWhitespace = true;

    var terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, noWhitespace),
        parts = [partRuleNamePart, terminalSymbolPart];

    return _possibleConstructorReturn(this, (SequenceOfPartsDefinition.__proto__ || Object.getPrototypeOf(SequenceOfPartsDefinition)).call(this, parts));
  }

  return SequenceOfPartsDefinition;
}(Definition);

module.exports = SequenceOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsicnVsZU5hbWVzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJQYXJ0UnVsZU5hbWUiLCJTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIiwidGVybWluYWxTeW1ib2xDb250ZW50Iiwibm9XaGl0ZXNwYWNlIiwibG9va0FoZWFkIiwicGFydFJ1bGVOYW1lIiwicGFydFJ1bGVOYW1lUGFydCIsInRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSw4QkFBUixDQUZyQjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSxpQ0FBUixDQUgzQjs7SUFLUUksWSxHQUFpQkwsUyxDQUFqQkssWTs7SUFFRkMseUI7OztBQUNKLHFDQUFZQyxxQkFBWixFQUFtQztBQUFBOztBQUNqQyxRQUFJQyxxQkFBSjs7QUFFQUEsbUJBQWUsS0FBZjs7QUFFQSxRQUFNQyxZQUFZLEtBQWxCO0FBQUEsUUFDTUMsZUFBZUwsWUFEckI7QUFBQSxRQUVNTSxtQkFBbUIsSUFBSVIsWUFBSixDQUFpQk8sWUFBakIsRUFBK0JELFNBQS9CLEVBQTBDRCxZQUExQyxDQUZ6Qjs7QUFJQUEsbUJBQWUsSUFBZjs7QUFFQSxRQUFNSSxxQkFBcUIsSUFBSVIsa0JBQUosQ0FBdUJHLHFCQUF2QixFQUE4Q0MsWUFBOUMsQ0FBM0I7QUFBQSxRQUNNSyxRQUFRLENBQ05GLGdCQURNLEVBRU5DLGtCQUZNLENBRGQ7O0FBWGlDLGlKQWlCM0JDLEtBakIyQjtBQWtCbEM7OztFQW5CcUNYLFU7O0FBc0J4Q1ksT0FBT0MsT0FBUCxHQUFpQlQseUJBQWpCIiwiZmlsZSI6InNlcXVlbmNlT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jb25zdCB7IFBhcnRSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRlcm1pbmFsU3ltYm9sQ29udGVudCkge1xuICAgIGxldCBub1doaXRlc3BhY2U7XG5cbiAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxvb2tBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIHBhcnRSdWxlTmFtZSA9IFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChwYXJ0UnVsZU5hbWUsIGxvb2tBaGVhZCwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG5cbiAgICBjb25zdCB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbjtcbiJdfQ==