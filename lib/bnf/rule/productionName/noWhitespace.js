'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../rule'),
    ProductionNamePart = require('../../../common/part/productionName');

var NoWhitespaceProductionNameRule = function (_Rule) {
  _inherits(NoWhitespaceProductionNameRule, _Rule);

  function NoWhitespaceProductionNameRule() {
    _classCallCheck(this, NoWhitespaceProductionNameRule);

    var noWhitespace = false,
        noWhitespaceProductionName = 'noWhitespace',
        noWhitespaceProductionNamePart = new ProductionNamePart(noWhitespaceProductionName, noWhitespace),
        parts = [noWhitespaceProductionNamePart];

    return _possibleConstructorReturn(this, (NoWhitespaceProductionNameRule.__proto__ || Object.getPrototypeOf(NoWhitespaceProductionNameRule)).call(this, parts));
  }

  return NoWhitespaceProductionNameRule;
}(Rule);

module.exports = NoWhitespaceProductionNameRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcnVsZS9wcm9kdWN0aW9uTmFtZS9ub1doaXRlc3BhY2UuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJOb1doaXRlc3BhY2VQcm9kdWN0aW9uTmFtZVJ1bGUiLCJub1doaXRlc3BhY2UiLCJub1doaXRlc3BhY2VQcm9kdWN0aW9uTmFtZSIsIm5vV2hpdGVzcGFjZVByb2R1Y3Rpb25OYW1lUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxZQUFSLENBQWI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEscUNBQVIsQ0FEM0I7O0lBR01FLDhCOzs7QUFDSiw0Q0FBYztBQUFBOztBQUNaLFFBQU1DLGVBQWUsS0FBckI7QUFBQSxRQUNNQyw2QkFBNkIsY0FEbkM7QUFBQSxRQUVNQyxpQ0FBaUMsSUFBSUosa0JBQUosQ0FBdUJHLDBCQUF2QixFQUFtREQsWUFBbkQsQ0FGdkM7QUFBQSxRQUdNRyxRQUFRLENBQ05ELDhCQURNLENBSGQ7O0FBRFksMkpBUU5DLEtBUk07QUFTYjs7O0VBVjBDUCxJOztBQWE3Q1EsT0FBT0MsT0FBUCxHQUFpQk4sOEJBQWpCIiwiZmlsZSI6Im5vV2hpdGVzcGFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL3J1bGUnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIE5vV2hpdGVzcGFjZVByb2R1Y3Rpb25OYW1lUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQcm9kdWN0aW9uTmFtZSA9ICdub1doaXRlc3BhY2UnLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQobm9XaGl0ZXNwYWNlUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQcm9kdWN0aW9uTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9XaGl0ZXNwYWNlUHJvZHVjdGlvbk5hbWVSdWxlO1xuIl19