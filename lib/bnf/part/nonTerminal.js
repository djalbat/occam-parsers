"use strict";

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NonTerminalPart = /*#__PURE__*/function () {
  function NonTerminalPart(type) {
    _classCallCheck(this, NonTerminalPart);

    this.type = type;
  }

  _createClass(NonTerminalPart, [{
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }, {
    key: "isNonTerminalPart",
    value: function isNonTerminalPart() {
      var nonTerminalPart = true;
      return nonTerminalPart;
    }
  }, {
    key: "isTerminalPart",
    value: function isTerminalPart() {
      var terminalPart = false;
      return terminalPart;
    }
  }, {
    key: "isRuleNamePart",
    value: function isRuleNamePart() {
      var ruleNamePart = false;
      return ruleNamePart;
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

  return NonTerminalPart;
}();

module.exports = NonTerminalPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsUGFydCIsInR5cGUiLCJub25UZXJtaW5hbFBhcnQiLCJ0ZXJtaW5hbFBhcnQiLCJydWxlTmFtZVBhcnQiLCJQYXJ0IiwicmVtYWluaW5nQXJndW1lbnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGU7QUFDSiwyQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLGVBQWUsR0FBRyxJQUF4QjtBQUVBLGFBQU9BLGVBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLFlBQVksR0FBRyxLQUFyQjtBQUVBLGFBQU9BLFlBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLFlBQVksR0FBRyxLQUFyQjtBQUVBLGFBQU9BLFlBQVA7QUFDRDs7OzBCQUVLQyxJLEVBQTZCO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQUFFLHdCQUFXRCxJQUFYLEVBQW1CQyxrQkFBbkI7QUFBeUM7Ozs7OztBQUdoRkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUixlQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jbGFzcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTsgIFxuICB9XG4gIFxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsUGFydDtcbiAgfVxuXG4gIGlzVGVybWluYWxQYXJ0KCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IGZhbHNlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc1J1bGVOYW1lUGFydCgpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gIH1cblxuICBjbG9uZShQYXJ0LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIG5ldyBQYXJ0KC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbFBhcnQ7XG4iXX0=