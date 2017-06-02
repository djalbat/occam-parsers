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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVzIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwibGVmdFJlY3Vyc2l2ZSIsInByb2R1Y3Rpb25OYW1lIiwiZmlsdGVyIiwicnVsZSIsInJ1bGVMZWZ0UmVjdXJzaXZlIiwiaXNMZWZ0UmVjdXJzaXZlIiwibGVmdE5vblJlY3Vyc2l2ZVJ1bGVzIiwicnVsZU5vbkxlZnRSZWN1cnNpdmUiLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwibm9kZU9yTm9kZXMiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwicnVsZU5vZGVzIiwic29tZVJ1bGVQYXJzZWQiLCJzb21lIiwicGFyc2UiLCJydWxlUGFyc2VkIiwicnVsZU5vZGVzTGVuZ3RoIiwibm9kZXMiLCJmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZSIsImRlY3JlYXNlRGVwdGgiLCJsaW5lIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwibWFwcGluZ3MiLCJnZXROYW1lIiwibWFwU3ltYm9sU2VxdWVuY2VzIiwic3ltYm9sU2VxdWVuY2UiLCJmcm9tU3ltYm9sU2VxdWVuY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsb0JBQVIsQ0FEeEI7O0lBR01FLFU7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtGLElBQUwsR0FB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LEVBQTRCQyxJQUE1QixDQVRuQjs7QUFXQSxhQUFPcUMsVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjFDLFVBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcnVsZXMsIE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLk5vZGUgPSBOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBnZXRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG4gIFxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vZGU7XG4gIH1cbiAgXG4gIGlzTGVmdFJlY3Vyc2l2ZSgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZXMgPSB0aGlzLmdldExlZnRSZWN1cnNpdmVSdWxlcygpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlcy5sZW5ndGgsXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZSA9IChsZWZ0UmVjdXJzaXZlUnVsZXNMZW5ndGggPiAwKTtcbiAgICBcbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZTtcbiAgfVxuICBcbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVzKCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZXMgPSB0aGlzLnJ1bGVzLmZpbHRlcihmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTGVmdFJlY3Vyc2l2ZSA9IHJ1bGUuaXNMZWZ0UmVjdXJzaXZlKHByb2R1Y3Rpb25OYW1lKTtcbiAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVMZWZ0UmVjdXJzaXZlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlcztcbiAgfVxuXG4gIGdldE5vbkxlZnRSZWN1cnNpdmVSdWxlcygpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgbGVmdE5vblJlY3Vyc2l2ZVJ1bGVzID0gdGhpcy5ydWxlcy5maWx0ZXIoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZUxlZnRSZWN1cnNpdmUgPSBydWxlLmlzTGVmdFJlY3Vyc2l2ZShwcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgICAgICAgICBydWxlTm9uTGVmdFJlY3Vyc2l2ZSA9ICFydWxlTGVmdFJlY3Vyc2l2ZTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZU5vbkxlZnRSZWN1cnNpdmU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbGVmdE5vblJlY3Vyc2l2ZVJ1bGVzO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZU9yTm9kZXMgPSBudWxsO1xuXG4gICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHByb2R1Y3Rpb24gJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBsZXQgcnVsZU5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzb21lUnVsZVBhcnNlZCA9IHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICBydWxlTm9kZXMgPSBydWxlLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgY29uc3QgcnVsZVBhcnNlZCA9IChydWxlTm9kZXMgIT09IG51bGwpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBydWxlUGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHNvbWVSdWxlUGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTm9kZXNMZW5ndGggPSBydWxlTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAocnVsZU5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBub2RlcyA9IHJ1bGVOb2RlcywgIC8vL1xuICAgICAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZTsgLy8vXG5cbiAgICAgICAgbm9kZU9yTm9kZXMgPSB0aGlzLk5vZGUuZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKTsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIG5vZGVPck5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpIHtcbiAgICBjb25zdCBuYW1lID0gbGluZS5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZXMgPSBsaW5lLm1hcFN5bWJvbFNlcXVlbmNlcyhmdW5jdGlvbihzeW1ib2xTZXF1ZW5jZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCBzaWduaWZpY2FudFRva2VuVHlwZXMpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIE5vZGUgPSBtYXBwaW5ncy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgbWFwcGluZ3NbbmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuIl19