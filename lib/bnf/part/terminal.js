"use strict";

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TerminalPart = /*#__PURE__*/function () {
  function TerminalPart() {
    _classCallCheck(this, TerminalPart);
  }

  _createClass(TerminalPart, [{
    key: "isNonTerminalPart",
    value: function isNonTerminalPart() {
      var nonTerminalPart = false;
      return nonTerminalPart;
    }
  }, {
    key: "isTerminalPart",
    value: function isTerminalPart() {
      var terminalPart = true;
      return terminalPart;
    }
  }, {
    key: "isEpsilonPart",
    value: function isEpsilonPart() {
      var epsilonPart = false;
      return epsilonPart;
    }
  }, {
    key: "clone",
    value: function clone(Part) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }

      return _construct(Part, remainingArguments);
    }
  }]);

  return TerminalPart;
}();

module.exports = TerminalPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsUGFydCIsIm5vblRlcm1pbmFsUGFydCIsInRlcm1pbmFsUGFydCIsImVwc2lsb25QYXJ0IiwiUGFydCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztJQUVNQSxZOzs7Ozs7O3dDQUNnQjtBQUNsQixVQUFNQyxlQUFlLEdBQUcsS0FBeEI7QUFFQSxhQUFPQSxlQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNQyxZQUFZLEdBQUcsSUFBckI7QUFFQSxhQUFPQSxZQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1DLFdBQVcsR0FBRyxLQUFwQjtBQUVBLGFBQU9BLFdBQVA7QUFDRDs7OzBCQUVLQyxJLEVBQTZCO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQUFFLHdCQUFXRCxJQUFYLEVBQW1CQyxrQkFBbkI7QUFBeUM7Ozs7OztBQUdoRkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUCxZQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jbGFzcyBUZXJtaW5hbFBhcnQge1xuICBpc05vblRlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc1Rlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc0Vwc2lsb25QYXJ0KCkge1xuICAgIGNvbnN0IGVwc2lsb25QYXJ0ID0gZmFsc2U7XG4gICAgXG4gICAgcmV0dXJuIGVwc2lsb25QYXJ0O1xuICB9XG5cbiAgY2xvbmUoUGFydCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBuZXcgUGFydCguLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxQYXJ0O1xuIl19