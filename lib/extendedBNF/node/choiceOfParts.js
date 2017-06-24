'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var ChoiceOfPartsNode = function (_NonTerminalNode) {
  _inherits(ChoiceOfPartsNode, _NonTerminalNode);

  function ChoiceOfPartsNode() {
    _classCallCheck(this, ChoiceOfPartsNode);

    return _possibleConstructorReturn(this, (ChoiceOfPartsNode.__proto__ || Object.getPrototypeOf(ChoiceOfPartsNode)).apply(this, arguments));
  }

  _createClass(ChoiceOfPartsNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, ChoiceOfPartsNode);
    }
  }]);

  return ChoiceOfPartsNode;
}(NonTerminalNode);

module.exports = ChoiceOfPartsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL2Nob2ljZU9mUGFydHMuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIkNob2ljZU9mUGFydHNOb2RlIiwibm9kZXMiLCJydWxlTmFtZSIsImZyb21Ob2Rlc0FuZFJ1bGVOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JDLFFBQVEsK0JBQVIsQ0FBeEI7O0lBRU1DLGlCOzs7Ozs7Ozs7Ozt5Q0FDd0JDLEssRUFBT0MsUSxFQUFVO0FBQUUsYUFBT0osZ0JBQWdCSyxvQkFBaEIsQ0FBcUNGLEtBQXJDLEVBQTRDQyxRQUE1QyxFQUFzREYsaUJBQXRELENBQVA7QUFBa0Y7Ozs7RUFEbkdGLGU7O0FBSWhDTSxPQUFPQyxPQUFQLEdBQWlCTCxpQkFBakIiLCJmaWxlIjoiY2hvaWNlT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgQ2hvaWNlT2ZQYXJ0c05vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lLCBDaG9pY2VPZlBhcnRzTm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaG9pY2VPZlBhcnRzTm9kZTsiXX0=