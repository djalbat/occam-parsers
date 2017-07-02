'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../util/array'),
    NonTerminalNode = require('../common/node/nonTerminal'),
    EpsilonTerminalNode = require('../common/node/terminal/epsilon');

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
    key: 'isFoundByRuleName',
    value: function isFoundByRuleName(ruleName) {
      var found = this.name === ruleName;

      return found;
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
    value: function parse(context, noWhitespace) {
      var nodeOrNodes = null;

      context.increaseDepth();

      var tooDeep = context.isTooDeep();

      if (tooDeep) {
        throw new Error('The parse tree is too deep at rule \'' + this.name + '\'');
      }

      var definitionNodes = null;

      var someDefinitionParsed = this.definitions.some(function (definition) {
        definitionNodes = definition.parse(context, noWhitespace);

        var definitionParsed = definitionNodes !== null;

        return definitionParsed;
      });

      if (someDefinitionParsed) {
        var definitionNodesLength = definitionNodes.length;

        if (definitionNodesLength > 0) {
          var ruleName = this.name,
              nodes = definitionNodes,
              ///
          lastNode = arrayUtil.last(nodes),
              lastNodeNullified = isNodeNullified(lastNode);

          if (lastNodeNullified) {
            var start = -1,
                deleteCount = 1;

            nodes.splice(start, deleteCount);
          }

          nodeOrNodes = this.Node.fromNodesAndRuleName(nodes, ruleName);
        }
      }

      context.decreaseDepth();

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
    value: function fromRule(rule) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Rule;

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

function isNodeNullified(node) {
  var nullified = false;

  if (node instanceof NonTerminalNode) {
    var nonTerminalNode = node,
        ///
    childNodes = nonTerminalNode.getChildNodes(),
        childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      var childNode = arrayUtil.first(childNodes);

      nullified = childNode instanceof EpsilonTerminalNode; ///
    }
  }

  return nullified;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiRXBzaWxvblRlcm1pbmFsTm9kZSIsIlJ1bGUiLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uc0V4aXN0IiwicnVsZU5hbWUiLCJmb3VuZCIsIm5vZGUiLCJjb25jYXQiLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwibm9kZU9yTm9kZXMiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwiZGVmaW5pdGlvbk5vZGVzIiwic29tZURlZmluaXRpb25QYXJzZWQiLCJzb21lIiwiZGVmaW5pdGlvbiIsInBhcnNlIiwiZGVmaW5pdGlvblBhcnNlZCIsImRlZmluaXRpb25Ob2Rlc0xlbmd0aCIsIm5vZGVzIiwibGFzdE5vZGUiLCJsYXN0IiwibGFzdE5vZGVOdWxsaWZpZWQiLCJpc05vZGVOdWxsaWZpZWQiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZnJvbU5vZGVzQW5kUnVsZU5hbWUiLCJkZWNyZWFzZURlcHRoIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJ0b1N0cmluZyIsInJ1bGVOYW1lTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzdHJpbmciLCJydWxlIiwiQ2xhc3MiLCJnZXROYW1lIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsInBvc2l0aW9uIiwibnVsbGlmaWVkIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVz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QVcsR0FBWDtBQUNEOztBQUVELFNBQU9BLE9BQVA7QUFDRDs7QUFFRCxTQUFTZixlQUFULENBQXlCcEIsSUFBekIsRUFBK0I7QUFDN0IsTUFBSTZDLFlBQVksS0FBaEI7O0FBRUEsTUFBSTdDLGdCQUFnQlgsZUFBcEIsRUFBcUM7QUFDbkMsUUFBTXlELGtCQUFrQjlDLElBQXhCO0FBQUEsUUFBOEI7QUFDMUIrQyxpQkFBYUQsZ0JBQWdCRSxhQUFoQixFQURqQjtBQUFBLFFBRUlDLG1CQUFtQkYsV0FBV25ELE1BRmxDOztBQUlBLFFBQUlxRCxxQkFBcUIsQ0FBekIsRUFBNEI7QUFDMUIsVUFBTUMsWUFBWS9ELFVBQVVnRSxLQUFWLENBQWdCSixVQUFoQixDQUFsQjs7QUFFQUYsa0JBQWFLLHFCQUFxQjVELG1CQUFsQyxDQUgwQixDQUc4QjtBQUN6RDtBQUNGOztBQUVELFNBQU91RCxTQUFQO0FBQ0QiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIEVwc2lsb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90ZXJtaW5hbC9lcHNpbG9uJyk7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXREZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9kZTtcbiAgfVxuICBcbiAgZG9EZWZpbml0aW9uc0V4aXN0KCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbnNFeGlzdCA9IChkZWZpbml0aW9uc0xlbmd0aCA+IDApO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9uc0V4aXN0O1xuICB9XG5cbiAgaXNGb3VuZEJ5UnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICBjb25zdCBmb3VuZCA9ICh0aGlzLm5hbWUgPT09IHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vZGUobm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBhZGREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB0aGlzLmRlZmluaXRpb25zLmNvbmNhdChkZWZpbml0aW9ucyk7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZU9yTm9kZXMgPSBudWxsO1xuXG4gICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHJ1bGUgJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBsZXQgZGVmaW5pdGlvbk5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzb21lRGVmaW5pdGlvblBhcnNlZCA9IHRoaXMuZGVmaW5pdGlvbnMuc29tZShmdW5jdGlvbihkZWZpbml0aW9uKSB7XG4gICAgICBkZWZpbml0aW9uTm9kZXMgPSBkZWZpbml0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb25QYXJzZWQgPSAoZGVmaW5pdGlvbk5vZGVzICE9PSBudWxsKTtcblxuICAgICAgcmV0dXJuIGRlZmluaXRpb25QYXJzZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoc29tZURlZmluaXRpb25QYXJzZWQpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25Ob2Rlc0xlbmd0aCA9IGRlZmluaXRpb25Ob2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgICAgICBub2RlcyA9IGRlZmluaXRpb25Ob2RlcywgIC8vL1xuICAgICAgICAgICAgICBsYXN0Tm9kZSA9IGFycmF5VXRpbC5sYXN0KG5vZGVzKSxcbiAgICAgICAgICAgICAgbGFzdE5vZGVOdWxsaWZpZWQgPSBpc05vZGVOdWxsaWZpZWQobGFzdE5vZGUpO1xuXG4gICAgICAgIGlmIChsYXN0Tm9kZU51bGxpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gLTEsXG4gICAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgICAgbm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlT3JOb2RlcyA9IHRoaXMuTm9kZS5mcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIG5vZGVPck5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSB7XG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi50b1N0cmluZygpO1xuICBcbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uc1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGAke2RlZmluaXRpb25zU3RyaW5nfVxcblxcbiR7bWF4aW11bVBhZGRpbmd9ICAgICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCksXG4gICAgICAgICAgc3RyaW5nID0gYFxcblxcbiAgJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30gO2A7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUsIENsYXNzID0gUnVsZSkge1xuICAgIGNvbnN0IG5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBOb2RlID0gcnVsZS5nZXROb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpIHtcbiAgbGV0IHBhZGRpbmcgPSAnJztcblxuICBmb3IgKGxldCBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgcGFkZGluZ0xlbmd0aDsgcG9zaXRpb24rKykge1xuICAgIHBhZGRpbmcgKz0gJyAnO1xuICB9XG5cbiAgcmV0dXJuIHBhZGRpbmc7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZU51bGxpZmllZChub2RlKSB7XG4gIGxldCBudWxsaWZpZWQgPSBmYWxzZTtcblxuICBpZiAobm9kZSBpbnN0YW5jZW9mIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKTtcblxuICAgICAgbnVsbGlmaWVkID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEVwc2lsb25UZXJtaW5hbE5vZGUpOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbGlmaWVkO1xufVxuIl19