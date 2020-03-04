'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TerminalNode = require('../terminal'),
    NoWhitespaceNodeParseTree = require('../../parseTree/noWhitespaceNode');

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
      var content = ''; ///

      return content;
    }
  }, {
    key: "asParseTree",
    value: function asParseTree(tokens) {
      var noWhitespaceNodeParseTree = NoWhitespaceNodeParseTree.fromNothing(),
          parseTree = noWhitespaceNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var significantToken = null,
          noWhitespaceNode = TerminalNode.fromSignificantToken(NoWhitespaceNode, significantToken);
      return noWhitespaceNode;
    }
  }]);

  return NoWhitespaceNode;
}(TerminalNode);

module.exports = NoWhitespaceNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vV2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiTm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSIsIk5vV2hpdGVzcGFjZU5vZGUiLCJ0eXBlIiwiY29udGVudCIsInRva2VucyIsIm5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUiLCJmcm9tTm90aGluZyIsInBhcnNlVHJlZSIsInNpZ25pZmljYW50VG9rZW4iLCJub1doaXRlc3BhY2VOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQTVCO0FBQUEsSUFDTUMseUJBQXlCLEdBQUdELE9BQU8sQ0FBQyxrQ0FBRCxDQUR6Qzs7SUFHTUUsZ0I7Ozs7Ozs7Ozs7OzhCQUNNO0FBQ1IsVUFBTUMsSUFBSSxHQUFHLElBQWIsQ0FEUSxDQUNZOztBQUVwQixhQUFPQSxJQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1DLE9BQU8sR0FBRyxFQUFoQixDQURXLENBQ1U7O0FBRXJCLGFBQU9BLE9BQVA7QUFDRDs7O2dDQUVXQyxNLEVBQVE7QUFDbEIsVUFBTUMseUJBQXlCLEdBQUdMLHlCQUF5QixDQUFDTSxXQUExQixFQUFsQztBQUFBLFVBQ01DLFNBQVMsR0FBR0YseUJBRGxCLENBRGtCLENBRTRCOztBQUU5QyxhQUFPRSxTQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUMsZ0JBQWdCLEdBQUcsSUFBekI7QUFBQSxVQUNNQyxnQkFBZ0IsR0FBR1gsWUFBWSxDQUFDWSxvQkFBYixDQUFrQ1QsZ0JBQWxDLEVBQW9ETyxnQkFBcEQsQ0FEekI7QUFHQSxhQUFPQyxnQkFBUDtBQUNEOzs7O0VBekI0QlgsWTs7QUE0Qi9CYSxNQUFNLENBQUNDLE9BQVAsR0FBaUJYLGdCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vdGVybWluYWwnKSxcbiAgICAgIE5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi8uLi9wYXJzZVRyZWUvbm9XaGl0ZXNwYWNlTm9kZScpO1xuXG5jbGFzcyBOb1doaXRlc3BhY2VOb2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgZ2V0VHlwZSgpIHtcbiAgICBjb25zdCB0eXBlID0gbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSAnJzsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlID0gTm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihOb1doaXRlc3BhY2VOb2RlLCBzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9XaGl0ZXNwYWNlTm9kZTtcbiJdfQ==