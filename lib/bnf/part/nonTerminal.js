"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

exports["default"] = NonTerminalPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsUGFydCIsInR5cGUiLCJub25UZXJtaW5hbFBhcnQiLCJ0ZXJtaW5hbFBhcnQiLCJydWxlTmFtZVBhcnQiLCJQYXJ0IiwicmVtYWluaW5nQXJndW1lbnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTtBQUNuQiwyQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLGVBQWUsR0FBRyxJQUF4QjtBQUVBLGFBQU9BLGVBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLFlBQVksR0FBRyxLQUFyQjtBQUVBLGFBQU9BLFlBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLFlBQVksR0FBRyxLQUFyQjtBQUVBLGFBQU9BLFlBQVA7QUFDRDs7OzBCQUVLQyxJLEVBQTZCO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQUFFLHdCQUFXRCxJQUFYLEVBQW1CQyxrQkFBbkI7QUFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7ICBcbiAgfVxuICBcbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNOb25UZXJtaW5hbFBhcnQoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc1Rlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSBmYWxzZTtcbiAgICBcbiAgICByZXR1cm4gdGVybWluYWxQYXJ0O1xuICB9XG5cbiAgaXNSdWxlTmFtZVBhcnQoKSB7XG4gICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICB9XG5cbiAgY2xvbmUoUGFydCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBuZXcgUGFydCguLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG4iXX0=