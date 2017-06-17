'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    ChoiceOfPartsNode = require('../node/choiceOfParts'),
    ChoiceOfPartsDefinition = require('../definition/choiceOfParts');

var ChoiceOfPartsProduction = function (_Production) {
  _inherits(ChoiceOfPartsProduction, _Production);

  function ChoiceOfPartsProduction() {
    _classCallCheck(this, ChoiceOfPartsProduction);

    var choiceOfPartsDefinition = new ChoiceOfPartsDefinition(),
        name = 'choiceOfParts',
        definitions = [choiceOfPartsDefinition],
        Node = ChoiceOfPartsNode;

    return _possibleConstructorReturn(this, (ChoiceOfPartsProduction.__proto__ || Object.getPrototypeOf(ChoiceOfPartsProduction)).call(this, name, definitions, Node));
  }

  return ChoiceOfPartsProduction;
}(Production);

module.exports = ChoiceOfPartsProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiQ2hvaWNlT2ZQYXJ0c05vZGUiLCJDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiIsIkNob2ljZU9mUGFydHNQcm9kdWN0aW9uIiwiY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsb0JBQW9CRCxRQUFRLHVCQUFSLENBRDFCO0FBQUEsSUFFTUUsMEJBQTBCRixRQUFRLDZCQUFSLENBRmhDOztJQUlNRyx1Qjs7O0FBQ0oscUNBQWM7QUFBQTs7QUFDWixRQUFNQywwQkFBMEIsSUFBSUYsdUJBQUosRUFBaEM7QUFBQSxRQUNNRyxPQUFPLGVBRGI7QUFBQSxRQUVNQyxjQUFjLENBQ1pGLHVCQURZLENBRnBCO0FBQUEsUUFLTUcsT0FBT04saUJBTGI7O0FBRFksNklBUU5JLElBUk0sRUFRQUMsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZtQ1IsVTs7QUFhdENTLE9BQU9DLE9BQVAsR0FBaUJOLHVCQUFqQiIsImZpbGUiOiJjaG9pY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgQ2hvaWNlT2ZQYXJ0c05vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2Nob2ljZU9mUGFydHMnKSxcbiAgICAgIENob2ljZU9mUGFydHNEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9jaG9pY2VPZlBhcnRzJyk7XG5cbmNsYXNzIENob2ljZU9mUGFydHNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGNob2ljZU9mUGFydHNEZWZpbml0aW9uID0gbmV3IENob2ljZU9mUGFydHNEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICdjaG9pY2VPZlBhcnRzJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGNob2ljZU9mUGFydHNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gQ2hvaWNlT2ZQYXJ0c05vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaG9pY2VPZlBhcnRzUHJvZHVjdGlvbjtcbiJdfQ==