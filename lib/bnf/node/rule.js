'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    discardFourthThenSecond = arrayUtilities.discardFourthThenSecond;

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
                      secondChildNode = second(childNodes),
                      definitionsNode = secondChildNode,
                      ///
                  definitions = definitionsNode.generateDefinitions();

                  return definitions;
            }
      }], [{
            key: 'fromNodesAndRuleName',
            value: function fromNodesAndRuleName(nodes, ruleName) {
                  var childNodes = discardFourthThenSecond(nodes),
                      ruleNode = NonTerminalNode.fromRuleNameAndChildNodes(RuleNode, ruleName, childNodes);

                  return ruleNode;
            }
      }]);

      return RuleNode;
}(NonTerminalNode);

module.exports = RuleNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ydWxlLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0Iiwic2Vjb25kIiwiZGlzY2FyZEZvdXJ0aFRoZW5TZWNvbmQiLCJSdWxlTm9kZSIsIlJ1bGUiLCJuYW1lIiwiZ2V0TmFtZSIsImRlZmluaXRpb25zIiwiZ2VuZXJhdGVEZWZpbml0aW9ucyIsIk5vZGUiLCJydWxlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInJ1bGVOYW1lTm9kZSIsInJ1bGVOYW1lTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJzZWNvbmRDaGlsZE5vZGUiLCJkZWZpbml0aW9uc05vZGUiLCJub2RlcyIsInJ1bGVOYW1lIiwicnVsZU5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLFFBQVEsdUJBQVIsQ0FBdkI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsK0JBQVIsQ0FEeEI7O0lBR1FFLEssR0FBMkNILGMsQ0FBM0NHLEs7SUFBT0MsTSxHQUFvQ0osYyxDQUFwQ0ksTTtJQUFRQyx1QixHQUE0QkwsYyxDQUE1QkssdUI7O0lBRWpCQyxROzs7Ozs7Ozs7Ozt5Q0FDU0MsSSxFQUFNO0FBQ2pCLHNCQUFNQyxPQUFPLEtBQUtDLE9BQUwsRUFBYjtBQUFBLHNCQUNNQyxjQUFjLEtBQUtDLG1CQUFMLEVBRHBCO0FBQUEsc0JBRU1DLE9BQU9WLGVBRmI7QUFBQSxzQkFHTVcsT0FBTyxJQUFJTixJQUFKLENBQVNDLElBQVQsRUFBZUUsV0FBZixFQUE0QkUsSUFBNUIsQ0FIYjs7QUFLQSx5QkFBT0MsSUFBUDtBQUNEOzs7c0NBRVM7QUFDUixzQkFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsc0JBQ01DLGlCQUFpQmIsTUFBTVcsVUFBTixDQUR2QjtBQUFBLHNCQUVNRyxlQUFlRCxjQUZyQjtBQUFBLHNCQUVzQztBQUNoQ0UseUNBQXVCRCxhQUFhRSxXQUFiLEVBSDdCO0FBQUEsc0JBSU1YLE9BQU9VLG9CQUpiLENBRFEsQ0FLNEI7O0FBRXBDLHlCQUFPVixJQUFQO0FBQ0Q7OztrREFFcUI7QUFDcEIsc0JBQU1NLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLHNCQUNNSyxrQkFBa0JoQixPQUFPVSxVQUFQLENBRHhCO0FBQUEsc0JBRU1PLGtCQUFrQkQsZUFGeEI7QUFBQSxzQkFFMEM7QUFDcENWLGdDQUFjVyxnQkFBZ0JWLG1CQUFoQixFQUhwQjs7QUFLQSx5QkFBT0QsV0FBUDtBQUNEOzs7aURBRTJCWSxLLEVBQU9DLFEsRUFBVTtBQUMzQyxzQkFBTVQsYUFBYVQsd0JBQXdCaUIsS0FBeEIsQ0FBbkI7QUFBQSxzQkFDTUUsV0FBV3RCLGdCQUFnQnVCLHlCQUFoQixDQUEwQ25CLFFBQTFDLEVBQW9EaUIsUUFBcEQsRUFBOERULFVBQTlELENBRGpCOztBQUdBLHlCQUFPVSxRQUFQO0FBQ0Q7Ozs7RUFsQ29CdEIsZTs7QUFxQ3ZCd0IsT0FBT0MsT0FBUCxHQUFpQnJCLFFBQWpCIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQsIGRpc2NhcmRGb3VydGhUaGVuU2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUnVsZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVJ1bGUoUnVsZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHRoaXMuZ2VuZXJhdGVEZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGUsXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBydWxlTmFtZU5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTm9kZVJ1bGVOYW1lID0gcnVsZU5hbWVOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lTm9kZVJ1bGVOYW1lOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgXG4gIGdlbmVyYXRlRGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBkZWZpbml0aW9uc05vZGUgPSBzZWNvbmRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zTm9kZS5nZW5lcmF0ZURlZmluaXRpb25zKCk7XG4gICAgXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBkaXNjYXJkRm91cnRoVGhlblNlY29uZChub2RlcyksXG4gICAgICAgICAgcnVsZU5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhSdWxlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5vZGU7XG4iXX0=