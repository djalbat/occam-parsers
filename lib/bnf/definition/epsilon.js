'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    EpsilonPart = require('../part/terminal/epsilon');

var EpsilonDefinition = function (_Definition) {
  _inherits(EpsilonDefinition, _Definition);

  function EpsilonDefinition() {
    _classCallCheck(this, EpsilonDefinition);

    var nonWhitespace = false,
        epsilonPart = new EpsilonPart(nonWhitespace),
        parts = [epsilonPart];

    return _possibleConstructorReturn(this, (EpsilonDefinition.__proto__ || Object.getPrototypeOf(EpsilonDefinition)).call(this, parts));
  }

  return EpsilonDefinition;
}(Definition);

module.exports = EpsilonDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiRXBzaWxvblBhcnQiLCJFcHNpbG9uRGVmaW5pdGlvbiIsIm5vbldoaXRlc3BhY2UiLCJlcHNpbG9uUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSwwQkFBUixDQURwQjs7SUFHTUUsaUI7OztBQUNKLCtCQUFjO0FBQUE7O0FBQ1osUUFBTUMsZ0JBQWdCLEtBQXRCO0FBQUEsUUFDTUMsY0FBYyxJQUFJSCxXQUFKLENBQWdCRSxhQUFoQixDQURwQjtBQUFBLFFBRU1FLFFBQVEsQ0FDTkQsV0FETSxDQUZkOztBQURZLGlJQU9OQyxLQVBNO0FBUWI7OztFQVQ2Qk4sVTs7QUFZaENPLE9BQU9DLE9BQVAsR0FBaUJMLGlCQUFqQiIsImZpbGUiOiJlcHNpbG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgRXBzaWxvblBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsL2Vwc2lsb24nKTtcblxuY2xhc3MgRXBzaWxvbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9uV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KG5vbldoaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uRGVmaW5pdGlvbjtcbiJdfQ==