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
              nodes = definitionNodes,
              ///
          lastNodeNullified = isLastNodeNullified(nodes);

          if (lastNodeNullified) {
            removedLastNodeFromNodes(nodes);
          }

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

        if (definitionsString === null) {
          definitionsString = definitionString;
        } else {
          definitionsString = definitionsString + '\n\n' + maximumPadding + '     | ' + definitionString;
        }

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

function removedLastNodeFromNodes(nodes) {
  var start = -1,
      deleteCount = 1;

  nodes.splice(start, deleteCount);
}

function isLastNodeNullified(nodes) {
  var latNodeNullified = false;

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
        var firstChildNodeEpsilonNode = firstChildNode.isEpsilonNode();

        latNodeNullified = firstChildNodeEpsilonNode; ///        
      }
    }
  }

  return latNodeNullified;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXkiLCJmaXJzdCIsImxhc3QiLCJSdWxlIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uc0V4aXN0Iiwibm9kZSIsImNvbmNhdCIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJub25UZXJtaW5hbE5vZGUiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwiZGVmaW5pdGlvbk5vZGVzIiwic29tZURlZmluaXRpb25QYXJzZWQiLCJzb21lIiwiZGVmaW5pdGlvbiIsInBhcnNlIiwiZGVmaW5pdGlvblBhcnNlZCIsImRlZmluaXRpb25Ob2Rlc0xlbmd0aCIsInJ1bGVOYW1lIiwibm9kZXMiLCJsYXN0Tm9kZU51bGxpZmllZCIsImlzTGFzdE5vZGVOdWxsaWZpZWQiLCJyZW1vdmVkTGFzdE5vZGVGcm9tTm9kZXMiLCJmcm9tTm9kZXNBbmRSdWxlTmFtZSIsImRlY3JlYXNlRGVwdGgiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtYXhpbXVtUGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsInRvU3RyaW5nIiwicnVsZU5hbWVMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInN0cmluZyIsIkNsYXNzIiwicnVsZSIsInVuZGVmaW5lZCIsImdldE5hbWUiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwb3NpdGlvbiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJsYXROb2RlTnVsbGlmaWVkIiwibGFzdE5vZGUiLCJsYXN0Tm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibGFzdE5vZGVOb25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNMZW5ndGgiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlIiwiZmlyc3RDaGlsZE5vZGVFcHNpbG9uTm9kZSIsImlzRXBzaWxvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRU0sSUFBRUMsS0FBRixHQUFZRixTQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ2tCRCxLQURsQixDQUNFQyxLQURGO0FBQUEsSUFDU0MsSUFEVCxHQUNrQkYsS0FEbEIsQ0FDU0UsSUFEVDs7SUFHQUMsSTtBQUNKLGdCQUFZQyxJQUFaLEVBQWtCQyxXQUFsQixFQUErQkMsZUFBL0IsRUFBZ0Q7QUFBQTs7QUFDOUMsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtDLFdBQVo7QUFDRDs7O3lDQUVvQjtBQUNuQixhQUFPLEtBQUtDLGVBQVo7QUFDRDs7O3lDQUVvQjtBQUNuQixVQUFNQyxvQkFBb0IsS0FBS0YsV0FBTCxDQUFpQkcsTUFBM0M7QUFBQSxVQUNNQyxtQkFBb0JGLG9CQUFvQixDQUQ5Qzs7QUFHQSxhQUFPRSxnQkFBUDtBQUNEOzs7NEJBRU9MLEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7bUNBRWNDLFcsRUFBYTtBQUMxQixXQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7NEJBRU9LLEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7bUNBRWNMLFcsRUFB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QUVBLE9BQUssSUFBSVUsV0FBVyxDQUFwQixFQUF1QkEsV0FBV1gsYUFBbEMsRUFBaURXLFVBQWpELEVBQTZEO0FBQzNEVixlQUFXLEdBQVg7QUFDRDs7QUFFRCxTQUFPQSxPQUFQO0FBQ0Q7O0FBRUQsU0FBU1osd0JBQVQsQ0FBa0NILEtBQWxDLEVBQXlDO0FBQ3ZDLE1BQU0wQixRQUFRLENBQUMsQ0FBZjtBQUFBLE1BQ01DLGNBQWMsQ0FEcEI7O0FBR0EzQixRQUFNNEIsTUFBTixDQUFhRixLQUFiLEVBQW9CQyxXQUFwQjtBQUNEOztBQUVELFNBQVN6QixtQkFBVCxDQUE2QkYsS0FBN0IsRUFBb0M7QUFDbEMsTUFBSTZCLG1CQUFtQixLQUF2Qjs7QUFFQSxNQUFNQyxXQUFXdkQsS0FBS3lCLEtBQUwsQ0FBakI7QUFBQSxNQUNNK0IsdUJBQXVCRCxTQUFTRSxjQUFULEVBRDdCO0FBQUEsTUFFTUMsMEJBQTBCLENBQUNGLG9CQUZqQzs7QUFJQSxNQUFJRSx1QkFBSixFQUE2QjtBQUMzQixRQUFNOUMsa0JBQWtCMkMsUUFBeEI7QUFBQSxRQUFrQztBQUM1QkksaUJBQWEvQyxnQkFBZ0JnRCxhQUFoQixFQURuQjtBQUFBLFFBRU1DLG1CQUFtQkYsV0FBV3JELE1BRnBDOztBQUlBLFFBQUl1RCxxQkFBcUIsQ0FBekIsRUFBNEI7QUFDMUIsVUFBTUMsaUJBQWlCL0QsTUFBTTRELFVBQU4sQ0FBdkI7QUFBQSxVQUNNSSw2QkFBNkJELGVBQWVMLGNBQWYsRUFEbkM7O0FBR0EsVUFBSU0sMEJBQUosRUFBZ0M7QUFDOUIsWUFBTUMsNEJBQTRCRixlQUFlRyxhQUFmLEVBQWxDOztBQUVBWCwyQkFBbUJVLHlCQUFuQixDQUg4QixDQUdnQjtBQUMvQztBQUNGO0FBQ0Y7O0FBRUQsU0FBT1YsZ0JBQVA7QUFDRCIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgeyBhcnJheSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCwgbGFzdCB9ID0gYXJyYXk7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXREZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldE5vblRlcm1pbmFsTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5Ob25UZXJtaW5hbE5vZGU7XG4gIH1cbiAgXG4gIGRvRGVmaW5pdGlvbnNFeGlzdCgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25zRXhpc3QgPSAoZGVmaW5pdGlvbnNMZW5ndGggPiAwKTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnNFeGlzdDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vZGUobm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBhZGREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB0aGlzLmRlZmluaXRpb25zLmNvbmNhdChkZWZpbml0aW9ucyk7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlID0gbnVsbDtcblxuICAgIGNvbmZpZ3VyYXRpb24uaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IGNvbmZpZ3VyYXRpb24uaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcCBhdCBydWxlICcke3RoaXMubmFtZX0nYCk7XG4gICAgfVxuXG4gICAgbGV0IGRlZmluaXRpb25Ob2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc29tZURlZmluaXRpb25QYXJzZWQgPSB0aGlzLmRlZmluaXRpb25zLnNvbWUoZnVuY3Rpb24oZGVmaW5pdGlvbikge1xuICAgICAgZGVmaW5pdGlvbk5vZGVzID0gZGVmaW5pdGlvbi5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBjb25zdCBkZWZpbml0aW9uUGFyc2VkID0gKGRlZmluaXRpb25Ob2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uUGFyc2VkO1xuICAgIH0pO1xuXG4gICAgaWYgKHNvbWVEZWZpbml0aW9uUGFyc2VkKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uTm9kZXNMZW5ndGggPSBkZWZpbml0aW9uTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgbm9kZXMgPSBkZWZpbml0aW9uTm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgbGFzdE5vZGVOdWxsaWZpZWQgPSBpc0xhc3ROb2RlTnVsbGlmaWVkKG5vZGVzKTtcblxuICAgICAgICBpZiAobGFzdE5vZGVOdWxsaWZpZWQpIHtcbiAgICAgICAgICByZW1vdmVkTGFzdE5vZGVGcm9tTm9kZXMobm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWd1cmF0aW9uLmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICB0b1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgpIHtcbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLnRvU3RyaW5nKCk7XG4gIFxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XFxuXFxuJHttYXhpbXVtUGFkZGluZ30gICAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgXFxuXFxuICAke3RoaXMubmFtZX0ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSA7YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUoQ2xhc3MsIHJ1bGUpIHtcbiAgICBpZiAocnVsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFJ1bGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgcnVsZSA9IG5ldyBDbGFzcyhuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpIHtcbiAgbGV0IHBhZGRpbmcgPSAnJztcblxuICBmb3IgKGxldCBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgcGFkZGluZ0xlbmd0aDsgcG9zaXRpb24rKykge1xuICAgIHBhZGRpbmcgKz0gJyAnO1xuICB9XG5cbiAgcmV0dXJuIHBhZGRpbmc7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZWRMYXN0Tm9kZUZyb21Ob2Rlcyhub2Rlcykge1xuICBjb25zdCBzdGFydCA9IC0xLFxuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgbm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG59XG5cbmZ1bmN0aW9uIGlzTGFzdE5vZGVOdWxsaWZpZWQobm9kZXMpIHtcbiAgbGV0IGxhdE5vZGVOdWxsaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBsYXN0Tm9kZSA9IGxhc3Qobm9kZXMpLFxuICAgICAgICBsYXN0Tm9kZVRlcm1pbmFsTm9kZSA9IGxhc3ROb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIGxhc3ROb2RlTm9uVGVybWluYWxOb2RlID0gIWxhc3ROb2RlVGVybWluYWxOb2RlO1xuXG4gIGlmIChsYXN0Tm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGxhc3ROb2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcbiAgICAgIFxuICAgICAgaWYgKGZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlRXBzaWxvbk5vZGUgPSBmaXJzdENoaWxkTm9kZS5pc0Vwc2lsb25Ob2RlKCk7XG5cbiAgICAgICAgbGF0Tm9kZU51bGxpZmllZCA9IGZpcnN0Q2hpbGROb2RlRXBzaWxvbk5vZGU7IC8vLyAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxhdE5vZGVOdWxsaWZpZWQ7XG59XG4iXX0=