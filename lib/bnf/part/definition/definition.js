'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    OptionalPartPart = require('../../common/part/optionalPart'),
    OneOrMorePartsPart = require('../../common/part/oneOrMoreParts');

var DefinitionDefinition = function (_Definition) {
  _inherits(DefinitionDefinition, _Definition);

  function DefinitionDefinition() {
    _classCallCheck(this, DefinitionDefinition);

    var terminalPart = null,
        noWhitespace = false,
        partProductionName = 'part',
        verticalSpaceProductionName = 'verticalSpace',
        oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(terminalPart, partProductionName, noWhitespace),
        optionalVerticalSpaceProductionNamePartPart = new OptionalPartPart(terminalPart, verticalSpaceProductionName, noWhitespace),
        parts = [oneOrMorePartProductionNamePartsPart, optionalVerticalSpaceProductionNamePartPart];

    return _possibleConstructorReturn(this, (DefinitionDefinition.__proto__ || Object.getPrototypeOf(DefinitionDefinition)).call(this, parts));
  }

  return DefinitionDefinition;
}(Definition);

module.exports = DefinitionDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9kZWZpbml0aW9uL2RlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJPcHRpb25hbFBhcnRQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiRGVmaW5pdGlvbkRlZmluaXRpb24iLCJ0ZXJtaW5hbFBhcnQiLCJub1doaXRlc3BhY2UiLCJwYXJ0UHJvZHVjdGlvbk5hbWUiLCJ2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbk5hbWUiLCJvbmVPck1vcmVQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQiLCJvcHRpb25hbFZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uTmFtZVBhcnRQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxtQkFBbUJELFFBQVEsZ0NBQVIsQ0FEekI7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsa0NBQVIsQ0FGM0I7O0lBSU1HLG9COzs7QUFDSixrQ0FBYztBQUFBOztBQUNaLFFBQU1DLGVBQWUsSUFBckI7QUFBQSxRQUNNQyxlQUFlLEtBRHJCO0FBQUEsUUFFTUMscUJBQXFCLE1BRjNCO0FBQUEsUUFHTUMsOEJBQThCLGVBSHBDO0FBQUEsUUFJTUMsdUNBQXVDLElBQUlOLGtCQUFKLENBQXVCRSxZQUF2QixFQUFxQ0Usa0JBQXJDLEVBQXlERCxZQUF6RCxDQUo3QztBQUFBLFFBS01JLDhDQUE4QyxJQUFJUixnQkFBSixDQUFxQkcsWUFBckIsRUFBbUNHLDJCQUFuQyxFQUFnRUYsWUFBaEUsQ0FMcEQ7QUFBQSxRQU1NSyxRQUFRLENBQ05GLG9DQURNLEVBRU5DLDJDQUZNLENBTmQ7O0FBRFksdUlBWU5DLEtBWk07QUFhYjs7O0VBZGdDWCxVOztBQWlCbkNZLE9BQU9DLE9BQVAsR0FBaUJULG9CQUFqQiIsImZpbGUiOiJkZWZpbml0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgT3B0aW9uYWxQYXJ0UGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L29wdGlvbmFsUGFydCcpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvb25lT3JNb3JlUGFydHMnKTtcblxuY2xhc3MgRGVmaW5pdGlvbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgdGVybWluYWxQYXJ0ID0gbnVsbCxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWUgPSAncGFydCcsXG4gICAgICAgICAgdmVydGljYWxTcGFjZVByb2R1Y3Rpb25OYW1lID0gJ3ZlcnRpY2FsU3BhY2UnLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQodGVybWluYWxQYXJ0LCBwYXJ0UHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgb3B0aW9uYWxWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbk5hbWVQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHRlcm1pbmFsUGFydCwgdmVydGljYWxTcGFjZVByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb25lT3JNb3JlUGFydFByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0LFxuICAgICAgICAgICAgb3B0aW9uYWxWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbk5hbWVQYXJ0UGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb25EZWZpbml0aW9uO1xuIl19