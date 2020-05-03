"use strict";

var _terminal = _interopRequireDefault(require("../../part/terminal"));

var _terminal2 = _interopRequireDefault(require("../../../common/node/terminal"));

var _array = require("../../../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
          var firstMatch = (0, _array.first)(matches),
              parsed = firstMatch === content; ///

          if (parsed) {
            terminalNode = _terminal2["default"].fromSignificantToken(significantToken);
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
}(_terminal["default"]);

module.exports = RegularExpressionPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlJlZ3VsYXJFeHByZXNzaW9uUGFydCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiY29uZmlndXJhdGlvbiIsInRlcm1pbmFsTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJwYXJzZWQiLCJUZXJtaW5hbE5vZGUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsImJhY2t0cmFjayIsInJlZ3VsYXJFeHByZXNzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJzdHJpbmciLCJUZXJtaW5hbFBhcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEscUI7OztBQUNKLGlDQUFZQyxpQkFBWixFQUErQjtBQUFBOztBQUFBOztBQUM3QjtBQUVBLFVBQUtBLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFINkI7QUFJOUI7Ozs7MEJBRUtDLGEsRUFBZTtBQUNuQixVQUFJQyxZQUFZLEdBQUcsSUFBbkI7QUFFQSxVQUFNQyxVQUFVLEdBQUdGLGFBQWEsQ0FBQ0csYUFBZCxFQUFuQjtBQUFBLFVBQ0lDLG9CQUFvQixHQUFHSixhQUFhLENBQUNLLHVCQUFkLEVBRDNCO0FBQUEsVUFFQ0MsZ0JBQWdCLEdBQUdGLG9CQUZwQixDQUhtQixDQUt1Qjs7QUFFMUMsVUFBSUUsZ0JBQWdCLEtBQUssSUFBekIsRUFBK0I7QUFDN0IsWUFBTUMsT0FBTyxHQUFHRCxnQkFBZ0IsQ0FBQ0UsVUFBakIsRUFBaEI7QUFBQSxZQUNNQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csS0FBUixDQUFjLEtBQUtYLGlCQUFuQixDQURoQjs7QUFHQSxZQUFJVSxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEIsY0FBTUUsVUFBVSxHQUFHLGtCQUFNRixPQUFOLENBQW5CO0FBQUEsY0FDTUcsTUFBTSxHQUFJRCxVQUFVLEtBQUtKLE9BRC9CLENBRG9CLENBRXNCOztBQUUxQyxjQUFJSyxNQUFKLEVBQVk7QUFDVlgsWUFBQUEsWUFBWSxHQUFHWSxzQkFBYUMsb0JBQWIsQ0FBa0NSLGdCQUFsQyxDQUFmO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFVBQUlMLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUN6QkQsUUFBQUEsYUFBYSxDQUFDZSxTQUFkLENBQXdCYixVQUF4QjtBQUNEOztBQUVELGFBQU9ELFlBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTWUsdUJBQXVCLEdBQUcsS0FBS2pCLGlCQUFMLENBQXVCa0IsUUFBdkIsRUFBaEM7QUFBQSxVQUNJQyxNQUFNLEdBQUdGLHVCQURiLENBRFMsQ0FFNkI7O0FBRXRDLGFBQU9FLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsOEZBQW1CcEIscUJBQW5CLEVBQTBDLEtBQUtDLGlCQUEvQztBQUFvRTs7OztFQTFDNUNvQixvQjs7QUE2Q3BDQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ2QixxQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiO1xuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWxcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNsYXNzIFJlZ3VsYXJFeHByZXNzaW9uUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBjb25maWd1cmF0aW9uLmdldE5leHRTaWduaWZpY2FudFRva2VuKCksXG5cdFx0XHRcdFx0c2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgICAgICBwYXJzZWQgPSAoZmlyc3RNYXRjaCA9PT0gY29udGVudCk7ICAvLy9cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1pbmFsTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uU3RyaW5nID0gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbi50b1N0cmluZygpLFxuXHRcdCAgICAgIHN0cmluZyA9IHJlZ3VsYXJFeHByZXNzaW9uU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFJlZ3VsYXJFeHByZXNzaW9uUGFydCwgdGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG4iXX0=