'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ruleNames = require('../ruleNames'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var RuleRuleName = ruleNames.RuleRuleName;

var DocumentNode = function (_NonTerminalNode) {
  _inherits(DocumentNode, _NonTerminalNode);

  function DocumentNode() {
    _classCallCheck(this, DocumentNode);

    return _possibleConstructorReturn(this, (DocumentNode.__proto__ || Object.getPrototypeOf(DocumentNode)).apply(this, arguments));
  }

  _createClass(DocumentNode, [{
    key: 'generateRules',
    value: function generateRules(Rule) {
      var childNodes = this.getChildNodes(),
          ruleNodes = childNodes.reduce(function (ruleNodes, childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();

        if (childNodeNonTerminalNode) {
          var nonTerminalNode = childNode,
              ///
          ruleName = childNode.getRuleName(),
              ruleNameRuleRuleName = ruleName === RuleRuleName,
              nonTerminalNodeRuleNode = ruleNameRuleRuleName; ///

          if (nonTerminalNodeRuleNode) {
            var ruleNode = nonTerminalNode; ///

            ruleNodes.push(ruleNode);
          }
        }

        return ruleNodes;
      }, []),
          rules = ruleNodes.map(function (ruleNode) {
        var rule = ruleNode.generateRule(Rule);

        return rule;
      });

      return rules;
    }
  }], [{
    key: 'fromRuleNameAndChildNodes',
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(DocumentNode, ruleName, childNodes);
    }
  }]);

  return DocumentNode;
}(NonTerminalNode);

module.exports = DocumentNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJydWxlTmFtZXMiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiUnVsZVJ1bGVOYW1lIiwiRG9jdW1lbnROb2RlIiwiUnVsZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicnVsZU5vZGVzIiwicmVkdWNlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWVSdWxlUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVSdWxlTm9kZSIsInJ1bGVOb2RlIiwicHVzaCIsInJ1bGVzIiwibWFwIiwicnVsZSIsImdlbmVyYXRlUnVsZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4Qjs7SUFHUUUsWSxHQUFpQkgsUyxDQUFqQkcsWTs7SUFFRkMsWTs7Ozs7Ozs7Ozs7a0NBQ1VDLEksRUFBTTtBQUNsQixVQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxZQUFZRixXQUFXRyxNQUFYLENBQWtCLFVBQVNELFNBQVQsRUFBb0JFLFNBQXBCLEVBQStCO0FBQzNELFlBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQVYsRUFBakM7O0FBRUEsWUFBSUQsd0JBQUosRUFBOEI7QUFDNUIsY0FBTUUsa0JBQWtCSCxTQUF4QjtBQUFBLGNBQW9DO0FBQzlCSSxxQkFBV0osVUFBVUssV0FBVixFQURqQjtBQUFBLGNBRU1DLHVCQUF3QkYsYUFBYVgsWUFGM0M7QUFBQSxjQUdNYywwQkFBMEJELG9CQUhoQyxDQUQ0QixDQUkyQjs7QUFFdkQsY0FBSUMsdUJBQUosRUFBNkI7QUFDM0IsZ0JBQU1DLFdBQVdMLGVBQWpCLENBRDJCLENBQ087O0FBRWxDTCxzQkFBVVcsSUFBVixDQUFlRCxRQUFmO0FBQ0Q7QUFDRjs7QUFFRCxlQUFPVixTQUFQO0FBQ0QsT0FqQlcsRUFpQlQsRUFqQlMsQ0FEbEI7QUFBQSxVQW1CTVksUUFBUVosVUFBVWEsR0FBVixDQUFjLFVBQVNILFFBQVQsRUFBbUI7QUFDdkMsWUFBTUksT0FBT0osU0FBU0ssWUFBVCxDQUFzQmxCLElBQXRCLENBQWI7O0FBRUEsZUFBT2lCLElBQVA7QUFDRCxPQUpPLENBbkJkOztBQXlCQSxhQUFPRixLQUFQO0FBQ0Q7Ozs4Q0FFZ0NOLFEsRUFBVVIsVSxFQUFZO0FBQUUsYUFBT0osZ0JBQWdCc0IseUJBQWhCLENBQTBDcEIsWUFBMUMsRUFBd0RVLFFBQXhELEVBQWtFUixVQUFsRSxDQUFQO0FBQXVGOzs7O0VBOUJ2SEosZTs7QUFpQzNCdUIsT0FBT0MsT0FBUCxHQUFpQnRCLFlBQWpCIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgUnVsZVJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIERvY3VtZW50Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUnVsZXMoUnVsZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBydWxlTm9kZXMgPSBjaGlsZE5vZGVzLnJlZHVjZShmdW5jdGlvbihydWxlTm9kZXMsIGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lUnVsZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBSdWxlUnVsZU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTm9kZSA9IHJ1bGVOYW1lUnVsZVJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVJ1bGVOb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZU5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgICAgICAgICAgcnVsZU5vZGVzLnB1c2gocnVsZU5vZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlTm9kZXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIHJ1bGVzID0gcnVsZU5vZGVzLm1hcChmdW5jdGlvbihydWxlTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVOb2RlLmdlbmVyYXRlUnVsZShSdWxlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKERvY3VtZW50Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRG9jdW1lbnROb2RlO1xuIl19