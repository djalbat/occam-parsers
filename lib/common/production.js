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
    key: 'setName',
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: 'setRules',
    value: function setRules(rules) {
      this.rules = rules;
    }
  }, {
    key: 'setNode',
    value: function setNode(node) {
      this.node = node;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJmb3VuZCIsIm5vZGUiLCJsZWZ0UmVjdXJzaXZlUnVsZXMiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJsZWZ0UmVjdXJzaXZlIiwicHJldmlvdXNQcm9kdWN0aW9ucyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlIiwic29tZSIsInJ1bGUiLCJpc0ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlIiwiZmlsdGVyIiwicnVsZUxlZnRSZWN1cnNpdmUiLCJpc0xlZnRSZWN1cnNpdmUiLCJsZWZ0Tm9uUmVjdXJzaXZlUnVsZXMiLCJydWxlTm9uTGVmdFJlY3Vyc2l2ZSIsImNvbmNhdCIsIm1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCIsInJ1bGVzU3RyaW5nIiwicmVkdWNlIiwicnVsZVN0cmluZyIsInRvU3RyaW5nIiwicHJvZHVjdGlvbk5hbWVMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsInN0cmluZyIsImNvbnRleHQiLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJydWxlTm9kZXMiLCJzb21lUnVsZVBhcnNlZCIsInBhcnNlIiwicnVsZVBhcnNlZCIsInJ1bGVOb2Rlc0xlbmd0aCIsIm5vZGVzIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJkZWNyZWFzZURlcHRoIiwibGluZSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwiZ2V0TmFtZSIsIm1hcFN5bWJvbFNlcXVlbmNlcyIsInN5bWJvbFNlcXVlbmNlIiwiZnJvbVN5bWJvbFNlcXVlbmNlIiwiaGFzT3duUHJvcGVydHkiLCJwcm9kdWN0aW9uIiwiZ2V0UnVsZXMiLCJnZXROb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsb0JBQVIsQ0FEeEI7O0lBR01FLFU7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzRDQUV1QkMsYyxFQUFnQjtBQUN0QyxVQUFNQyxRQUFTLEtBQUtKLElBQUwsS0FBY0csY0FBN0I7O0FBRUEsYUFBT0MsS0FBUDtBQUNEOzs7NEJBRU9KLEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7NkJBRVFDLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7NEJBRU9JLEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQU1DLHFCQUFxQixLQUFLQyxxQkFBTCxFQUEzQjtBQUFBLFVBQ01DLDJCQUEyQkYsbUJBQW1CRyxNQURwRDtBQUFBLFVBRU1DLGdCQUFpQkYsMkJBQTJCLENBRmxEOztBQUlBLGFBQU9FLGFBQVA7QUFDRDs7OzhDQUV5QkMsbUIsRUFBcUI7QUFDN0MsVUFBTUMsMEJBQTBCLEtBQUtYLEtBQUwsQ0FBV1ksSUFBWCxDQUFnQixVQUFTQyxJQUFULEVB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Q29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcnVsZXMsIE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLk5vZGUgPSBOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuICBcbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5Ob2RlO1xuICB9XG5cbiAgaXNGb3VuZEJ5UHJvZHVjdGlvbk5hbWUocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBmb3VuZCA9ICh0aGlzLm5hbWUgPT09IHByb2R1Y3Rpb25OYW1lKTtcbiAgICBcbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cbiAgXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbiAgXG4gIHNldFJ1bGVzKHJ1bGVzKSB7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICB9XG4gIFxuICBzZXROb2RlKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG4gIFxuICBpc0xlZnRSZWN1cnNpdmUoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZXMoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZXMubGVuZ3RoLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVzTGVuZ3RoID4gMCk7XG4gICAgXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmU7XG4gIH1cbiAgXG4gIGlzSW1wbGljaXRseUxlZnRSZWN1cnNpdmUocHJldmlvdXNQcm9kdWN0aW9ucykge1xuICAgIGNvbnN0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlID0gdGhpcy5ydWxlcy5zb21lKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgIGNvbnN0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlID0gcnVsZS5pc0ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlKHByZXZpb3VzUHJvZHVjdGlvbnMpO1xuICAgICAgXG4gICAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmU7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlO1xuICB9XG4gIFxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZXMoKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlcyA9IHRoaXMucnVsZXMuZmlsdGVyKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVMZWZ0UmVjdXJzaXZlID0gcnVsZS5pc0xlZnRSZWN1cnNpdmUocHJvZHVjdGlvbk5hbWUpO1xuICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZUxlZnRSZWN1cnNpdmU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVzO1xuICB9XG5cbiAgZ2V0Tm9uTGVmdFJlY3Vyc2l2ZVJ1bGVzKCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBsZWZ0Tm9uUmVjdXJzaXZlUnVsZXMgPSB0aGlzLnJ1bGVzLmZpbHRlcihmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTGVmdFJlY3Vyc2l2ZSA9IHJ1bGUuaXNMZWZ0UmVjdXJzaXZlKHByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVOb25MZWZ0UmVjdXJzaXZlID0gIXJ1bGVMZWZ0UmVjdXJzaXZlO1xuICBcbiAgICAgICAgICAgIHJldHVybiBydWxlTm9uTGVmdFJlY3Vyc2l2ZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsZWZ0Tm9uUmVjdXJzaXZlUnVsZXM7XG4gIH1cbiAgXG4gIGNvbmNhdFJ1bGVzKHJ1bGVzKSB7XG4gICAgdGhpcy5ydWxlcyA9IHRoaXMucnVsZXMuY29uY2F0KHJ1bGVzKTtcbiAgfVxuICBcbiAgdG9TdHJpbmcobWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoKSB7XG4gICAgY29uc3QgcnVsZXNTdHJpbmcgPSB0aGlzLnJ1bGVzLnJlZHVjZShmdW5jdGlvbihydWxlc1N0cmluZywgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHJ1bGVzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZVN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJ1bGVzU3RyaW5nID0gYCR7cnVsZXNTdHJpbmd9IHwgJHtydWxlU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlc1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZUxlbmd0aCA9IHRoaXMubmFtZS5sZW5ndGgsICAvLy9cbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoIC0gcHJvZHVjdGlvbk5hbWVMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgXFxuICAke3RoaXMubmFtZX0ke3BhZGRpbmd9IDo6PSAke3J1bGVzU3RyaW5nfVxcbmA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcblxuICAgIGNvbnRleHQuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IGNvbnRleHQuaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcCBhdCBwcm9kdWN0aW9uICcke3RoaXMubmFtZX0nYCk7XG4gICAgfVxuXG4gICAgbGV0IHJ1bGVOb2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc29tZVJ1bGVQYXJzZWQgPSB0aGlzLnJ1bGVzLnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgcnVsZU5vZGVzID0gcnVsZS5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuICBcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVQYXJzZWQgPSAocnVsZU5vZGVzICE9PSBudWxsKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZVBhcnNlZDtcbiAgICAgICAgICB9KTtcblxuICAgIGlmIChzb21lUnVsZVBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5vZGVzTGVuZ3RoID0gcnVsZU5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHJ1bGVOb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBydWxlTm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgICAgIG5vZGVPck5vZGVzID0gdGhpcy5Ob2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlT3JOb2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZShsaW5lLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSB7XG4gICAgY29uc3QgbmFtZSA9IGxpbmUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVzID0gbGluZS5tYXBTeW1ib2xTZXF1ZW5jZXMoZnVuY3Rpb24oc3ltYm9sU2VxdWVuY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBOb2RlID0gbWFwcGluZ3MuaGFzT3duUHJvcGVydHkobmFtZSkgP1xuICAgICAgICAgICAgICAgICAgIG1hcHBpbmdzW25hbWVdIDpcbiAgICAgICAgICAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlcyA9IHByb2R1Y3Rpb24uZ2V0UnVsZXMoKSxcbiAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCk7XG4gICAgXG4gICAgcHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuXG5mdW5jdGlvbiBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCkge1xuICBsZXQgcGFkZGluZyA9ICcnO1xuICBcbiAgZm9yIChsZXQgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IHBhZGRpbmdMZW5ndGg7IHBvc2l0aW9uKyspIHtcbiAgICBwYWRkaW5nICs9ICcgJztcbiAgfVxuICBcbiAgcmV0dXJuIHBhZGRpbmc7XG59XG4iXX0=