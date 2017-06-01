'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    GroupRule = require('../rule/group'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var GroupProduction = function (_Production) {
  _inherits(GroupProduction, _Production);

  function GroupProduction() {
    _classCallCheck(this, GroupProduction);

    var productionRule = new GroupRule(),
        name = 'group',
        rules = [productionRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (GroupProduction.__proto__ || Object.getPrototypeOf(GroupProduction)).call(this, name, rules, Node));
  }

  return GroupProduction;
}(Production);

module.exports = GroupProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9ncm91cC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIkdyb3VwUnVsZSIsIk5vblRlcm1pbmFsTm9kZSIsIkdyb3VwUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25SdWxlIiwibmFtZSIsInJ1bGVzIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLFlBQVlELFFBQVEsZUFBUixDQURsQjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSwrQkFBUixDQUZ4Qjs7SUFJTUcsZTs7O0FBQ0osNkJBQWM7QUFBQTs7QUFDWixRQUFNQyxpQkFBaUIsSUFBSUgsU0FBSixFQUF2QjtBQUFBLFFBQ01JLE9BQU8sT0FEYjtBQUFBLFFBRU1DLFFBQVEsQ0FDTkYsY0FETSxDQUZkO0FBQUEsUUFLTUcsT0FBT0wsZUFMYjs7QUFEWSw2SEFRTkcsSUFSTSxFQVFBQyxLQVJBLEVBUU9DLElBUlA7QUFTYjs7O0VBVjJCUixVOztBQWE5QlMsT0FBT0MsT0FBUCxHQUFpQk4sZUFBakIiLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBHcm91cFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL2dyb3VwJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBHcm91cFByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvblJ1bGUgPSBuZXcgR3JvdXBSdWxlKCksXG4gICAgICAgICAgbmFtZSA9ICdncm91cCcsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uUnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwUHJvZHVjdGlvbjtcbiJdfQ==