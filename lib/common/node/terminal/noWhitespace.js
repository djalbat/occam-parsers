'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TerminalNode = require('../terminal'),
    NoWhitespaceNodeParseTree = require('../../parseTree/noWhitespaceNode');

var NoWhitespaceNode = function (_TerminalNode) {
  _inherits(NoWhitespaceNode, _TerminalNode);

  function NoWhitespaceNode() {
    _classCallCheck(this, NoWhitespaceNode);

    return _possibleConstructorReturn(this, (NoWhitespaceNode.__proto__ || Object.getPrototypeOf(NoWhitespaceNode)).apply(this, arguments));
  }

  _createClass(NoWhitespaceNode, [{
    key: 'getType',
    value: function getType() {
      var type = null; ///

      return type;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      var content = ''; ///

      return content;
    }
  }, {
    key: 'asParseTree',
    value: function asParseTree(tokens) {
      var noWhitespaceNodeParseTree = NoWhitespaceNodeParseTree.fromNothing(),
          parseTree = noWhitespaceNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var significantToken = null,
          noWhitespaceNode = TerminalNode.fromSignificantToken(NoWhitespaceNode, significantToken);

      return noWhitespaceNode;
    }
  }]);

  return NoWhitespaceNode;
}(TerminalNode);

module.exports = NoWhitespaceNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC9ub1doaXRlc3BhY2UuanMiXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIk5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUiLCJOb1doaXRlc3BhY2VOb2RlIiwidHlwZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJub1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJwYXJzZVRyZWUiLCJzaWduaWZpY2FudFRva2VuIiwibm9XaGl0ZXNwYWNlTm9kZSIsImZyb21TaWduaWZpY2FudFRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGFBQVIsQ0FBckI7QUFBQSxJQUNNQyw0QkFBNEJELFFBQVEsa0NBQVIsQ0FEbEM7O0lBR01FLGdCOzs7Ozs7Ozs7Ozs4QkFDTTtBQUNSLFVBQU1DLE9BQU8sSUFBYixDQURRLENBQ1k7O0FBRXBCLGFBQU9BLElBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUMsVUFBVSxFQUFoQixDQURXLENBQ1U7O0FBRXJCLGFBQU9BLE9BQVA7QUFDRDs7O2dDQUVXQyxNLEVBQVE7QUFDbEIsVUFBTUMsNEJBQTRCTCwwQkFBMEJNLFdBQTFCLEVBQWxDO0FBQUEsVUFDTUMsWUFBWUYseUJBRGxCLENBRGtCLENBRTRCOztBQUU5QyxhQUFPRSxTQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUMsbUJBQW1CLElBQXpCO0FBQUEsVUFDTUMsbUJBQW1CWCxhQUFhWSxvQkFBYixDQUFrQ1QsZ0JBQWxDLEVBQW9ETyxnQkFBcEQsQ0FEekI7O0FBR0EsYUFBT0MsZ0JBQVA7QUFDRDs7OztFQXpCNEJYLFk7O0FBNEIvQmEsT0FBT0MsT0FBUCxHQUFpQlgsZ0JBQWpCIiwiZmlsZSI6Im5vV2hpdGVzcGFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vdGVybWluYWwnKSxcbiAgICAgIE5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi8uLi9wYXJzZVRyZWUvbm9XaGl0ZXNwYWNlTm9kZScpO1xuXG5jbGFzcyBOb1doaXRlc3BhY2VOb2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgZ2V0VHlwZSgpIHtcbiAgICBjb25zdCB0eXBlID0gbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSAnJzsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlID0gTm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihOb1doaXRlc3BhY2VOb2RlLCBzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9XaGl0ZXNwYWNlTm9kZTtcbiJdfQ==