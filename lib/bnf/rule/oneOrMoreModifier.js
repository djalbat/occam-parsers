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
    OneOrMoreModifierRuleName = ruleNames.OneOrMoreModifierRuleName,
    plus = specialSymbols.plus;

var OneOrMoreModifierRule = function (_Rule) {
      _inherits(OneOrMoreModifierRule, _Rule);

      function OneOrMoreModifierRule() {
            _classCallCheck(this, OneOrMoreModifierRule);

            var name = OneOrMoreModifierRuleName,
                oneOrMoreModifierTerminalSymbolContent = plus,
                ///
            oneOrMoreModifierRuleDefinition = new ModifierRuleDefinition(oneOrMoreModifierTerminalSymbolContent),
                definitions = [oneOrMoreModifierRuleDefinition],
                Node = DefinitionNode;

            return _possibleConstructorReturn(this, (OneOrMoreModifierRule.__proto__ || Object.getPrototypeOf(OneOrMoreModifierRule)).call(this, name, definitions, Node));
      }

      return OneOrMoreModifierRule;
}(Rule);

module.exports = OneOrMoreModifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9vbmVPck1vcmVNb2RpZmllci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUnVsZSIsInJ1bGVOYW1lcyIsIkRlZmluaXRpb25Ob2RlIiwiTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsInNwZWNpYWxTeW1ib2xzIiwiT25lT3JNb3JlTW9kaWZpZXJSdWxlTmFtZSIsInBsdXMiLCJPbmVPck1vcmVNb2RpZmllclJ1bGUiLCJuYW1lIiwib25lT3JNb3JlTW9kaWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJvbmVPck1vcmVNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRyxpQkFBaUJILFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNSSx5QkFBeUJKLFFBQVEsNEJBQVIsQ0FIL0I7O0FBS00sSUFBRUssY0FBRixHQUFxQk4sTUFBckIsQ0FBRU0sY0FBRjtBQUFBLElBQ0VDLHlCQURGLEdBQ2dDSixTQURoQyxDQUNFSSx5QkFERjtBQUFBLElBRUVDLElBRkYsR0FFV0YsY0FGWCxDQUVFRSxJQUZGOztJQUlBQyxxQjs7O0FBQ0osdUNBQWM7QUFBQTs7QUFDWixnQkFBTUMsT0FBT0gseUJBQWI7QUFBQSxnQkFDTUkseUNBQXlDSCxJQUQvQztBQUFBLGdCQUNxRDtBQUMvQ0ksOENBQWtDLElBQUlQLHNCQUFKLENBQTJCTSxzQ0FBM0IsQ0FGeEM7QUFBQSxnQkFHTUUsY0FBYyxDQUNaRCwrQkFEWSxDQUhwQjtBQUFBLGdCQU1NRSxPQUFPVixjQU5iOztBQURZLGlKQVNOTSxJQVRNLEVBU0FHLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYaUNaLEk7O0FBY3BDYSxPQUFPQyxPQUFQLEdBQWlCUCxxQkFBakIiLCJmaWxlIjoib25lT3JNb3JlTW9kaWZpZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBEZWZpbml0aW9uTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZGVmaW5pdGlvbicpLFxuICAgICAgTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vbW9kaWZpZXJSdWxlJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgT25lT3JNb3JlTW9kaWZpZXJSdWxlTmFtZSB9ID0gcnVsZU5hbWVzLFxuICAgICAgeyBwbHVzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgT25lT3JNb3JlTW9kaWZpZXJSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBPbmVPck1vcmVNb2RpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIG9uZU9yTW9yZU1vZGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50ID0gcGx1cywgLy8vXG4gICAgICAgICAgb25lT3JNb3JlTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiA9IG5ldyBNb2RpZmllclJ1bGVEZWZpbml0aW9uKG9uZU9yTW9yZU1vZGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZU1vZGlmaWVyUnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEZWZpbml0aW9uTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uZU9yTW9yZU1vZGlmaWVyUnVsZTtcbiJdfQ==