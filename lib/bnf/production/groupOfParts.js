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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJHcm91cE9mUGFydHNOb2RlIiwiR3JvdXBPZlBhcnRzRGVmaW5pdGlvbiIsIkdyb3VwT2ZQYXJ0c1Byb2R1Y3Rpb24iLCJncm91cE9mUGFydHNEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLG1CQUFtQkQsUUFBUSxzQkFBUixDQUR6QjtBQUFBLElBRU1FLHlCQUF5QkYsUUFBUSw0QkFBUixDQUYvQjs7SUFJTUcsc0I7OztBQUNKLG9DQUFjO0FBQUE7O0FBQ1osUUFBTUMseUJBQXlCLElBQUlGLHNCQUFKLEVBQS9CO0FBQUEsUUFDTUcsT0FBTyxjQURiO0FBQUEsUUFFTUMsY0FBYyxDQUNaRixzQkFEWSxDQUZwQjtBQUFBLFFBS01HLE9BQU9OLGdCQUxiOztBQURZLDJJQVFOSSxJQVJNLEVBUUFDLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWa0NSLFU7O0FBYXJDUyxPQUFPQyxPQUFQLEdBQWlCTixzQkFBakIiLCJmaWxlIjoiZ3JvdXBPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgR3JvdXBPZlBhcnRzTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZ3JvdXBPZlBhcnRzJyksXG4gICAgICBHcm91cE9mUGFydHNEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ncm91cE9mUGFydHMnKTtcblxuY2xhc3MgR3JvdXBPZlBhcnRzUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBncm91cE9mUGFydHNEZWZpbml0aW9uID0gbmV3IEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gJ2dyb3VwT2ZQYXJ0cycsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBncm91cE9mUGFydHNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gR3JvdXBPZlBhcnRzTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwT2ZQYXJ0c1Byb2R1Y3Rpb247XG4iXX0=