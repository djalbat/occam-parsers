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
    lastButOne = array.lastButOne;

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
                      firstChildNode = first(childNodes),
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
                      lastButOneChildNode = lastButOne(childNodes),
                      definitionsNode = lastButOneChildNode,
                      ///
                  definitions = definitionsNode.generateDefinitions(Definition);

                  return definitions;
            }
      }], [{
            key: 'fromNodesAndRuleName',
            value: function fromNodesAndRuleName(nodes, ruleName) {
                  var childNodes = arrayUtilities.discardSecond(nodes),
                      ruleNode = NonTerminalNode.fromRuleNameAndChildNodes(RuleNode, ruleName, childNodes);

                  return ruleNode;
            }
      }]);

      return RuleNode;
}(NonTerminalNode);

module.exports = RuleNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ydWxlLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsIk5vblRlcm1pbmFsTm9kZSIsImFycmF5IiwiZmlyc3QiLCJsYXN0QnV0T25lIiwiUnVsZU5vZGUiLCJSdWxlIiwiRGVmaW5pdGlvbiIsIm1hcHBpbmdzIiwibmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9ucyIsImdlbmVyYXRlRGVmaW5pdGlvbnMiLCJtYXBwaW5nc05vZGVFeGlzdHMiLCJoYXNPd25Qcm9wZXJ0eSIsIk5vZGUiLCJydWxlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInJ1bGVOYW1lTm9kZSIsInJ1bGVOYW1lTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsYXN0QnV0T25lQ2hpbGROb2RlIiwiZGVmaW5pdGlvbnNOb2RlIiwibm9kZXMiLCJydWxlTmFtZSIsImRpc2NhcmRTZWNvbmQiLCJydWxlTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxpQkFBaUJELFFBQVEsdUJBQVIsQ0FBdkI7QUFBQSxJQUNNRSxrQkFBa0JGLFFBQVEsK0JBQVIsQ0FEeEI7O0FBR00sSUFBRUcsS0FBRixHQUFZSixTQUFaLENBQUVJLEtBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ3dCRCxLQUR4QixDQUNFQyxLQURGO0FBQUEsSUFDU0MsVUFEVCxHQUN3QkYsS0FEeEIsQ0FDU0UsVUFEVDs7SUFHQUMsUTs7Ozs7Ozs7Ozs7eUNBQ1NDLEksRUFBTUMsVSxFQUFZQyxRLEVBQVU7QUFDdkMsc0JBQU1DLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsc0JBQ01DLGNBQWMsS0FBS0MsbUJBQUwsQ0FBeUJMLFVBQXpCLENBRHBCO0FBQUEsc0JBRU1NLHFCQUFxQkwsU0FBU00sY0FBVCxDQUF3QkwsSUFBeEIsQ0FGM0I7QUFBQSxzQkFHTU0sT0FBT0YscUJBQ0VMLFNBQVNDLElBQVQsQ0FERixHQUVJUixlQUxqQjtBQUFBLHNCQU1NZSxPQUFPLElBQUlWLElBQUosQ0FBU0csSUFBVCxFQUFlRSxXQUFmLEVBQTRCSSxJQUE1QixDQU5iOztBQVFBLHlCQUFPQyxJQUFQO0FBQ0Q7OztzQ0FFUztBQUNSLHNCQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxzQkFDTUMsaUJBQWlCaEIsTUFBTWMsVUFBTixDQUR2QjtBQUFBLHNCQUVNRyxlQUFlRCxjQUZyQjtBQUFBLHNCQUVzQztBQUNoQ0UseUNBQXVCRCxhQUFhRSxXQUFiLEVBSDdCO0FBQUEsc0JBSU1iLE9BQU9ZLG9CQUpiOztBQU1BLHlCQUFPWixJQUFQO0FBQ0Q7OztnREFFbUJGLFUsRUFBWTtBQUM5QixzQkFBTVUsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsc0JBQ01LLHNCQUFzQm5CLFdBQVdhLFVBQVgsQ0FENUI7QUFBQSxzQkFFTU8sa0JBQWtCRCxtQkFGeEI7QUFBQSxzQkFFOEM7QUFDeENaLGdDQUFjYSxnQkFBZ0JaLG1CQUFoQixDQUFvQ0wsVUFBcEMsQ0FIcEI7O0FBS0EseUJBQU9JLFdBQVA7QUFDRDs7O2lEQUUyQmMsSyxFQUFPQyxRLEVBQVU7QUFDM0Msc0JBQU1ULGFBQWFqQixlQUFlMkIsYUFBZixDQUE2QkYsS0FBN0IsQ0FBbkI7QUFBQSxzQkFDTUcsV0FBVzNCLGdCQUFnQjRCLHlCQUFoQixDQUEwQ3hCLFFBQTFDLEVBQW9EcUIsUUFBcEQsRUFBOERULFVBQTlELENBRGpCOztBQUdBLHlCQUFPVyxRQUFQO0FBQ0Q7Ozs7RUFyQ29CM0IsZTs7QUF3Q3ZCNkIsT0FBT0MsT0FBUCxHQUFpQjFCLFFBQWpCIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY29uc3QgeyBhcnJheSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCwgbGFzdEJ1dE9uZSB9ID0gYXJyYXk7XG5cbmNsYXNzIFJ1bGVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVSdWxlKFJ1bGUsIERlZmluaXRpb24sIG1hcHBpbmdzKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gdGhpcy5nZW5lcmF0ZURlZmluaXRpb25zKERlZmluaXRpb24pLFxuICAgICAgICAgIG1hcHBpbmdzTm9kZUV4aXN0cyA9IG1hcHBpbmdzLmhhc093blByb3BlcnR5KG5hbWUpLFxuICAgICAgICAgIE5vZGUgPSBtYXBwaW5nc05vZGVFeGlzdHMgP1xuICAgICAgICAgICAgICAgICAgIG1hcHBpbmdzW25hbWVdIDpcbiAgICAgICAgICAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHJ1bGVOYW1lTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWVOb2RlUnVsZU5hbWUgPSBydWxlTmFtZU5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gcnVsZU5hbWVOb2RlUnVsZU5hbWU7XG4gICAgXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgXG4gIGdlbmVyYXRlRGVmaW5pdGlvbnMoRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBsYXN0QnV0T25lQ2hpbGROb2RlID0gbGFzdEJ1dE9uZShjaGlsZE5vZGVzKSxcbiAgICAgICAgICBkZWZpbml0aW9uc05vZGUgPSBsYXN0QnV0T25lQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9uc05vZGUuZ2VuZXJhdGVEZWZpbml0aW9ucyhEZWZpbml0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGFycmF5VXRpbGl0aWVzLmRpc2NhcmRTZWNvbmQobm9kZXMpLFxuICAgICAgICAgIHJ1bGVOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUnVsZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOb2RlO1xuIl19