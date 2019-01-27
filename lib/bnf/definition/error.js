'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    WildcardPart = require('../part/terminal/wildcard');

var ErrorDefinition = function (_Definition) {
  _inherits(ErrorDefinition, _Definition);

  function ErrorDefinition() {
    _classCallCheck(this, ErrorDefinition);

    var noWhitespace = false,
        wildcardPart = new WildcardPart(noWhitespace),
        parts = [wildcardPart];

    return _possibleConstructorReturn(this, (ErrorDefinition.__proto__ || Object.getPrototypeOf(ErrorDefinition)).call(this, parts));
  }

  return ErrorDefinition;
}(Definition);

module.exports = ErrorDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9lcnJvci5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIldpbGRjYXJkUGFydCIsIkVycm9yRGVmaW5pdGlvbiIsIm5vV2hpdGVzcGFjZSIsIndpbGRjYXJkUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSwyQkFBUixDQURyQjs7SUFHTUUsZTs7O0FBQ0osNkJBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLEtBQXJCO0FBQUEsUUFDTUMsZUFBZSxJQUFJSCxZQUFKLENBQWlCRSxZQUFqQixDQURyQjtBQUFBLFFBRU1FLFFBQVEsQ0FDTkQsWUFETSxDQUZkOztBQURZLDZIQU9OQyxLQVBNO0FBUWI7OztFQVQyQk4sVTs7QUFZOUJPLE9BQU9DLE9BQVAsR0FBaUJMLGVBQWpCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgV2lsZGNhcmRQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC93aWxkY2FyZCcpO1xuXG5jbGFzcyBFcnJvckRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgd2lsZGNhcmRQYXJ0ID0gbmV3IFdpbGRjYXJkUGFydChub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgd2lsZGNhcmRQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JEZWZpbml0aW9uO1xuIl19