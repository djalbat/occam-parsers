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

  function SignificantTokenTypePart(significantTokenType, nonWhitespace) {
    _classCallCheck(this, SignificantTokenTypePart);

    var _this = _possibleConstructorReturn(this, (SignificantTokenTypePart.__proto__ || Object.getPrototypeOf(SignificantTokenTypePart)).call(this, nonWhitespace));

    _this.significantTokenType = significantTokenType;
    return _this;
  }

  _createClass(SignificantTokenTypePart, [{
    key: 'parse',
    value: function parse(configuration) {
      var terminalNode = null;

      var savedIndex = configuration.getSavedIndex(),
          nonWhitespace = this.hasNonWhitespace(),
          nextSignificantToken = configuration.getNextSignificantToken(nonWhitespace),
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
      var nonWhitespace = this.hasNonWhitespace(),
          nonWhitespaceString = nonWhitespace ? NO_WHITESPACE : '',
          string = nonWhitespaceString + '[' + this.significantTokenType + ']';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC9zaWduaWZpY2FudFRva2VuVHlwZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiVGVybWluYWxQYXJ0IiwiVGVybWluYWxOb2RlIiwic3BlY2lhbFN5bWJvbHMiLCJOT19XSElURVNQQUNFIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0Iiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJub25XaGl0ZXNwYWNlIiwiY29uZmlndXJhdGlvbiIsInRlcm1pbmFsTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwiaGFzTm9uV2hpdGVzcGFjZSIsIm5leHRTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0VHlwZSIsInBhcnNlZCIsImZyb21TaWduaWZpY2FudFRva2VuIiwiYmFja3RyYWNrIiwibm9uV2hpdGVzcGFjZVN0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxlQUFlRCxRQUFRLHFCQUFSLENBQXJCO0FBQUEsSUFDTUUsZUFBZUYsUUFBUSwrQkFBUixDQURyQjs7QUFHTSxJQUFFRyxjQUFGLEdBQXFCSixNQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsYUFERixHQUNvQkQsY0FEcEIsQ0FDRUMsYUFERjs7SUFHQUMsd0I7OztBQUNKLG9DQUFZQyxvQkFBWixFQUFrQ0MsYUFBbEMsRUFBaUQ7QUFBQTs7QUFBQSxvSkFDekNBLGFBRHlDOztBQUcvQyxVQUFLRCxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBSCtDO0FBSWhEOzs7OzBCQUVLRSxhLEVBQWU7QUFDbkIsVUFBSUMsZUFBZSxJQUFuQjs7QUFFQSxVQUFNQyxhQUFhRixjQUFjRyxhQUFkLEVBQW5CO0FBQUEsVUFDSUosZ0JBQWdCLEtBQUtLLGdCQUFMLEVBRHBCO0FBQUEsVUFFQ0MsdUJBQXVCTCxjQUFjTSx1QkFBZCxDQUFzQ1AsYUFBdEMsQ0FGeEI7QUFBQSxVQUdDUSxtQkFBbUJGLG9CQUhwQixDQUhtQixDQU11Qjs7QUFFMUMsVUFBSUUscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLFlBQU1ULHVCQUF1QlMsaUJBQWlCQyxPQUFqQixFQUE3QjtBQUFBLFlBQ01DLFNBQVVYLHlCQUF5QixLQUFLQSxvQkFEOUM7O0FBR0EsWUFBSVcsTUFBSixFQUFZO0FBQ1ZSLHlCQUFlUCxhQUFhZ0Isb0JBQWIsQ0FBa0NILGdCQUFsQyxDQUFmO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJTixpQkFBaUIsSUFBckIsRUFBMkI7QUFDekJELHNCQUFjVyxTQUFkLENBQXdCVCxVQUF4QjtBQUNEOztBQUVELGFBQU9ELFlBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUYsZ0JBQWdCLEtBQUtLLGdCQUFMLEVBQXRCO0FBQUEsVUFDSVEsc0JBQXNCYixnQkFDR0gsYUFESCxHQUVLLEVBSC9CO0FBQUEsVUFJTWlCLFNBQVlELG1CQUFaLFNBQW1DLEtBQUtkLG9CQUF4QyxNQUpOOztBQU1BLGFBQU9lLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsdUpBQW1CaEIsd0JBQW5CLEVBQTZDLEtBQUtDLG9CQUFsRDtBQUEwRTs7OztFQXpDL0NMLFk7O0FBNEN2Q3FCLE9BQU9DLE9BQVAsR0FBaUJsQix3QkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnRUb2tlblR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBUZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L3Rlcm1pbmFsJyksXG4gICAgICBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbCcpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuVHlwZSwgbm9uV2hpdGVzcGFjZSkge1xuICAgIHN1cGVyKG5vbldoaXRlc3BhY2UpO1xuICAgIFxuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbm9uV2hpdGVzcGFjZSA9IHRoaXMuaGFzTm9uV2hpdGVzcGFjZSgpLFxuXHRcdFx0XHRcdG5leHRTaWduaWZpY2FudFRva2VuID0gY29uZmlndXJhdGlvbi5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbihub25XaGl0ZXNwYWNlKSxcblx0XHRcdFx0XHRzaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICBwYXJzZWQgPSAoc2lnbmlmaWNhbnRUb2tlblR5cGUgPT09IHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybWluYWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25maWd1cmF0aW9uLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgbm9uV2hpdGVzcGFjZSA9IHRoaXMuaGFzTm9uV2hpdGVzcGFjZSgpLFxuXHRcdCAgICAgIG5vbldoaXRlc3BhY2VTdHJpbmcgPSBub25XaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PX1dISVRFU1BBQ0UgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtub25XaGl0ZXNwYWNlU3RyaW5nfVske3RoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGV9XWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0LCB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydDtcbiJdfQ==