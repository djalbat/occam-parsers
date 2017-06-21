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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL29wdGlvbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIk9wdGlvbmFsUGFydE5vZGUiLCJPcHRpb25hbFBhcnREZWZpbml0aW9uIiwiT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiIsIm9wdGlvbmFsUGFydERlZmluaXRpb24iLCJuYW1lIiwib3B0aW9uYWxQYXJ0IiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLG1CQUFtQkQsUUFBUSxzQkFBUixDQUR6QjtBQUFBLElBRU1FLHlCQUF5QkYsUUFBUSw0QkFBUixDQUYvQjs7SUFJTUcsc0I7OztBQUNKLG9DQUFjO0FBQUE7O0FBQ1osUUFBTUMseUJBQXlCLElBQUlGLHNCQUFKLEVBQS9CO0FBQUEsUUFDTUcsT0FBTyxjQURiO0FBQUEsUUFFTUMsZUFBZSxDQUNiRixzQkFEYSxDQUZyQjtBQUFBLFFBS01HLE9BQU9OLGdCQUxiOztBQURZLDJJQVFOSSxJQVJNLEVBUUFDLFlBUkEsRUFRY0MsSUFSZDtBQVNiOzs7RUFWa0NSLFU7O0FBYXJDUyxPQUFPQyxPQUFQLEdBQWlCTixzQkFBakIiLCJmaWxlIjoib3B0aW9uYWxQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgT3B0aW9uYWxQYXJ0Tm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvb3B0aW9uYWxQYXJ0JyksXG4gICAgICBPcHRpb25hbFBhcnREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9vcHRpb25hbFBhcnQnKTtcblxuY2xhc3MgT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBvcHRpb25hbFBhcnREZWZpbml0aW9uID0gbmV3IE9wdGlvbmFsUGFydERlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gJ29wdGlvbmFsUGFydCcsXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0ID0gW1xuICAgICAgICAgICAgb3B0aW9uYWxQYXJ0RGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE9wdGlvbmFsUGFydE5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBvcHRpb25hbFBhcnQsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbFBhcnRQcm9kdWN0aW9uO1xuIl19