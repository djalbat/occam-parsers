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
    value: function generatePart(nonWhitespace, lookAhead) {
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
    var node = nodes.pop(),
        nonWhitespace = false;

    part = node.generatePart(nonWhitespace, lookAhead);
  } else {
    nodes.pop();

    lookAhead = true;

    part = partFromNodes(nodes, lookAhead);
  }

  return part;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0L25vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJOb25UZXJtaW5hbFBhcnROb2RlIiwibm9uV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJzbGljZSIsInBhcnQiLCJwYXJ0RnJvbU5vZGVzIiwicnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibm9kZSIsInBvcCIsImdlbmVyYXRlUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JDLFFBQVEsa0NBQVIsQ0FBeEI7O0lBRU1DLG1COzs7Ozs7Ozs7OztpQ0FDU0MsYSxFQUFlQyxTLEVBQVc7QUFDckMsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsUUFBUUYsV0FBV0csS0FBWCxFQURkO0FBQUEsVUFFTUMsT0FBT0MsY0FBY0gsS0FBZCxFQUFxQkgsU0FBckIsQ0FGYjs7QUFJQSxhQUFPSyxJQUFQO0FBQ0Q7Ozs4Q0FFZ0NFLFEsRUFBVU4sVSxFQUFZO0FBQUUsYUFBT0wsZ0JBQWdCWSx5QkFBaEIsQ0FBMENWLG1CQUExQyxFQUErRFMsUUFBL0QsRUFBeUVOLFVBQXpFLENBQVA7QUFBOEY7Ozs7RUFUdkhMLGU7O0FBWWxDYSxPQUFPQyxPQUFQLEdBQWlCWixtQkFBakI7O0FBRUEsU0FBU1EsYUFBVCxDQUF1QkgsS0FBdkIsRUFBOEJILFNBQTlCLEVBQXlDO0FBQ3ZDLE1BQUlLLE9BQU8sSUFBWDs7QUFFQSxNQUFNTSxjQUFjUixNQUFNUyxNQUExQjs7QUFFQSxNQUFJRCxnQkFBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsUUFBTUUsT0FBT1YsTUFBTVcsR0FBTixFQUFiO0FBQUEsUUFDTWYsZ0JBQWdCLEtBRHRCOztBQUdBTSxXQUFPUSxLQUFLRSxZQUFMLENBQWtCaEIsYUFBbEIsRUFBaUNDLFNBQWpDLENBQVA7QUFDRCxHQUxELE1BS087QUFDTEcsVUFBTVcsR0FBTjs7QUFFQWQsZ0JBQVksSUFBWjs7QUFFQUssV0FBT0MsY0FBY0gsS0FBZCxFQUFxQkgsU0FBckIsQ0FBUDtBQUNEOztBQUVELFNBQU9LLElBQVA7QUFDRCIsImZpbGUiOiJub25UZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgTm9uVGVybWluYWxQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub25XaGl0ZXNwYWNlLCBsb29rQWhlYWQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnNsaWNlKCksXG4gICAgICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMsIGxvb2tBaGVhZCk7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhOb25UZXJtaW5hbFBhcnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbFBhcnROb2RlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbU5vZGVzKG5vZGVzLCBsb29rQWhlYWQpIHtcbiAgbGV0IHBhcnQgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gIGlmIChub2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlcy5wb3AoKSxcbiAgICAgICAgICBub25XaGl0ZXNwYWNlID0gZmFsc2U7XG5cbiAgICBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobm9uV2hpdGVzcGFjZSwgbG9va0FoZWFkKTtcbiAgfSBlbHNlIHtcbiAgICBub2Rlcy5wb3AoKTtcblxuICAgIGxvb2tBaGVhZCA9IHRydWU7XG5cbiAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2RlcywgbG9va0FoZWFkKTtcbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuIl19