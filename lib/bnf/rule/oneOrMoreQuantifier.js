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
    OneOrMoreQuantifierRuleName = ruleNames.OneOrMoreQuantifierRuleName,
    plus = specialSymbols.plus;

var OneOrMoreQuantifierRule = function (_Rule) {
      _inherits(OneOrMoreQuantifierRule, _Rule);

      function OneOrMoreQuantifierRule() {
            _classCallCheck(this, OneOrMoreQuantifierRule);

            var name = OneOrMoreQuantifierRuleName,
                oneOrMoreQuantifierTerminalSymbolContent = plus,
                ///
            oneOrMoreQuantifierRuleDefinition = new QuantifierRuleDefinition(oneOrMoreQuantifierTerminalSymbolContent),
                definitions = [oneOrMoreQuantifierRuleDefinition],
                Node = DefinitionNode;

            return _possibleConstructorReturn(this, (OneOrMoreQuantifierRule.__proto__ || Object.getPrototypeOf(OneOrMoreQuantifierRule)).call(this, name, definitions, Node));
      }

      return OneOrMoreQuantifierRule;
}(Rule);

module.exports = OneOrMoreQuantifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9vbmVPck1vcmVRdWFudGlmaWVyLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJSdWxlIiwicnVsZU5hbWVzIiwiRGVmaW5pdGlvbk5vZGUiLCJRdWFudGlmaWVyUnVsZURlZmluaXRpb24iLCJzcGVjaWFsU3ltYm9scyIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsInBsdXMiLCJPbmVPck1vcmVRdWFudGlmaWVyUnVsZSIsIm5hbWUiLCJvbmVPck1vcmVRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50Iiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRyxpQkFBaUJILFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNSSwyQkFBMkJKLFFBQVEsOEJBQVIsQ0FIakM7O0FBS00sSUFBRUssY0FBRixHQUFxQk4sTUFBckIsQ0FBRU0sY0FBRjtBQUFBLElBQ0VDLDJCQURGLEdBQ2tDSixTQURsQyxDQUNFSSwyQkFERjtBQUFBLElBRUVDLElBRkYsR0FFV0YsY0FGWCxDQUVFRSxJQUZGOztJQUlBQyx1Qjs7O0FBQ0oseUNBQWM7QUFBQTs7QUFDWixnQkFBTUMsT0FBT0gsMkJBQWI7QUFBQSxnQkFDTUksMkNBQTJDSCxJQURqRDtBQUFBLGdCQUN1RDtBQUNqREksZ0RBQW9DLElBQUlQLHdCQUFKLENBQTZCTSx3Q0FBN0IsQ0FGMUM7QUFBQSxnQkFHTUUsY0FBYyxDQUNaRCxpQ0FEWSxDQUhwQjtBQUFBLGdCQU1NRSxPQUFPVixjQU5iOztBQURZLHFKQVNOTSxJQVRNLEVBU0FHLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYbUNaLEk7O0FBY3RDYSxPQUFPQyxPQUFQLEdBQWlCUCx1QkFBakIiLCJmaWxlIjoib25lT3JNb3JlUXVhbnRpZmllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIERlZmluaXRpb25Ob2RlID0gcmVxdWlyZSgnLi4vbm9kZS9kZWZpbml0aW9uJyksXG4gICAgICBRdWFudGlmaWVyUnVsZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3F1YW50aWZpZXJSdWxlJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIH0gPSBydWxlTmFtZXMsXG4gICAgICB7IHBsdXMgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBPbmVPck1vcmVRdWFudGlmaWVyUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBwbHVzLCAvLy9cbiAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb24gPSBuZXcgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uKG9uZU9yTW9yZVF1YW50aWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRGVmaW5pdGlvbk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPbmVPck1vcmVRdWFudGlmaWVyUnVsZTtcbiJdfQ==