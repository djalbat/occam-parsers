'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    RulesNode = require('../node/rules'),
    RulesDefinition = require('../definition/rules');

var RulesRule = function (_Rule) {
  _inherits(RulesRule, _Rule);

  function RulesRule() {
    _classCallCheck(this, RulesRule);

    var rulesDefinition = new RulesDefinition(),
        name = ruleNames.RulesRule,
        definitions = [rulesDefinition],
        Node = RulesNode;

    return _possibleConstructorReturn(this, (RulesRule.__proto__ || Object.getPrototypeOf(RulesRule)).call(this, name, definitions, Node));
  }

  return RulesRule;
}(Rule);

module.exports = RulesRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ydWxlcy5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIlJ1bGVzTm9kZSIsIlJ1bGVzRGVmaW5pdGlvbiIsIlJ1bGVzUnVsZSIsInJ1bGVzRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLFlBQVlELFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1FLFlBQVlGLFFBQVEsZUFBUixDQUZsQjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSxxQkFBUixDQUh4Qjs7SUFLTUksUzs7O0FBQ0osdUJBQWM7QUFBQTs7QUFDWixRQUFNQyxrQkFBa0IsSUFBSUYsZUFBSixFQUF4QjtBQUFBLFFBQ01HLE9BQU9MLFVBQVVHLFNBRHZCO0FBQUEsUUFFTUcsY0FBYyxDQUNaRixlQURZLENBRnBCO0FBQUEsUUFLTUcsT0FBT04sU0FMYjs7QUFEWSxpSEFRTkksSUFSTSxFQVFBQyxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVnFCVCxJOztBQWF4QlUsT0FBT0MsT0FBUCxHQUFpQk4sU0FBakIiLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFJ1bGVzTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcnVsZXMnKSxcbiAgICAgIFJ1bGVzRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcnVsZXMnKTtcblxuY2xhc3MgUnVsZXNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJ1bGVzRGVmaW5pdGlvbiA9IG5ldyBSdWxlc0RlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gcnVsZU5hbWVzLlJ1bGVzUnVsZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHJ1bGVzRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFJ1bGVzTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVzUnVsZTtcbiJdfQ==