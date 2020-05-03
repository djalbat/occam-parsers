"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require("occam-lexers");

var TerminalPart = require("../../part/terminal"),
    TerminalNode = require("../../../common/node/terminal");

var specialSymbols = lexers.specialSymbols,
    wildcard = specialSymbols.wildcard;

var WildcardPart = /*#__PURE__*/function (_TerminalPart) {
  _inherits(WildcardPart, _TerminalPart);

  function WildcardPart() {
    _classCallCheck(this, WildcardPart);

    return _possibleConstructorReturn(this, _getPrototypeOf(WildcardPart).apply(this, arguments));
  }

  _createClass(WildcardPart, [{
    key: "parse",
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
    key: "asString",
    value: function asString() {
      var string = wildcard; ///

      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(WildcardPart.prototype), "clone", this).call(this, WildcardPart);
    }
  }]);

  return WildcardPart;
}(TerminalPart);

module.exports = WildcardPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbGRjYXJkLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJUZXJtaW5hbFBhcnQiLCJUZXJtaW5hbE5vZGUiLCJzcGVjaWFsU3ltYm9scyIsIndpbGRjYXJkIiwiV2lsZGNhcmRQYXJ0IiwiY29uZmlndXJhdGlvbiIsInRlcm1pbmFsTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsImJhY2t0cmFjayIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXRCOztBQUVBLElBQU1DLFlBQVksR0FBR0QsT0FBTyxDQUFDLHFCQUFELENBQTVCO0FBQUEsSUFDTUUsWUFBWSxHQUFHRixPQUFPLENBQUMsK0JBQUQsQ0FENUI7O0FBR00sSUFBRUcsY0FBRixHQUFxQkosTUFBckIsQ0FBRUksY0FBRjtBQUFBLElBQ0VDLFFBREYsR0FDZUQsY0FEZixDQUNFQyxRQURGOztJQUdBQyxZOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlO0FBQ25CLFVBQUlDLFlBQVksR0FBRyxJQUFuQjtBQUVBLFVBQU1DLFVBQVUsR0FBR0YsYUFBYSxDQUFDRyxhQUFkLEVBQW5CO0FBQUEsVUFDSUMsb0JBQW9CLEdBQUdKLGFBQWEsQ0FBQ0ssdUJBQWQsRUFEM0I7QUFBQSxVQUVDQyxnQkFBZ0IsR0FBR0Ysb0JBRnBCLENBSG1CLENBS3VCOztBQUUxQyxVQUFJRSxnQkFBZ0IsS0FBSyxJQUF6QixFQUErQjtBQUM3QkwsUUFBQUEsWUFBWSxHQUFHTCxZQUFZLENBQUNXLG9CQUFiLENBQWtDRCxnQkFBbEMsQ0FBZjtBQUNEOztBQUVELFVBQUlMLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUN6QkQsUUFBQUEsYUFBYSxDQUFDUSxTQUFkLENBQXdCTixVQUF4QjtBQUNEOztBQUVELGFBQU9ELFlBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVEsTUFBTSxHQUFHWCxRQUFmLENBRFMsQ0FDaUI7O0FBRTFCLGFBQU9XLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUscUZBQW1CVixZQUFuQjtBQUFtQzs7OztFQXpCcEJKLFk7O0FBNEIzQmUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCWixZQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKFwib2NjYW0tbGV4ZXJzXCIpO1xuXG5jb25zdCBUZXJtaW5hbFBhcnQgPSByZXF1aXJlKFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiKSxcbiAgICAgIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbFwiKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyB3aWxkY2FyZCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIFdpbGRjYXJkUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBjb25maWd1cmF0aW9uLmdldE5leHRTaWduaWZpY2FudFRva2VuKCksXG5cdFx0XHRcdFx0c2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgfVxuICAgIFxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB3aWxkY2FyZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoV2lsZGNhcmRQYXJ0KTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdpbGRjYXJkUGFydDtcbiJdfQ==