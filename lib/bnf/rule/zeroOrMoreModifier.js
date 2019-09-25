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
    ZeroOrMoreModifierRuleName = ruleNames.ZeroOrMoreModifierRuleName,
    asterisk = specialSymbols.asterisk;

var ZeroOrMoreModifierRule = function (_Rule) {
      _inherits(ZeroOrMoreModifierRule, _Rule);

      function ZeroOrMoreModifierRule() {
            _classCallCheck(this, ZeroOrMoreModifierRule);

            var name = ZeroOrMoreModifierRuleName,
                zeroOrMoreModifierTerminalSymbolContent = asterisk,
                ///
            zeroOrMoreModifierRuleDefinition = new ModifierRuleDefinition(zeroOrMoreModifierTerminalSymbolContent),
                definitions = [zeroOrMoreModifierRuleDefinition],
                Node = DefinitionNode;

            return _possibleConstructorReturn(this, (ZeroOrMoreModifierRule.__proto__ || Object.getPrototypeOf(ZeroOrMoreModifierRule)).call(this, name, definitions, Node));
      }

      return ZeroOrMoreModifierRule;
}(Rule);

module.exports = ZeroOrMoreModifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS96ZXJvT3JNb3JlTW9kaWZpZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlJ1bGUiLCJydWxlTmFtZXMiLCJEZWZpbml0aW9uTm9kZSIsIk1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJzcGVjaWFsU3ltYm9scyIsIlplcm9Pck1vcmVNb2RpZmllclJ1bGVOYW1lIiwiYXN0ZXJpc2siLCJaZXJvT3JNb3JlTW9kaWZpZXJSdWxlIiwibmFtZSIsInplcm9Pck1vcmVNb2RpZmllclRlcm1pbmFsU3ltYm9sQ29udGVudCIsInplcm9Pck1vcmVNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRyxpQkFBaUJILFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNSSx5QkFBeUJKLFFBQVEsNEJBQVIsQ0FIL0I7O0FBS00sSUFBRUssY0FBRixHQUFxQk4sTUFBckIsQ0FBRU0sY0FBRjtBQUFBLElBQ0VDLDBCQURGLEdBQ2lDSixTQURqQyxDQUNFSSwwQkFERjtBQUFBLElBRUVDLFFBRkYsR0FFZUYsY0FGZixDQUVFRSxRQUZGOztJQUlBQyxzQjs7O0FBQ0osd0NBQWM7QUFBQTs7QUFDWixnQkFBTUMsT0FBT0gsMEJBQWI7QUFBQSxnQkFDTUksMENBQTBDSCxRQURoRDtBQUFBLGdCQUMwRDtBQUNwREksK0NBQW1DLElBQUlQLHNCQUFKLENBQTJCTSx1Q0FBM0IsQ0FGekM7QUFBQSxnQkFHTUUsY0FBYyxDQUNaRCxnQ0FEWSxDQUhwQjtBQUFBLGdCQU1NRSxPQUFPVixjQU5iOztBQURZLG1KQVNOTSxJQVRNLEVBU0FHLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYa0NaLEk7O0FBY3JDYSxPQUFPQyxPQUFQLEdBQWlCUCxzQkFBakIiLCJmaWxlIjoiemVyb09yTW9yZU1vZGlmaWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbk5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2RlZmluaXRpb24nKSxcbiAgICAgIE1vZGlmaWVyUnVsZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL21vZGlmaWVyUnVsZScpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IFplcm9Pck1vcmVNb2RpZmllclJ1bGVOYW1lIH0gPSBydWxlTmFtZXMsXG4gICAgICB7IGFzdGVyaXNrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgWmVyb09yTW9yZU1vZGlmaWVyUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gWmVyb09yTW9yZU1vZGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgemVyb09yTW9yZU1vZGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50ID0gYXN0ZXJpc2ssIC8vL1xuICAgICAgICAgIHplcm9Pck1vcmVNb2RpZmllclJ1bGVEZWZpbml0aW9uID0gbmV3IE1vZGlmaWVyUnVsZURlZmluaXRpb24oemVyb09yTW9yZU1vZGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHplcm9Pck1vcmVNb2RpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRGVmaW5pdGlvbk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBaZXJvT3JNb3JlTW9kaWZpZXJSdWxlO1xuIl19