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
        var childNodeRuleName = childNode.getRuleName(),
            childNodeRuleNameRuleRuleName = childNodeRuleName === RuleRuleName,
            childNodeRuleNode = childNodeRuleNameRuleRuleName; ///

        if (childNodeRuleNode) {
          var ruleNode = childNode; ///

          ruleNodes.push(ruleNode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJydWxlTmFtZXMiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiUnVsZVJ1bGVOYW1lIiwiRG9jdW1lbnROb2RlIiwiUnVsZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicnVsZU5vZGVzIiwicmVkdWNlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImNoaWxkTm9kZVJ1bGVOYW1lUnVsZVJ1bGVOYW1lIiwiY2hpbGROb2RlUnVsZU5vZGUiLCJydWxlTm9kZSIsInB1c2giLCJydWxlcyIsIm1hcCIsInJ1bGUiLCJnZW5lcmF0ZVJ1bGUiLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4Qjs7SUFHUUUsWSxHQUFpQkgsUyxDQUFqQkcsWTs7SUFFRkMsWTs7Ozs7Ozs7Ozs7a0NBQ1VDLEksRUFBTTtBQUNsQixVQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxZQUFZRixXQUFXRyxNQUFYLENBQWtCLFVBQVNELFNBQVQsRUFBb0JFLFNBQXBCLEVBQStCO0FBQzNELFlBQU1DLG9CQUFvQkQsVUFBVUUsV0FBVixFQUExQjtBQUFBLFlBQ01DLGdDQUFpQ0Ysc0JBQXNCUixZQUQ3RDtBQUFBLFlBRU1XLG9CQUFvQkQsNkJBRjFCLENBRDJELENBR0Q7O0FBRTFELFlBQUlDLGlCQUFKLEVBQXVCO0FBQ3JCLGNBQU1DLFdBQVdMLFNBQWpCLENBRHFCLENBQ087O0FBRTVCRixvQkFBVVEsSUFBVixDQUFlRCxRQUFmO0FBQ0Q7O0FBRUQsZUFBT1AsU0FBUDtBQUNELE9BWlcsRUFZVCxFQVpTLENBRGxCO0FBQUEsVUFjTVMsUUFBUVQsVUFBVVUsR0FBVixDQUFjLFVBQVNILFFBQVQsRUFBbUI7QUFDdkMsWUFBTUksT0FBT0osU0FBU0ssWUFBVCxDQUFzQmYsSUFBdEIsQ0FBYjs7QUFFQSxlQUFPYyxJQUFQO0FBQ0QsT0FKTyxDQWRkOztBQW9CQSxhQUFPRixLQUFQO0FBQ0Q7Ozs4Q0FFZ0NJLFEsRUFBVWYsVSxFQUFZO0FBQUUsYUFBT0osZ0JBQWdCb0IseUJBQWhCLENBQTBDbEIsWUFBMUMsRUFBd0RpQixRQUF4RCxFQUFrRWYsVUFBbEUsQ0FBUDtBQUF1Rjs7OztFQXpCdkhKLGU7O0FBNEIzQnFCLE9BQU9DLE9BQVAsR0FBaUJwQixZQUFqQiIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jb25zdCB7IFJ1bGVSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBEb2N1bWVudE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVJ1bGVzKFJ1bGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcnVsZU5vZGVzID0gY2hpbGROb2Rlcy5yZWR1Y2UoZnVuY3Rpb24ocnVsZU5vZGVzLCBjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICBjaGlsZE5vZGVSdWxlTmFtZVJ1bGVSdWxlTmFtZSA9IChjaGlsZE5vZGVSdWxlTmFtZSA9PT0gUnVsZVJ1bGVOYW1lKSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZVJ1bGVOb2RlID0gY2hpbGROb2RlUnVsZU5hbWVSdWxlUnVsZU5hbWU7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZVJ1bGVOb2RlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJ1bGVOb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICAgICAgICBydWxlTm9kZXMucHVzaChydWxlTm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlTm9kZXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIHJ1bGVzID0gcnVsZU5vZGVzLm1hcChmdW5jdGlvbihydWxlTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVOb2RlLmdlbmVyYXRlUnVsZShSdWxlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKERvY3VtZW50Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRG9jdW1lbnROb2RlO1xuIl19