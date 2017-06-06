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
    key: 'getRule',
    value: function getRule() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVzIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwibGVmdFJlY3Vyc2l2ZSIsInByb2R1Y3Rpb25OYW1lIiwiZmlsdGVyIiwicnVsZSIsInJ1bGVMZWZ0UmVjdXJzaXZlIiwiaXNMZWZ0UmVjdXJzaXZlIiwibGVmdE5vblJlY3Vyc2l2ZVJ1bGVzIiwicnVsZU5vbkxlZnRSZWN1cnNpdmUiLCJtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGgiLCJydWxlc1N0cmluZyIsInJlZHVjZSIsInJ1bGVTdHJpbmciLCJ0b1N0cmluZyIsInByb2R1Y3Rpb25OYW1lTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJzdHJpbmciLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwibm9kZU9yTm9kZXMiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwicnVsZU5vZGVzIiwic29tZVJ1bGVQYXJzZWQiLCJzb21lIiwicGFyc2UiLCJydWxlUGFyc2VkIiwicnVsZU5vZGVzTGVuZ3RoIiwibm9kZXMiLCJmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZSIsImRlY3JlYXNlRGVwdGgiLCJsaW5lIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwibWFwcGluZ3MiLCJnZXROYW1lIiwibWFwU3ltYm9sU2VxdWVuY2VzIiwic3ltYm9sU2VxdWVuY2UiLCJmcm9tU3ltYm9sU2VxdWVuY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwicG9zaXRpb24iXSwi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QU9BLE9BQVA7QUFDRCIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHJ1bGVzLCBOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5Ob2RlID0gTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBcbiAgZ2V0UnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuICBcbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5Ob2RlO1xuICB9XG4gIFxuICBpc0xlZnRSZWN1cnNpdmUoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZXMoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZXMubGVuZ3RoLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVzTGVuZ3RoID4gMCk7XG4gICAgXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmU7XG4gIH1cbiAgXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlcygpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVzID0gdGhpcy5ydWxlcy5maWx0ZXIoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZUxlZnRSZWN1cnNpdmUgPSBydWxlLmlzTGVmdFJlY3Vyc2l2ZShwcm9kdWN0aW9uTmFtZSk7XG4gICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlTGVmdFJlY3Vyc2l2ZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZXM7XG4gIH1cblxuICBnZXROb25MZWZ0UmVjdXJzaXZlUnVsZXMoKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIGxlZnROb25SZWN1cnNpdmVSdWxlcyA9IHRoaXMucnVsZXMuZmlsdGVyKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVMZWZ0UmVjdXJzaXZlID0gcnVsZS5pc0xlZnRSZWN1cnNpdmUocHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgICAgICAgICAgcnVsZU5vbkxlZnRSZWN1cnNpdmUgPSAhcnVsZUxlZnRSZWN1cnNpdmU7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVOb25MZWZ0UmVjdXJzaXZlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGxlZnROb25SZWN1cnNpdmVSdWxlcztcbiAgfVxuICBcbiAgdG9TdHJpbmcobWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoKSB7XG4gICAgY29uc3QgcnVsZXNTdHJpbmcgPSB0aGlzLnJ1bGVzLnJlZHVjZShmdW5jdGlvbihydWxlc1N0cmluZywgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHJ1bGVzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZVN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJ1bGVzU3RyaW5nID0gYCR7cnVsZXNTdHJpbmd9IHwgJHtydWxlU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlc1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZUxlbmd0aCA9IHRoaXMubmFtZS5sZW5ndGgsICAvLy9cbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoIC0gcHJvZHVjdGlvbk5hbWVMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgXFxuICAke3RoaXMubmFtZX0ke3BhZGRpbmd9IDo6PSAke3J1bGVzU3RyaW5nfVxcbmA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcblxuICAgIGNvbnRleHQuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IGNvbnRleHQuaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcCBhdCBwcm9kdWN0aW9uICcke3RoaXMubmFtZX0nYCk7XG4gICAgfVxuXG4gICAgbGV0IHJ1bGVOb2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc29tZVJ1bGVQYXJzZWQgPSB0aGlzLnJ1bGVzLnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgcnVsZU5vZGVzID0gcnVsZS5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuICBcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVQYXJzZWQgPSAocnVsZU5vZGVzICE9PSBudWxsKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZVBhcnNlZDtcbiAgICAgICAgICB9KTtcblxuICAgIGlmIChzb21lUnVsZVBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5vZGVzTGVuZ3RoID0gcnVsZU5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHJ1bGVOb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBydWxlTm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgICAgIG5vZGVPck5vZGVzID0gdGhpcy5Ob2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlT3JOb2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZShsaW5lLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSB7XG4gICAgY29uc3QgbmFtZSA9IGxpbmUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVzID0gbGluZS5tYXBTeW1ib2xTZXF1ZW5jZXMoZnVuY3Rpb24oc3ltYm9sU2VxdWVuY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBOb2RlID0gbWFwcGluZ3MuaGFzT3duUHJvcGVydHkobmFtZSkgP1xuICAgICAgICAgICAgICAgICAgIG1hcHBpbmdzW25hbWVdIDpcbiAgICAgICAgICAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpIHtcbiAgbGV0IHBhZGRpbmcgPSAnJztcbiAgXG4gIGZvciAodmFyIHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBwYWRkaW5nTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgcGFkZGluZyArPSAnICc7XG4gIH1cbiAgXG4gIHJldHVybiBwYWRkaW5nO1xufVxuIl19