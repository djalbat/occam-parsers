'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol'),
    ProductionNamePart = require('../../common/part/productionName');

var GroupDefinition = function (_Definition) {
  _inherits(GroupDefinition, _Definition);

  function GroupDefinition() {
    _classCallCheck(this, GroupDefinition);

    var noWhitespace = false,
        openBracketTerminalSymbolContent = '(',
        partProductionName = 'part',
        closeBracketTerminalSymbolContent = ')',
        openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent, noWhitespace),
        partProductionNamePart = new ProductionNamePart(partProductionName, noWhitespace),
        oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(partProductionNamePart, noWhitespace),
        closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent, noWhitespace),
        parts = [openBracketTerminalSymbolPart, oneOrMorePartProductionNamePartsPart, closeBracketTerminalSymbolPart];

    return _possibleConstructorReturn(this, (GroupDefinition.__proto__ || Object.getPrototypeOf(GroupDefinition)).call(this, parts));
  }

  return GroupDefinition;
}(Definition);

module.exports = GroupDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ncm91cC5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIkdyb3VwRGVmaW5pdGlvbiIsIm5vV2hpdGVzcGFjZSIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFByb2R1Y3Rpb25OYW1lIiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50Iiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0Iiwib25lT3JNb3JlUGFydFByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsa0NBQVIsQ0FGM0I7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsa0NBQVIsQ0FIM0I7O0lBS01JLGU7OztBQUNKLDZCQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxLQUFyQjtBQUFBLFFBQ01DLG1DQUFtQyxHQUR6QztBQUFBLFFBRU1DLHFCQUFxQixNQUYzQjtBQUFBLFFBR01DLG9DQUFvQyxHQUgxQztBQUFBLFFBSU1DLGdDQUFnQyxJQUFJUCxrQkFBSixDQUF1QkksZ0NBQXZCLEVBQXlERCxZQUF6RCxDQUp0QztBQUFBLFFBS01LLHlCQUF5QixJQUFJUCxrQkFBSixDQUF1Qkksa0JBQXZCLEVBQTJDRixZQUEzQyxDQUwvQjtBQUFBLFFBTU1NLHVDQUF1QyxJQUFJVixrQkFBSixDQUF1QlMsc0JBQXZCLEVBQStDTCxZQUEvQyxDQU43QztBQUFBLFFBT01PLGlDQUFpQyxJQUFJVixrQkFBSixDQUF1Qk0saUNBQXZCLEVBQTBESCxZQUExRCxDQVB2QztBQUFBLFFBUU1RLFFBQVEsQ0FDTkosNkJBRE0sRUFFTkUsb0NBRk0sRUFHTkMsOEJBSE0sQ0FSZDs7QUFEWSw2SEFlTkMsS0FmTTtBQWdCYjs7O0VBakIyQmQsVTs7QUFvQjlCZSxPQUFPQyxPQUFQLEdBQWlCWCxlQUFqQiIsImZpbGUiOiJncm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvb25lT3JNb3JlUGFydHMnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBHcm91cERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnKCcsXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lID0gJ3BhcnQnLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9ICcpJyxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQob3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocGFydFByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydFByb2R1Y3Rpb25OYW1lUGFydCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgb25lT3JNb3JlUGFydFByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0LFxuICAgICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwRGVmaW5pdGlvbjtcbiJdfQ==