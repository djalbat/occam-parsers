'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    DefinitionNode = require('../node/definition'),
    ModifierRuleDefinition = require('../definition/modifierRule');

var specialSymbols = lexers.specialSymbols,
    LookAheadModifierRuleName = ruleNames.LookAheadModifierRuleName,
    exclamationMark = specialSymbols.exclamationMark;

var LookAheadModifierRule = function (_Rule) {
      _inherits(LookAheadModifierRule, _Rule);

      function LookAheadModifierRule() {
            _classCallCheck(this, LookAheadModifierRule);

            var name = LookAheadModifierRuleName,
                lookAheadModifierTerminalSymbolContent = exclamationMark,
                ///
            lookAheadModifierRuleDefinition = new ModifierRuleDefinition(lookAheadModifierTerminalSymbolContent),
                definitions = [lookAheadModifierRuleDefinition],
                Node = DefinitionNode;

            return _possibleConstructorReturn(this, (LookAheadModifierRule.__proto__ || Object.getPrototypeOf(LookAheadModifierRule)).call(this, name, definitions, Node));
      }

      return LookAheadModifierRule;
}(Rule);

module.exports = LookAheadModifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9sb29rQWhlYWRNb2RpZmllci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUnVsZSIsInJ1bGVOYW1lcyIsIkRlZmluaXRpb25Ob2RlIiwiTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsInNwZWNpYWxTeW1ib2xzIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSIsImV4Y2xhbWF0aW9uTWFyayIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIm5hbWUiLCJsb29rQWhlYWRNb2RpZmllclRlcm1pbmFsU3ltYm9sQ29udGVudCIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1HLGlCQUFpQkgsUUFBUSxvQkFBUixDQUZ2QjtBQUFBLElBR01JLHlCQUF5QkosUUFBUSw0QkFBUixDQUgvQjs7QUFLTSxJQUFFSyxjQUFGLEdBQXFCTixNQUFyQixDQUFFTSxjQUFGO0FBQUEsSUFDRUMseUJBREYsR0FDZ0NKLFNBRGhDLENBQ0VJLHlCQURGO0FBQUEsSUFFRUMsZUFGRixHQUVzQkYsY0FGdEIsQ0FFRUUsZUFGRjs7SUFJQUMscUI7OztBQUNKLHVDQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLE9BQU9ILHlCQUFiO0FBQUEsZ0JBQ01JLHlDQUF5Q0gsZUFEL0M7QUFBQSxnQkFDZ0U7QUFDMURJLDhDQUFrQyxJQUFJUCxzQkFBSixDQUEyQk0sc0NBQTNCLENBRnhDO0FBQUEsZ0JBR01FLGNBQWMsQ0FDWkQsK0JBRFksQ0FIcEI7QUFBQSxnQkFNTUUsT0FBT1YsY0FOYjs7QUFEWSxpSkFTTk0sSUFUTSxFQVNBRyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWGlDWixJOztBQWNwQ2EsT0FBT0MsT0FBUCxHQUFpQlAscUJBQWpCIiwiZmlsZSI6Imxvb2tBaGVhZE1vZGlmaWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbk5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2RlZmluaXRpb24nKSxcbiAgICAgIE1vZGlmaWVyUnVsZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL21vZGlmaWVyUnVsZScpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IExvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcyxcbiAgICAgIHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgTG9va0FoZWFkTW9kaWZpZXJSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIGxvb2tBaGVhZE1vZGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50ID0gZXhjbGFtYXRpb25NYXJrLCAvLy9cbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uID0gbmV3IE1vZGlmaWVyUnVsZURlZmluaXRpb24obG9va0FoZWFkTW9kaWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTG9va0FoZWFkTW9kaWZpZXJSdWxlO1xuIl19