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

var TerminalPart = require("../../part/terminal"),
    TerminalNode = require("../../../common/node/terminal");

var TerminalSymbolPart = /*#__PURE__*/function (_TerminalPart) {
  _inherits(TerminalSymbolPart, _TerminalPart);

  function TerminalSymbolPart(content) {
    var _this;

    _classCallCheck(this, TerminalSymbolPart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TerminalSymbolPart).call(this));
    _this.content = content;
    return _this;
  }

  _createClass(TerminalSymbolPart, [{
    key: "parse",
    value: function parse(configuration) {
      var terminalNode = null;
      var savedIndex = configuration.getSavedIndex(),
          nextSignificantToken = configuration.getNextSignificantToken(),
          significantToken = nextSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            parsed = content === this.content;

        if (parsed) {
          terminalNode = TerminalNode.fromSignificantToken(significantToken);
        }
      }

      if (terminalNode === null) {
        configuration.backtrack(savedIndex);
      }

      return terminalNode;
    }
  }, {
    key: "asString",
    value: function asString() {
      var string = "\"".concat(this.content, "\"");
      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(TerminalSymbolPart.prototype), "clone", this).call(this, TerminalSymbolPart, this.content);
    }
  }]);

  return TerminalSymbolPart;
}(TerminalPart);

module.exports = TerminalSymbolPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsUGFydCIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGUiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJjb250ZW50IiwiY29uZmlndXJhdGlvbiIsInRlcm1pbmFsTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRDb250ZW50IiwicGFyc2VkIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJiYWNrdHJhY2siLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxPQUFPLENBQUMscUJBQUQsQ0FBNUI7QUFBQSxJQUNNQyxZQUFZLEdBQUdELE9BQU8sQ0FBQywrQkFBRCxDQUQ1Qjs7SUFHTUUsa0I7OztBQUNKLDhCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQUE7O0FBQ25CO0FBRUEsVUFBS0EsT0FBTCxHQUFlQSxPQUFmO0FBSG1CO0FBSXBCOzs7OzBCQUVLQyxhLEVBQWU7QUFDbkIsVUFBSUMsWUFBWSxHQUFHLElBQW5CO0FBRUEsVUFBTUMsVUFBVSxHQUFHRixhQUFhLENBQUNHLGFBQWQsRUFBbkI7QUFBQSxVQUNJQyxvQkFBb0IsR0FBR0osYUFBYSxDQUFDSyx1QkFBZCxFQUQzQjtBQUFBLFVBRUNDLGdCQUFnQixHQUFHRixvQkFGcEIsQ0FIbUIsQ0FLdUI7O0FBRTFDLFVBQUlFLGdCQUFnQixLQUFLLElBQXpCLEVBQStCO0FBQzdCLFlBQU1QLE9BQU8sR0FBR08sZ0JBQWdCLENBQUNDLFVBQWpCLEVBQWhCO0FBQUEsWUFDTUMsTUFBTSxHQUFJVCxPQUFPLEtBQUssS0FBS0EsT0FEakM7O0FBR0EsWUFBSVMsTUFBSixFQUFZO0FBQ1ZQLFVBQUFBLFlBQVksR0FBR0osWUFBWSxDQUFDWSxvQkFBYixDQUFrQ0gsZ0JBQWxDLENBQWY7QUFDRDtBQUNGOztBQUVELFVBQUlMLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUN6QkQsUUFBQUEsYUFBYSxDQUFDVSxTQUFkLENBQXdCUixVQUF4QjtBQUNEOztBQUVELGFBQU9ELFlBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVUsTUFBTSxlQUFPLEtBQUtaLE9BQVosT0FBWjtBQUVBLGFBQU9ZLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsMkZBQW1CYixrQkFBbkIsRUFBdUMsS0FBS0MsT0FBNUM7QUFBdUQ7Ozs7RUFwQ2xDSixZOztBQXVDakNpQixNQUFNLENBQUNDLE9BQVAsR0FBaUJmLGtCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBUZXJtaW5hbFBhcnQgPSByZXF1aXJlKFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiKSxcbiAgICAgIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbFwiKTtcblxuY2xhc3MgVGVybWluYWxTeW1ib2xQYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IoY29udGVudCkge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBjb25maWd1cmF0aW9uLmdldE5leHRTaWduaWZpY2FudFRva2VuKCksXG5cdFx0XHRcdFx0c2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBwYXJzZWQgPSAoY29udGVudCA9PT0gdGhpcy5jb250ZW50KTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1pbmFsTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuICBcbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYFwiJHt0aGlzLmNvbnRlbnR9XCJgO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFRlcm1pbmFsU3ltYm9sUGFydCwgdGhpcy5jb250ZW50KTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsU3ltYm9sUGFydDtcbiJdfQ==