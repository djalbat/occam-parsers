'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var array = necessary.array,
    first = array.first,
    second = array.second;

var RuleNode = function (_NonTerminalNode) {
      _inherits(RuleNode, _NonTerminalNode);

      function RuleNode() {
            _classCallCheck(this, RuleNode);

            return _possibleConstructorReturn(this, (RuleNode.__proto__ || Object.getPrototypeOf(RuleNode)).apply(this, arguments));
      }

      _createClass(RuleNode, [{
            key: 'generateRule',
            value: function generateRule(Rule, mappings) {
                  var name = this.getName(),
                      definitions = this.generateDefinitions(),
                      mappingsNodeExists = mappings.hasOwnProperty(name),
                      Node = mappingsNodeExists ? mappings[name] : NonTerminalNode,
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
                  var childNodes = arrayUtilities.discardFourthThenSecond(nodes),
                      ruleNode = NonTerminalNode.fromRuleNameAndChildNodes(RuleNode, ruleName, childNodes);

                  return ruleNode;
            }
      }]);

      return RuleNode;
}(NonTerminalNode);

module.exports = RuleNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ydWxlLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsIk5vblRlcm1pbmFsTm9kZSIsImFycmF5IiwiZmlyc3QiLCJzZWNvbmQiLCJSdWxlTm9kZSIsIlJ1bGUiLCJtYXBwaW5ncyIsIm5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbnMiLCJnZW5lcmF0ZURlZmluaXRpb25zIiwibWFwcGluZ3NOb2RlRXhpc3RzIiwiaGFzT3duUHJvcGVydHkiLCJOb2RlIiwicnVsZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJydWxlTmFtZU5vZGUiLCJydWxlTmFtZU5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwic2Vjb25kQ2hpbGROb2RlIiwiZGVmaW5pdGlvbnNOb2RlIiwibm9kZXMiLCJydWxlTmFtZSIsImRpc2NhcmRGb3VydGhUaGVuU2Vjb25kIiwicnVsZU5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsaUJBQWlCRCxRQUFRLHVCQUFSLENBQXZCO0FBQUEsSUFDTUUsa0JBQWtCRixRQUFRLCtCQUFSLENBRHhCOztBQUdNLElBQUVHLEtBQUYsR0FBWUosU0FBWixDQUFFSSxLQUFGO0FBQUEsSUFDRUMsS0FERixHQUNvQkQsS0FEcEIsQ0FDRUMsS0FERjtBQUFBLElBQ1NDLE1BRFQsR0FDb0JGLEtBRHBCLENBQ1NFLE1BRFQ7O0lBR0FDLFE7Ozs7Ozs7Ozs7O3lDQUNTQyxJLEVBQU1DLFEsRUFBVTtBQUMzQixzQkFBTUMsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxzQkFDTUMsY0FBYyxLQUFLQyxtQkFBTCxFQURwQjtBQUFBLHNCQUVNQyxxQkFBcUJMLFNBQVNNLGNBQVQsQ0FBd0JMLElBQXhCLENBRjNCO0FBQUEsc0JBR01NLE9BQU9GLHFCQUNFTCxTQUFTQyxJQUFULENBREYsR0FFSVAsZUFMakI7QUFBQSxzQkFNTWMsT0FBTyxJQUFJVCxJQUFKLENBQVNFLElBQVQsRUFBZUUsV0FBZixFQUE0QkksSUFBNUIsQ0FOYjs7QUFRQSx5QkFBT0MsSUFBUDtBQUNEOzs7c0NBRVM7QUFDUixzQkFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsc0JBQ01DLGlCQUFpQmYsTUFBTWEsVUFBTixDQUR2QjtBQUFBLHNCQUVNRyxlQUFlRCxjQUZyQjtBQUFBLHNCQUVzQztBQUNoQ0UseUNBQXVCRCxhQUFhRSxXQUFiLEVBSDdCO0FBQUEsc0JBSU1iLE9BQU9ZLG9CQUpiLENBRFEsQ0FLNEI7O0FBRXBDLHlCQUFPWixJQUFQO0FBQ0Q7OztrREFFcUI7QUFDcEIsc0JBQU1RLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLHNCQUNNSyxrQkFBa0JsQixPQUFPWSxVQUFQLENBRHhCO0FBQUEsc0JBRU1PLGtCQUFrQkQsZUFGeEI7QUFBQSxzQkFFMEM7QUFDcENaLGdDQUFjYSxnQkFBZ0JaLG1CQUFoQixFQUhwQjs7QUFLQSx5QkFBT0QsV0FBUDtBQUNEOzs7aURBRTJCYyxLLEVBQU9DLFEsRUFBVTtBQUMzQyxzQkFBTVQsYUFBYWhCLGVBQWUwQix1QkFBZixDQUF1Q0YsS0FBdkMsQ0FBbkI7QUFBQSxzQkFDTUcsV0FBVzFCLGdCQUFnQjJCLHlCQUFoQixDQUEwQ3ZCLFFBQTFDLEVBQW9Eb0IsUUFBcEQsRUFBOERULFVBQTlELENBRGpCOztBQUdBLHlCQUFPVyxRQUFQO0FBQ0Q7Ozs7RUFyQ29CMUIsZTs7QUF3Q3ZCNEIsT0FBT0MsT0FBUCxHQUFpQnpCLFFBQWpCIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY29uc3QgeyBhcnJheSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheTtcblxuY2xhc3MgUnVsZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVJ1bGUoUnVsZSwgbWFwcGluZ3MpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSB0aGlzLmdlbmVyYXRlRGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBtYXBwaW5nc05vZGVFeGlzdHMgPSBtYXBwaW5ncy5oYXNPd25Qcm9wZXJ0eShuYW1lKSxcbiAgICAgICAgICBOb2RlID0gbWFwcGluZ3NOb2RlRXhpc3RzID9cbiAgICAgICAgICAgICAgICAgICBtYXBwaW5nc1tuYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICBOb25UZXJtaW5hbE5vZGUsXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBydWxlTmFtZU5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTm9kZVJ1bGVOYW1lID0gcnVsZU5hbWVOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lTm9kZVJ1bGVOYW1lOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgXG4gIGdlbmVyYXRlRGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBkZWZpbml0aW9uc05vZGUgPSBzZWNvbmRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zTm9kZS5nZW5lcmF0ZURlZmluaXRpb25zKCk7XG4gICAgXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBhcnJheVV0aWxpdGllcy5kaXNjYXJkRm91cnRoVGhlblNlY29uZChub2RlcyksXG4gICAgICAgICAgcnVsZU5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhSdWxlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5vZGU7XG4iXX0=