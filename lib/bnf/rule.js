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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXkiLCJmaXJzdCIsImxhc3QiLCJSdWxlIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uc0V4aXN0Iiwibm9kZSIsImNvbmNhdCIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJub25UZXJtaW5hbE5vZGUiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwiZGVmaW5pdGlvbk5vZGVzIiwic29tZURlZmluaXRpb25QYXJzZWQiLCJzb21lIiwiZGVmaW5pdGlvbiIsInBhcnNlIiwiZGVmaW5pdGlvblBhcnNlZCIsImRlZmluaXRpb25Ob2Rlc0xlbmd0aCIsInJ1bGVOYW1lIiwibm9kZXMiLCJmcm9tTm9kZXNBbmRSdWxlTmFtZSIsImRlY3JlYXNlRGVwdGgiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtYXhpbXVtUGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsInRvU3RyaW5nIiwicnVsZU5hbWVMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInN0cmluZyIsIkNsYXNzIiwicnVsZSIsInVuZGVmaW5lZCIsImdldE5hbWUiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFTSxJQUFFQyxLQUFGLEdBQVlGLFNBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDa0JELEtBRGxCLENBQ0VDLEtBREY7QUFB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LGFBQTZDTixpQkFBN0MsT0FkTjs7QUFnQkEsYUFBT08sTUFBUDtBQUNEOzs7NkJBRWVDLEssRUFBT0MsSSxFQUFNO0FBQzNCLFVBQUlBLFNBQVNDLFNBQWIsRUFBd0I7QUFDdEJELGVBQU9ELEtBQVA7QUFDQUEsZ0JBQVF0QyxJQUFSO0FBQ0Q7O0FBRUQsVUFBTUMsT0FBT3NDLEtBQUtFLE9BQUwsRUFBYjtBQUFBLFVBQ012QyxjQUFjcUMsS0FBS0csY0FBTCxFQURwQjtBQUFBLFVBRU12QyxrQkFBa0JvQyxLQUFLSSxrQkFBTCxFQUZ4Qjs7QUFJQUosYUFBTyxJQUFJRCxLQUFKLENBQVVyQyxJQUFWLEVBQWdCQyxXQUFoQixFQUE2QkMsZUFBN0IsQ0FBUDs7QUFFQSxhQUFPb0MsSUFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQjdDLElBQWpCOztBQUVBLFNBQVM2Qix3QkFBVCxDQUFrQ00sYUFBbEMsRUFBaUQ7QUFDL0MsTUFBSUMsVUFBVSxFQUFkOztBQUVBLE9BQUssSUFBSVUsV0FBVyxDQUFwQixFQUF1QkEsV0FBV1gsYUFBbEMsRUFBaURXLFVBQWpELEVBQTZEO0FBQzNEVixlQUFXLEdBQVg7QUFDRDs7QUFFRCxTQUFPQSxPQUFQO0FBQ0QiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXJyYXkgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QsIGxhc3QgfSA9IGFycmF5O1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG4gIFxuICBkb0RlZmluaXRpb25zRXhpc3QoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBkZWZpbml0aW9uc0V4aXN0ID0gKGRlZmluaXRpb25zTGVuZ3RoID4gMCk7XG4gICAgXG4gICAgcmV0dXJuIGRlZmluaXRpb25zRXhpc3Q7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0RGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzZXROb2RlKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gdGhpcy5kZWZpbml0aW9ucy5jb25jYXQoZGVmaW5pdGlvbnMpO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZSA9IG51bGw7XG5cbiAgICBjb25maWd1cmF0aW9uLmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb25maWd1cmF0aW9uLmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSAnJHt0aGlzLm5hbWV9J2ApO1xuICAgIH1cblxuICAgIGxldCBkZWZpbml0aW9uTm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNvbWVEZWZpbml0aW9uUGFyc2VkID0gdGhpcy5kZWZpbml0aW9ucy5zb21lKGZ1bmN0aW9uKGRlZmluaXRpb24pIHtcbiAgICAgIGRlZmluaXRpb25Ob2RlcyA9IGRlZmluaXRpb24ucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgY29uc3QgZGVmaW5pdGlvblBhcnNlZCA9IChkZWZpbml0aW9uTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvblBhcnNlZDtcbiAgICB9KTtcblxuICAgIGlmIChzb21lRGVmaW5pdGlvblBhcnNlZCkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbk5vZGVzTGVuZ3RoID0gZGVmaW5pdGlvbk5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGRlZmluaXRpb25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgIG5vZGVzID0gZGVmaW5pdGlvbk5vZGVzOyAgLy8vXG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWd1cmF0aW9uLmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICB0b1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgpIHtcbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gKGRlZmluaXRpb25zU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cXG5cXG4ke21heGltdW1QYWRkaW5nfSAgICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpLFxuICAgICAgICAgIHN0cmluZyA9IGBcXG5cXG4gICR7dGhpcy5uYW1lfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9IDtgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShDbGFzcywgcnVsZSkge1xuICAgIGlmIChydWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gUnVsZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCkge1xuICBsZXQgcGFkZGluZyA9ICcnO1xuXG4gIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBwYWRkaW5nTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgcGFkZGluZyArPSAnICc7XG4gIH1cblxuICByZXR1cm4gcGFkZGluZztcbn1cbiJdfQ==