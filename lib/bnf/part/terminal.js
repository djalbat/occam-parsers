"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = TerminalPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsUGFydCIsIm5vblRlcm1pbmFsUGFydCIsInRlcm1pbmFsUGFydCIsImVwc2lsb25QYXJ0IiwiUGFydCIsInJlbWFpbmluZ0FyZ3VtZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7d0NBQ0M7QUFDbEIsVUFBTUMsZUFBZSxHQUFHLEtBQXhCO0FBRUEsYUFBT0EsZUFBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsWUFBWSxHQUFHLElBQXJCO0FBRUEsYUFBT0EsWUFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNQyxXQUFXLEdBQUcsS0FBcEI7QUFFQSxhQUFPQSxXQUFQO0FBQ0Q7OzswQkFFS0MsSSxFQUE2QjtBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSxRQUFBQSxrQkFBb0I7QUFBQTs7QUFBRSx3QkFBV0QsSUFBWCxFQUFtQkMsa0JBQW5CO0FBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsUGFydCB7XG4gIGlzTm9uVGVybWluYWxQYXJ0KCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsUGFydDtcbiAgfVxuXG4gIGlzVGVybWluYWxQYXJ0KCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsUGFydDtcbiAgfVxuXG4gIGlzRXBzaWxvblBhcnQoKSB7XG4gICAgY29uc3QgZXBzaWxvblBhcnQgPSBmYWxzZTtcbiAgICBcbiAgICByZXR1cm4gZXBzaWxvblBhcnQ7XG4gIH1cblxuICBjbG9uZShQYXJ0LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIG5ldyBQYXJ0KC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiJdfQ==