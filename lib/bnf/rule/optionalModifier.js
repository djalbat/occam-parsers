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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9vcHRpb25hbE1vZGlmaWVyLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJSdWxlIiwicnVsZU5hbWVzIiwiRGVmaW5pdGlvbk5vZGUiLCJNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwic3BlY2lhbFN5bWJvbHMiLCJPcHRpb25hbE1vZGlmaWVyUnVsZU5hbWUiLCJxdWVzdGlvbk1hcmsiLCJPcHRpb25hbE1vZGlmaWVyUnVsZSIsIm5hbWUiLCJvcHRpb25hbE1vZGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50Iiwib3B0aW9uYWxNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRyxpQkFBaUJILFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNSSx5QkFBeUJKLFFBQVEsNEJBQVIsQ0FIL0I7O0FBS00sSUFBRUssY0FBRixHQUFxQk4sTUFBckIsQ0FBRU0sY0FBRjtBQUFBLElBQ0VDLHdCQURGLEdBQytCSixTQUQvQixDQUNFSSx3QkFERjtBQUFBLElBRUVDLFlBRkYsR0FFbUJGLGNBRm5CLENBRUVFLFlBRkY7O0lBSUFDLG9COzs7QUFDSixzQ0FBYztBQUFBOztBQUNaLGdCQUFNQyxPQUFPSCx3QkFBYjtBQUFBLGdCQUNNSSx3Q0FBd0NILFlBRDlDO0FBQUEsZ0JBQzREO0FBQ3RESSw2Q0FBaUMsSUFBSVAsc0JBQUosQ0FBMkJNLHFDQUEzQixDQUZ2QztBQUFBLGdCQUdNRSxjQUFjLENBQ1pELDhCQURZLENBSHBCO0FBQUEsZ0JBTU1FLE9BQU9WLGNBTmI7O0FBRFksK0lBU05NLElBVE0sRUFTQUcsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVhnQ1osSTs7QUFjbkNhLE9BQU9DLE9BQVAsR0FBaUJQLG9CQUFqQiIsImZpbGUiOiJvcHRpb25hbE1vZGlmaWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbk5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2RlZmluaXRpb24nKSxcbiAgICAgIE1vZGlmaWVyUnVsZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL21vZGlmaWVyUnVsZScpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IE9wdGlvbmFsTW9kaWZpZXJSdWxlTmFtZSB9ID0gcnVsZU5hbWVzLFxuICAgICAgeyBxdWVzdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBPcHRpb25hbE1vZGlmaWVyUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gT3B0aW9uYWxNb2RpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIG9wdGlvbmFsTW9kaWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBxdWVzdGlvbk1hcmssIC8vL1xuICAgICAgICAgIG9wdGlvbmFsTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiA9IG5ldyBNb2RpZmllclJ1bGVEZWZpbml0aW9uKG9wdGlvbmFsTW9kaWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgb3B0aW9uYWxNb2RpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRGVmaW5pdGlvbk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbE1vZGlmaWVyUnVsZTtcbiJdfQ==