'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    ErrorNode = require('../node/error'),
    ErrorDefinition = require('../definition/error');

var ErrorRuleName = ruleNames.ErrorRuleName;

var ErrorRule = function (_Rule) {
  _inherits(ErrorRule, _Rule);

  function ErrorRule() {
    _classCallCheck(this, ErrorRule);

    var errorDefinition = new ErrorDefinition(),
        name = ErrorRuleName,
        definitions = [errorDefinition],
        Node = ErrorNode;

    return _possibleConstructorReturn(this, (ErrorRule.__proto__ || Object.getPrototypeOf(ErrorRule)).call(this, name, definitions, Node));
  }

  return ErrorRule;
}(Rule);

module.exports = ErrorRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9lcnJvci5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIkVycm9yTm9kZSIsIkVycm9yRGVmaW5pdGlvbiIsIkVycm9yUnVsZU5hbWUiLCJFcnJvclJ1bGUiLCJlcnJvckRlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRSxZQUFZRixRQUFRLGVBQVIsQ0FGbEI7QUFBQSxJQUdNRyxrQkFBa0JILFFBQVEscUJBQVIsQ0FIeEI7O0lBS1FJLGEsR0FBa0JILFMsQ0FBbEJHLGE7O0lBRUZDLFM7OztBQUNKLHVCQUFjO0FBQUE7O0FBQ1osUUFBTUMsa0JBQWtCLElBQUlILGVBQUosRUFBeEI7QUFBQSxRQUNNSSxPQUFPSCxhQURiO0FBQUEsUUFFTUksY0FBYyxDQUNaRixlQURZLENBRnBCO0FBQUEsUUFLTUcsT0FBT1AsU0FMYjs7QUFEWSxpSEFRTkssSUFSTSxFQVFBQyxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVnFCVixJOztBQWF4QlcsT0FBT0MsT0FBUCxHQUFpQk4sU0FBakIiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIEVycm9yTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZXJyb3InKSxcbiAgICAgIEVycm9yRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vZXJyb3InKTtcblxuY29uc3QgeyBFcnJvclJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIEVycm9yUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBlcnJvckRlZmluaXRpb24gPSBuZXcgRXJyb3JEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IEVycm9yUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlcnJvckRlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBFcnJvck5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JSdWxlO1xuIl19