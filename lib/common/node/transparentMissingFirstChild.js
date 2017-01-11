'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../bnf/node/nonTerminal');

var TransparentMissingFirstChildNode = function (_NonTerminalNode) {
  _inherits(TransparentMissingFirstChildNode, _NonTerminalNode);

  function TransparentMissingFirstChildNode() {
    _classCallCheck(this, TransparentMissingFirstChildNode);

    return _possibleConstructorReturn(this, (TransparentMissingFirstChildNode.__proto__ || Object.getPrototypeOf(TransparentMissingFirstChildNode)).apply(this, arguments));
  }

  _createClass(TransparentMissingFirstChildNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = nodes.slice(1);

      nodes = childNodes;

      return nodes;
    }
  }]);

  return TransparentMissingFirstChildNode;
}(NonTerminalNode);

module.exports = TransparentMissingFirstChildNode;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90cmFuc3BhcmVudE1pc3NpbmdGaXJzdENoaWxkLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJUcmFuc3BhcmVudE1pc3NpbmdGaXJzdENoaWxkTm9kZSIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwic2xpY2UiLCJtb2R1bGUiLCJleHBvcnRzIiwic2Vjb25kIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsa0JBQWtCQyxRQUFRLDRCQUFSLENBQXRCOztJQUVNQyxnQzs7Ozs7Ozs7Ozs7OEJBQ2FDLEssRUFBT0MsYyxFQUFnQjtBQUN0QyxVQUFJQyxhQUFhRixNQUFNRyxLQUFOLENBQVksQ0FBWixDQUFqQjs7QUFFQUgsY0FBUUUsVUFBUjs7QUFFQSxhQUFPRixLQUFQO0FBQ0Q7Ozs7RUFQNENILGU7O0FBVS9DTyxPQUFPQyxPQUFQLEdBQWlCTixnQ0FBakI7O0FBRUEsU0FBU08sTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ0cmFuc3BhcmVudE1pc3NpbmdGaXJzdENoaWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vYm5mL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgVHJhbnNwYXJlbnRNaXNzaW5nRmlyc3RDaGlsZE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gbm9kZXMuc2xpY2UoMSk7XG5cbiAgICBub2RlcyA9IGNoaWxkTm9kZXM7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BhcmVudE1pc3NpbmdGaXJzdENoaWxkTm9kZTtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19