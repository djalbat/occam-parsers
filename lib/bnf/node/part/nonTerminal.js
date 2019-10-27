'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../../common/node/nonTerminal');

var NonTerminalPartNode = function (_NonTerminalNode) {
  _inherits(NonTerminalPartNode, _NonTerminalNode);

  function NonTerminalPartNode() {
    _classCallCheck(this, NonTerminalPartNode);

    return _possibleConstructorReturn(this, (NonTerminalPartNode.__proto__ || Object.getPrototypeOf(NonTerminalPartNode)).apply(this, arguments));
  }

  _createClass(NonTerminalPartNode, [{
    key: 'generatePart',
    value: function generatePart(lookAhead) {
      var childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = partFromNodes(nodes, lookAhead);

      return part;
    }
  }], [{
    key: 'fromRuleNameAndChildNodes',
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(NonTerminalPartNode, ruleName, childNodes);
    }
  }]);

  return NonTerminalPartNode;
}(NonTerminalNode);

module.exports = NonTerminalPartNode;

function partFromNodes(nodes, lookAhead) {
  var part = null;

  var nodesLength = nodes.length;

  if (nodesLength === 1) {
    var node = nodes.pop();

    part = node.generatePart(lookAhead);
  } else {
    nodes.pop();

    lookAhead = true;

    part = partFromNodes(nodes, lookAhead);
  }

  return part;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0L25vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJOb25UZXJtaW5hbFBhcnROb2RlIiwibG9va0FoZWFkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsInNsaWNlIiwicGFydCIsInBhcnRGcm9tTm9kZXMiLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlIiwicG9wIiwiZ2VuZXJhdGVQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSxrQ0FBUixDQUF4Qjs7SUFFTUMsbUI7Ozs7Ozs7Ozs7O2lDQUNTQyxTLEVBQVc7QUFDdEIsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsUUFBUUYsV0FBV0csS0FBWCxFQURkO0FBQUEsVUFFTUMsT0FBT0MsY0FBY0gsS0FBZCxFQUFxQkgsU0FBckIsQ0FGYjs7QUFJQSxhQUFPSyxJQUFQO0FBQ0Q7Ozs4Q0FFZ0NFLFEsRUFBVU4sVSxFQUFZO0FBQUUsYUFBT0osZ0JBQWdCVyx5QkFBaEIsQ0FBMENULG1CQUExQyxFQUErRFEsUUFBL0QsRUFBeUVOLFVBQXpFLENBQVA7QUFBOEY7Ozs7RUFUdkhKLGU7O0FBWWxDWSxPQUFPQyxPQUFQLEdBQWlCWCxtQkFBakI7O0FBRUEsU0FBU08sYUFBVCxDQUF1QkgsS0FBdkIsRUFBOEJILFNBQTlCLEVBQXlDO0FBQ3ZDLE1BQUlLLE9BQU8sSUFBWDs7QUFFQSxNQUFNTSxjQUFjUixNQUFNUyxNQUExQjs7QUFFQSxNQUFJRCxnQkFBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsUUFBTUUsT0FBT1YsTUFBTVcsR0FBTixFQUFiOztBQUVBVCxXQUFPUSxLQUFLRSxZQUFMLENBQWtCZixTQUFsQixDQUFQO0FBQ0QsR0FKRCxNQUlPO0FBQ0xHLFVBQU1XLEdBQU47O0FBRUFkLGdCQUFZLElBQVo7O0FBRUFLLFdBQU9DLGNBQWNILEtBQWQsRUFBcUJILFNBQXJCLENBQVA7QUFDRDs7QUFFRCxTQUFPSyxJQUFQO0FBQ0QiLCJmaWxlIjoibm9uVGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIE5vblRlcm1pbmFsUGFydE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5zbGljZSgpLFxuICAgICAgICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGVzKG5vZGVzLCBsb29rQWhlYWQpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoTm9uVGVybWluYWxQYXJ0Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxQYXJ0Tm9kZTtcblxuZnVuY3Rpb24gcGFydEZyb21Ob2Rlcyhub2RlcywgbG9va0FoZWFkKSB7XG4gIGxldCBwYXJ0ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCk7XG5cbiAgICBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcbiAgfSBlbHNlIHtcbiAgICBub2Rlcy5wb3AoKTtcblxuICAgIGxvb2tBaGVhZCA9IHRydWU7XG5cbiAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2RlcywgbG9va0FoZWFkKTtcbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuIl19