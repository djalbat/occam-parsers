'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts');

var PartsRule = function (_Rule) {
  _inherits(PartsRule, _Rule);

  function PartsRule() {
    _classCallCheck(this, PartsRule);

    var terminalPart = null,
        noWhitespace = false,
        partProductionName = 'part',
        oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(terminalPart, partProductionName, noWhitespace),
        parts = [oneOrMorePartProductionNamePartsPart];

    return _possibleConstructorReturn(this, (PartsRule.__proto__ || Object.getPrototypeOf(PartsRule)).call(this, parts));
  }

  return PartsRule;
}(Rule);

module.exports = PartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9wYXJ0cy5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlBhcnRzUnVsZSIsInRlcm1pbmFsUGFydCIsIm5vV2hpdGVzcGFjZSIsInBhcnRQcm9kdWN0aW9uTmFtZSIsIm9uZU9yTW9yZVBhcnRQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEM0I7O0lBR01FLFM7OztBQUNKLHVCQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxJQUFyQjtBQUFBLFFBQ01DLGVBQWUsS0FEckI7QUFBQSxRQUVNQyxxQkFBcUIsTUFGM0I7QUFBQSxRQUdNQyx1Q0FBdUMsSUFBSUwsa0JBQUosQ0FBdUJFLFlBQXZCLEVBQXFDRSxrQkFBckMsRUFBeURELFlBQXpELENBSDdDO0FBQUEsUUFJTUcsUUFBUSxDQUNORCxvQ0FETSxDQUpkOztBQURZLGlIQVNOQyxLQVRNO0FBVWI7OztFQVhxQlIsSTs7QUFjeEJTLE9BQU9DLE9BQVAsR0FBaUJQLFNBQWpCIiwiZmlsZSI6InBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9vbmVPck1vcmVQYXJ0cycpO1xuXG5jbGFzcyBQYXJ0c1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgdGVybWluYWxQYXJ0ID0gbnVsbCxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lID0gJ3BhcnQnLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQodGVybWluYWxQYXJ0LCBwYXJ0UHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQgXG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRzUnVsZTtcbiJdfQ==