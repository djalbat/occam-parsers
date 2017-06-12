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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ncm91cC5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIkdyb3VwRGVmaW5pdGlvbiIsIm5vV2hpdGVzcGFjZSIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwiZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZSIsImNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0IiwiZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZVBhcnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSxrQ0FBUixDQUQzQjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSxrQ0FBUixDQUYzQjs7SUFJTUcsZTs7O0FBQ0osNkJBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLEtBQXJCO0FBQUEsUUFDTUMsbUNBQW1DLEdBRHpDO0FBQUEsUUFFTUMsNEJBQTRCLGFBRmxDO0FBQUEsUUFHTUMsb0NBQW9DLEdBSDFDO0FBQUEsUUFJTUMsZ0NBQWdDLElBQUlQLGtCQUFKLENBQXVCSSxnQ0FBdkIsRUFBeURELFlBQXpELENBSnRDO0FBQUEsUUFLTUssZ0NBQWdDLElBQUlQLGtCQUFKLENBQXVCSSx5QkFBdkIsRUFBa0RGLFlBQWxELENBTHRDO0FBQUEsUUFNTU0saUNBQWlDLElBQUlULGtCQUFKLENBQXVCTSxpQ0FBdkIsRUFBMERILFlBQTFELENBTnZDO0FBQUEsUUFPTU8sUUFBUSxDQUNOSCw2QkFETSxFQUVOQyw2QkFGTSxFQUdOQyw4QkFITSxDQVBkOztBQURZLDZIQWNOQyxLQWRNO0FBZWI7OztFQWhCMkJaLFU7O0FBbUI5QmEsT0FBT0MsT0FBUCxHQUFpQlYsZUFBakIiLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgR3JvdXBEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gJygnLFxuICAgICAgICAgIGRlZmluaXRpb25zUHJvZHVjdGlvbk5hbWUgPSAnZGVmaW5pdGlvbnMnLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9ICcpJyxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQob3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KGRlZmluaXRpb25zUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIGRlZmluaXRpb25zUHJvZHVjdGlvbk5hbWVQYXJ0LFxuICAgICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwRGVmaW5pdGlvbjtcbiJdfQ==