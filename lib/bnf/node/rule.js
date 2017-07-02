'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var RuleNode = function (_NonTerminalNode) {
  _inherits(RuleNode, _NonTerminalNode);

  function RuleNode() {
    _classCallCheck(this, RuleNode);

    return _possibleConstructorReturn(this, (RuleNode.__proto__ || Object.getPrototypeOf(RuleNode)).apply(this, arguments));
  }

  _createClass(RuleNode, [{
    key: 'generateRule',
    value: function generateRule(Rule, Definition, mappings) {
      var name = this.getName(),
          definitions = this.generateDefinitions(Definition),
          mappingsNodeExists = mappings.hasOwnProperty(name),
          Node = mappingsNodeExists ? mappings[name] : NonTerminalNode,
          rule = new Rule(name, definitions, Node);

      return rule;
    }
  }, {
    key: 'getName',
    value: function getName() {
      var childNodes = this.getChildNodes(),
          firstChildNode = arrayUtil.first(childNodes),
          ruleNameNode = firstChildNode,
          ///
      ruleNameNodeRuleName = ruleNameNode.getRuleName(),
          name = ruleNameNodeRuleName;

      return name;
    }
  }, {
    key: 'generateDefinitions',
    value: function generateDefinitions(Definition) {
      var childNodes = this.getChildNodes(),
          lastButOneChildNode = arrayUtil.lastButOne(childNodes),
          definitionsNode = lastButOneChildNode,
          ///
      definitions = definitionsNode.generateDefinitions(Definition);

      return definitions;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtil.discardSecond(nodes),
          ruleNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, RuleNode);

      return ruleNode;
    }
  }]);

  return RuleNode;
}(NonTerminalNode);

module.exports = RuleNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ydWxlLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJSdWxlTm9kZSIsIlJ1bGUiLCJEZWZpbml0aW9uIiwibWFwcGluZ3MiLCJuYW1lIiwiZ2V0TmFtZSIsImRlZmluaXRpb25zIiwiZ2VuZXJhdGVEZWZpbml0aW9ucyIsIm1hcHBpbmdzTm9kZUV4aXN0cyIsImhhc093blByb3BlcnR5IiwiTm9kZSIsInJ1bGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJydWxlTmFtZU5vZGUiLCJydWxlTmFtZU5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGFzdEJ1dE9uZUNoaWxkTm9kZSIsImxhc3RCdXRPbmUiLCJkZWZpbml0aW9uc05vZGUiLCJub2RlcyIsInJ1bGVOYW1lIiwiZGlzY2FyZFNlY29uZCIsInJ1bGVOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4Qjs7SUFHTUUsUTs7Ozs7Ozs7Ozs7aUNBQ1NDLEksRUFBTUMsVSxFQUFZQyxRLEVBQVU7QUFDdkMsVUFBTUMsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNQyxjQUFjLEtBQUtDLG1CQUFMLENBQXlCTCxVQUF6QixDQURwQjtBQUFBLFVBRU1NLHFCQUFxQkwsU0FBU00sY0FBVCxDQUF3QkwsSUFBeEIsQ0FGM0I7QUFBQSxVQUdNTSxPQUFPRixxQkFDRUwsU0FBU0MsSUFBVCxDQURGLEdBRUlMLGVBTGpCO0FBQUEsVUFNTVksT0FBTyxJQUFJVixJQUFKLENBQVNHLElBQVQsRUFBZUUsV0FBZixFQUE0QkksSUFBNUIsQ0FOYjs7QUFRQSxhQUFPQyxJQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLGlCQUFpQmpCLFVBQVVrQixLQUFWLENBQWdCSCxVQUFoQixDQUR2QjtBQUFBLFVBRU1JLGVBQWVGLGNBRnJCO0FBQUEsVUFFc0M7QUFDaENHLDZCQUF1QkQsYUFBYUUsV0FBYixFQUg3QjtBQUFBLFVBSU1kLE9BQU9hLG9CQUpiOztBQU1BLGFBQU9iLElBQVA7QUFDRDs7O3dDQUVtQkYsVSxFQUFZO0FBQzlCLFVBQU1VLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01NLHNCQUFzQnRCLFVBQVV1QixVQUFWLENBQXFCUixVQUFyQixDQUQ1QjtBQUFBLFVBRU1TLGtCQUFrQkYsbUJBRnhCO0FBQUEsVUFFOEM7QUFDeENiLG9CQUFjZSxnQkFBZ0JkLG1CQUFoQixDQUFvQ0wsVUFBcEMsQ0FIcEI7O0FBS0EsYUFBT0ksV0FBUDtBQUNEOzs7eUNBRTJCZ0IsSyxFQUFPQyxRLEVBQVU7QUFDM0MsVUFBTVgsYUFBYWYsVUFBVTJCLGFBQVYsQ0FBd0JGLEtBQXhCLENBQW5CO0FBQUEsVUFDTUcsV0FBVzFCLGdCQUFnQjJCLHlCQUFoQixDQUEwQ0gsUUFBMUMsRUFBb0RYLFVBQXBELEVBQWdFWixRQUFoRSxDQURqQjs7QUFHQSxhQUFPeUIsUUFBUDtBQUNEOzs7O0VBckNvQjFCLGU7O0FBd0N2QjRCLE9BQU9DLE9BQVAsR0FBaUI1QixRQUFqQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBSdWxlTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUnVsZShSdWxlLCBEZWZpbml0aW9uLCBtYXBwaW5ncykge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHRoaXMuZ2VuZXJhdGVEZWZpbml0aW9ucyhEZWZpbml0aW9uKSxcbiAgICAgICAgICBtYXBwaW5nc05vZGVFeGlzdHMgPSBtYXBwaW5ncy5oYXNPd25Qcm9wZXJ0eShuYW1lKSxcbiAgICAgICAgICBOb2RlID0gbWFwcGluZ3NOb2RlRXhpc3RzID9cbiAgICAgICAgICAgICAgICAgICBtYXBwaW5nc1tuYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICBOb25UZXJtaW5hbE5vZGUsXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBhcnJheVV0aWwuZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgcnVsZU5hbWVOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZU5vZGVSdWxlTmFtZSA9IHJ1bGVOYW1lTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBydWxlTmFtZU5vZGVSdWxlTmFtZTtcbiAgICBcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBcbiAgZ2VuZXJhdGVEZWZpbml0aW9ucyhEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGxhc3RCdXRPbmVDaGlsZE5vZGUgPSBhcnJheVV0aWwubGFzdEJ1dE9uZShjaGlsZE5vZGVzKSxcbiAgICAgICAgICBkZWZpbml0aW9uc05vZGUgPSBsYXN0QnV0T25lQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9uc05vZGUuZ2VuZXJhdGVEZWZpbml0aW9ucyhEZWZpbml0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkU2Vjb25kKG5vZGVzKSxcbiAgICAgICAgICBydWxlTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBSdWxlTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTm9kZTtcbiJdfQ==