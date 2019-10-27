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
    value: function parse(configuration) {
      var terminalNode = null;

      var savedIndex = configuration.getSavedIndex(),
          nextSignificantToken = configuration.getNextSignificantToken(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC93aWxkY2FyZC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiVGVybWluYWxQYXJ0IiwiVGVybWluYWxOb2RlIiwic3BlY2lhbFN5bWJvbHMiLCJ3aWxkY2FyZCIsIldpbGRjYXJkUGFydCIsImNvbmZpZ3VyYXRpb24iLCJ0ZXJtaW5hbE5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJiYWNrdHJhY2siLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsZUFBZUQsUUFBUSxxQkFBUixDQUFyQjtBQUFBLElBQ01FLGVBQWVGLFFBQVEsK0JBQVIsQ0FEckI7O0FBR00sSUFBRUcsY0FBRixHQUFxQkosTUFBckIsQ0FBRUksY0FBRjtBQUFBLElBQ0VDLFFBREYsR0FDZUQsY0FEZixDQUNFQyxRQURGOztJQUdBQyxZOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlO0FBQ25CLFVBQUlDLGVBQWUsSUFBbkI7O0FBRUEsVUFBTUMsYUFBYUYsY0FBY0csYUFBZCxFQUFuQjtBQUFBLFVBQ0lDLHVCQUF1QkosY0FBY0ssdUJBQWQsRUFEM0I7QUFBQSxVQUVDQyxtQkFBbUJGLG9CQUZwQixDQUhtQixDQUt1Qjs7QUFFMUMsVUFBSUUscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCTCx1QkFBZUwsYUFBYVcsb0JBQWIsQ0FBa0NELGdCQUFsQyxDQUFmO0FBQ0Q7O0FBRUQsVUFBSUwsaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCRCxzQkFBY1EsU0FBZCxDQUF3Qk4sVUFBeEI7QUFDRDs7QUFFRCxhQUFPRCxZQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1RLFNBQVNYLFFBQWYsQ0FEUyxDQUNpQjs7QUFFMUIsYUFBT1csTUFBUDtBQUNEOzs7NEJBRU87QUFBRSwrSEFBbUJWLFlBQW5CO0FBQW1DOzs7O0VBekJwQkosWTs7QUE0QjNCZSxPQUFPQyxPQUFQLEdBQWlCWixZQUFqQiIsImZpbGUiOiJ3aWxkY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFRlcm1pbmFsUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvdGVybWluYWwnKSxcbiAgICAgIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgd2lsZGNhcmQgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBXaWxkY2FyZFBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbmZpZ3VyYXRpb24uZ2V0U2F2ZWRJbmRleCgpLFxuXHRcdCAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gY29uZmlndXJhdGlvbi5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuXHRcdFx0XHRcdHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGVybWluYWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25maWd1cmF0aW9uLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gd2lsZGNhcmQ7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFdpbGRjYXJkUGFydCk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaWxkY2FyZFBhcnQ7XG4iXX0=