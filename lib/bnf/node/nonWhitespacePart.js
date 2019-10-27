'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var NonWhitespacePartNode = function (_NonTerminalNode) {
  _inherits(NonWhitespacePartNode, _NonTerminalNode);

  function NonWhitespacePartNode() {
    _classCallCheck(this, NonWhitespacePartNode);

    return _possibleConstructorReturn(this, (NonWhitespacePartNode.__proto__ || Object.getPrototypeOf(NonWhitespacePartNode)).apply(this, arguments));
  }

  _createClass(NonWhitespacePartNode, null, [{
    key: 'fromRuleNameAndChildNodes',
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(NonWhitespacePartNode, ruleName, childNodes);
    }
  }]);

  return NonWhitespacePartNode;
}(NonTerminalNode);

module.exports = NonWhitespacePartNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ub25XaGl0ZXNwYWNlUGFydC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiTm9uV2hpdGVzcGFjZVBhcnROb2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCQyxRQUFRLCtCQUFSLENBQXhCOztJQUVNQyxxQjs7Ozs7Ozs7Ozs7OENBQzZCQyxRLEVBQVVDLFUsRUFBWTtBQUFFLGFBQU9KLGdCQUFnQksseUJBQWhCLENBQTBDSCxxQkFBMUMsRUFBaUVDLFFBQWpFLEVBQTJFQyxVQUEzRSxDQUFQO0FBQWdHOzs7O0VBRHZISixlOztBQUlwQ00sT0FBT0MsT0FBUCxHQUFpQkwscUJBQWpCIiwiZmlsZSI6Im5vbldoaXRlc3BhY2VQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBOb25XaGl0ZXNwYWNlUGFydE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoTm9uV2hpdGVzcGFjZVBhcnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25XaGl0ZXNwYWNlUGFydE5vZGU7XG4iXX0=