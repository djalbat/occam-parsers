'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    PartsRule = require('../rule/parts');

var PartsProduction = function (_Production) {
  _inherits(PartsProduction, _Production);

  function PartsProduction() {
    _classCallCheck(this, PartsProduction);

    var partsRule = new PartsRule(),
        name = 'parts',
        rules = [partsRule],
        Node = null;

    return _possibleConstructorReturn(this, (PartsProduction.__proto__ || Object.getPrototypeOf(PartsProduction)).call(this, name, rules, Node));
  }

  return PartsProduction;
}(Production);

module.exports = PartsProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9wYXJ0cy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIlBhcnRzUnVsZSIsIlBhcnRzUHJvZHVjdGlvbiIsInBhcnRzUnVsZSIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGVBQVIsQ0FEbEI7O0lBR01FLGU7OztBQUNKLDZCQUFjO0FBQUE7O0FBQ1osUUFBTUMsWUFBWSxJQUFJRixTQUFKLEVBQWxCO0FBQUEsUUFDTUcsT0FBTyxPQURiO0FBQUEsUUFFTUMsUUFBUSxDQUNORixTQURNLENBRmQ7QUFBQSxRQUtNRyxPQUFPLElBTGI7O0FBRFksNkhBUU5GLElBUk0sRUFRQUMsS0FSQSxFQVFPQyxJQVJQO0FBU2I7OztFQVYyQlAsVTs7QUFhOUJRLE9BQU9DLE9BQVAsR0FBaUJOLGVBQWpCIiwiZmlsZSI6InBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgUGFydHNSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9wYXJ0cycpO1xuXG5jbGFzcyBQYXJ0c1Byb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGFydHNSdWxlID0gbmV3IFBhcnRzUnVsZSgpLFxuICAgICAgICAgIG5hbWUgPSAncGFydHMnLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgcGFydHNSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gbnVsbDtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRzUHJvZHVjdGlvbjtcbiJdfQ==