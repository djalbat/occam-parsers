'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol'),
    ProductionNamePart = require('../../common/part/productionName');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJHcm91cE9mUGFydHNEZWZpbml0aW9uIiwicGFydFByb2R1Y3Rpb25OYW1lIiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0Iiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJvbmVPck1vcmVQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSx3QkFBUixDQUQzQjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSxrQ0FBUixDQUYzQjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSxrQ0FBUixDQUgzQjs7SUFLTUksc0I7OztBQUNKLG9DQUFjO0FBQUE7O0FBQ1osUUFBTUMscUJBQXFCLE1BQTNCO0FBQUEsUUFDTUMsbUNBQW1DLEdBRHpDO0FBQUEsUUFFTUMsb0NBQW9DLEdBRjFDO0FBQUEsUUFHTUMseUJBQXlCLElBQUlMLGtCQUFKLENBQXVCRSxrQkFBdkIsQ0FIL0I7QUFBQSxRQUlNSSxnQ0FBZ0MsSUFBSVAsa0JBQUosQ0FBdUJJLGdDQUF2QixDQUp0QztBQUFBLFFBS01JLGlDQUFpQyxJQUFJUixrQkFBSixDQUF1QkssaUNBQXZCLENBTHZDO0FBQUEsUUFNTUksdUNBQXVDLElBQUlWLGtCQUFKLENBQXVCTyxzQkFBdkIsQ0FON0M7QUFBQSxRQU9NSSxRQUFRLENBQ05ILDZCQURNLEVBRU5FLG9DQUZNLEVBR05ELDhCQUhNLENBUGQ7O0FBRFksMklBY05FLEtBZE07QUFlYjs7O0VBaEJrQ2IsVTs7QUFtQnJDYyxPQUFPQyxPQUFQLEdBQWlCVixzQkFBakIiLCJmaWxlIjoiZ3JvdXBPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGFydFByb2R1Y3Rpb25OYW1lID0gJ3BhcnQnLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gJygnLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9ICcpJyxcbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwYXJ0UHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydFByb2R1Y3Rpb25OYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIG9uZU9yTW9yZVBhcnRQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCxcbiAgICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE9mUGFydHNEZWZpbml0aW9uO1xuIl19