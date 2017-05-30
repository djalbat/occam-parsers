'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../rule'),
    WildcardPart = require('../../part/wildcard');

var WildcardPartRule = function (_Rule) {
  _inherits(WildcardPartRule, _Rule);

  function WildcardPartRule() {
    _classCallCheck(this, WildcardPartRule);

    var noWhitespace = false,
        wildcardPart = new WildcardPart(noWhitespace),
        parts = [wildcardPart];

    return _possibleConstructorReturn(this, (WildcardPartRule.__proto__ || Object.getPrototypeOf(WildcardPartRule)).call(this, parts));
  }

  return WildcardPartRule;
}(Rule);

module.exports = WildcardPartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcnVsZS9wYXJ0L3dpbGRjYXJkLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiV2lsZGNhcmRQYXJ0IiwiV2lsZGNhcmRQYXJ0UnVsZSIsIm5vV2hpdGVzcGFjZSIsIndpbGRjYXJkUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxZQUFSLENBQWI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLHFCQUFSLENBRHJCOztJQUdNRSxnQjs7O0FBQ0osOEJBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLEtBQXJCO0FBQUEsUUFDTUMsZUFBZSxJQUFJSCxZQUFKLENBQWlCRSxZQUFqQixDQURyQjtBQUFBLFFBRU1FLFFBQVEsQ0FDTkQsWUFETSxDQUZkOztBQURZLCtIQU9OQyxLQVBNO0FBUWI7OztFQVQ0Qk4sSTs7QUFZL0JPLE9BQU9DLE9BQVAsR0FBaUJMLGdCQUFqQiIsImZpbGUiOiJ3aWxkY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL3J1bGUnKSxcbiAgICAgIFdpbGRjYXJkUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvd2lsZGNhcmQnKTtcblxuY2xhc3MgV2lsZGNhcmRQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICB3aWxkY2FyZFBhcnQgPSBuZXcgV2lsZGNhcmRQYXJ0KG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB3aWxkY2FyZFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2lsZGNhcmRQYXJ0UnVsZTtcbiJdfQ==