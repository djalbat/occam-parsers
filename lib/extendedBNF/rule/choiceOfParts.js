'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ChoiceOfPartsNode = require('../node/choiceOfParts'),
    ChoiceOfPartsDefinition = require('../definition/choiceOfParts');

var ChoiceOfPartsRule = function (_Rule) {
  _inherits(ChoiceOfPartsRule, _Rule);

  function ChoiceOfPartsRule() {
    _classCallCheck(this, ChoiceOfPartsRule);

    var choiceOfPartsDefinition = new ChoiceOfPartsDefinition(),
        name = 'choiceOfParts',
        definitions = [choiceOfPartsDefinition],
        Node = ChoiceOfPartsNode;

    return _possibleConstructorReturn(this, (ChoiceOfPartsRule.__proto__ || Object.getPrototypeOf(ChoiceOfPartsRule)).call(this, name, definitions, Node));
  }

  return ChoiceOfPartsRule;
}(Rule);

module.exports = ChoiceOfPartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ydWxlL2Nob2ljZU9mUGFydHMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJDaG9pY2VPZlBhcnRzTm9kZSIsIkNob2ljZU9mUGFydHNEZWZpbml0aW9uIiwiQ2hvaWNlT2ZQYXJ0c1J1bGUiLCJjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLG9CQUFvQkQsUUFBUSx1QkFBUixDQUQxQjtBQUFBLElBRU1FLDBCQUEwQkYsUUFBUSw2QkFBUixDQUZoQzs7SUFJTUcsaUI7OztBQUNKLCtCQUFjO0FBQUE7O0FBQ1osUUFBTUMsMEJBQTBCLElBQUlGLHVCQUFKLEVBQWhDO0FBQUEsUUFDTUcsT0FBTyxlQURiO0FBQUEsUUFFTUMsY0FBYyxDQUNaRix1QkFEWSxDQUZwQjtBQUFBLFFBS01HLE9BQU9OLGlCQUxiOztBQURZLGlJQVFOSSxJQVJNLEVBUUFDLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWNkJSLEk7O0FBYWhDUyxPQUFPQyxPQUFQLEdBQWlCTixpQkFBakIiLCJmaWxlIjoiY2hvaWNlT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIENob2ljZU9mUGFydHNOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9jaG9pY2VPZlBhcnRzJyksXG4gICAgICBDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vY2hvaWNlT2ZQYXJ0cycpO1xuXG5jbGFzcyBDaG9pY2VPZlBhcnRzUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiA9IG5ldyBDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSAnY2hvaWNlT2ZQYXJ0cycsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBjaG9pY2VPZlBhcnRzRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IENob2ljZU9mUGFydHNOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hvaWNlT2ZQYXJ0c1J1bGU7XG4iXX0=