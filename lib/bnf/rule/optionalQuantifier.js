'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    DefinitionNode = require('../node/definition'),
    QuantifierRuleDefinition = require('../definition/quantifierRule');

var specialSymbols = lexers.specialSymbols,
    questionMark = specialSymbols.questionMark,
    OptionalQuantifierRuleName = ruleNames.OptionalQuantifierRuleName;

var OptionalQuantifierRule = function (_Rule) {
      _inherits(OptionalQuantifierRule, _Rule);

      function OptionalQuantifierRule() {
            _classCallCheck(this, OptionalQuantifierRule);

            var name = OptionalQuantifierRuleName,
                optionalQuantifierTerminalSymbolContent = questionMark,
                ///
            optionalQuantifierRuleDefinition = new QuantifierRuleDefinition(optionalQuantifierTerminalSymbolContent),
                definitions = [optionalQuantifierRuleDefinition],
                Node = DefinitionNode;

            return _possibleConstructorReturn(this, (OptionalQuantifierRule.__proto__ || Object.getPrototypeOf(OptionalQuantifierRule)).call(this, name, definitions, Node));
      }

      return OptionalQuantifierRule;
}(Rule);

module.exports = OptionalQuantifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9vcHRpb25hbFF1YW50aWZpZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlJ1bGUiLCJydWxlTmFtZXMiLCJEZWZpbml0aW9uTm9kZSIsIlF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsInNwZWNpYWxTeW1ib2xzIiwicXVlc3Rpb25NYXJrIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlIiwibmFtZSIsIm9wdGlvbmFsUXVhbnRpZmllclRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRyxpQkFBaUJILFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNSSwyQkFBMkJKLFFBQVEsOEJBQVIsQ0FIakM7O0FBS00sSUFBRUssY0FBRixHQUFxQk4sTUFBckIsQ0FBRU0sY0FBRjtBQUFBLElBQ0VDLFlBREYsR0FDbUJELGNBRG5CLENBQ0VDLFlBREY7QUFBQSxJQUVFQywwQkFGRixHQUVpQ0wsU0FGakMsQ0FFRUssMEJBRkY7O0lBSUFDLHNCOzs7QUFDSix3Q0FBYztBQUFBOztBQUNaLGdCQUFNQyxPQUFPRiwwQkFBYjtBQUFBLGdCQUNNRywwQ0FBMENKLFlBRGhEO0FBQUEsZ0JBQzhEO0FBQ3hESywrQ0FBbUMsSUFBSVAsd0JBQUosQ0FBNkJNLHVDQUE3QixDQUZ6QztBQUFBLGdCQUdNRSxjQUFjLENBQ1pELGdDQURZLENBSHBCO0FBQUEsZ0JBTU1FLE9BQU9WLGNBTmI7O0FBRFksbUpBU05NLElBVE0sRUFTQUcsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVhrQ1osSTs7QUFjckNhLE9BQU9DLE9BQVAsR0FBaUJQLHNCQUFqQiIsImZpbGUiOiJvcHRpb25hbFF1YW50aWZpZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBEZWZpbml0aW9uTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZGVmaW5pdGlvbicpLFxuICAgICAgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9xdWFudGlmaWVyUnVsZScpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IHF1ZXN0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IE9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIE9wdGlvbmFsUXVhbnRpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHF1ZXN0aW9uTWFyaywgLy8vXG4gICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZURlZmluaXRpb24gPSBuZXcgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uKG9wdGlvbmFsUXVhbnRpZmllclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3B0aW9uYWxRdWFudGlmaWVyUnVsZTtcbiJdfQ==