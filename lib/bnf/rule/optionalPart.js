'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    OptionalPartNode = require('../node/optionalPart'),
    OptionalPartDefinition = require('../definition/optionalPart');

var OptionalPartRule = function (_Rule) {
  _inherits(OptionalPartRule, _Rule);

  function OptionalPartRule() {
    _classCallCheck(this, OptionalPartRule);

    var optionalPartDefinition = new OptionalPartDefinition(),
        name = 'optionalPart',
        optionalPart = [optionalPartDefinition],
        Node = OptionalPartNode;

    return _possibleConstructorReturn(this, (OptionalPartRule.__proto__ || Object.getPrototypeOf(OptionalPartRule)).call(this, name, optionalPart, Node));
  }

  return OptionalPartRule;
}(Rule);

module.exports = OptionalPartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9vcHRpb25hbFBhcnQuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJPcHRpb25hbFBhcnROb2RlIiwiT3B0aW9uYWxQYXJ0RGVmaW5pdGlvbiIsIk9wdGlvbmFsUGFydFJ1bGUiLCJvcHRpb25hbFBhcnREZWZpbml0aW9uIiwibmFtZSIsIm9wdGlvbmFsUGFydCIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLG1CQUFtQkQsUUFBUSxzQkFBUixDQUR6QjtBQUFBLElBRU1FLHlCQUF5QkYsUUFBUSw0QkFBUixDQUYvQjs7SUFJTUcsZ0I7OztBQUNKLDhCQUFjO0FBQUE7O0FBQ1osUUFBTUMseUJBQXlCLElBQUlGLHNCQUFKLEVBQS9CO0FBQUEsUUFDTUcsT0FBTyxjQURiO0FBQUEsUUFFTUMsZUFBZSxDQUNiRixzQkFEYSxDQUZyQjtBQUFBLFFBS01HLE9BQU9OLGdCQUxiOztBQURZLCtIQVFOSSxJQVJNLEVBUUFDLFlBUkEsRUFRY0MsSUFSZDtBQVNiOzs7RUFWNEJSLEk7O0FBYS9CUyxPQUFPQyxPQUFQLEdBQWlCTixnQkFBakIiLCJmaWxlIjoib3B0aW9uYWxQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgT3B0aW9uYWxQYXJ0Tm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvb3B0aW9uYWxQYXJ0JyksXG4gICAgICBPcHRpb25hbFBhcnREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9vcHRpb25hbFBhcnQnKTtcblxuY2xhc3MgT3B0aW9uYWxQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBvcHRpb25hbFBhcnREZWZpbml0aW9uID0gbmV3IE9wdGlvbmFsUGFydERlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gJ29wdGlvbmFsUGFydCcsXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0ID0gW1xuICAgICAgICAgICAgb3B0aW9uYWxQYXJ0RGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE9wdGlvbmFsUGFydE5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBvcHRpb25hbFBhcnQsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbFBhcnRSdWxlO1xuIl19