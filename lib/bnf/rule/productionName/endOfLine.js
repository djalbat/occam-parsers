'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../rule'),
    ProductionNamePart = require('../../../common/part/productionName');

var EndOfLineProductionNameRule = function (_Rule) {
  _inherits(EndOfLineProductionNameRule, _Rule);

  function EndOfLineProductionNameRule() {
    _classCallCheck(this, EndOfLineProductionNameRule);

    var noWhitespace = false,
        endOfLineProductionName = 'endOfLine',
        endOfLineProductionNamePart = new ProductionNamePart(endOfLineProductionName, noWhitespace),
        parts = [endOfLineProductionNamePart];

    return _possibleConstructorReturn(this, (EndOfLineProductionNameRule.__proto__ || Object.getPrototypeOf(EndOfLineProductionNameRule)).call(this, parts));
  }

  return EndOfLineProductionNameRule;
}(Rule);

module.exports = EndOfLineProductionNameRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcnVsZS9wcm9kdWN0aW9uTmFtZS9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJFbmRPZkxpbmVQcm9kdWN0aW9uTmFtZVJ1bGUiLCJub1doaXRlc3BhY2UiLCJlbmRPZkxpbmVQcm9kdWN0aW9uTmFtZSIsImVuZE9mTGluZVByb2R1Y3Rpb25OYW1lUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxZQUFSLENBQWI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEscUNBQVIsQ0FEM0I7O0lBR01FLDJCOzs7QUFDSix5Q0FBYztBQUFBOztBQUNaLFFBQU1DLGVBQWUsS0FBckI7QUFBQSxRQUNNQywwQkFBMEIsV0FEaEM7QUFBQSxRQUVNQyw4QkFBOEIsSUFBSUosa0JBQUosQ0FBdUJHLHVCQUF2QixFQUFnREQsWUFBaEQsQ0FGcEM7QUFBQSxRQUdNRyxRQUFRLENBQ05ELDJCQURNLENBSGQ7O0FBRFkscUpBUU5DLEtBUk07QUFTYjs7O0VBVnVDUCxJOztBQWExQ1EsT0FBT0MsT0FBUCxHQUFpQk4sMkJBQWpCIiwiZmlsZSI6ImVuZE9mTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL3J1bGUnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIEVuZE9mTGluZVByb2R1Y3Rpb25OYW1lUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBlbmRPZkxpbmVQcm9kdWN0aW9uTmFtZSA9ICdlbmRPZkxpbmUnLFxuICAgICAgICAgIGVuZE9mTGluZVByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQoZW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBlbmRPZkxpbmVQcm9kdWN0aW9uTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWVSdWxlO1xuIl19