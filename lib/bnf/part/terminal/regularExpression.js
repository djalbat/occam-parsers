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
    TerminalNode = require("../../../common/node/terminal"),
    arrayUtilities = require("../../../utilities/array");

var first = arrayUtilities.first;

var RegularExpressionPart = /*#__PURE__*/function (_TerminalPart) {
  _inherits(RegularExpressionPart, _TerminalPart);

  function RegularExpressionPart(regularExpression) {
    var _this;

    _classCallCheck(this, RegularExpressionPart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegularExpressionPart).call(this));
    _this.regularExpression = regularExpression;
    return _this;
  }

  _createClass(RegularExpressionPart, [{
    key: "parse",
    value: function parse(configuration) {
      var terminalNode = null;
      var savedIndex = configuration.getSavedIndex(),
          nextSignificantToken = configuration.getNextSignificantToken(),
          significantToken = nextSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            matches = content.match(this.regularExpression);

        if (matches !== null) {
          var firstMatch = first(matches),
              parsed = firstMatch === content; ///

          if (parsed) {
            terminalNode = TerminalNode.fromSignificantToken(significantToken);
          }
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
      var regularExpressionString = this.regularExpression.toString(),
          string = regularExpressionString; ///

      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(RegularExpressionPart.prototype), "clone", this).call(this, RegularExpressionPart, this.regularExpression);
    }
  }]);

  return RegularExpressionPart;
}(TerminalPart);

module.exports = RegularExpressionPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsUGFydCIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGUiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiUmVndWxhckV4cHJlc3Npb25QYXJ0IiwicmVndWxhckV4cHJlc3Npb24iLCJjb25maWd1cmF0aW9uIiwidGVybWluYWxOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsInBhcnNlZCIsImZyb21TaWduaWZpY2FudFRva2VuIiwiYmFja3RyYWNrIiwicmVndWxhckV4cHJlc3Npb25TdHJpbmciLCJ0b1N0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxxQkFBRCxDQUE1QjtBQUFBLElBQ01DLFlBQVksR0FBR0QsT0FBTyxDQUFDLCtCQUFELENBRDVCO0FBQUEsSUFFTUUsY0FBYyxHQUFHRixPQUFPLENBQUMsMEJBQUQsQ0FGOUI7O0lBSVFHLEssR0FBVUQsYyxDQUFWQyxLOztJQUVGQyxxQjs7O0FBQ0osaUNBQVlDLGlCQUFaLEVBQStCO0FBQUE7O0FBQUE7O0FBQzdCO0FBRUEsVUFBS0EsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUg2QjtBQUk5Qjs7OzswQkFFS0MsYSxFQUFlO0FBQ25CLFVBQUlDLFlBQVksR0FBRyxJQUFuQjtBQUVBLFVBQU1DLFVBQVUsR0FBR0YsYUFBYSxDQUFDRyxhQUFkLEVBQW5CO0FBQUEsVUFDSUMsb0JBQW9CLEdBQUdKLGFBQWEsQ0FBQ0ssdUJBQWQsRUFEM0I7QUFBQSxVQUVDQyxnQkFBZ0IsR0FBR0Ysb0JBRnBCLENBSG1CLENBS3VCOztBQUUxQyxVQUFJRSxnQkFBZ0IsS0FBSyxJQUF6QixFQUErQjtBQUM3QixZQUFNQyxPQUFPLEdBQUdELGdCQUFnQixDQUFDRSxVQUFqQixFQUFoQjtBQUFBLFlBQ01DLE9BQU8sR0FBR0YsT0FBTyxDQUFDRyxLQUFSLENBQWMsS0FBS1gsaUJBQW5CLENBRGhCOztBQUdBLFlBQUlVLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQixjQUFNRSxVQUFVLEdBQUdkLEtBQUssQ0FBQ1ksT0FBRCxDQUF4QjtBQUFBLGNBQ01HLE1BQU0sR0FBSUQsVUFBVSxLQUFLSixPQUQvQixDQURvQixDQUVzQjs7QUFFMUMsY0FBSUssTUFBSixFQUFZO0FBQ1ZYLFlBQUFBLFlBQVksR0FBR04sWUFBWSxDQUFDa0Isb0JBQWIsQ0FBa0NQLGdCQUFsQyxDQUFmO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFVBQUlMLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUN6QkQsUUFBQUEsYUFBYSxDQUFDYyxTQUFkLENBQXdCWixVQUF4QjtBQUNEOztBQUVELGFBQU9ELFlBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTWMsdUJBQXVCLEdBQUcsS0FBS2hCLGlCQUFMLENBQXVCaUIsUUFBdkIsRUFBaEM7QUFBQSxVQUNJQyxNQUFNLEdBQUdGLHVCQURiLENBRFMsQ0FFNkI7O0FBRXRDLGFBQU9FLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsOEZBQW1CbkIscUJBQW5CLEVBQTBDLEtBQUtDLGlCQUEvQztBQUFvRTs7OztFQTFDNUNOLFk7O0FBNkNwQ3lCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJCLHFCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBUZXJtaW5hbFBhcnQgPSByZXF1aXJlKFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiKSxcbiAgICAgIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbFwiKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxpdGllcy9hcnJheVwiKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJlZ3VsYXJFeHByZXNzaW9uUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBjb25maWd1cmF0aW9uLmdldE5leHRTaWduaWZpY2FudFRva2VuKCksXG5cdFx0XHRcdFx0c2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgICAgICBwYXJzZWQgPSAoZmlyc3RNYXRjaCA9PT0gY29udGVudCk7ICAvLy9cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1pbmFsTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uU3RyaW5nID0gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbi50b1N0cmluZygpLFxuXHRcdCAgICAgIHN0cmluZyA9IHJlZ3VsYXJFeHByZXNzaW9uU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFJlZ3VsYXJFeHByZXNzaW9uUGFydCwgdGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG4iXX0=