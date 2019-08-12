'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var TerminalPart = require('../../part/terminal'),
    TerminalNode = require('../../../common/node/terminal');

var specialSymbols = lexers.specialSymbols,
    wildcard = specialSymbols.wildcard;

var WildcardPart = function (_TerminalPart) {
  _inherits(WildcardPart, _TerminalPart);

  function WildcardPart() {
    _classCallCheck(this, WildcardPart);

    return _possibleConstructorReturn(this, (WildcardPart.__proto__ || Object.getPrototypeOf(WildcardPart)).apply(this, arguments));
  }

  _createClass(WildcardPart, [{
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var terminalNode = null;

      var savedIndex = configuration.getSavedIndex(),
          nextSignificantToken = configuration.getNextSignificantToken(noWhitespace),
          significantToken = nextSignificantToken; ///

      if (significantToken !== null) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }

      if (terminalNode === null) {
        configuration.backtrack(savedIndex);
      }

      return terminalNode;
    }
  }, {
    key: 'asString',
    value: function asString() {
      var string = wildcard; ///

      return string;
    }
  }, {
    key: 'clone',
    value: function clone() {
      return _get(WildcardPart.prototype.__proto__ || Object.getPrototypeOf(WildcardPart.prototype), 'clone', this).call(this, WildcardPart);
    }
  }]);

  return WildcardPart;
}(TerminalPart);

module.exports = WildcardPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC93aWxkY2FyZC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiVGVybWluYWxQYXJ0IiwiVGVybWluYWxOb2RlIiwic3BlY2lhbFN5bWJvbHMiLCJ3aWxkY2FyZCIsIldpbGRjYXJkUGFydCIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJ0ZXJtaW5hbE5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJiYWNrdHJhY2siLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsZUFBZUQsUUFBUSxxQkFBUixDQUFyQjtBQUFBLElBQ01FLGVBQWVGLFFBQVEsK0JBQVIsQ0FEckI7O0FBR00sSUFBRUcsY0FBRixHQUFxQkosTUFBckIsQ0FBRUksY0FBRjtBQUFBLElBQ0VDLFFBREYsR0FDZUQsY0FEZixDQUNFQyxRQURGOztJQUdBQyxZOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxZLEVBQWM7QUFDakNBLHFCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEaUMsQ0FDaUI7O0FBRWxELFVBQUlDLGVBQWUsSUFBbkI7O0FBRUEsVUFBTUMsYUFBYUgsY0FBY0ksYUFBZCxFQUFuQjtBQUFBLFVBQ0NDLHVCQUF1QkwsY0FBY00sdUJBQWQsQ0FBc0NMLFlBQXRDLENBRHhCO0FBQUEsVUFFQ00sbUJBQW1CRixvQkFGcEIsQ0FMaUMsQ0FPUzs7QUFFMUMsVUFBSUUscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCTCx1QkFBZU4sYUFBYVksb0JBQWIsQ0FBa0NELGdCQUFsQyxDQUFmO0FBQ0Q7O0FBRUQsVUFBSUwsaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCRixzQkFBY1MsU0FBZCxDQUF3Qk4sVUFBeEI7QUFDRDs7QUFFRCxhQUFPRCxZQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1RLFNBQVNaLFFBQWYsQ0FEUyxDQUNpQjs7QUFFMUIsYUFBT1ksTUFBUDtBQUNEOzs7NEJBRU87QUFBRSwrSEFBbUJYLFlBQW5CO0FBQW1DOzs7O0VBM0JwQkosWTs7QUE4QjNCZ0IsT0FBT0MsT0FBUCxHQUFpQmIsWUFBakIiLCJmaWxlIjoid2lsZGNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBUZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L3Rlcm1pbmFsJyksXG4gICAgICBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbCcpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IHdpbGRjYXJkIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgV2lsZGNhcmRQYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb25maWd1cmF0aW9uLmdldFNhdmVkSW5kZXgoKSxcblx0XHRcdFx0XHRuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IGNvbmZpZ3VyYXRpb24uZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcblx0XHRcdFx0XHRzaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRlcm1pbmFsTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHdpbGRjYXJkOyAgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShXaWxkY2FyZFBhcnQpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2lsZGNhcmRQYXJ0O1xuIl19