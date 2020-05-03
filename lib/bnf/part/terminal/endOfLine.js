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

var lexers = require("occam-lexers");

var TerminalPart = require("../../part/terminal"),
    EndOfLineNode = require("../../../common/node/terminal/endOfLine");

var specialSymbols = lexers.specialSymbols,
    END_OF_LINE = specialSymbols.END_OF_LINE;

var EndOfLinePart = /*#__PURE__*/function (_TerminalPart) {
  _inherits(EndOfLinePart, _TerminalPart);

  function EndOfLinePart() {
    _classCallCheck(this, EndOfLinePart);

    return _possibleConstructorReturn(this, _getPrototypeOf(EndOfLinePart).apply(this, arguments));
  }

  _createClass(EndOfLinePart, [{
    key: "parse",
    value: function parse(configuration) {
      var endOfLineNode = null;
      var savedIndex = configuration.getSavedIndex(),
          nextSignificantToken = configuration.getNextSignificantToken(),
          significantToken = nextSignificantToken; ///

      if (significantToken !== null) {
        var significantTokenEndOfLineToken = significantToken.isEndOfLineToken();

        if (significantTokenEndOfLineToken) {
          endOfLineNode = EndOfLineNode.fromSignificantToken(significantToken);
        }
      }

      if (endOfLineNode === null) {
        configuration.backtrack(savedIndex);
      }

      return endOfLineNode;
    }
  }, {
    key: "asString",
    value: function asString() {
      var string = END_OF_LINE; ///

      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(EndOfLinePart.prototype), "clone", this).call(this, EndOfLinePart);
    }
  }]);

  return EndOfLinePart;
}(TerminalPart);

module.exports = EndOfLinePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiVGVybWluYWxQYXJ0IiwiRW5kT2ZMaW5lTm9kZSIsInNwZWNpYWxTeW1ib2xzIiwiRU5EX09GX0xJTkUiLCJFbmRPZkxpbmVQYXJ0IiwiY29uZmlndXJhdGlvbiIsImVuZE9mTGluZU5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsImZyb21TaWduaWZpY2FudFRva2VuIiwiYmFja3RyYWNrIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBdEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHRCxPQUFPLENBQUMscUJBQUQsQ0FBNUI7QUFBQSxJQUNNRSxhQUFhLEdBQUdGLE9BQU8sQ0FBQyx5Q0FBRCxDQUQ3Qjs7QUFHTSxJQUFFRyxjQUFGLEdBQXFCSixNQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsV0FERixHQUNrQkQsY0FEbEIsQ0FDRUMsV0FERjs7SUFHQUMsYTs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZTtBQUNuQixVQUFJQyxhQUFhLEdBQUcsSUFBcEI7QUFFQSxVQUFNQyxVQUFVLEdBQUdGLGFBQWEsQ0FBQ0csYUFBZCxFQUFuQjtBQUFBLFVBQ0lDLG9CQUFvQixHQUFHSixhQUFhLENBQUNLLHVCQUFkLEVBRDNCO0FBQUEsVUFFTUMsZ0JBQWdCLEdBQUdGLG9CQUZ6QixDQUhtQixDQUs0Qjs7QUFFL0MsVUFBSUUsZ0JBQWdCLEtBQUssSUFBekIsRUFBK0I7QUFDN0IsWUFBTUMsOEJBQThCLEdBQUdELGdCQUFnQixDQUFDRSxnQkFBakIsRUFBdkM7O0FBRUEsWUFBSUQsOEJBQUosRUFBb0M7QUFDbENOLFVBQUFBLGFBQWEsR0FBR0wsYUFBYSxDQUFDYSxvQkFBZCxDQUFtQ0gsZ0JBQW5DLENBQWhCO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJTCxhQUFhLEtBQUssSUFBdEIsRUFBNEI7QUFDMUJELFFBQUFBLGFBQWEsQ0FBQ1UsU0FBZCxDQUF3QlIsVUFBeEI7QUFDRDs7QUFFRCxhQUFPRCxhQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1VLE1BQU0sR0FBR2IsV0FBZixDQURTLENBQ21COztBQUU1QixhQUFPYSxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLHNGQUFtQlosYUFBbkI7QUFBb0M7Ozs7RUE3QnBCSixZOztBQWdDNUJpQixNQUFNLENBQUNDLE9BQVAsR0FBaUJkLGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoXCJvY2NhbS1sZXhlcnNcIik7XG5cbmNvbnN0IFRlcm1pbmFsUGFydCA9IHJlcXVpcmUoXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCIpLFxuICAgICAgRW5kT2ZMaW5lTm9kZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbC9lbmRPZkxpbmVcIik7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgRU5EX09GX0xJTkUgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBFbmRPZkxpbmVQYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgcGFyc2UoY29uZmlndXJhdGlvbikge1xuICAgIGxldCBlbmRPZkxpbmVOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBjb25maWd1cmF0aW9uLmdldE5leHRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuRW5kT2ZMaW5lVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgICBlbmRPZkxpbmVOb2RlID0gRW5kT2ZMaW5lTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKGVuZE9mTGluZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmRPZkxpbmVOb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gRU5EX09GX0xJTkU7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoRW5kT2ZMaW5lUGFydCk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVQYXJ0O1xuIl19