'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    NonTerminalNode = require('./node/nonTerminal');

var Production = function () {
  function Production(name, rules, Node) {
    _classCallCheck(this, Production);

    this.name = name;
    this.rules = rules;
    this.Node = Node;
  }

  _createClass(Production, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'getNode',
    value: function getNode() {
      return this.Node;
    }
  }, {
    key: 'isLeftRecursive',
    value: function isLeftRecursive() {
      var leftRecursiveRules = this.getLeftRecursiveRules(),
          leftRecursiveRulesLength = leftRecursiveRules.length,
          leftRecursive = leftRecursiveRulesLength > 0;

      return leftRecursive;
    }
  }, {
    key: 'isImplicitlyLeftRecursive',
    value: function isImplicitlyLeftRecursive(previousProductions) {
      var implicitlyLeftRecursive = this.rules.some(function (rule) {
        var implicitlyLeftRecursive = rule.isImplicitlyLeftRecursive(previousProductions);

        return implicitlyLeftRecursive;
      });

      return implicitlyLeftRecursive;
    }
  }, {
    key: 'getLeftRecursiveRules',
    value: function getLeftRecursiveRules() {
      var productionName = this.name,
          ///
      leftRecursiveRules = this.rules.filter(function (rule) {
        var ruleLeftRecursive = rule.isLeftRecursive(productionName);

        return ruleLeftRecursive;
      });

      return leftRecursiveRules;
    }
  }, {
    key: 'getNonLeftRecursiveRules',
    value: function getNonLeftRecursiveRules() {
      var productionName = this.name,
          ///
      leftNonRecursiveRules = this.rules.filter(function (rule) {
        var ruleLeftRecursive = rule.isLeftRecursive(productionName),
            ruleNonLeftRecursive = !ruleLeftRecursive;

        return ruleNonLeftRecursive;
      });

      return leftNonRecursiveRules;
    }
  }, {
    key: 'toString',
    value: function toString(maximumProductionNameLength) {
      var rulesString = this.rules.reduce(function (rulesString, rule) {
        var ruleString = rule.toString();

        if (rulesString === null) {
          rulesString = ruleString;
        } else {
          rulesString = rulesString + ' | ' + ruleString;
        }

        return rulesString;
      }, null),
          productionNameLength = this.name.length,
          ///
      paddingLength = maximumProductionNameLength - productionNameLength,
          padding = paddingFromPaddingLength(paddingLength),
          string = '\n  ' + this.name + padding + ' ::= ' + rulesString + '\n';

      return string;
    }
  }, {
    key: 'parse',
    value: function parse(context, noWhitespace) {
      var nodeOrNodes = null;

      context.increaseDepth();

      var tooDeep = context.isTooDeep();

      if (tooDeep) {
        throw new Error('The parse tree is too deep at production \'' + this.name + '\'');
      }

      var ruleNodes = null;

      var someRuleParsed = this.rules.some(function (rule) {
        ruleNodes = rule.parse(context, noWhitespace);

        var ruleParsed = ruleNodes !== null;

        return ruleParsed;
      });

      if (someRuleParsed) {
        var ruleNodesLength = ruleNodes.length;

        if (ruleNodesLength > 0) {
          var nodes = ruleNodes,
              ///
          productionName = this.name; ///

          nodeOrNodes = this.Node.fromNodesAndProductionName(nodes, productionName); ///
        }
      }

      context.decreaseDepth();

      return nodeOrNodes;
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line, significantTokenTypes, mappings) {
      var name = line.getName(),
          rules = line.mapSymbolSequences(function (symbolSequence) {
        var rule = Rule.fromSymbolSequence(symbolSequence, significantTokenTypes);

        return rule;
      }),
          Node = mappings.hasOwnProperty(name) ? mappings[name] : NonTerminalNode,
          ///
      production = new Production(name, rules, Node);

      return production;
    }
  }]);

  return Production;
}();

module.exports = Production;

function paddingFromPaddingLength(paddingLength) {
  var padding = '';

  for (var position = 0; position < paddingLength; position++) {
    padding += ' ';
  }

  return padding;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVzIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwibGVmdFJlY3Vyc2l2ZSIsInByZXZpb3VzUHJvZHVjdGlvbnMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSIsInNvbWUiLCJydWxlIiwiaXNJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSIsInByb2R1Y3Rpb25OYW1lIiwiZmlsdGVyIiwicnVsZUxlZnRSZWN1cnNpdmUiLCJpc0xlZnRSZWN1cnNpdmUiLCJsZWZ0Tm9uUmVjdXJzaXZlUnVsZXMiLCJydWxlTm9uTGVmdFJlY3Vyc2l2ZSIsIm1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCIsInJ1bGVzU3RyaW5nIiwicmVkdWNlIiwicnVsZVN0cmluZyIsInRvU3RyaW5nIiwicHJvZHVjdGlvbk5hbWVMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsInN0cmluZyIsImNvbnRleHQiLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJydWxlTm9kZXMiLCJzb21lUnVsZVBhcnNlZCIsInBhcnNlIiwicnVsZVBhcnNlZCIsInJ1bGVOb2Rlc0xlbmd0aCIsIm5vZGVzIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJkZWNyZWFzZURlcHRoIiwibGluZSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwiZ2V0TmFtZSIsIm1hcFN5bWJvbFNlcXVlbmNlcyIsInN5bWJvbFNlcXVlbmNlIiwiZnJvbVN5bWJvbFNlcXVlbmNlIiwiaGFzT3duUHJvcGVydHkiLCJwcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsb0JBQVIsQ0FEeEI7O0lBR01FLFU7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNQyxxQkFBcUIsS0FBS0MscUJBQUwsRUFBM0I7QUFBQSxVQUNNQywyQkFBMkJGLG1CQUFtQkcsTUFEcEQ7QUFBQSxVQUVNQyxnQkFBaUJGLDJCQUEyQixDQUZsRDs7QUFJQSxhQUFPRSxhQUFQO0FBQ0Q7Ozs4Q0FFeUJDLG1CLEVBQXFCO0FBQzdDLFVBQU1DLDBCQUEwQixLQUFLUixLQUFMLENBQVdTLElBQVgsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFlO0FBQzdELFlBQU1GLDBCQUEwQkUsS0FBS0MseUJBQUwsQ0FBK0JKLG1CQUEvQixDQUFoQzs7QUFFQSxlQUFPQyx1QkFBUDtBQUNELE9BSitCLENBQWhDOztBQU1BLGFBQU9BLHVCQUFQO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsVUFBTUksaUJBQWlCLEtBQUtiLElBQTVCO0FBQUEsVUFBa0M7QUFDNUJHLDJCQUFxQixLQUFLRixLQUFMLENBQVdhLE1BQVgsQ0FBa0IsVUFBU0gsSUFBVCxFQUFlO0FBQ3BELFlBQU1JLG9CQUFvQkosS0FBS0ssZUFBTCxDQUFxQkgsY0FBckIsQ0FB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ckQsVUFBSixDQUFlQyxJQUFmLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUIsQ0FUbkI7O0FBV0EsYUFBT2tELFVBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJ2RCxVQUFqQjs7QUFFQSxTQUFTNEIsd0JBQVQsQ0FBa0NGLGFBQWxDLEVBQWlEO0FBQy9DLE1BQUlDLFVBQVUsRUFBZDs7QUFFQSxPQUFLLElBQUk2QixXQUFXLENBQXBCLEVBQXVCQSxXQUFXOUIsYUFBbEMsRUFBaUQ4QixVQUFqRCxFQUE2RDtBQUMzRDdCLGVBQVcsR0FBWDtBQUNEOztBQUVELFNBQU9BLE9BQVA7QUFDRCIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHJ1bGVzLCBOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5Ob2RlID0gTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBcbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cbiAgXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9kZTtcbiAgfVxuICBcbiAgaXNMZWZ0UmVjdXJzaXZlKCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlcyA9IHRoaXMuZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVzKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVzLmxlbmd0aCxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlID0gKGxlZnRSZWN1cnNpdmVSdWxlc0xlbmd0aCA+IDApO1xuICAgIFxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlO1xuICB9XG4gIFxuICBpc0ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlKHByZXZpb3VzUHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IHJ1bGUuaXNJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZShwcmV2aW91c1Byb2R1Y3Rpb25zKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZTtcbiAgfVxuICBcbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVzKCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZXMgPSB0aGlzLnJ1bGVzLmZpbHRlcihmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTGVmdFJlY3Vyc2l2ZSA9IHJ1bGUuaXNMZWZ0UmVjdXJzaXZlKHByb2R1Y3Rpb25OYW1lKTtcbiAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVMZWZ0UmVjdXJzaXZlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlcztcbiAgfVxuXG4gIGdldE5vbkxlZnRSZWN1cnNpdmVSdWxlcygpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgbGVmdE5vblJlY3Vyc2l2ZVJ1bGVzID0gdGhpcy5ydWxlcy5maWx0ZXIoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZUxlZnRSZWN1cnNpdmUgPSBydWxlLmlzTGVmdFJlY3Vyc2l2ZShwcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgICAgICAgICBydWxlTm9uTGVmdFJlY3Vyc2l2ZSA9ICFydWxlTGVmdFJlY3Vyc2l2ZTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZU5vbkxlZnRSZWN1cnNpdmU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbGVmdE5vblJlY3Vyc2l2ZVJ1bGVzO1xuICB9XG4gIFxuICB0b1N0cmluZyhtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGgpIHtcbiAgICBjb25zdCBydWxlc1N0cmluZyA9IHRoaXMucnVsZXMucmVkdWNlKGZ1bmN0aW9uKHJ1bGVzU3RyaW5nLCBydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS50b1N0cmluZygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocnVsZXNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlU3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBgJHtydWxlc1N0cmluZ30gfCAke3J1bGVTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lTGVuZ3RoID0gdGhpcy5uYW1lLmxlbmd0aCwgIC8vL1xuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGggLSBwcm9kdWN0aW9uTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpLFxuICAgICAgICAgIHN0cmluZyA9IGBcXG4gICR7dGhpcy5uYW1lfSR7cGFkZGluZ30gOjo9ICR7cnVsZXNTdHJpbmd9XFxuYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZU9yTm9kZXMgPSBudWxsO1xuXG4gICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHByb2R1Y3Rpb24gJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBsZXQgcnVsZU5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzb21lUnVsZVBhcnNlZCA9IHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICBydWxlTm9kZXMgPSBydWxlLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgY29uc3QgcnVsZVBhcnNlZCA9IChydWxlTm9kZXMgIT09IG51bGwpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBydWxlUGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHNvbWVSdWxlUGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTm9kZXNMZW5ndGggPSBydWxlTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAocnVsZU5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBub2RlcyA9IHJ1bGVOb2RlcywgIC8vL1xuICAgICAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZTsgLy8vXG5cbiAgICAgICAgbm9kZU9yTm9kZXMgPSB0aGlzLk5vZGUuZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKTsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIG5vZGVPck5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpIHtcbiAgICBjb25zdCBuYW1lID0gbGluZS5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZXMgPSBsaW5lLm1hcFN5bWJvbFNlcXVlbmNlcyhmdW5jdGlvbihzeW1ib2xTZXF1ZW5jZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCBzaWduaWZpY2FudFRva2VuVHlwZXMpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIE5vZGUgPSBtYXBwaW5ncy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgbWFwcGluZ3NbbmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuXG5mdW5jdGlvbiBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCkge1xuICBsZXQgcGFkZGluZyA9ICcnO1xuICBcbiAgZm9yICh2YXIgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IHBhZGRpbmdMZW5ndGg7IHBvc2l0aW9uKyspIHtcbiAgICBwYWRkaW5nICs9ICcgJztcbiAgfVxuICBcbiAgcmV0dXJuIHBhZGRpbmc7XG59XG4iXX0=