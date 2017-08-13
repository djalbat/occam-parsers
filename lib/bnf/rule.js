'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var NonTerminalNode = require('../common/node/nonTerminal'),
    EpsilonTerminalNode = require('../common/node/terminal/epsilon');

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

  var lastNode = last(nodes);

  if (lastNode instanceof NonTerminalNode) {
    var nonTerminalNode = lastNode,
        ///
    childNodes = nonTerminalNode.getChildNodes(),
        childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      var childNode = first(childNodes);

      latNodeNullified = childNode instanceof EpsilonTerminalNode; ///
    }
  }

  return latNodeNullified;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiRXBzaWxvblRlcm1pbmFsTm9kZSIsImFycmF5IiwiZmlyc3QiLCJsYXN0IiwiUnVsZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbnNFeGlzdCIsIm5vZGUiLCJjb25jYXQiLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9uVGVybWluYWxOb2RlIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsImRlZmluaXRpb25Ob2RlcyIsInNvbWVEZWZpbml0aW9uUGFyc2VkIiwic29tZSIsImRlZmluaXRpb24iLCJwYXJzZSIsImRlZmluaXRpb25QYXJzZWQiLCJkZWZpbml0aW9uTm9kZXNMZW5ndGgiLCJydWxlTmFtZSIsIm5vZGVzIiwibGFzdE5vZGVOdWxsaWZpZWQiLCJpc0xhc3ROb2RlTnVsbGlmaWVkIiwicmVtb3ZlZExhc3ROb2RlRnJvbU5vZGVzIiwiZnJvbU5vZGVzQW5kUnVsZU5hbWUiLCJkZWNyZWFzZURlcHRoIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJ0b1N0cmluZyIsInJ1bGVOYW1lTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzdHJpbmciLCJDbGFzcyIsInJ1bGUiLCJ1bmRlZmluZWQiLCJnZXROYW1lIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwicG9zaXRpb24iLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwibGF0Tm9kZU51bGxpZmllZCIsImxhc3ROb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzTGVuZ3RoIiwiY2hpbGROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLGtCQUFrQkQsUUFBUSw0QkFBUixDQUF4QjtBQUFBLElBQ01FLHNCQUFzQkYsUUFBUSxpQ0FBUixDQUQ1Qjs7QUFHTSxJQUFFRyxLQUFGLEdBQVlKLFNBQVosQ0FBRUksS0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDa0JELEtBRGxCLENBQ0VDLEtBREY7QUFBQSxJQUNTQyxJQURULEdBQ2tCRixLQURsQixDQUNTRSxJQURUOztJQUdBQyxJO0FBQ0osZ0JBQVlDLElBQVosRUFBa0JDLFdBQWxCLEVBQStCUCxlQUEvQixFQUFnRDtBQUFBOztBQUM5QyxTQUFLTSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtQLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtNLElBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0MsV0FBWjtBQUNEOzs7eUNBRW9CO0FBQ25CLGFBQU8sS0FBS1AsZUFBWjtBQUNEOzs7eUNBRW9CO0FBQ25CLFVBQU1RLG9CQUFvQixLQUFLRCxXQUFMLENBQWlCRSxNQUEzQztBQUFBLFVBQ01DLG1CQUFvQkYsb0JBQW9CLENBRDlDOztBQUdBLGFBQU9FLGdCQUFQO0FBQ0Q7Ozs0QkFFT0osSSxFQUFNO0FBQ1osV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7OzttQ0FFY0MsVyxFQUFhO0FBQzFCLFdBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs0QkFFT0ksSSxFQUFNO0FBQ1osV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7OzttQ0FFY0osVyxFQUFhO0FBQzFCLFdBQUtBLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkssTUFBakIs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VyxVQUFqRCxFQUE2RDtBQUMzRFYsZUFBVyxHQUFYO0FBQ0Q7O0FBRUQsU0FBT0EsT0FBUDtBQUNEOztBQUVELFNBQVNaLHdCQUFULENBQWtDSCxLQUFsQyxFQUF5QztBQUN2QyxNQUFNMEIsUUFBUSxDQUFDLENBQWY7QUFBQSxNQUNNQyxjQUFjLENBRHBCOztBQUdBM0IsUUFBTTRCLE1BQU4sQ0FBYUYsS0FBYixFQUFvQkMsV0FBcEI7QUFDRDs7QUFFRCxTQUFTekIsbUJBQVQsQ0FBNkJGLEtBQTdCLEVBQW9DO0FBQ2xDLE1BQUk2QixtQkFBbUIsS0FBdkI7O0FBRUEsTUFBTUMsV0FBV3RELEtBQUt3QixLQUFMLENBQWpCOztBQUVBLE1BQUk4QixvQkFBb0IxRCxlQUF4QixFQUF5QztBQUN2QyxRQUFNZSxrQkFBa0IyQyxRQUF4QjtBQUFBLFFBQWtDO0FBQzVCQyxpQkFBYTVDLGdCQUFnQjZDLGFBQWhCLEVBRG5CO0FBQUEsUUFFTUMsbUJBQW1CRixXQUFXbEQsTUFGcEM7O0FBSUEsUUFBSW9ELHFCQUFxQixDQUF6QixFQUE0QjtBQUMxQixVQUFNQyxZQUFZM0QsTUFBTXdELFVBQU4sQ0FBbEI7O0FBRUFGLHlCQUFvQksscUJBQXFCN0QsbUJBQXpDLENBSDBCLENBR3FDO0FBQ2hFO0FBQ0Y7O0FBRUQsU0FBT3dELGdCQUFQO0FBQ0QiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBFcHNpbG9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdGVybWluYWwvZXBzaWxvbicpO1xuXG5jb25zdCB7IGFycmF5IH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0LCBsYXN0IH0gPSBhcnJheTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuICBcbiAgZG9EZWZpbml0aW9uc0V4aXN0KCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbnNFeGlzdCA9IChkZWZpbml0aW9uc0xlbmd0aCA+IDApO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9uc0V4aXN0O1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgc2V0Tm9kZShub2RlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHRoaXMuZGVmaW5pdGlvbnMuY29uY2F0KGRlZmluaXRpb25zKTtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGUgPSBudWxsO1xuXG4gICAgY29uZmlndXJhdGlvbi5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29uZmlndXJhdGlvbi5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHJ1bGUgJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBsZXQgZGVmaW5pdGlvbk5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzb21lRGVmaW5pdGlvblBhcnNlZCA9IHRoaXMuZGVmaW5pdGlvbnMuc29tZShmdW5jdGlvbihkZWZpbml0aW9uKSB7XG4gICAgICBkZWZpbml0aW9uTm9kZXMgPSBkZWZpbml0aW9uLnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb25QYXJzZWQgPSAoZGVmaW5pdGlvbk5vZGVzICE9PSBudWxsKTtcblxuICAgICAgcmV0dXJuIGRlZmluaXRpb25QYXJzZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoc29tZURlZmluaXRpb25QYXJzZWQpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25Ob2Rlc0xlbmd0aCA9IGRlZmluaXRpb25Ob2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgICAgICBub2RlcyA9IGRlZmluaXRpb25Ob2RlcywgIC8vL1xuICAgICAgICAgICAgICBsYXN0Tm9kZU51bGxpZmllZCA9IGlzTGFzdE5vZGVOdWxsaWZpZWQobm9kZXMpO1xuXG4gICAgICAgIGlmIChsYXN0Tm9kZU51bGxpZmllZCkge1xuICAgICAgICAgIHJlbW92ZWRMYXN0Tm9kZUZyb21Ob2Rlcyhub2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0aGlzLk5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZ3VyYXRpb24uZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHRvU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCkge1xuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1SdWxlTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZShmdW5jdGlvbihkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24udG9TdHJpbmcoKTtcbiAgXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBgJHtkZWZpbml0aW9uc1N0cmluZ31cXG5cXG4ke21heGltdW1QYWRkaW5nfSAgICAgfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpLFxuICAgICAgICAgIHN0cmluZyA9IGBcXG5cXG4gICR7dGhpcy5uYW1lfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9IDtgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShDbGFzcywgcnVsZSkge1xuICAgIGlmIChydWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gUnVsZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCkge1xuICBsZXQgcGFkZGluZyA9ICcnO1xuXG4gIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBwYWRkaW5nTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgcGFkZGluZyArPSAnICc7XG4gIH1cblxuICByZXR1cm4gcGFkZGluZztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlZExhc3ROb2RlRnJvbU5vZGVzKG5vZGVzKSB7XG4gIGNvbnN0IHN0YXJ0ID0gLTEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBub2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gaXNMYXN0Tm9kZU51bGxpZmllZChub2Rlcykge1xuICBsZXQgbGF0Tm9kZU51bGxpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhc3ROb2RlID0gbGFzdChub2Rlcyk7XG5cbiAgaWYgKGxhc3ROb2RlIGluc3RhbmNlb2YgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbGFzdE5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKTtcblxuICAgICAgbGF0Tm9kZU51bGxpZmllZCA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uVGVybWluYWxOb2RlKTsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxhdE5vZGVOdWxsaWZpZWQ7XG59XG4iXX0=