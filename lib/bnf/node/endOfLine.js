'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EndOfLinePart = require('../part/terminal/endOfLine'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var EndOfLineNode = function (_NonTerminalNode) {
  _inherits(EndOfLineNode, _NonTerminalNode);

  function EndOfLineNode() {
    _classCallCheck(this, EndOfLineNode);

    return _possibleConstructorReturn(this, (EndOfLineNode.__proto__ || Object.getPrototypeOf(EndOfLineNode)).apply(this, arguments));
  }

  _createClass(EndOfLineNode, [{
    key: 'generatePart',
    value: function generatePart(nonWhitespace, lookAhead) {
      var endOfLinePart = new EndOfLinePart(nonWhitespace);

      return endOfLinePart;
    }
  }], [{
    key: 'fromRuleNameAndChildNodes',
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(EndOfLineNode, ruleName, childNodes);
    }
  }]);

  return EndOfLineNode;
}(NonTerminalNode);

module.exports = EndOfLineNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsiRW5kT2ZMaW5lUGFydCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJFbmRPZkxpbmVOb2RlIiwibm9uV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsImVuZE9mTGluZVBhcnQiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsNEJBQVIsQ0FBdEI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsK0JBQVIsQ0FEeEI7O0lBR01FLGE7Ozs7Ozs7Ozs7O2lDQUNTQyxhLEVBQWVDLFMsRUFBVztBQUNyQyxVQUFNQyxnQkFBZ0IsSUFBSU4sYUFBSixDQUFrQkksYUFBbEIsQ0FBdEI7O0FBRUEsYUFBT0UsYUFBUDtBQUNEOzs7OENBRWdDQyxRLEVBQVVDLFUsRUFBWTtBQUFFLGFBQU9OLGdCQUFnQk8seUJBQWhCLENBQTBDTixhQUExQyxFQUF5REksUUFBekQsRUFBbUVDLFVBQW5FLENBQVA7QUFBd0Y7Ozs7RUFQdkhOLGU7O0FBVTVCUSxPQUFPQyxPQUFQLEdBQWlCUixhQUFqQiIsImZpbGUiOiJlbmRPZkxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVuZE9mTGluZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsL2VuZE9mTGluZScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRW5kT2ZMaW5lTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub25XaGl0ZXNwYWNlLCBsb29rQWhlYWQpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVQYXJ0ID0gbmV3IEVuZE9mTGluZVBhcnQobm9uV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhFbmRPZkxpbmVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVOb2RlO1xuIl19