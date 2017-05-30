'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    RulesRule = require('../rule/rules');

var RulesProduction = function (_Production) {
  _inherits(RulesProduction, _Production);

  function RulesProduction() {
    _classCallCheck(this, RulesProduction);

    var rulesRule = new RulesRule(),
        name = 'rules',
        rules = [rulesRule],
        Node = null;

    return _possibleConstructorReturn(this, (RulesProduction.__proto__ || Object.getPrototypeOf(RulesProduction)).call(this, name, rules, Node));
  }

  return RulesProduction;
}(Production);

module.exports = RulesProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9ydWxlcy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIlJ1bGVzUnVsZSIsIlJ1bGVzUHJvZHVjdGlvbiIsInJ1bGVzUnVsZSIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGVBQVIsQ0FEbEI7O0lBR01FLGU7OztBQUNKLDZCQUFjO0FBQUE7O0FBQ1osUUFBTUMsWUFBWSxJQUFJRixTQUFKLEVBQWxCO0FBQUEsUUFDTUcsT0FBTyxPQURiO0FBQUEsUUFFTUMsUUFBUSxDQUNORixTQURNLENBRmQ7QUFBQSxRQUtNRyxPQUFPLElBTGI7O0FBRFksNkhBUU5GLElBUk0sRUFRQUMsS0FSQSxFQVFPQyxJQVJQO0FBU2I7OztFQVYyQlAsVTs7QUFhOUJRLE9BQU9DLE9BQVAsR0FBaUJOLGVBQWpCIiwiZmlsZSI6InJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgUnVsZXNSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9ydWxlcycpO1xuXG5jbGFzcyBSdWxlc1Byb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcnVsZXNSdWxlID0gbmV3IFJ1bGVzUnVsZSgpLFxuICAgICAgICAgIG5hbWUgPSAncnVsZXMnLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgcnVsZXNSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gbnVsbDtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVzUHJvZHVjdGlvbjtcbiJdfQ==