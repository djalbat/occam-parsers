'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var stringUtilities = require('../utilities/string');

var paddingFromPaddingLength = stringUtilities.paddingFromPaddingLength;

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
    key: 'setNonTerminalNode',
    value: function setNonTerminalNode(NonTerminalNode) {
      this.NonTerminalNode = NonTerminalNode;
    }
  }, {
    key: 'addDefinitions',
    value: function addDefinitions(definitions) {
      this.definitions = this.definitions.concat(definitions);
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      var _this = this;

      var node = null;

      this.definitions.some(function (definition) {
        node = _this.parseDefinition(definition, configuration, noWhitespace);

        var parsed = node !== null;

        if (parsed) {
          return true;
        }
      });

      return node;
    }
  }, {
    key: 'parseWithLookAhead',
    value: function parseWithLookAhead(configuration, noWhitespace, callback) {
      var _this2 = this;

      this.definitions.some(function (definition) {
        var node = _this2.parseDefinition(definition, configuration, noWhitespace),
            parsed = callback(node);

        if (parsed) {
          return true;
        }
      });
    }
  }, {
    key: 'parseDefinition',
    value: function parseDefinition(definition, configuration, noWhitespace) {
      var node = null;

      configuration.increaseDepth();

      var tooDeep = configuration.isTooDeep();

      if (tooDeep) {
        throw new Error('The parse tree is too deep at rule \'' + this.name + '\'');
      }

      var nodes = definition.parse(configuration, noWhitespace),
          parsed = nodes !== null;

      if (parsed) {
        var ruleName = this.name,
            childNodes = nodes,
            ///
        nonTerminalNode = this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);

        node = nonTerminalNode; ///
      }

      configuration.decreaseDepth();

      return node;
    }
  }, {
    key: 'asString',
    value: function asString(maximumRuleNameLength) {
      var multiLine = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var definitionsLength = this.definitions.length;

      multiLine = multiLine && definitionsLength > 1; ///

      var maximumPadding = paddingFromPaddingLength(maximumRuleNameLength),
          definitionsString = this.definitions.reduce(function (definitionsString, definition) {
        var definitionString = definition.asString();

        if (definitionsString === '') {
          definitionsString = definitionString; ///
        } else {
          definitionsString = multiLine ? definitionsString + '\n\n' + maximumPadding + '     | ' + definitionString : definitionsString + ' | ' + definitionString;
        }

        return definitionsString;
      }, ''),
          ruleName = this.name,
          ///
      ruleNameLength = ruleName.length,
          paddingLength = maximumRuleNameLength - ruleNameLength,
          padding = paddingFromPaddingLength(paddingLength);

      var semicolonString = multiLine ? '\n\n' + maximumPadding + '     ;' : ' ;',
          string = '\n\n  ' + this.name + padding + ' ::= ' + definitionsString + semicolonString;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJzdHJpbmdVdGlsaXRpZXMiLCJyZXF1aXJlIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiUnVsZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImNvbmNhdCIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJub2RlIiwic29tZSIsImRlZmluaXRpb24iLCJwYXJzZURlZmluaXRpb24iLCJwYXJzZWQiLCJjYWxsYmFjayIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJub2RlcyIsInBhcnNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm1heGltdW1QYWRkaW5nIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJydWxlTmFtZUxlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiQ2xhc3MiLCJydWxlIiwidW5kZWZpbmVkIiwiZ2V0TmFtZSIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSxxQkFBUixDQUF4Qjs7SUFFUUMsd0IsR0FBNkJGLGUsQ0FBN0JFLHdCOztJQUVGQyxJO0FBQ0osZ0JBQVlDLElBQVosRUFBa0JDLFdBQWxCLEVBQStCQyxlQUEvQixFQUFnRDtBQUFBOztBQUM5QyxTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFD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QUQ0QixDQUNVO0FBQ3ZDLFNBRkQsTUFFTztBQUNMRiw4QkFBb0JKLFlBQ0lJLGlCQURKLFlBQzRCRCxjQUQ1QixlQUNvREcsZ0JBRHBELEdBRU1GLGlCQUZOLFdBRTZCRSxnQkFGakQ7QUFHRDs7QUFFRCxlQUFPRixpQkFBUDtBQUNELE9BWm1CLEVBWWpCLEVBWmlCLENBRDFCO0FBQUEsVUFjTVYsV0FBVyxLQUFLbEIsSUFkdEI7QUFBQSxVQWM0QjtBQUN0QmdDLHVCQUFpQmQsU0FBU1EsTUFmaEM7QUFBQSxVQWdCTU8sZ0JBQWdCVix3QkFBd0JTLGNBaEI5QztBQUFBLFVBaUJNRSxVQUFVcEMseUJBQXlCbUMsYUFBekIsQ0FqQmhCOztBQW1CQSxVQUFNRSxrQkFBa0JYLHFCQUNRRyxjQURSLGNBRUcsSUFGM0I7QUFBQSxVQUdNUyxvQkFBa0IsS0FBS3BDLElBQXZCLEdBQThCa0MsT0FBOUIsYUFBNkNOLGlCQUE3QyxHQUFpRU8sZUFIdkU7O0FBS0EsYUFBT0MsTUFBUDtBQUNEOzs7NkJBRWVDLEssRUFBT0MsSSxFQUFNO0FBQzNCLFVBQUlBLFNBQVNDLFNBQWIsRUFBd0I7QUFDdEJELGVBQU9ELEtBQVA7QUFDQUEsZ0JBQVF0QyxJQUFSO0FBQ0Q7O0FBRUQsVUFBTUMsT0FBT3NDLEtBQUtFLE9BQUwsRUFBYjtBQUFBLFVBQ012QyxjQUFjcUMsS0FBS0csY0FBTCxFQURwQjtBQUFBLFVBRU12QyxrQkFBa0JvQyxLQUFLSSxrQkFBTCxFQUZ4Qjs7QUFJQUosYUFBTyxJQUFJRCxLQUFKLENBQVVyQyxJQUFWLEVBQWdCQyxXQUFoQixFQUE2QkMsZUFBN0IsQ0FBUDs7QUFFQSxhQUFPb0MsSUFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQjdDLElBQWpCIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHN0cmluZ1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9zdHJpbmcnKTtcblxuY29uc3QgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSA9IHN0cmluZ1V0aWxpdGllcztcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vblRlcm1pbmFsTm9kZShOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHRoaXMuZGVmaW5pdGlvbnMuY29uY2F0KGRlZmluaXRpb25zKTtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlID0gbnVsbDtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbm9kZSA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGNvbnN0IHBhcnNlZCA9IChub2RlICE9PSBudWxsKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcGFyc2VXaXRoTG9va0FoZWFkKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgcGFyc2VkID0gY2FsbGJhY2sobm9kZSk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgY29uZmlndXJhdGlvbi5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29uZmlndXJhdGlvbi5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHJ1bGUgJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IGRlZmluaXRpb24ucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJzZWQgPSAobm9kZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBub2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25maWd1cmF0aW9uLmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxcblxcbiR7bWF4aW11bVBhZGRpbmd9ICAgICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sICcnKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBjb25zdCBzZW1pY29sb25TdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuXFxuJHttYXhpbXVtUGFkZGluZ30gICAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIDsnLFxuICAgICAgICAgIHN0cmluZyA9IGBcXG5cXG4gICR7dGhpcy5uYW1lfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9JHtzZW1pY29sb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUoQ2xhc3MsIHJ1bGUpIHtcbiAgICBpZiAocnVsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFJ1bGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgcnVsZSA9IG5ldyBDbGFzcyhuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuIl19