'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    RuleNamePart = require('../part/nonTerminal/ruleName');

var RuleNameDefinition = function (_Definition) {
  _inherits(RuleNameDefinition, _Definition);

  function RuleNameDefinition(ruleName) {
    _classCallCheck(this, RuleNameDefinition);

    var noWhitespace = false,
        ruleNamePart = new RuleNamePart(ruleName, noWhitespace),
        parts = [ruleNamePart];

    return _possibleConstructorReturn(this, (RuleNameDefinition.__proto__ || Object.getPrototypeOf(RuleNameDefinition)).call(this, parts));
  }

  return RuleNameDefinition;
}(Definition);

module.exports = RuleNameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlJ1bGVOYW1lUGFydCIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwibm9XaGl0ZXNwYWNlIiwicnVsZU5hbWVQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLDhCQUFSLENBRHJCOztJQUdNRSxrQjs7O0FBQ0osOEJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsUUFBTUMsZUFBZSxLQUFyQjtBQUFBLFFBQ01DLGVBQWUsSUFBSUosWUFBSixDQUFpQkUsUUFBakIsRUFBMkJDLFlBQTNCLENBRHJCO0FBQUEsUUFFTUUsUUFBUSxDQUNORCxZQURNLENBRmQ7O0FBRG9CLG1JQU9kQyxLQVBjO0FBUXJCOzs7RUFUOEJQLFU7O0FBWWpDUSxPQUFPQyxPQUFQLEdBQWlCTixrQkFBakIiLCJmaWxlIjoicnVsZU5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyk7XG5cbmNsYXNzIFJ1bGVOYW1lRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZU5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBydWxlTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5hbWVEZWZpbml0aW9uO1xuIl19