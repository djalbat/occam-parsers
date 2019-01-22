'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var first = arrayUtilities.first,
    third = arrayUtilities.third;

var RuleNode = function (_NonTerminalNode) {
      _inherits(RuleNode, _NonTerminalNode);

      function RuleNode() {
            _classCallCheck(this, RuleNode);

            return _possibleConstructorReturn(this, (RuleNode.__proto__ || Object.getPrototypeOf(RuleNode)).apply(this, arguments));
      }

      _createClass(RuleNode, [{
            key: 'generateRule',
            value: function generateRule(Rule) {
                  var name = this.getName(),
                      definitions = this.generateDefinitions(),
                      Node = NonTerminalNode,
                      rule = new Rule(name, definitions, Node);

                  return rule;
            }
      }, {
            key: 'getName',
            value: function getName() {
                  var childNodes = this.getChildNodes(),
                      firstChildNode = first(childNodes),
                      ruleNameNode = firstChildNode,
                      ///
                  ruleNameNodeRuleName = ruleNameNode.getRuleName(),
                      name = ruleNameNodeRuleName; ///

                  return name;
            }
      }, {
            key: 'generateDefinitions',
            value: function generateDefinitions() {
                  var childNodes = this.getChildNodes(),
                      thirdChildNode = third(childNodes),
                      definitionsNode = thirdChildNode,
                      ///
                  definitions = definitionsNode.generateDefinitions();

                  return definitions;
            }
      }], [{
            key: 'fromNodesAndRuleName',
            value: function fromNodesAndRuleName(nodes, ruleName) {
                  var childNodes = nodes,
                      ///
                  ruleNode = NonTerminalNode.fromRuleNameAndChildNodes(RuleNode, ruleName, childNodes);

                  return ruleNode;
            }
      }]);

      return RuleNode;
}(NonTerminalNode);

module.exports = RuleNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ydWxlLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0IiwidGhpcmQiLCJSdWxlTm9kZSIsIlJ1bGUiLCJuYW1lIiwiZ2V0TmFtZSIsImRlZmluaXRpb25zIiwiZ2VuZXJhdGVEZWZpbml0aW9ucyIsIk5vZGUiLCJydWxlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInJ1bGVOYW1lTm9kZSIsInJ1bGVOYW1lTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJ0aGlyZENoaWxkTm9kZSIsImRlZmluaXRpb25zTm9kZSIsIm5vZGVzIiwicnVsZU5hbWUiLCJydWxlTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSx1QkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4Qjs7SUFHUUUsSyxHQUFpQkgsYyxDQUFqQkcsSztJQUFPQyxLLEdBQVVKLGMsQ0FBVkksSzs7SUFFVEMsUTs7Ozs7Ozs7Ozs7eUNBQ1NDLEksRUFBTTtBQUNqQixzQkFBTUMsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxzQkFDTUMsY0FBYyxLQUFLQyxtQkFBTCxFQURwQjtBQUFBLHNCQUVNQyxPQUFPVCxlQUZiO0FBQUEsc0JBR01VLE9BQU8sSUFBSU4sSUFBSixDQUFTQyxJQUFULEVBQWVFLFdBQWYsRUFBNEJFLElBQTVCLENBSGI7O0FBS0EseUJBQU9DLElBQVA7QUFDRDs7O3NDQUVTO0FBQ1Isc0JBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLHNCQUNNQyxpQkFBaUJaLE1BQU1VLFVBQU4sQ0FEdkI7QUFBQSxzQkFFTUcsZUFBZUQsY0FGckI7QUFBQSxzQkFFc0M7QUFDaENFLHlDQUF1QkQsYUFBYUUsV0FBYixFQUg3QjtBQUFBLHNCQUlNWCxPQUFPVSxvQkFKYixDQURRLENBSzRCOztBQUVwQyx5QkFBT1YsSUFBUDtBQUNEOzs7a0RBRXFCO0FBQ3BCLHNCQUFNTSxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxzQkFDTUssaUJBQWlCZixNQUFNUyxVQUFOLENBRHZCO0FBQUEsc0JBRU1PLGtCQUFrQkQsY0FGeEI7QUFBQSxzQkFFeUM7QUFDbkNWLGdDQUFjVyxnQkFBZ0JWLG1CQUFoQixFQUhwQjs7QUFLQSx5QkFBT0QsV0FBUDtBQUNEOzs7aURBRTJCWSxLLEVBQU9DLFEsRUFBVTtBQUMzQyxzQkFBTVQsYUFBYVEsS0FBbkI7QUFBQSxzQkFBMEI7QUFDcEJFLDZCQUFXckIsZ0JBQWdCc0IseUJBQWhCLENBQTBDbkIsUUFBMUMsRUFBb0RpQixRQUFwRCxFQUE4RFQsVUFBOUQsQ0FEakI7O0FBR0EseUJBQU9VLFFBQVA7QUFDRDs7OztFQWxDb0JyQixlOztBQXFDdkJ1QixPQUFPQyxPQUFQLEdBQWlCckIsUUFBakIiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgZmlyc3QsIHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUnVsZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVJ1bGUoUnVsZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHRoaXMuZ2VuZXJhdGVEZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGUsXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBydWxlTmFtZU5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTm9kZVJ1bGVOYW1lID0gcnVsZU5hbWVOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lTm9kZVJ1bGVOYW1lOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgXG4gIGdlbmVyYXRlRGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHRoaXJkQ2hpbGROb2RlID0gdGhpcmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgZGVmaW5pdGlvbnNOb2RlID0gdGhpcmRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zTm9kZS5nZW5lcmF0ZURlZmluaXRpb25zKCk7XG4gICAgXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgcnVsZU5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhSdWxlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5vZGU7XG4iXX0=