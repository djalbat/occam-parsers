'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    OneOrMorePartsNode = require('../node/oneOrMoreParts'),
    OneOrMorePartsDefinition = require('../definition/oneOrMoreParts');

var OneOrMorePartsProduction = function (_Production) {
  _inherits(OneOrMorePartsProduction, _Production);

  function OneOrMorePartsProduction() {
    _classCallCheck(this, OneOrMorePartsProduction);

    var oneOrMorePartsDefinition = new OneOrMorePartsDefinition(),
        name = 'oneOrMoreParts',
        oneOrMoreParts = [oneOrMorePartsDefinition],
        Node = OneOrMorePartsNode;

    return _possibleConstructorReturn(this, (OneOrMorePartsProduction.__proto__ || Object.getPrototypeOf(OneOrMorePartsProduction)).call(this, name, oneOrMoreParts, Node));
  }

  return OneOrMorePartsProduction;
}(Production);

module.exports = OneOrMorePartsProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL29uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiT25lT3JNb3JlUGFydHNOb2RlIiwiT25lT3JNb3JlUGFydHNEZWZpbml0aW9uIiwiT25lT3JNb3JlUGFydHNQcm9kdWN0aW9uIiwib25lT3JNb3JlUGFydHNEZWZpbml0aW9uIiwibmFtZSIsIm9uZU9yTW9yZVBhcnRzIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSx3QkFBUixDQUQzQjtBQUFBLElBRU1FLDJCQUEyQkYsUUFBUSw4QkFBUixDQUZqQzs7SUFJTUcsd0I7OztBQUNKLHNDQUFjO0FBQUE7O0FBQ1osUUFBTUMsMkJBQTJCLElBQUlGLHdCQUFKLEVBQWpDO0FBQUEsUUFDTUcsT0FBTyxnQkFEYjtBQUFBLFFBRU1DLGlCQUFpQixDQUNmRix3QkFEZSxDQUZ2QjtBQUFBLFFBS01HLE9BQU9OLGtCQUxiOztBQURZLCtJQVFOSSxJQVJNLEVBUUFDLGNBUkEsRUFRZ0JDLElBUmhCO0FBU2I7OztFQVZvQ1IsVTs7QUFhdkNTLE9BQU9DLE9BQVAsR0FBaUJOLHdCQUFqQiIsImZpbGUiOiJvbmVPck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvb25lT3JNb3JlUGFydHMnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vb25lT3JNb3JlUGFydHMnKTtcblxuY2xhc3MgT25lT3JNb3JlUGFydHNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvbiA9IG5ldyBPbmVPck1vcmVQYXJ0c0RlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gJ29uZU9yTW9yZVBhcnRzJyxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0cyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE9uZU9yTW9yZVBhcnRzTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIG9uZU9yTW9yZVBhcnRzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25lT3JNb3JlUGFydHNQcm9kdWN0aW9uO1xuIl19