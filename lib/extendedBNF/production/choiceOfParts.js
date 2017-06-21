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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL2Nob2ljZU9mUGFydHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJDaG9pY2VPZlBhcnRzTm9kZSIsIkNob2ljZU9mUGFydHNEZWZpbml0aW9uIiwiQ2hvaWNlT2ZQYXJ0c1Byb2R1Y3Rpb24iLCJjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxvQkFBb0JELFFBQVEsdUJBQVIsQ0FEMUI7QUFBQSxJQUVNRSwwQkFBMEJGLFFBQVEsNkJBQVIsQ0FGaEM7O0lBSU1HLHVCOzs7QUFDSixxQ0FBYztBQUFBOztBQUNaLFFBQU1DLDBCQUEwQixJQUFJRix1QkFBSixFQUFoQztBQUFBLFFBQ01HLE9BQU8sZUFEYjtBQUFBLFFBRU1DLGNBQWMsQ0FDWkYsdUJBRFksQ0FGcEI7QUFBQSxRQUtNRyxPQUFPTixpQkFMYjs7QUFEWSw2SUFRTkksSUFSTSxFQVFBQyxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVm1DUixVOztBQWF0Q1MsT0FBT0MsT0FBUCxHQUFpQk4sdUJBQWpCIiwiZmlsZSI6ImNob2ljZU9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBDaG9pY2VPZlBhcnRzTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvY2hvaWNlT2ZQYXJ0cycpLFxuICAgICAgQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2Nob2ljZU9mUGFydHMnKTtcblxuY2xhc3MgQ2hvaWNlT2ZQYXJ0c1Byb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24gPSBuZXcgQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gJ2Nob2ljZU9mUGFydHMnLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBDaG9pY2VPZlBhcnRzTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENob2ljZU9mUGFydHNQcm9kdWN0aW9uO1xuIl19