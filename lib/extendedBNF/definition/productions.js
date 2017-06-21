'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    ProductionNamePart = require('../part/productionName');

var ProductionsDefinition = function (_Definition) {
  _inherits(ProductionsDefinition, _Definition);

  function ProductionsDefinition() {
    _classCallCheck(this, ProductionsDefinition);

    var productionProductionName = 'production',
        productionProductionNamePart = new ProductionNamePart(productionProductionName),
        oneOrMoreProductionProductionNamePartsPart = new OneOrMorePartsPart(productionProductionNamePart),
        parts = [oneOrMoreProductionProductionNamePartsPart];

    return _possibleConstructorReturn(this, (ProductionsDefinition.__proto__ || Object.getPrototypeOf(ProductionsDefinition)).call(this, parts));
  }

  return ProductionsDefinition;
}(Definition);

module.exports = ProductionsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL3Byb2R1Y3Rpb25zLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwiUHJvZHVjdGlvbnNEZWZpbml0aW9uIiwicHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lIiwicHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lUGFydCIsIm9uZU9yTW9yZVByb2R1Y3Rpb25Qcm9kdWN0aW9uTmFtZVBhcnRzUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLHdCQUFSLENBRDNCO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLHdCQUFSLENBRjNCOztJQUlNRyxxQjs7O0FBQ0osbUNBQWM7QUFBQTs7QUFDWixRQUFNQywyQkFBMkIsWUFBakM7QUFBQSxRQUNNQywrQkFBK0IsSUFBSUgsa0JBQUosQ0FBdUJFLHdCQUF2QixDQURyQztBQUFBLFFBRU1FLDZDQUE2QyxJQUFJTCxrQkFBSixDQUF1QkksNEJBQXZCLENBRm5EO0FBQUEsUUFHTUUsUUFBUSxDQUNORCwwQ0FETSxDQUhkOztBQURZLHlJQVFOQyxLQVJNO0FBU2I7OztFQVZpQ1IsVTs7QUFhcENTLE9BQU9DLE9BQVAsR0FBaUJOLHFCQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvb25lT3JNb3JlUGFydHMnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgUHJvZHVjdGlvbnNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25Qcm9kdWN0aW9uTmFtZSA9ICdwcm9kdWN0aW9uJyxcbiAgICAgICAgICBwcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIG9uZU9yTW9yZVByb2R1Y3Rpb25Qcm9kdWN0aW9uTmFtZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVQcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbnNEZWZpbml0aW9uO1xuIl19