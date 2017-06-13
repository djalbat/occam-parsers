'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol'),
    ProductionNamePart = require('../../common/part/productionName');

var GroupDefinition = function (_Definition) {
  _inherits(GroupDefinition, _Definition);

  function GroupDefinition() {
    _classCallCheck(this, GroupDefinition);

    var noWhitespace = false,
        openBracketTerminalSymbolContent = '(',
        definitionsProductionName = 'definitions',
        closeBracketTerminalSymbolContent = ')',
        openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent, noWhitespace),
        definitionsProductionNamePart = new ProductionNamePart(definitionsProductionName, noWhitespace),
        closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent, noWhitespace),
        parts = [openBracketTerminalSymbolPart, definitionsProductionNamePart, closeBracketTerminalSymbolPart];

    return _possibleConstructorReturn(this, (GroupDefinition.__proto__ || Object.getPrototypeOf(GroupDefinition)).call(this, parts));
  }

  return GroupDefinition;
}(Definition);

module.exports = GroupDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9kZWZpbml0aW9uL2dyb3VwLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwiR3JvdXBEZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlIiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJkZWZpbml0aW9uc1Byb2R1Y3Rpb25OYW1lIiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50Iiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJkZWZpbml0aW9uc1Byb2R1Y3Rpb25OYW1lUGFydCIsImNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLGtDQUFSLENBRDNCO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLGtDQUFSLENBRjNCOztJQUlNRyxlOzs7QUFDSiw2QkFBYztBQUFBOztBQUNaLFFBQU1DLGVBQWUsS0FBckI7QUFBQSxRQUNNQyxtQ0FBbUMsR0FEekM7QUFBQSxRQUVNQyw0QkFBNEIsYUFGbEM7QUFBQSxRQUdNQyxvQ0FBb0MsR0FIMUM7QUFBQSxRQUlNQyxnQ0FBZ0MsSUFBSVAsa0JBQUosQ0FBdUJJLGdDQUF2QixFQUF5REQsWUFBekQsQ0FKdEM7QUFBQSxRQUtNSyxnQ0FBZ0MsSUFBSVAsa0JBQUosQ0FBdUJJLHlCQUF2QixFQUFrREYsWUFBbEQsQ0FMdEM7QUFBQSxRQU1NTSxpQ0FBaUMsSUFBSVQsa0JBQUosQ0FBdUJNLGlDQUF2QixFQUEwREgsWUFBMUQsQ0FOdkM7QUFBQSxRQU9NTyxRQUFRLENBQ05ILDZCQURNLEVBRU5DLDZCQUZNLEVBR05DLDhCQUhNLENBUGQ7O0FBRFksNkhBY05DLEtBZE07QUFlYjs7O0VBaEIyQlosVTs7QUFtQjlCYSxPQUFPQyxPQUFQLEdBQWlCVixlQUFqQiIsImZpbGUiOiJncm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBHcm91cERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnKCcsXG4gICAgICAgICAgZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZSA9ICdkZWZpbml0aW9ucycsXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gJyknLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1Byb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQoZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZVBhcnQsXG4gICAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBEZWZpbml0aW9uO1xuIl19