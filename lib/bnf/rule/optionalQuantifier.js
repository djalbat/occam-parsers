'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    DefinitionNode = require('../node/definition'),
    ModifierRuleDefinition = require('../definition/quantifierRule');

var specialSymbols = lexers.specialSymbols,
    OptionalModifierRuleName = ruleNames.OptionalModifierRuleName,
    questionMark = specialSymbols.questionMark;

var OptionalModifierRule = function (_Rule) {
      _inherits(OptionalModifierRule, _Rule);

      function OptionalModifierRule() {
            _classCallCheck(this, OptionalModifierRule);

            var name = OptionalModifierRuleName,
                optionalModifierTerminalSymbolContent = questionMark,
                ///
            optionalModifierRuleDefinition = new ModifierRuleDefinition(optionalModifierTerminalSymbolContent),
                definitions = [optionalModifierRuleDefinition],
                Node = DefinitionNode;

            return _possibleConstructorReturn(this, (OptionalModifierRule.__proto__ || Object.getPrototypeOf(OptionalModifierRule)).call(this, name, definitions, Node));
      }

      return OptionalModifierRule;
}(Rule);

module.exports = OptionalModifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9vcHRpb25hbFF1YW50aWZpZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlJ1bGUiLCJydWxlTmFtZXMiLCJEZWZpbml0aW9uTm9kZSIsIk1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJzcGVjaWFsU3ltYm9scyIsIk9wdGlvbmFsTW9kaWZpZXJSdWxlTmFtZSIsInF1ZXN0aW9uTWFyayIsIk9wdGlvbmFsTW9kaWZpZXJSdWxlIiwibmFtZSIsIm9wdGlvbmFsTW9kaWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJvcHRpb25hbE1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1HLGlCQUFpQkgsUUFBUSxvQkFBUixDQUZ2QjtBQUFBLElBR01JLHlCQUF5QkosUUFBUSw4QkFBUixDQUgvQjs7QUFLTSxJQUFFSyxjQUFGLEdBQXFCTixNQUFyQixDQUFFTSxjQUFGO0FBQUEsSUFDRUMsd0JBREYsR0FDK0JKLFNBRC9CLENBQ0VJLHdCQURGO0FBQUEsSUFFRUMsWUFGRixHQUVtQkYsY0FGbkIsQ0FFRUUsWUFGRjs7SUFJQUMsb0I7OztBQUNKLHNDQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLE9BQU9ILHdCQUFiO0FBQUEsZ0JBQ01JLHdDQUF3Q0gsWUFEOUM7QUFBQSxnQkFDNEQ7QUFDdERJLDZDQUFpQyxJQUFJUCxzQkFBSixDQUEyQk0scUNBQTNCLENBRnZDO0FBQUEsZ0JBR01FLGNBQWMsQ0FDWkQsOEJBRFksQ0FIcEI7QUFBQSxnQkFNTUUsT0FBT1YsY0FOYjs7QUFEWSwrSUFTTk0sSUFUTSxFQVNBRyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWGdDWixJOztBQWNuQ2EsT0FBT0MsT0FBUCxHQUFpQlAsb0JBQWpCIiwiZmlsZSI6Im9wdGlvbmFsUXVhbnRpZmllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIERlZmluaXRpb25Ob2RlID0gcmVxdWlyZSgnLi4vbm9kZS9kZWZpbml0aW9uJyksXG4gICAgICBNb2RpZmllclJ1bGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9xdWFudGlmaWVyUnVsZScpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IE9wdGlvbmFsTW9kaWZpZXJSdWxlTmFtZSB9ID0gcnVsZU5hbWVzLFxuICAgICAgeyBxdWVzdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBPcHRpb25hbE1vZGlmaWVyUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gT3B0aW9uYWxNb2RpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIG9wdGlvbmFsTW9kaWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBxdWVzdGlvbk1hcmssIC8vL1xuICAgICAgICAgIG9wdGlvbmFsTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiA9IG5ldyBNb2RpZmllclJ1bGVEZWZpbml0aW9uKG9wdGlvbmFsTW9kaWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgb3B0aW9uYWxNb2RpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRGVmaW5pdGlvbk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbE1vZGlmaWVyUnVsZTtcbiJdfQ==