'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var RulesNode = function (_NonTerminalNode) {
  _inherits(RulesNode, _NonTerminalNode);

  function RulesNode() {
    _classCallCheck(this, RulesNode);

    return _possibleConstructorReturn(this, (RulesNode.__proto__ || Object.getPrototypeOf(RulesNode)).apply(this, arguments));
  }

  _createClass(RulesNode, [{
    key: 'generateRules',
    value: function generateRules(Rule) {
      var childNodes = this.getChildNodes(),
          ruleNodes = childNodes,
          ///
      rules = ruleNodes.map(function (ruleNode) {
        var rule = ruleNode.generateRule(Rule);

        return rule;
      });

      return rules;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = nodes,
          ///
      rulesNode = NonTerminalNode.fromRuleNameAndChildNodes(RulesNode, ruleName, childNodes);

      return rulesNode;
    }
  }]);

  return RulesNode;
}(NonTerminalNode);

module.exports = RulesNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ydWxlcy5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiUnVsZXNOb2RlIiwiUnVsZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicnVsZU5vZGVzIiwicnVsZXMiLCJtYXAiLCJydWxlTm9kZSIsInJ1bGUiLCJnZW5lcmF0ZVJ1bGUiLCJub2RlcyIsInJ1bGVOYW1lIiwicnVsZXNOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCQyxRQUFRLCtCQUFSLENBQXhCOztJQUVNQyxTOzs7Ozs7Ozs7OztrQ0FDVUMsSSxFQUFNO0FBQ2xCLFVBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLFlBQVlGLFVBRGxCO0FBQUEsVUFDK0I7QUFDekJHLGNBQVFELFVBQVVFLEdBQVYsQ0FBYyxVQUFTQyxRQUFULEVBQW1CO0FBQ3ZDLFlBQU1DLE9BQU9ELFNBQVNFLFlBQVQsQ0FBc0JSLElBQXRCLENBQWI7O0FBRUEsZUFBT08sSUFBUDtBQUNELE9BSk8sQ0FGZDs7QUFRQSxhQUFPSCxLQUFQO0FBQ0Q7Ozt5Q0FFMkJLLEssRUFBT0MsUSxFQUFVO0FBQzNDLFVBQU1ULGFBQWFRLEtBQW5CO0FBQUEsVUFBMEI7QUFDcEJFLGtCQUFZZCxnQkFBZ0JlLHlCQUFoQixDQUEwQ2IsU0FBMUMsRUFBcURXLFFBQXJELEVBQStEVCxVQUEvRCxDQURsQjs7QUFHQSxhQUFPVSxTQUFQO0FBQ0Q7Ozs7RUFsQnFCZCxlOztBQXFCeEJnQixPQUFPQyxPQUFQLEdBQWlCZixTQUFqQiIsImZpbGUiOiJydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUnVsZXNOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVSdWxlcyhSdWxlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJ1bGVOb2RlcyA9IGNoaWxkTm9kZXMsICAvLy9cbiAgICAgICAgICBydWxlcyA9IHJ1bGVOb2Rlcy5tYXAoZnVuY3Rpb24ocnVsZU5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBydWxlTm9kZS5nZW5lcmF0ZVJ1bGUoUnVsZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBydWxlcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgcnVsZXNOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUnVsZXNOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcnVsZXNOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXNOb2RlO1xuIl19