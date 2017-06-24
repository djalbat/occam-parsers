'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var RulesNode = function (_NonTerminalNode) {
  _inherits(RulesNode, _NonTerminalNode);

  function RulesNode() {
    _classCallCheck(this, RulesNode);

    return _possibleConstructorReturn(this, (RulesNode.__proto__ || Object.getPrototypeOf(RulesNode)).apply(this, arguments));
  }

  _createClass(RulesNode, [{
    key: 'generateRules',
    value: function generateRules(Rule, Definition, mappings) {
      var childNodes = this.getChildNodes(),
          ruleNodes = childNodes,
          ///
      rules = ruleNodes.map(function (ruleNode) {
        var rule = ruleNode.generateRule(Rule, Definition, mappings);

        return rule;
      });

      return rules;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = nodes,
          ///
      rulesNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, RulesNode);

      return rulesNode;
    }
  }]);

  return RulesNode;
}(NonTerminalNode);

module.exports = RulesNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3J1bGVzLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJSdWxlc05vZGUiLCJSdWxlIiwiRGVmaW5pdGlvbiIsIm1hcHBpbmdzIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJydWxlTm9kZXMiLCJydWxlcyIsIm1hcCIsInJ1bGVOb2RlIiwicnVsZSIsImdlbmVyYXRlUnVsZSIsIm5vZGVzIiwicnVsZU5hbWUiLCJydWxlc05vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JDLFFBQVEsK0JBQVIsQ0FBeEI7O0lBRU1DLFM7Ozs7Ozs7Ozs7O2tDQUNVQyxJLEVBQU1DLFUsRUFBWUMsUSxFQUFVO0FBQ3hDLFVBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLFlBQVlGLFVBRGxCO0FBQUEsVUFDK0I7QUFDekJHLGNBQVFELFVBQVVFLEdBQVYsQ0FBYyxVQUFTQyxRQUFULEVBQW1CO0FBQ3ZDLFlBQU1DLE9BQU9ELFNBQVNFLFlBQVQsQ0FBc0JWLElBQXRCLEVBQTRCQyxVQUE1QixFQUF3Q0MsUUFBeEMsQ0FBYjs7QUFFQSxlQUFPTyxJQUFQO0FBQ0QsT0FKTyxDQUZkOztBQVFBLGFBQU9ILEtBQVA7QUFDRDs7O3lDQUUyQkssSyxFQUFPQyxRLEVBQVU7QUFDM0MsVUFBTVQsYUFBYVEsS0FBbkI7QUFBQSxVQUEwQjtBQUNwQkUsa0JBQVloQixnQkFBZ0JpQix5QkFBaEIsQ0FBMENGLFFBQTFDLEVBQW9EVCxVQUFwRCxFQUFnRUosU0FBaEUsQ0FEbEI7O0FBR0EsYUFBT2MsU0FBUDtBQUNEOzs7O0VBbEJxQmhCLGU7O0FBcUJ4QmtCLE9BQU9DLE9BQVAsR0FBaUJqQixTQUFqQiIsImZpbGUiOiJydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUnVsZXNOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVSdWxlcyhSdWxlLCBEZWZpbml0aW9uLCBtYXBwaW5ncykge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBydWxlTm9kZXMgPSBjaGlsZE5vZGVzLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSBydWxlTm9kZXMubWFwKGZ1bmN0aW9uKHJ1bGVOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZU5vZGUuZ2VuZXJhdGVSdWxlKFJ1bGUsIERlZmluaXRpb24sIG1hcHBpbmdzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICBydWxlc05vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcywgUnVsZXNOb2RlKTtcblxuICAgIHJldHVybiBydWxlc05vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlc05vZGU7XG4iXX0=