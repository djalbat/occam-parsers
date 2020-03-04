'use strict';

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

var TerminalPart = require('../../part/terminal'),
    TerminalNode = require('../../../common/node/terminal'),
    arrayUtilities = require('../../../utilities/array');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsUGFydCIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGUiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiUmVndWxhckV4cHJlc3Npb25QYXJ0IiwicmVndWxhckV4cHJlc3Npb24iLCJjb25maWd1cmF0aW9uIiwidGVybWluYWxOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsInBhcnNlZCIsImZyb21TaWduaWZpY2FudFRva2VuIiwiYmFja3RyYWNrIiwicmVndWxhckV4cHJlc3Npb25TdHJpbmciLCJ0b1N0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxxQkFBRCxDQUE1QjtBQUFBLElBQ01DLFlBQVksR0FBR0QsT0FBTyxDQUFDLCtCQUFELENBRDVCO0FBQUEsSUFFTUUsY0FBYyxHQUFHRixPQUFPLENBQUMsMEJBQUQsQ0FGOUI7O0lBSVFHLEssR0FBVUQsYyxDQUFWQyxLOztJQUVGQyxxQjs7O0FBQ0osaUNBQVlDLGlCQUFaLEVBQStCO0FBQUE7O0FBQUE7O0FBQzdCO0FBRUEsVUFBS0EsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUg2QjtBQUk5Qjs7OzswQkFFS0MsYSxFQUFlO0FBQ25CLFVBQUlDLFlBQVksR0FBRyxJQUFuQjtBQUVBLFVBQU1DLFVBQVUsR0FBR0YsYUFBYSxDQUFDRyxhQUFkLEVBQW5CO0FBQUEsVUFDSUMsb0JBQW9CLEdBQUdKLGFBQWEsQ0FBQ0ssdUJBQWQsRUFEM0I7QUFBQSxVQUVDQyxnQkFBZ0IsR0FBR0Ysb0JBRnBCLENBSG1CLENBS3VCOztBQUUxQyxVQUFJRSxnQkFBZ0IsS0FBSyxJQUF6QixFQUErQjtBQUM3QixZQUFNQyxPQUFPLEdBQUdELGdCQUFnQixDQUFDRSxVQUFqQixFQUFoQjtBQUFBLFlBQ01DLE9BQU8sR0FBR0YsT0FBTyxDQUFDRyxLQUFSLENBQWMsS0FBS1gsaUJBQW5CLENBRGhCOztBQUdBLFlBQUlVLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQixjQUFNRSxVQUFVLEdBQUdkLEtBQUssQ0FBQ1ksT0FBRCxDQUF4QjtBQUFBLGNBQ01HLE1BQU0sR0FBSUQsVUFBVSxLQUFLSixPQUQvQixDQURvQixDQUVzQjs7QUFFMUMsY0FBSUssTUFBSixFQUFZO0FBQ1ZYLFlBQUFBLFlBQVksR0FBR04sWUFBWSxDQUFDa0Isb0JBQWIsQ0FBa0NQLGdCQUFsQyxDQUFmO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFVBQUlMLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUN6QkQsUUFBQUEsYUFBYSxDQUFDYyxTQUFkLENBQXdCWixVQUF4QjtBQUNEOztBQUVELGFBQU9ELFlBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTWMsdUJBQXVCLEdBQUcsS0FBS2hCLGlCQUFMLENBQXVCaUIsUUFBdkIsRUFBaEM7QUFBQSxVQUNJQyxNQUFNLEdBQUdGLHVCQURiLENBRFMsQ0FFNkI7O0FBRXRDLGFBQU9FLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsOEZBQW1CbkIscUJBQW5CLEVBQTBDLEtBQUtDLGlCQUEvQztBQUFvRTs7OztFQTFDNUNOLFk7O0FBNkNwQ3lCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJCLHFCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC90ZXJtaW5hbCcpLFxuICAgICAgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihyZWd1bGFyRXhwcmVzc2lvbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbmZpZ3VyYXRpb24uZ2V0U2F2ZWRJbmRleCgpLFxuXHRcdCAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gY29uZmlndXJhdGlvbi5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuXHRcdFx0XHRcdHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgcGFyc2VkID0gKGZpcnN0TWF0Y2ggPT09IGNvbnRlbnQpOyAgLy8vXG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblN0cmluZyA9IHRoaXMucmVndWxhckV4cHJlc3Npb24udG9TdHJpbmcoKSxcblx0XHQgICAgICBzdHJpbmcgPSByZWd1bGFyRXhwcmVzc2lvblN0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShSZWd1bGFyRXhwcmVzc2lvblBhcnQsIHRoaXMucmVndWxhckV4cHJlc3Npb24pOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25QYXJ0O1xuIl19