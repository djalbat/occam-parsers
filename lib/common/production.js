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
    key: 'isFoundByProductionName',
    value: function isFoundByProductionName(productionName) {
      var found = this.name === productionName;

      return found;
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
    key: 'concatRules',
    value: function concatRules(rules) {
      this.rules = this.rules.concat(rules);
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
  }, {
    key: 'fromProduction',
    value: function fromProduction(production) {
      var name = production.getName(),
          rules = production.getRules(),
          Node = production.getNode();

      production = new Production(name, rules, Node); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJmb3VuZCIsImxlZnRSZWN1cnNpdmVSdWxlcyIsImdldExlZnRSZWN1cnNpdmVSdWxlcyIsImxlZnRSZWN1cnNpdmVSdWxlc0xlbmd0aCIsImxlbmd0aCIsImxlZnRSZWN1cnNpdmUiLCJwcmV2aW91c1Byb2R1Y3Rpb25zIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmUiLCJzb21lIiwicnVsZSIsImlzSW1wbGljaXRseUxlZnRSZWN1cnNpdmUiLCJmaWx0ZXIiLCJydWxlTGVmdFJlY3Vyc2l2ZSIsImlzTGVmdFJlY3Vyc2l2ZSIsImxlZnROb25SZWN1cnNpdmVSdWxlcyIsInJ1bGVOb25MZWZ0UmVjdXJzaXZlIiwiY29uY2F0IiwibWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoIiwicnVsZXNTdHJpbmciLCJyZWR1Y2UiLCJydWxlU3RyaW5nIiwidG9TdHJpbmciLCJwcm9kdWN0aW9uTmFtZUxlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwic3RyaW5nIiwiY29udGV4dCIsIm5vV2hpdGVzcGFjZSIsIm5vZGVPck5vZGVzIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsInJ1bGVOb2RlcyIsInNvbWVSdWxlUGFyc2VkIiwicGFyc2UiLCJydWxlUGFyc2VkIiwicnVsZU5vZGVzTGVuZ3RoIiwibm9kZXMiLCJmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZSIsImRlY3JlYXNlRGVwdGgiLCJsaW5lIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwibWFwcGluZ3MiLCJnZXROYW1lIiwibWFwU3ltYm9sU2VxdWVuY2VzIiwic3ltYm9sU2VxdWVuY2UiLCJmcm9tU3ltYm9sU2VxdWVuY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInByb2R1Y3Rpb24iLCJnZXRSdWxlcyIsImdldE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxvQkFBUixDQUR4Qjs7SUFHTUUsVTtBQUNKLHNCQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsSUFBekIsRUFBK0I7QUFBQTs7QUFDN0IsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtGLElBQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7NENBRXVCQyxjLEVBQWdCO0FBQ3RDLFVBQU1DLFFBQVMsS0FBS0osSUFBTCxLQUFjRyxjQUE3Qjs7QUFFQSxhQUFPQyxLQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBTUMscUJBQXFCLEtBQUtDLHFCQUFMLEVBQTNCO0FBQUEsVUFDTUMsMkJBQTJCRixtQkFBbUJHLE1BRHBEO0FBQUEsVUFFTUMsZ0JBQWlCRiwyQkFBMkIsQ0FGbEQ7O0FBSUEsYUFBT0UsYUFBUDtBQUNEOzs7OENBRXlCQyxtQixFQUFxQjtBQUM3QyxVQUFNQywwQkFBMEIsS0FBS1YsS0FBTCxDQUFXVyxJQUFYLENBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUM3RCxZQUFNRiwwQkFBMEJFLEtBQUtDLHlCQUFMLENBQStCSixtQkFBL0IsQ0FBaEM7O0FBRUEsZUFBT0MsdUJBQVA7QUFDRCxPQUorQixDQUFoQzs7QUFNQSxhQUFPQSx1QkFBUDtBQUNEOzs7NENBRXVCO0FBQ3RCLFVBQU1SLGlCQUFpQixLQUFLSCxJQUE1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O0FBQ3ZELFlBQU10QyxPQUFPakIsS0FBS3dELGtCQUFMLENBQXdCRCxjQUF4QixFQUF3Q0oscUJBQXhDLENBQWI7O0FBRUEsZUFBT2xDLElBQVA7QUFDRCxPQUpPLENBRGQ7QUFBQSxVQU1NWCxPQUFPOEMsU0FBU0ssY0FBVCxDQUF3QnJELElBQXhCLElBQ0VnRCxTQUFTaEQsSUFBVCxDQURGLEdBRUlGLGVBUmpCO0FBQUEsVUFRa0M7QUFDNUJ3RCxtQkFBYSxJQUFJdkQsVUFBSixDQUFlQyxJQUFmLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUIsQ0FUbkI7O0FBV0EsYUFBT29ELFVBQVA7QUFDRDs7O21DQUVxQkEsVSxFQUFZO0FBQ2hDLFVBQU10RCxPQUFPc0QsV0FBV0wsT0FBWCxFQUFiO0FBQUEsVUFDTWhELFFBQVFxRCxXQUFXQyxRQUFYLEVBRGQ7QUFBQSxVQUVNckQsT0FBT29ELFdBQVdFLE9BQVgsRUFGYjs7QUFJQUYsbUJBQWEsSUFBSXZELFVBQUosQ0FBZUMsSUFBZixFQUFxQkMsS0FBckIsRUFBNEJDLElBQTVCLENBQWIsQ0FMZ0MsQ0FLZ0I7O0FBRWhELGFBQU9vRCxVQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCM0QsVUFBakI7O0FBRUEsU0FBUzhCLHdCQUFULENBQWtDRixhQUFsQyxFQUFpRDtBQUMvQyxNQUFJQyxVQUFVLEVBQWQ7O0FBRUEsT0FBSyxJQUFJK0IsV0FBVyxDQUFwQixFQUF1QkEsV0FBV2hDLGFBQWxDLEVBQWlEZ0MsVUFBakQsRUFBNkQ7QUFDM0QvQixlQUFXLEdBQVg7QUFDRDs7QUFFRCxTQUFPQSxPQUFQO0FBQ0QiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBydWxlcywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG4gIFxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vZGU7XG4gIH1cblxuICBpc0ZvdW5kQnlQcm9kdWN0aW9uTmFtZShwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGZvdW5kID0gKHRoaXMubmFtZSA9PT0gcHJvZHVjdGlvbk5hbWUpO1xuICAgIFxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuICBcbiAgaXNMZWZ0UmVjdXJzaXZlKCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlcyA9IHRoaXMuZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVzKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVzLmxlbmd0aCxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlID0gKGxlZnRSZWN1cnNpdmVSdWxlc0xlbmd0aCA+IDApO1xuICAgIFxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlO1xuICB9XG4gIFxuICBpc0ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlKHByZXZpb3VzUHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IHJ1bGUuaXNJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZShwcmV2aW91c1Byb2R1Y3Rpb25zKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZTtcbiAgfVxuICBcbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVzKCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZXMgPSB0aGlzLnJ1bGVzLmZpbHRlcihmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTGVmdFJlY3Vyc2l2ZSA9IHJ1bGUuaXNMZWZ0UmVjdXJzaXZlKHByb2R1Y3Rpb25OYW1lKTtcbiAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVMZWZ0UmVjdXJzaXZlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlcztcbiAgfVxuXG4gIGdldE5vbkxlZnRSZWN1cnNpdmVSdWxlcygpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgbGVmdE5vblJlY3Vyc2l2ZVJ1bGVzID0gdGhpcy5ydWxlcy5maWx0ZXIoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZUxlZnRSZWN1cnNpdmUgPSBydWxlLmlzTGVmdFJlY3Vyc2l2ZShwcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgICAgICAgICBydWxlTm9uTGVmdFJlY3Vyc2l2ZSA9ICFydWxlTGVmdFJlY3Vyc2l2ZTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZU5vbkxlZnRSZWN1cnNpdmU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbGVmdE5vblJlY3Vyc2l2ZVJ1bGVzO1xuICB9XG4gIFxuICBjb25jYXRSdWxlcyhydWxlcykge1xuICAgIHRoaXMucnVsZXMgPSB0aGlzLnJ1bGVzLmNvbmNhdChydWxlcyk7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCkge1xuICAgIGNvbnN0IHJ1bGVzU3RyaW5nID0gdGhpcy5ydWxlcy5yZWR1Y2UoZnVuY3Rpb24ocnVsZXNTdHJpbmcsIHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChydWxlc1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBydWxlc1N0cmluZyA9IGAke3J1bGVzU3RyaW5nfSB8ICR7cnVsZVN0cmluZ31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZXNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVMZW5ndGggPSB0aGlzLm5hbWUubGVuZ3RoLCAgLy8vXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCAtIHByb2R1Y3Rpb25OYW1lTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCksXG4gICAgICAgICAgc3RyaW5nID0gYFxcbiAgJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtydWxlc1N0cmluZ31cXG5gO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlT3JOb2RlcyA9IG51bGw7XG5cbiAgICBjb250ZXh0LmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcHJvZHVjdGlvbiAnJHt0aGlzLm5hbWV9J2ApO1xuICAgIH1cblxuICAgIGxldCBydWxlTm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNvbWVSdWxlUGFyc2VkID0gdGhpcy5ydWxlcy5zb21lKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgIHJ1bGVOb2RlcyA9IHJ1bGUucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcbiAgXG4gICAgICAgICAgICBjb25zdCBydWxlUGFyc2VkID0gKHJ1bGVOb2RlcyAhPT0gbnVsbCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVQYXJzZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoc29tZVJ1bGVQYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOb2Rlc0xlbmd0aCA9IHJ1bGVOb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChydWxlTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gcnVsZU5vZGVzLCAgLy8vXG4gICAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lOyAvLy9cblxuICAgICAgICBub2RlT3JOb2RlcyA9IHRoaXMuTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gbm9kZU9yTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmUobGluZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncykge1xuICAgIGNvbnN0IG5hbWUgPSBsaW5lLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlcyA9IGxpbmUubWFwU3ltYm9sU2VxdWVuY2VzKGZ1bmN0aW9uKHN5bWJvbFNlcXVlbmNlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gUnVsZS5mcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHNpZ25pZmljYW50VG9rZW5UeXBlcyk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgTm9kZSA9IG1hcHBpbmdzLmhhc093blByb3BlcnR5KG5hbWUpID9cbiAgICAgICAgICAgICAgICAgICBtYXBwaW5nc1tuYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICBOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBuYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZXMgPSBwcm9kdWN0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgICAgTm9kZSA9IHByb2R1Y3Rpb24uZ2V0Tm9kZSgpO1xuICAgIFxuICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7IC8vL1xuICAgIFxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpIHtcbiAgbGV0IHBhZGRpbmcgPSAnJztcbiAgXG4gIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBwYWRkaW5nTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgcGFkZGluZyArPSAnICc7XG4gIH1cbiAgXG4gIHJldHVybiBwYWRkaW5nO1xufVxuIl19