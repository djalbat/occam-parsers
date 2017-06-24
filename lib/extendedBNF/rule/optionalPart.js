'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    OptionalPartNode = require('../node/optionalPart'),
    OptionalPartDefinition = require('../definition/optionalPart');

var OptionalPartRule = function (_Rule) {
  _inherits(OptionalPartRule, _Rule);

  function OptionalPartRule() {
    _classCallCheck(this, OptionalPartRule);

    var optionalPartDefinition = new OptionalPartDefinition(),
        name = 'optionalPart',
        optionalPart = [optionalPartDefinition],
        Node = OptionalPartNode;

    return _possibleConstructorReturn(this, (OptionalPartRule.__proto__ || Object.getPrototypeOf(OptionalPartRule)).call(this, name, optionalPart, Node));
  }

  return OptionalPartRule;
}(Rule);

module.exports = OptionalPartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ydWxlL29wdGlvbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk9wdGlvbmFsUGFydE5vZGUiLCJPcHRpb25hbFBhcnREZWZpbml0aW9uIiwiT3B0aW9uYWxQYXJ0UnVsZSIsIm9wdGlvbmFsUGFydERlZmluaXRpb24iLCJuYW1lIiwib3B0aW9uYWxQYXJ0IiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsbUJBQW1CRCxRQUFRLHNCQUFSLENBRHpCO0FBQUEsSUFFTUUseUJBQXlCRixRQUFRLDRCQUFSLENBRi9COztJQUlNRyxnQjs7O0FBQ0osOEJBQWM7QUFBQTs7QUFDWixRQUFNQyx5QkFBeUIsSUFBSUYsc0JBQUosRUFBL0I7QUFBQSxRQUNNRyxPQUFPLGNBRGI7QUFBQSxRQUVNQyxlQUFlLENBQ2JGLHNCQURhLENBRnJCO0FBQUEsUUFLTUcsT0FBT04sZ0JBTGI7O0FBRFksK0hBUU5JLElBUk0sRUFRQUMsWUFSQSxFQVFjQyxJQVJkO0FBU2I7OztFQVY0QlIsSTs7QUFhL0JTLE9BQU9DLE9BQVAsR0FBaUJOLGdCQUFqQiIsImZpbGUiOiJvcHRpb25hbFBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBPcHRpb25hbFBhcnROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9vcHRpb25hbFBhcnQnKSxcbiAgICAgIE9wdGlvbmFsUGFydERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL29wdGlvbmFsUGFydCcpO1xuXG5jbGFzcyBPcHRpb25hbFBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG9wdGlvbmFsUGFydERlZmluaXRpb24gPSBuZXcgT3B0aW9uYWxQYXJ0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSAnb3B0aW9uYWxQYXJ0JyxcbiAgICAgICAgICBvcHRpb25hbFBhcnQgPSBbXG4gICAgICAgICAgICBvcHRpb25hbFBhcnREZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gT3B0aW9uYWxQYXJ0Tm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIG9wdGlvbmFsUGFydCwgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9wdGlvbmFsUGFydFJ1bGU7XG4iXX0=