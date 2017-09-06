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
      var childNodes = discardFourthThenSecond(nodes),
          ruleNode = NonTerminalNode.fromRuleNameAndChildNodes(RuleNode, ruleName, childNodes);

      return ruleNode;
    }
  }]);

  return RuleNode;
}(NonTerminalNode);

module.exports = RuleNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ydWxlLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0Iiwic2Vjb25kIiwiZGlzY2FyZEZvdXJ0aFRoZW5TZWNvbmQiLCJSdWxlTm9kZSIsIlJ1bGUiLCJtYXBwaW5ncyIsIm5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbnMiLCJnZW5lcmF0ZURlZmluaXRpb25zIiwibWFwcGluZ3NOb2RlRXhpc3RzIiwiaGFzT3duUHJvcGVydHkiLCJOb2RlIiwicnVsZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJydWxlTmFtZU5vZGUiLCJydWxlTmFtZU5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwic2Vjb25kQ2hpbGROb2RlIiwiZGVmaW5pdGlvbnNOb2RlIiwibm9kZXMiLCJydWxlTmFtZSIsInJ1bGVOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLHVCQUFSLENBQXZCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCOztJQUdRRSxLLEdBQTJDSCxjLENBQTNDRyxLO0lBQU9DLE0sR0FBb0NKLGMsQ0FBcENJLE07SUFBUUMsdUIsR0FBNEJMLGMsQ0FBNUJLLHVCOztJQUVqQkMsUTs7Ozs7Ozs7Ozs7aUNBQ1NDLEksRUFBTUMsUSxFQUFVO0FBQzNCLFVBQU1DLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTUMsY0FBYyxLQUFLQyxtQkFBTCxFQURwQjtBQUFBLFVBRU1DLHFCQUFxQkwsU0FBU00sY0FBVCxDQUF3QkwsSUFBeEIsQ0FGM0I7QUFBQSxVQUdNTSxPQUFPRixxQkFDRUwsU0FBU0MsSUFBVCxDQURGLEdBRUlQLGVBTGpCO0FBQUEsVUFNTWMsT0FBTyxJQUFJVCxJQUFKLENBQVNFLElBQVQsRUFBZUUsV0FBZixFQUE0QkksSUFBNUIsQ0FOYjs7QUFRQSxhQUFPQyxJQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLGlCQUFpQmhCLE1BQU1jLFVBQU4sQ0FEdkI7QUFBQSxVQUVNRyxlQUFlRCxjQUZyQjtBQUFBLFVBRXNDO0FBQ2hDRSw2QkFBdUJELGFBQWFFLFdBQWIsRUFIN0I7QUFBQSxVQUlNYixPQUFPWSxvQkFKYixDQURRLENBSzRCOztBQUVwQyxhQUFPWixJQUFQO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsVUFBTVEsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUssa0JBQWtCbkIsT0FBT2EsVUFBUCxDQUR4QjtBQUFBLFVBRU1PLGtCQUFrQkQsZUFGeEI7QUFBQSxVQUUwQztBQUNwQ1osb0JBQWNhLGdCQUFnQlosbUJBQWhCLEVBSHBCOztBQUtBLGFBQU9ELFdBQVA7QUFDRDs7O3lDQUUyQmMsSyxFQUFPQyxRLEVBQVU7QUFDM0MsVUFBTVQsYUFBYVosd0JBQXdCb0IsS0FBeEIsQ0FBbkI7QUFBQSxVQUNNRSxXQUFXekIsZ0JBQWdCMEIseUJBQWhCLENBQTBDdEIsUUFBMUMsRUFBb0RvQixRQUFwRCxFQUE4RFQsVUFBOUQsQ0FEakI7O0FBR0EsYUFBT1UsUUFBUDtBQUNEOzs7O0VBckNvQnpCLGU7O0FBd0N2QjJCLE9BQU9DLE9BQVAsR0FBaUJ4QixRQUFqQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kLCBkaXNjYXJkRm91cnRoVGhlblNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJ1bGVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVSdWxlKFJ1bGUsIG1hcHBpbmdzKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gdGhpcy5nZW5lcmF0ZURlZmluaXRpb25zKCksXG4gICAgICAgICAgbWFwcGluZ3NOb2RlRXhpc3RzID0gbWFwcGluZ3MuaGFzT3duUHJvcGVydHkobmFtZSksXG4gICAgICAgICAgTm9kZSA9IG1hcHBpbmdzTm9kZUV4aXN0cyA/XG4gICAgICAgICAgICAgICAgICAgbWFwcGluZ3NbbmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgTm9uVGVybWluYWxOb2RlLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgcnVsZU5hbWVOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZU5vZGVSdWxlTmFtZSA9IHJ1bGVOYW1lTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBydWxlTmFtZU5vZGVSdWxlTmFtZTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBuYW1lO1xuICB9XG4gIFxuICBnZW5lcmF0ZURlZmluaXRpb25zKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgZGVmaW5pdGlvbnNOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9uc05vZGUuZ2VuZXJhdGVEZWZpbml0aW9ucygpO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gZGlzY2FyZEZvdXJ0aFRoZW5TZWNvbmQobm9kZXMpLFxuICAgICAgICAgIHJ1bGVOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUnVsZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOb2RlO1xuIl19