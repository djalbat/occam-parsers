'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    DefinitionsNode = require('../node/definitions'),
    DefinitionsDefinition = require('../definition/definitions');

var DefinitionsRuleName = ruleNames.DefinitionsRuleName;

var DefinitionsRule = function (_Rule) {
  _inherits(DefinitionsRule, _Rule);

  function DefinitionsRule() {
    _classCallCheck(this, DefinitionsRule);

    var definitionsDefinition = new DefinitionsDefinition(),
        name = DefinitionsRuleName,
        definitions = [definitionsDefinition],
        Node = DefinitionsNode;

    return _possibleConstructorReturn(this, (DefinitionsRule.__proto__ || Object.getPrototypeOf(DefinitionsRule)).call(this, name, definitions, Node));
  }

  return DefinitionsRule;
}(Rule);

module.exports = DefinitionsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9kZWZpbml0aW9ucy5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIkRlZmluaXRpb25zTm9kZSIsIkRlZmluaXRpb25zRGVmaW5pdGlvbiIsIkRlZmluaXRpb25zUnVsZU5hbWUiLCJEZWZpbml0aW9uc1J1bGUiLCJkZWZpbml0aW9uc0RlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7QUFBQSxJQUdNRyx3QkFBd0JILFFBQVEsMkJBQVIsQ0FIOUI7O0lBS1FJLG1CLEdBQXdCSCxTLENBQXhCRyxtQjs7SUFFRkMsZTs7O0FBQ0osNkJBQWM7QUFBQTs7QUFDWixRQUFNQyx3QkFBd0IsSUFBSUgscUJBQUosRUFBOUI7QUFBQSxRQUNNSSxPQUFPSCxtQkFEYjtBQUFBLFFBRU1JLGNBQWMsQ0FDWkYscUJBRFksQ0FGcEI7QUFBQSxRQUtNRyxPQUFPUCxlQUxiOztBQURZLDZIQVFOSyxJQVJNLEVBUUFDLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWMkJWLEk7O0FBYTlCVyxPQUFPQyxPQUFQLEdBQWlCTixlQUFqQiIsImZpbGUiOiJkZWZpbml0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbnNOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9kZWZpbml0aW9ucycpLFxuICAgICAgRGVmaW5pdGlvbnNEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9kZWZpbml0aW9ucycpO1xuXG5jb25zdCB7IERlZmluaXRpb25zUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgRGVmaW5pdGlvbnNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uc0RlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gRGVmaW5pdGlvbnNSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGRlZmluaXRpb25zRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25zTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb25zUnVsZTtcbiJdfQ==