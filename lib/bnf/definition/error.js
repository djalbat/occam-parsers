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

    var nonWhitespace = false,
        wildcardPart = new WildcardPart(nonWhitespace),
        parts = [wildcardPart];

    return _possibleConstructorReturn(this, (ErrorDefinition.__proto__ || Object.getPrototypeOf(ErrorDefinition)).call(this, parts));
  }

  return ErrorDefinition;
}(Definition);

module.exports = ErrorDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9lcnJvci5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIldpbGRjYXJkUGFydCIsIkVycm9yRGVmaW5pdGlvbiIsIm5vbldoaXRlc3BhY2UiLCJ3aWxkY2FyZFBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGVBQWVELFFBQVEsMkJBQVIsQ0FEckI7O0lBR01FLGU7OztBQUNKLDZCQUFjO0FBQUE7O0FBQ1osUUFBTUMsZ0JBQWdCLEtBQXRCO0FBQUEsUUFDTUMsZUFBZSxJQUFJSCxZQUFKLENBQWlCRSxhQUFqQixDQURyQjtBQUFBLFFBRU1FLFFBQVEsQ0FDTkQsWUFETSxDQUZkOztBQURZLDZIQU9OQyxLQVBNO0FBUWI7OztFQVQyQk4sVTs7QUFZOUJPLE9BQU9DLE9BQVAsR0FBaUJMLGVBQWpCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgV2lsZGNhcmRQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC93aWxkY2FyZCcpO1xuXG5jbGFzcyBFcnJvckRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9uV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHdpbGRjYXJkUGFydCA9IG5ldyBXaWxkY2FyZFBhcnQobm9uV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB3aWxkY2FyZFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvckRlZmluaXRpb247XG4iXX0=