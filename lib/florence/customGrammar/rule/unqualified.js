'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../../bnf/definition'),
    CustomGrammarRule = require('../../customGrammar/rule'),
    EndOfLinePart = require('../../../bnf/part/terminal/endOfLine');

var UnqualifiedCustomGrammarRule = function (_CustomGrammarRule) {
  _inherits(UnqualifiedCustomGrammarRule, _CustomGrammarRule);

  function UnqualifiedCustomGrammarRule() {
    _classCallCheck(this, UnqualifiedCustomGrammarRule);

    return _possibleConstructorReturn(this, (UnqualifiedCustomGrammarRule.__proto__ || Object.getPrototypeOf(UnqualifiedCustomGrammarRule)).apply(this, arguments));
  }

  _createClass(UnqualifiedCustomGrammarRule, null, [{
    key: 'fromRuleNameAndRule',
    value: function fromRuleNameAndRule(ruleName, rule) {
      return CustomGrammarRule.fromRuleNameAndRule(UnqualifiedCustomGrammarRule, ruleName, rule);
    }
  }, {
    key: 'definitionsFromRuleDefinitions',
    value: function definitionsFromRuleDefinitions(ruleDefinitions) {
      var definitions = ruleDefinitions.map(function (ruleDefinition) {
        var ruleDefinitionParts = ruleDefinition.getParts(),
            endOfLinePart = new EndOfLinePart(),
            parts = [].concat(ruleDefinitionParts).concat(endOfLinePart),
            definition = new Definition(parts);

        return definition;
      });

      return definitions;
    }
  }]);

  return UnqualifiedCustomGrammarRule;
}(CustomGrammarRule);

module.exports = UnqualifiedCustomGrammarRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZS9jdXN0b21HcmFtbWFyL3J1bGUvdW5xdWFsaWZpZWQuanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJDdXN0b21HcmFtbWFyUnVsZSIsIkVuZE9mTGluZVBhcnQiLCJVbnF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlIiwicnVsZU5hbWUiLCJydWxlIiwiZnJvbVJ1bGVOYW1lQW5kUnVsZSIsInJ1bGVEZWZpbml0aW9ucyIsImRlZmluaXRpb25zIiwibWFwIiwicnVsZURlZmluaXRpb24iLCJydWxlRGVmaW5pdGlvblBhcnRzIiwiZ2V0UGFydHMiLCJlbmRPZkxpbmVQYXJ0IiwicGFydHMiLCJjb25jYXQiLCJkZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLHlCQUFSLENBQW5CO0FBQUEsSUFDTUMsb0JBQW9CRCxRQUFRLDBCQUFSLENBRDFCO0FBQUEsSUFFTUUsZ0JBQWdCRixRQUFRLHNDQUFSLENBRnRCOztJQUlNRyw0Qjs7Ozs7Ozs7Ozs7d0NBQ3VCQyxRLEVBQVVDLEksRUFBTTtBQUFFLGFBQU9KLGtCQUFrQkssbUJBQWxCLENBQXNDSCw0QkFBdEMsRUFBb0VDLFFBQXBFLEVBQThFQyxJQUE5RSxDQUFQO0FBQTZGOzs7bURBRXBHRSxlLEVBQWlCO0FBQ3JELFVBQU1DLGNBQWNELGdCQUFnQkUsR0FBaEIsQ0FBb0IsVUFBU0MsY0FBVCxFQUF5QjtBQUMvRCxZQUFNQyxzQkFBc0JELGVBQWVFLFFBQWYsRUFBNUI7QUFBQSxZQUNNQyxnQkFBZ0IsSUFBSVgsYUFBSixFQUR0QjtBQUFBLFlBRU1ZLFFBQVEsR0FBR0MsTUFBSCxDQUFVSixtQkFBVixFQUErQkksTUFBL0IsQ0FBc0NGLGFBQXRDLENBRmQ7QUFBQSxZQUdNRyxhQUFhLElBQUlqQixVQUFKLENBQWVlLEtBQWYsQ0FIbkI7O0FBS0EsZUFBT0UsVUFBUDtBQUNELE9BUG1CLENBQXBCOztBQVNBLGFBQU9SLFdBQVA7QUFDRDs7OztFQWR3Q1AsaUI7O0FBaUIzQ2dCLE9BQU9DLE9BQVAsR0FBaUJmLDRCQUFqQiIsImZpbGUiOiJ1bnF1YWxpZmllZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uLy4uL2JuZi9kZWZpbml0aW9uJyksXG4gICAgICBDdXN0b21HcmFtbWFyUnVsZSA9IHJlcXVpcmUoJy4uLy4uL2N1c3RvbUdyYW1tYXIvcnVsZScpLFxuICAgICAgRW5kT2ZMaW5lUGFydCA9IHJlcXVpcmUoJy4uLy4uLy4uL2JuZi9wYXJ0L3Rlcm1pbmFsL2VuZE9mTGluZScpO1xuXG5jbGFzcyBVbnF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlIGV4dGVuZHMgQ3VzdG9tR3JhbW1hclJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kUnVsZShydWxlTmFtZSwgcnVsZSkgeyByZXR1cm4gQ3VzdG9tR3JhbW1hclJ1bGUuZnJvbVJ1bGVOYW1lQW5kUnVsZShVbnF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlLCBydWxlTmFtZSwgcnVsZSk7IH1cblxuICBzdGF0aWMgZGVmaW5pdGlvbnNGcm9tUnVsZURlZmluaXRpb25zKHJ1bGVEZWZpbml0aW9ucykge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZURlZmluaXRpb25zLm1hcChmdW5jdGlvbihydWxlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgcnVsZURlZmluaXRpb25QYXJ0cyA9IHJ1bGVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICBlbmRPZkxpbmVQYXJ0ID0gbmV3IEVuZE9mTGluZVBhcnQoKSxcbiAgICAgICAgICAgIHBhcnRzID0gW10uY29uY2F0KHJ1bGVEZWZpbml0aW9uUGFydHMpLmNvbmNhdChlbmRPZkxpbmVQYXJ0KSxcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5xdWFsaWZpZWRDdXN0b21HcmFtbWFyUnVsZTtcbiJdfQ==