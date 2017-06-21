'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    GroupOfPartsNode = require('../node/groupOfParts'),
    GroupOfPartsDefinition = require('../definition/groupOfParts');

var GroupOfPartsProduction = function (_Production) {
  _inherits(GroupOfPartsProduction, _Production);

  function GroupOfPartsProduction() {
    _classCallCheck(this, GroupOfPartsProduction);

    var groupOfPartsDefinition = new GroupOfPartsDefinition(),
        name = 'groupOfParts',
        definitions = [groupOfPartsDefinition],
        Node = GroupOfPartsNode;

    return _possibleConstructorReturn(this, (GroupOfPartsProduction.__proto__ || Object.getPrototypeOf(GroupOfPartsProduction)).call(this, name, definitions, Node));
  }

  return GroupOfPartsProduction;
}(Production);

module.exports = GroupOfPartsProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL2dyb3VwT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIkdyb3VwT2ZQYXJ0c05vZGUiLCJHcm91cE9mUGFydHNEZWZpbml0aW9uIiwiR3JvdXBPZlBhcnRzUHJvZHVjdGlvbiIsImdyb3VwT2ZQYXJ0c0RlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsbUJBQW1CRCxRQUFRLHNCQUFSLENBRHpCO0FBQUEsSUFFTUUseUJBQXlCRixRQUFRLDRCQUFSLENBRi9COztJQUlNRyxzQjs7O0FBQ0osb0NBQWM7QUFBQTs7QUFDWixRQUFNQyx5QkFBeUIsSUFBSUYsc0JBQUosRUFBL0I7QUFBQSxRQUNNRyxPQUFPLGNBRGI7QUFBQSxRQUVNQyxjQUFjLENBQ1pGLHNCQURZLENBRnBCO0FBQUEsUUFLTUcsT0FBT04sZ0JBTGI7O0FBRFksMklBUU5JLElBUk0sRUFRQUMsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZrQ1IsVTs7QUFhckNTLE9BQU9DLE9BQVAsR0FBaUJOLHNCQUFqQiIsImZpbGUiOiJncm91cE9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBHcm91cE9mUGFydHNOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9ncm91cE9mUGFydHMnKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2dyb3VwT2ZQYXJ0cycpO1xuXG5jbGFzcyBHcm91cE9mUGFydHNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGdyb3VwT2ZQYXJ0c0RlZmluaXRpb24gPSBuZXcgR3JvdXBPZlBhcnRzRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSAnZ3JvdXBPZlBhcnRzJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGdyb3VwT2ZQYXJ0c0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBHcm91cE9mUGFydHNOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBPZlBhcnRzUHJvZHVjdGlvbjtcbiJdfQ==