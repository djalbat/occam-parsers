'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    GroupDefinition = require('../definition/group'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var GroupProduction = function (_Production) {
  _inherits(GroupProduction, _Production);

  function GroupProduction() {
    _classCallCheck(this, GroupProduction);

    var productionDefinition = new GroupDefinition(),
        name = 'group',
        definitions = [productionDefinition],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (GroupProduction.__proto__ || Object.getPrototypeOf(GroupProduction)).call(this, name, definitions, Node));
  }

  return GroupProduction;
}(Production);

module.exports = GroupProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9ncm91cC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIkdyb3VwRGVmaW5pdGlvbiIsIk5vblRlcm1pbmFsTm9kZSIsIkdyb3VwUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25EZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxxQkFBUixDQUR4QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSwrQkFBUixDQUZ4Qjs7SUFJTUcsZTs7O0FBQ0osNkJBQWM7QUFBQTs7QUFDWixRQUFNQyx1QkFBdUIsSUFBSUgsZUFBSixFQUE3QjtBQUFBLFFBQ01JLE9BQU8sT0FEYjtBQUFBLFFBRU1DLGNBQWMsQ0FDWkYsb0JBRFksQ0FGcEI7QUFBQSxRQUtNRyxPQUFPTCxlQUxiOztBQURZLDZIQVFORyxJQVJNLEVBUUFDLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWMkJSLFU7O0FBYTlCUyxPQUFPQyxPQUFQLEdBQWlCTixlQUFqQiIsImZpbGUiOiJncm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIEdyb3VwRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vZ3JvdXAnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIEdyb3VwUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uRGVmaW5pdGlvbiA9IG5ldyBHcm91cERlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gJ2dyb3VwJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25EZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBQcm9kdWN0aW9uO1xuIl19