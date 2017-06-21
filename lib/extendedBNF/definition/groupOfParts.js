'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    TerminalSymbolPart = require('../part/terminalSymbol'),
    ProductionNamePart = require('../part/productionName');

var GroupOfPartsDefinition = function (_Definition) {
  _inherits(GroupOfPartsDefinition, _Definition);

  function GroupOfPartsDefinition() {
    _classCallCheck(this, GroupOfPartsDefinition);

    var partProductionName = 'part',
        openBracketTerminalSymbolContent = '(',
        closeBracketTerminalSymbolContent = ')',
        partProductionNamePart = new ProductionNamePart(partProductionName),
        openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
        closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
        oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(partProductionNamePart),
        parts = [openBracketTerminalSymbolPart, oneOrMorePartProductionNamePartsPart, closeBracketTerminalSymbolPart];

    return _possibleConstructorReturn(this, (GroupOfPartsDefinition.__proto__ || Object.getPrototypeOf(GroupOfPartsDefinition)).call(this, parts));
  }

  return GroupOfPartsDefinition;
}(Definition);

module.exports = GroupOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL2dyb3VwT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIkdyb3VwT2ZQYXJ0c0RlZmluaXRpb24iLCJwYXJ0UHJvZHVjdGlvbk5hbWUiLCJvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCIsImNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCIsInBhcnRQcm9kdWN0aW9uTmFtZVBhcnQiLCJvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCIsImNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCIsIm9uZU9yTW9yZVBhcnRQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLHdCQUFSLENBRDNCO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLHdCQUFSLENBRjNCO0FBQUEsSUFHTUcscUJBQXFCSCxRQUFRLHdCQUFSLENBSDNCOztJQUtNSSxzQjs7O0FBQ0osb0NBQWM7QUFBQTs7QUFDWixRQUFNQyxxQkFBcUIsTUFBM0I7QUFBQSxRQUNNQyxtQ0FBbUMsR0FEekM7QUFBQSxRQUVNQyxvQ0FBb0MsR0FGMUM7QUFBQSxRQUdNQyx5QkFBeUIsSUFBSUwsa0JBQUosQ0FBdUJFLGtCQUF2QixDQUgvQjtBQUFBLFFBSU1JLGdDQUFnQyxJQUFJUCxrQkFBSixDQUF1QkksZ0NBQXZCLENBSnRDO0FBQUEsUUFLTUksaUNBQWlDLElBQUlSLGtCQUFKLENBQXVCSyxpQ0FBdkIsQ0FMdkM7QUFBQSxRQU1NSSx1Q0FBdUMsSUFBSVYsa0JBQUosQ0FBdUJPLHNCQUF2QixDQU43QztBQUFBLFFBT01JLFFBQVEsQ0FDTkgsNkJBRE0sRUFFTkUsb0NBRk0sRUFHTkQsOEJBSE0sQ0FQZDs7QUFEWSwySUFjTkUsS0FkTTtBQWViOzs7RUFoQmtDYixVOztBQW1CckNjLE9BQU9DLE9BQVAsR0FBaUJWLHNCQUFqQiIsImZpbGUiOiJncm91cE9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGFydFByb2R1Y3Rpb25OYW1lID0gJ3BhcnQnLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gJygnLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9ICcpJyxcbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwYXJ0UHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydFByb2R1Y3Rpb25OYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIG9uZU9yTW9yZVBhcnRQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCxcbiAgICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE9mUGFydHNEZWZpbml0aW9uO1xuIl19