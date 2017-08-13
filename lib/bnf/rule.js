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
  function Rule(name, definitions, Node) {
    _classCallCheck(this, Rule);

    this.name = name;
    this.definitions = definitions;
    this.Node = Node;
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
    key: 'getNode',
    value: function getNode() {
      return this.Node;
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
      var nodeOrNodes = null;

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

          nodeOrNodes = this.Node.fromNodesAndRuleName(nodes, ruleName);
        }
      }

      configuration.decreaseDepth();

      return nodeOrNodes;
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
          Node = rule.getNode();

      rule = new Class(name, definitions, Node);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiRXBzaWxvblRlcm1pbmFsTm9kZSIsImFycmF5IiwiZmlyc3QiLCJsYXN0IiwiUnVsZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25zRXhpc3QiLCJub2RlIiwiY29uY2F0IiwiY29uZmlndXJhdGlvbiIsIm5vV2hpdGVzcGFjZSIsIm5vZGVPck5vZGVzIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsImRlZmluaXRpb25Ob2RlcyIsInNvbWVEZWZpbml0aW9uUGFyc2VkIiwic29tZSIsImRlZmluaXRpb24iLCJwYXJzZSIsImRlZmluaXRpb25QYXJzZWQiLCJkZWZpbml0aW9uTm9kZXNMZW5ndGgiLCJydWxlTmFtZSIsIm5vZGVzIiwibGFzdE5vZGVOdWxsaWZpZWQiLCJpc0xhc3ROb2RlTnVsbGlmaWVkIiwicmVtb3ZlZExhc3ROb2RlRnJvbU5vZGVzIiwiZnJvbU5vZGVzQW5kUnVsZU5hbWUiLCJkZWNyZWFzZURlcHRoIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJ0b1N0cmluZyIsInJ1bGVOYW1lTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzdHJpbmciLCJDbGFzcyIsInJ1bGUiLCJ1bmRlZmluZWQiLCJnZXROYW1lIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsInBvc2l0aW9uIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImxhdE5vZGVOdWxsaWZpZWQiLCJsYXN0Tm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0xlbmd0aCIsImNoaWxkTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxrQkFBa0JELFFBQVEsNEJBQVIsQ0FBeEI7QUFBQSxJQUNNRSxzQkFBc0JGLFFBQVEsaUNBQVIsQ0FENUI7O0FBR00sSUFBRUcsS0FBRixHQUFZSixTQUFaLENBQUVJLEtBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ2tCRCxLQURsQixDQUNFQyxLQURGO0FBQUEsSUFDU0MsSUFEVCxHQUNrQkYsS0FEbEIsQ0FDU0UsSUFEVDs7SUFHQUMsSTtBQUNKLGdCQUFZQyxJQUFaLEVBQWtCQyxXQUFsQixFQUErQkMsSUFBL0IsRUFBcUM7QUFBQTs7QUFDbkMsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLQyxXQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7eUNBRW9CO0FBQ25CLFVBQU1DLG9CQUFvQixLQUFLRixXQUFMLENBQWlCRyxNQUEzQztBQUFBLFVBQ01DLG1CQUFvQkYsb0JBQW9CLENBRDlDOztBQUdBLGFBQU9FLGdCQUFQO0FBQ0Q7Ozs0QkFFT0wsSSxFQUFNO0FBQ1osV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7OzttQ0FFY0MsVyxFQUFhO0FBQzFCLFdBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs0QkFFT0ssSSxFQUFNO0FBQ1osV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7OzttQ0FFY0wsVyxFQUFhO0FBQzFCLFdBQUtBLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQk0s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QUFqRCxFQUE2RDtBQUMzRFYsZUFBVyxHQUFYO0FBQ0Q7O0FBRUQsU0FBT0EsT0FBUDtBQUNEOztBQUVELFNBQVNaLHdCQUFULENBQWtDSCxLQUFsQyxFQUF5QztBQUN2QyxNQUFNMEIsUUFBUSxDQUFDLENBQWY7QUFBQSxNQUNNQyxjQUFjLENBRHBCOztBQUdBM0IsUUFBTTRCLE1BQU4sQ0FBYUYsS0FBYixFQUFvQkMsV0FBcEI7QUFDRDs7QUFFRCxTQUFTekIsbUJBQVQsQ0FBNkJGLEtBQTdCLEVBQW9DO0FBQ2xDLE1BQUk2QixtQkFBbUIsS0FBdkI7O0FBRUEsTUFBTUMsV0FBV3ZELEtBQUt5QixLQUFMLENBQWpCOztBQUVBLE1BQUk4QixvQkFBb0IzRCxlQUF4QixFQUF5QztBQUN2QyxRQUFNNEQsa0JBQWtCRCxRQUF4QjtBQUFBLFFBQWtDO0FBQzVCRSxpQkFBYUQsZ0JBQWdCRSxhQUFoQixFQURuQjtBQUFBLFFBRU1DLG1CQUFtQkYsV0FBV25ELE1BRnBDOztBQUlBLFFBQUlxRCxxQkFBcUIsQ0FBekIsRUFBNEI7QUFDMUIsVUFBTUMsWUFBWTdELE1BQU0wRCxVQUFOLENBQWxCOztBQUVBSCx5QkFBb0JNLHFCQUFxQi9ELG1CQUF6QyxDQUgwQixDQUdxQztBQUNoRTtBQUNGOztBQUVELFNBQU95RCxnQkFBUDtBQUNEIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgRXBzaWxvblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsL2Vwc2lsb24nKTtcblxuY29uc3QgeyBhcnJheSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCwgbGFzdCB9ID0gYXJyYXk7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXREZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9kZTtcbiAgfVxuICBcbiAgZG9EZWZpbml0aW9uc0V4aXN0KCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbnNFeGlzdCA9IChkZWZpbml0aW9uc0xlbmd0aCA+IDApO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9uc0V4aXN0O1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgc2V0Tm9kZShub2RlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHRoaXMuZGVmaW5pdGlvbnMuY29uY2F0KGRlZmluaXRpb25zKTtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlT3JOb2RlcyA9IG51bGw7XG5cbiAgICBjb25maWd1cmF0aW9uLmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb25maWd1cmF0aW9uLmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSAnJHt0aGlzLm5hbWV9J2ApO1xuICAgIH1cblxuICAgIGxldCBkZWZpbml0aW9uTm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNvbWVEZWZpbml0aW9uUGFyc2VkID0gdGhpcy5kZWZpbml0aW9ucy5zb21lKGZ1bmN0aW9uKGRlZmluaXRpb24pIHtcbiAgICAgIGRlZmluaXRpb25Ob2RlcyA9IGRlZmluaXRpb24ucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgY29uc3QgZGVmaW5pdGlvblBhcnNlZCA9IChkZWZpbml0aW9uTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvblBhcnNlZDtcbiAgICB9KTtcblxuICAgIGlmIChzb21lRGVmaW5pdGlvblBhcnNlZCkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbk5vZGVzTGVuZ3RoID0gZGVmaW5pdGlvbk5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGRlZmluaXRpb25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgIG5vZGVzID0gZGVmaW5pdGlvbk5vZGVzLCAgLy8vXG4gICAgICAgICAgICAgIGxhc3ROb2RlTnVsbGlmaWVkID0gaXNMYXN0Tm9kZU51bGxpZmllZChub2Rlcyk7XG5cbiAgICAgICAgaWYgKGxhc3ROb2RlTnVsbGlmaWVkKSB7XG4gICAgICAgICAgcmVtb3ZlZExhc3ROb2RlRnJvbU5vZGVzKG5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGVPck5vZGVzID0gdGhpcy5Ob2RlLmZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZmlndXJhdGlvbi5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gbm9kZU9yTm9kZXM7XG4gIH1cblxuICB0b1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgpIHtcbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLnRvU3RyaW5nKCk7XG4gIFxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XFxuXFxuJHttYXhpbXVtUGFkZGluZ30gICAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgXFxuXFxuICAke3RoaXMubmFtZX0ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSA7YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUoQ2xhc3MsIHJ1bGUpIHtcbiAgICBpZiAocnVsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFJ1bGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBOb2RlID0gcnVsZS5nZXROb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpIHtcbiAgbGV0IHBhZGRpbmcgPSAnJztcblxuICBmb3IgKGxldCBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgcGFkZGluZ0xlbmd0aDsgcG9zaXRpb24rKykge1xuICAgIHBhZGRpbmcgKz0gJyAnO1xuICB9XG5cbiAgcmV0dXJuIHBhZGRpbmc7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZWRMYXN0Tm9kZUZyb21Ob2Rlcyhub2Rlcykge1xuICBjb25zdCBzdGFydCA9IC0xLFxuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgbm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG59XG5cbmZ1bmN0aW9uIGlzTGFzdE5vZGVOdWxsaWZpZWQobm9kZXMpIHtcbiAgbGV0IGxhdE5vZGVOdWxsaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBsYXN0Tm9kZSA9IGxhc3Qobm9kZXMpO1xuXG4gIGlmIChsYXN0Tm9kZSBpbnN0YW5jZW9mIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGxhc3ROb2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2Rlcyk7XG5cbiAgICAgIGxhdE5vZGVOdWxsaWZpZWQgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgRXBzaWxvblRlcm1pbmFsTm9kZSk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsYXROb2RlTnVsbGlmaWVkO1xufVxuIl19