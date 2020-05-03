"use strict";

var _terminal = _interopRequireDefault(require("../terminal"));

var _noWhitespaceNode = _interopRequireDefault(require("../../parseTree/noWhitespaceNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NoWhitespaceNode = /*#__PURE__*/function (_TerminalNode) {
  _inherits(NoWhitespaceNode, _TerminalNode);

  function NoWhitespaceNode() {
    _classCallCheck(this, NoWhitespaceNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespaceNode).apply(this, arguments));
  }

  _createClass(NoWhitespaceNode, [{
    key: "getType",
    value: function getType() {
      var type = null; ///

      return type;
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var content = ""; ///

      return content;
    }
  }, {
    key: "asParseTree",
    value: function asParseTree(tokens) {
      var noWhitespaceNodeParseTree = _noWhitespaceNode["default"].fromNothing(),
          parseTree = noWhitespaceNodeParseTree; ///


      return parseTree;
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var significantToken = null,
          noWhitespaceNode = _terminal["default"].fromSignificantToken(NoWhitespaceNode, significantToken);

      return noWhitespaceNode;
    }
  }]);

  return NoWhitespaceNode;
}(_terminal["default"]);

module.exports = NoWhitespaceNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vV2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJOb1doaXRlc3BhY2VOb2RlIiwidHlwZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJub1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlIiwiTm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSIsImZyb21Ob3RoaW5nIiwicGFyc2VUcmVlIiwic2lnbmlmaWNhbnRUb2tlbiIsIm5vV2hpdGVzcGFjZU5vZGUiLCJUZXJtaW5hbE5vZGUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGdCOzs7Ozs7Ozs7Ozs4QkFDTTtBQUNSLFVBQU1DLElBQUksR0FBRyxJQUFiLENBRFEsQ0FDWTs7QUFFcEIsYUFBT0EsSUFBUDtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNQyxPQUFPLEdBQUcsRUFBaEIsQ0FEVyxDQUNVOztBQUVyQixhQUFPQSxPQUFQO0FBQ0Q7OztnQ0FFV0MsTSxFQUFRO0FBQ2xCLFVBQU1DLHlCQUF5QixHQUFHQyw2QkFBMEJDLFdBQTFCLEVBQWxDO0FBQUEsVUFDTUMsU0FBUyxHQUFHSCx5QkFEbEIsQ0FEa0IsQ0FFNEI7OztBQUU5QyxhQUFPRyxTQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUMsZ0JBQWdCLEdBQUcsSUFBekI7QUFBQSxVQUNNQyxnQkFBZ0IsR0FBR0MscUJBQWFDLG9CQUFiLENBQWtDWCxnQkFBbEMsRUFBb0RRLGdCQUFwRCxDQUR6Qjs7QUFHQSxhQUFPQyxnQkFBUDtBQUNEOzs7O0VBekI0QkMsb0I7O0FBNEIvQkUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCYixnQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vdGVybWluYWxcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi8uLi9wYXJzZVRyZWUvbm9XaGl0ZXNwYWNlTm9kZVwiO1xuXG5jbGFzcyBOb1doaXRlc3BhY2VOb2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgZ2V0VHlwZSgpIHtcbiAgICBjb25zdCB0eXBlID0gbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBcIlwiOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUgPSBOb1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gbnVsbCxcbiAgICAgICAgICBub1doaXRlc3BhY2VOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKE5vV2hpdGVzcGFjZU5vZGUsIHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb1doaXRlc3BhY2VOb2RlO1xuIl19