'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var array = necessary.array,
    first = array.first,
    last = array.last;

var Rule = function () {
  function Rule(name, definitions, NonTerminalNode) {
    _classCallCheck(this, Rule);

    this.name = name;
    this.definitions = definitions;
    this.NonTerminalNode = NonTerminalNode;
  }

  _createClass(Rule, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getDefinitions',
    value: function getDefinitions() {
      return this.definitions;
    }
  }, {
    key: 'getNonTerminalNode',
    value: function getNonTerminalNode() {
      return this.NonTerminalNode;
    }
  }, {
    key: 'doDefinitionsExist',
    value: function doDefinitionsExist() {
      var definitionsLength = this.definitions.length,
          definitionsExist = definitionsLength > 0;

      return definitionsExist;
    }
  }, {
    key: 'setName',
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: 'setDefinitions',
    value: function setDefinitions(definitions) {
      this.definitions = definitions;
    }
  }, {
    key: 'setNode',
    value: function setNode(node) {
      this.node = node;
    }
  }, {
    key: 'addDefinitions',
    value: function addDefinitions(definitions) {
      this.definitions = this.definitions.concat(definitions);
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      var nonTerminalNode = null;

      configuration.increaseDepth();

      var tooDeep = configuration.isTooDeep();

      if (tooDeep) {
        throw new Error('The parse tree is too deep at rule \'' + this.name + '\'');
      }

      var definitionNodes = null;

      var someDefinitionParsed = this.definitions.some(function (definition) {
        definitionNodes = definition.parse(configuration, noWhitespace);

        var definitionParsed = definitionNodes !== null;

        return definitionParsed;
      });

      if (someDefinitionParsed) {
        var definitionNodesLength = definitionNodes.length;

        if (definitionNodesLength > 0) {
          var ruleName = this.name,
              nodes = definitionNodes; ///

          // removeLastNullifiedNodeFromNodes(nodes);

          nonTerminalNode = this.NonTerminalNode.fromNodesAndRuleName(nodes, ruleName);
        }
      }

      configuration.decreaseDepth();

      return nonTerminalNode;
    }
  }, {
    key: 'toString',
    value: function toString(maximumRuleNameLength) {
      var maximumPadding = paddingFromPaddingLength(maximumRuleNameLength),
          definitionsString = this.definitions.reduce(function (definitionsString, definition) {
        var definitionString = definition.toString();

        definitionsString = definitionsString !== null ? definitionsString + '\n\n' + maximumPadding + '     | ' + definitionString : definitionString;

        return definitionsString;
      }, null),
          ruleName = this.name,
          ///
      ruleNameLength = ruleName.length,
          paddingLength = maximumRuleNameLength - ruleNameLength,
          padding = paddingFromPaddingLength(paddingLength),
          string = '\n\n  ' + this.name + padding + ' ::= ' + definitionsString + ' ;';

      return string;
    }
  }], [{
    key: 'fromRule',
    value: function fromRule(Class, rule) {
      if (rule === undefined) {
        rule = Class;
        Class = Rule;
      }

      var name = rule.getName(),
          definitions = rule.getDefinitions(),
          NonTerminalNode = rule.getNonTerminalNode();

      rule = new Class(name, definitions, NonTerminalNode);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function paddingFromPaddingLength(paddingLength) {
  var padding = '';

  for (var position = 0; position < paddingLength; position++) {
    padding += ' ';
  }

  return padding;
}

function removeLastNullifiedNodeFromNodes(nodes) {
  var lastNodeNullifiedNode = false;

  var lastNode = last(nodes),
      lastNodeTerminalNode = lastNode.isTerminalNode(),
      lastNodeNonTerminalNode = !lastNodeTerminalNode;

  if (lastNodeNonTerminalNode) {
    var nonTerminalNode = lastNode,
        ///
    childNodes = nonTerminalNode.getChildNodes(),
        childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      var firstChildNode = first(childNodes),
          firstChildNodeTerminalNode = firstChildNode.isTerminalNode();

      if (firstChildNodeTerminalNode) {
        var firstChildNodeEpsilonNode = firstChildNode.isEpsilonNode(),
            _lastNodeNullifiedNode = firstChildNodeEpsilonNode; ///

        if (_lastNodeNullifiedNode) {
          nodes.pop();
        }
      }
    }
  }

  return lastNodeNullifiedNode;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXkiLCJmaXJzdCIsImxhc3QiLCJSdWxlIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uc0V4aXN0Iiwibm9kZSIsImNvbmNhdCIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJub25UZXJtaW5hbE5vZGUiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwiZGVmaW5pdGlvbk5vZGVzIiwic29tZURlZmluaXRpb25QYXJzZWQiLCJzb21lIiwiZGVmaW5pdGlvbiIsInBhcnNlIiwiZGVmaW5pdGlvblBhcnNlZCIsImRlZmluaXRpb25Ob2Rlc0xlbmd0aCIsInJ1bGVOYW1lIiwibm9kZXMiLCJmcm9tTm9kZXNBbmRSdWxlTmFtZSIsImRlY3JlYXNlRGVwdGgiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtYXhpbXVtUGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsInRvU3RyaW5nIiwicnVsZU5hbWVMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInN0cmluZyIsIkNsYXNzIiwicnVsZSIsInVuZGVmaW5lZCIsImdldE5hbWUiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwb3NpdGlvbiIsInJlbW92ZUxhc3ROdWxsaWZpZWROb2RlRnJvbU5vZGVzIiwibGFzdE5vZGVOdWxsaWZpZWROb2RlIiwibGFzdE5vZGUiLCJsYXN0Tm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibGFzdE5vZGVOb25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNMZW5ndGgiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlIiwiZmlyc3RDaGlsZE5vZGVFcHNpbG9uTm9kZSIsImlzRXBzaWxvbk5vZGUiLCJwb3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRU0sSUFBRUMsS0FBRixHQUFZRixTQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ2tCRCxLQURsQixDQUNFQyxLQURGO0FBQUEsSUFDU0MsSUFEVCxHQUNrQkYsS0FEbEIsQ0FDU0UsSUFEVDs7SUFHQUMsSTtBQUNKLGdCQUFZQyxJQUFaLEVBQWtCQyxXQUFsQixFQUErQkMsZUFBL0IsRUFBZ0Q7QUFBQTs7QUFDOUMsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtDLFdBQVo7QUFDRDs7O3lDQUVvQjtBQUNuQixhQUFPLEtBQUtDLGVBQVo7QUFDRDs7O3lDQUVvQjtBQUNuQixVQUFNQyxvQkFBb0IsS0FBS0YsV0FBTCxDQUFpQkcsTUFBM0M7QUFBQSxVQUNNQyxtQkFBb0JGLG9CQUFvQixDQUQ5Qzs7QUFHQSxhQUFPRSxnQkFBUDtBQUNEOzs7NEJBRU9MLEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7bUNBRWNDLFcsRUFBYTtBQUMxQixXQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7NEJBRU9LLEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7bUNBRWNMLFcsRUFBYTtBQUMxQixXQUFLQSxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJNLE1BQWpCLENBQXdC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QUFNQyxXQUFXbEQsS0FBS3lCLEtBQUwsQ0FBakI7QUFBQSxNQUNNMEIsdUJBQXVCRCxTQUFTRSxjQUFULEVBRDdCO0FBQUEsTUFFTUMsMEJBQTBCLENBQUNGLG9CQUZqQzs7QUFJQSxNQUFJRSx1QkFBSixFQUE2QjtBQUMzQixRQUFNekMsa0JBQWtCc0MsUUFBeEI7QUFBQSxRQUFrQztBQUM1QkksaUJBQWExQyxnQkFBZ0IyQyxhQUFoQixFQURuQjtBQUFBLFFBRU1DLG1CQUFtQkYsV0FBV2hELE1BRnBDOztBQUlBLFFBQUlrRCxxQkFBcUIsQ0FBekIsRUFBNEI7QUFDMUIsVUFBTUMsaUJBQWlCMUQsTUFBTXVELFVBQU4sQ0FBdkI7QUFBQSxVQUNNSSw2QkFBNkJELGVBQWVMLGNBQWYsRUFEbkM7O0FBR0EsVUFBSU0sMEJBQUosRUFBZ0M7QUFDOUIsWUFBTUMsNEJBQTRCRixlQUFlRyxhQUFmLEVBQWxDO0FBQUEsWUFDTVgseUJBQXdCVSx5QkFEOUIsQ0FEOEIsQ0FFNEI7O0FBRTFELFlBQUlWLHNCQUFKLEVBQTJCO0FBQ3pCeEIsZ0JBQU1vQyxHQUFOO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsU0FBT1oscUJBQVA7QUFDRCIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgeyBhcnJheSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCwgbGFzdCB9ID0gYXJyYXk7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXREZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldE5vblRlcm1pbmFsTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5Ob25UZXJtaW5hbE5vZGU7XG4gIH1cbiAgXG4gIGRvRGVmaW5pdGlvbnNFeGlzdCgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25zRXhpc3QgPSAoZGVmaW5pdGlvbnNMZW5ndGggPiAwKTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnNFeGlzdDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vZGUobm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBhZGREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB0aGlzLmRlZmluaXRpb25zLmNvbmNhdChkZWZpbml0aW9ucyk7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlID0gbnVsbDtcblxuICAgIGNvbmZpZ3VyYXRpb24uaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IGNvbmZpZ3VyYXRpb24uaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcCBhdCBydWxlICcke3RoaXMubmFtZX0nYCk7XG4gICAgfVxuXG4gICAgbGV0IGRlZmluaXRpb25Ob2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc29tZURlZmluaXRpb25QYXJzZWQgPSB0aGlzLmRlZmluaXRpb25zLnNvbWUoZnVuY3Rpb24oZGVmaW5pdGlvbikge1xuICAgICAgZGVmaW5pdGlvbk5vZGVzID0gZGVmaW5pdGlvbi5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBjb25zdCBkZWZpbml0aW9uUGFyc2VkID0gKGRlZmluaXRpb25Ob2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uUGFyc2VkO1xuICAgIH0pO1xuXG4gICAgaWYgKHNvbWVEZWZpbml0aW9uUGFyc2VkKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uTm9kZXNMZW5ndGggPSBkZWZpbml0aW9uTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgbm9kZXMgPSBkZWZpbml0aW9uTm9kZXM7ICAvLy9cblxuICAgICAgICAvLyByZW1vdmVMYXN0TnVsbGlmaWVkTm9kZUZyb21Ob2Rlcyhub2Rlcyk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWd1cmF0aW9uLmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICB0b1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgpIHtcbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gKGRlZmluaXRpb25zU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cXG5cXG4ke21heGltdW1QYWRkaW5nfSAgICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpLFxuICAgICAgICAgIHN0cmluZyA9IGBcXG5cXG4gICR7dGhpcy5uYW1lfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9IDtgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShDbGFzcywgcnVsZSkge1xuICAgIGlmIChydWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gUnVsZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCkge1xuICBsZXQgcGFkZGluZyA9ICcnO1xuXG4gIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBwYWRkaW5nTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgcGFkZGluZyArPSAnICc7XG4gIH1cblxuICByZXR1cm4gcGFkZGluZztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTGFzdE51bGxpZmllZE5vZGVGcm9tTm9kZXMobm9kZXMpIHtcbiAgbGV0IGxhc3ROb2RlTnVsbGlmaWVkTm9kZSA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhc3ROb2RlID0gbGFzdChub2RlcyksXG4gICAgICAgIGxhc3ROb2RlVGVybWluYWxOb2RlID0gbGFzdE5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgbGFzdE5vZGVOb25UZXJtaW5hbE5vZGUgPSAhbGFzdE5vZGVUZXJtaW5hbE5vZGU7XG5cbiAgaWYgKGxhc3ROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbGFzdE5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuICAgICAgXG4gICAgICBpZiAoZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGVFcHNpbG9uTm9kZSA9IGZpcnN0Q2hpbGROb2RlLmlzRXBzaWxvbk5vZGUoKSxcbiAgICAgICAgICAgICAgbGFzdE5vZGVOdWxsaWZpZWROb2RlID0gZmlyc3RDaGlsZE5vZGVFcHNpbG9uTm9kZTsgIC8vL1xuXG4gICAgICAgIGlmIChsYXN0Tm9kZU51bGxpZmllZE5vZGUpIHtcbiAgICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsYXN0Tm9kZU51bGxpZmllZE5vZGU7XG59XG4iXX0=