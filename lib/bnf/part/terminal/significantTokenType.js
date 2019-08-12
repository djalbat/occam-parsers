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
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var SignificantTokenTypePart = function (_TerminalPart) {
  _inherits(SignificantTokenTypePart, _TerminalPart);

  function SignificantTokenTypePart(significantTokenType, noWhitespace) {
    _classCallCheck(this, SignificantTokenTypePart);

    var _this = _possibleConstructorReturn(this, (SignificantTokenTypePart.__proto__ || Object.getPrototypeOf(SignificantTokenTypePart)).call(this, noWhitespace));

    _this.significantTokenType = significantTokenType;
    return _this;
  }

  _createClass(SignificantTokenTypePart, [{
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var terminalNode = null;

      var savedIndex = configuration.getSavedIndex(),
          nextSignificantToken = configuration.getNextSignificantToken(noWhitespace),
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
    key: 'asString',
    value: function asString() {
      var noWhitespaceString = this.noWhitespace ? NO_WHITESPACE : '',
          string = noWhitespaceString + '[' + this.significantTokenType + ']';

      return string;
    }
  }, {
    key: 'clone',
    value: function clone() {
      return _get(SignificantTokenTypePart.prototype.__proto__ || Object.getPrototypeOf(SignificantTokenTypePart.prototype), 'clone', this).call(this, SignificantTokenTypePart, this.significantTokenType);
    }
  }]);

  return SignificantTokenTypePart;
}(TerminalPart);

module.exports = SignificantTokenTypePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC9zaWduaWZpY2FudFRva2VuVHlwZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiVGVybWluYWxQYXJ0IiwiVGVybWluYWxOb2RlIiwic3BlY2lhbFN5bWJvbHMiLCJOT19XSElURVNQQUNFIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0Iiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJub1doaXRlc3BhY2UiLCJjb25maWd1cmF0aW9uIiwidGVybWluYWxOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFR5cGUiLCJwYXJzZWQiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsImJhY2t0cmFjayIsIm5vV2hpdGVzcGFjZVN0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxlQUFlRCxRQUFRLHFCQUFSLENBQXJCO0FBQUEsSUFDTUUsZUFBZUYsUUFBUSwrQkFBUixDQURyQjs7QUFHTSxJQUFFRyxjQUFGLEdBQXFCSixNQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsYUFERixHQUNvQkQsY0FEcEIsQ0FDRUMsYUFERjs7SUFHQUMsd0I7OztBQUNKLG9DQUFZQyxvQkFBWixFQUFrQ0MsWUFBbEMsRUFBZ0Q7QUFBQTs7QUFBQSxvSkFDeENBLFlBRHdDOztBQUc5QyxVQUFLRCxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBSDhDO0FBSS9DOzs7OzBCQUVLRSxhLEVBQWVELFksRUFBYztBQUNqQ0EscUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQURpQyxDQUNpQjs7QUFFbEQsVUFBSUUsZUFBZSxJQUFuQjs7QUFFQSxVQUFNQyxhQUFhRixjQUFjRyxhQUFkLEVBQW5CO0FBQUEsVUFDQ0MsdUJBQXVCSixjQUFjSyx1QkFBZCxDQUFzQ04sWUFBdEMsQ0FEeEI7QUFBQSxVQUVDTyxtQkFBbUJGLG9CQUZwQixDQUxpQyxDQU9TOztBQUUxQyxVQUFJRSxxQkFBcUIsSUFBekIsRUFBK0I7QUFDN0IsWUFBTVIsdUJBQXVCUSxpQkFBaUJDLE9BQWpCLEVBQTdCO0FBQUEsWUFDTUMsU0FBVVYseUJBQXlCLEtBQUtBLG9CQUQ5Qzs7QUFHQSxZQUFJVSxNQUFKLEVBQVk7QUFDVlAseUJBQWVQLGFBQWFlLG9CQUFiLENBQWtDSCxnQkFBbEMsQ0FBZjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUwsaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCRCxzQkFBY1UsU0FBZCxDQUF3QlIsVUFBeEI7QUFDRDs7QUFFRCxhQUFPRCxZQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1VLHFCQUFxQixLQUFLWixZQUFMLEdBQ0VILGFBREYsR0FFSSxFQUYvQjtBQUFBLFVBR01nQixTQUFZRCxrQkFBWixTQUFrQyxLQUFLYixvQkFBdkMsTUFITjs7QUFLQSxhQUFPYyxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLHVKQUFtQmYsd0JBQW5CLEVBQTZDLEtBQUtDLG9CQUFsRDtBQUEwRTs7OztFQXpDL0NMLFk7O0FBNEN2Q29CLE9BQU9DLE9BQVAsR0FBaUJqQix3QkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnRUb2tlblR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBUZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L3Rlcm1pbmFsJyksXG4gICAgICBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbCcpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuVHlwZSwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgc3VwZXIobm9XaGl0ZXNwYWNlKTtcbiAgICBcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuICAgIFxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb25maWd1cmF0aW9uLmdldFNhdmVkSW5kZXgoKSxcblx0XHRcdFx0XHRuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IGNvbmZpZ3VyYXRpb24uZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcblx0XHRcdFx0XHRzaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICBwYXJzZWQgPSAoc2lnbmlmaWNhbnRUb2tlblR5cGUgPT09IHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybWluYWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25maWd1cmF0aW9uLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlU3RyaW5nID0gdGhpcy5ub1doaXRlc3BhY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9fV0hJVEVTUEFDRSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgIHN0cmluZyA9IGAke25vV2hpdGVzcGFjZVN0cmluZ31bJHt0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlfV1gO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCwgdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQ7XG4iXX0=