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

    var wildcardPart = new WildcardPart(),
        parts = [wildcardPart];

    return _possibleConstructorReturn(this, (ErrorDefinition.__proto__ || Object.getPrototypeOf(ErrorDefinition)).call(this, parts));
  }

  return ErrorDefinition;
}(Definition);

module.exports = ErrorDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9lcnJvci5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIldpbGRjYXJkUGFydCIsIkVycm9yRGVmaW5pdGlvbiIsIndpbGRjYXJkUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSwyQkFBUixDQURyQjs7SUFHTUUsZTs7O0FBQ0osNkJBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLElBQUlGLFlBQUosRUFBckI7QUFBQSxRQUNNRyxRQUFRLENBQ05ELFlBRE0sQ0FEZDs7QUFEWSw2SEFNTkMsS0FOTTtBQU9iOzs7RUFSMkJMLFU7O0FBVzlCTSxPQUFPQyxPQUFQLEdBQWlCSixlQUFqQiIsImZpbGUiOiJlcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFdpbGRjYXJkUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvd2lsZGNhcmQnKTtcblxuY2xhc3MgRXJyb3JEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHdpbGRjYXJkUGFydCA9IG5ldyBXaWxkY2FyZFBhcnQoKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHdpbGRjYXJkUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yRGVmaW5pdGlvbjtcbiJdfQ==