'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    OptionalPartNode = require('../node/optionalPart'),
    OptionalPartDefinition = require('../definition/optionalPart');

var OptionalPartProduction = function (_Production) {
  _inherits(OptionalPartProduction, _Production);

  function OptionalPartProduction() {
    _classCallCheck(this, OptionalPartProduction);

    var optionalPartDefinition = new OptionalPartDefinition(),
        name = 'optionalPart',
        optionalPart = [optionalPartDefinition],
        Node = OptionalPartNode;

    return _possibleConstructorReturn(this, (OptionalPartProduction.__proto__ || Object.getPrototypeOf(OptionalPartProduction)).call(this, name, optionalPart, Node));
  }

  return OptionalPartProduction;
}(Production);

module.exports = OptionalPartProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9vcHRpb25hbFBhcnQuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJPcHRpb25hbFBhcnROb2RlIiwiT3B0aW9uYWxQYXJ0RGVmaW5pdGlvbiIsIk9wdGlvbmFsUGFydFByb2R1Y3Rpb24iLCJvcHRpb25hbFBhcnREZWZpbml0aW9uIiwibmFtZSIsIm9wdGlvbmFsUGFydCIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxtQkFBbUJELFFBQVEsc0JBQVIsQ0FEekI7QUFBQSxJQUVNRSx5QkFBeUJGLFFBQVEsNEJBQVIsQ0FGL0I7O0lBSU1HLHNCOzs7QUFDSixvQ0FBYztBQUFBOztBQUNaLFFBQU1DLHlCQUF5QixJQUFJRixzQkFBSixFQUEvQjtBQUFBLFFBQ01HLE9BQU8sY0FEYjtBQUFBLFFBRU1DLGVBQWUsQ0FDYkYsc0JBRGEsQ0FGckI7QUFBQSxRQUtNRyxPQUFPTixnQkFMYjs7QUFEWSwySUFRTkksSUFSTSxFQVFBQyxZQVJBLEVBUWNDLElBUmQ7QUFTYjs7O0VBVmtDUixVOztBQWFyQ1MsT0FBT0MsT0FBUCxHQUFpQk4sc0JBQWpCIiwiZmlsZSI6Im9wdGlvbmFsUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE9wdGlvbmFsUGFydE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL29wdGlvbmFsUGFydCcpLFxuICAgICAgT3B0aW9uYWxQYXJ0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vb3B0aW9uYWxQYXJ0Jyk7XG5cbmNsYXNzIE9wdGlvbmFsUGFydFByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgb3B0aW9uYWxQYXJ0RGVmaW5pdGlvbiA9IG5ldyBPcHRpb25hbFBhcnREZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICdvcHRpb25hbFBhcnQnLFxuICAgICAgICAgIG9wdGlvbmFsUGFydCA9IFtcbiAgICAgICAgICAgIG9wdGlvbmFsUGFydERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBPcHRpb25hbFBhcnROb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgb3B0aW9uYWxQYXJ0LCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbjtcbiJdfQ==