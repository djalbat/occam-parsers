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

var SignificantTokenTypePart = /*#__PURE__*/function (_TerminalPart) {
  _inherits(SignificantTokenTypePart, _TerminalPart);

  function SignificantTokenTypePart(significantTokenType) {
    var _this;

    _classCallCheck(this, SignificantTokenTypePart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SignificantTokenTypePart).call(this));
    _this.significantTokenType = significantTokenType;
    return _this;
  }

  _createClass(SignificantTokenTypePart, [{
    key: "parse",
    value: function parse(configuration) {
      var terminalNode = null;
      var savedIndex = configuration.getSavedIndex(),
          nextSignificantToken = configuration.getNextSignificantToken(),
          significantToken = nextSignificantToken; ///

      if (significantToken !== null) {
        var significantTokenType = significantToken.getType(),
            parsed = significantTokenType === this.significantTokenType;

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
      var string = "[".concat(this.significantTokenType, "]");
      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(SignificantTokenTypePart.prototype), "clone", this).call(this, SignificantTokenTypePart, this.significantTokenType);
    }
  }]);

  return SignificantTokenTypePart;
}(TerminalPart);

module.exports = SignificantTokenTypePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsUGFydCIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImNvbmZpZ3VyYXRpb24iLCJ0ZXJtaW5hbE5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0VHlwZSIsInBhcnNlZCIsImZyb21TaWduaWZpY2FudFRva2VuIiwiYmFja3RyYWNrIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBR0MsT0FBTyxDQUFDLHFCQUFELENBQTVCO0FBQUEsSUFDTUMsWUFBWSxHQUFHRCxPQUFPLENBQUMsK0JBQUQsQ0FENUI7O0lBR01FLHdCOzs7QUFDSixvQ0FBWUMsb0JBQVosRUFBa0M7QUFBQTs7QUFBQTs7QUFDaEM7QUFFQSxVQUFLQSxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBSGdDO0FBSWpDOzs7OzBCQUVLQyxhLEVBQWU7QUFDbkIsVUFBSUMsWUFBWSxHQUFHLElBQW5CO0FBRUEsVUFBTUMsVUFBVSxHQUFHRixhQUFhLENBQUNHLGFBQWQsRUFBbkI7QUFBQSxVQUNJQyxvQkFBb0IsR0FBR0osYUFBYSxDQUFDSyx1QkFBZCxFQUQzQjtBQUFBLFVBRUNDLGdCQUFnQixHQUFHRixvQkFGcEIsQ0FIbUIsQ0FLdUI7O0FBRTFDLFVBQUlFLGdCQUFnQixLQUFLLElBQXpCLEVBQStCO0FBQzdCLFlBQU1QLG9CQUFvQixHQUFHTyxnQkFBZ0IsQ0FBQ0MsT0FBakIsRUFBN0I7QUFBQSxZQUNNQyxNQUFNLEdBQUlULG9CQUFvQixLQUFLLEtBQUtBLG9CQUQ5Qzs7QUFHQSxZQUFJUyxNQUFKLEVBQVk7QUFDVlAsVUFBQUEsWUFBWSxHQUFHSixZQUFZLENBQUNZLG9CQUFiLENBQWtDSCxnQkFBbEMsQ0FBZjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUwsWUFBWSxLQUFLLElBQXJCLEVBQTJCO0FBQ3pCRCxRQUFBQSxhQUFhLENBQUNVLFNBQWQsQ0FBd0JSLFVBQXhCO0FBQ0Q7O0FBRUQsYUFBT0QsWUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNVSxNQUFNLGNBQU8sS0FBS1osb0JBQVosTUFBWjtBQUVBLGFBQU9ZLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsaUdBQW1CYix3QkFBbkIsRUFBNkMsS0FBS0Msb0JBQWxEO0FBQTBFOzs7O0VBcEMvQ0osWTs7QUF1Q3ZDaUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZix3QkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgVGVybWluYWxQYXJ0ID0gcmVxdWlyZShcIi4uLy4uL3BhcnQvdGVybWluYWxcIiksXG4gICAgICBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWxcIik7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbmZpZ3VyYXRpb24uZ2V0U2F2ZWRJbmRleCgpLFxuXHRcdCAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gY29uZmlndXJhdGlvbi5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuXHRcdFx0XHRcdHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHBhcnNlZCA9IChzaWduaWZpY2FudFRva2VuVHlwZSA9PT0gdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgWyR7dGhpcy5zaWduaWZpY2FudFRva2VuVHlwZX1dYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShTaWduaWZpY2FudFRva2VuVHlwZVBhcnQsIHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0O1xuIl19