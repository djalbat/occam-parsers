'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    DefinitionNode = require('../node/definition'),
    DefinitionDefinition = require('../definition/definition');

var DefinitionRuleName = ruleNames.DefinitionRuleName;

var DefinitionRule = function (_Rule) {
  _inherits(DefinitionRule, _Rule);

  function DefinitionRule() {
    _classCallCheck(this, DefinitionRule);

    var name = DefinitionRuleName,
        definitionDefinition = new DefinitionDefinition(),
        definitions = [definitionDefinition],
        Node = DefinitionNode;

    return _possibleConstructorReturn(this, (DefinitionRule.__proto__ || Object.getPrototypeOf(DefinitionRule)).call(this, name, definitions, Node));
  }

  return DefinitionRule;
}(Rule);

module.exports = DefinitionRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9kZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiRGVmaW5pdGlvbk5vZGUiLCJEZWZpbml0aW9uRGVmaW5pdGlvbiIsIkRlZmluaXRpb25SdWxlTmFtZSIsIkRlZmluaXRpb25SdWxlIiwibmFtZSIsImRlZmluaXRpb25EZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNRyx1QkFBdUJILFFBQVEsMEJBQVIsQ0FIN0I7O0lBS1FJLGtCLEdBQXVCSCxTLENBQXZCRyxrQjs7SUFFRkMsYzs7O0FBQ0osNEJBQWM7QUFBQTs7QUFDWixRQUFNQyxPQUFPRixrQkFBYjtBQUFBLFFBQ01HLHVCQUF1QixJQUFJSixvQkFBSixFQUQ3QjtBQUFBLFFBRU1LLGNBQWMsQ0FDWkQsb0JBRFksQ0FGcEI7QUFBQSxRQUtNRSxPQUFPUCxjQUxiOztBQURZLDJIQVFOSSxJQVJNLEVBUUFFLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWMEJWLEk7O0FBYTdCVyxPQUFPQyxPQUFQLEdBQWlCTixjQUFqQiIsImZpbGUiOiJkZWZpbml0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBEZWZpbml0aW9uTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZGVmaW5pdGlvbicpLFxuICAgICAgRGVmaW5pdGlvbkRlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2RlZmluaXRpb24nKTtcblxuY29uc3QgeyBEZWZpbml0aW9uUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgRGVmaW5pdGlvblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IERlZmluaXRpb25SdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9uRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZGVmaW5pdGlvbkRlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEZWZpbml0aW9uTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb25SdWxlO1xuIl19