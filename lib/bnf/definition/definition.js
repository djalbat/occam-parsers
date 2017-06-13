'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    OptionalPartPart = require('../part/optionalPart'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    ProductionNamePart = require('../../common/part/productionName');

var DefinitionDefinition = function (_Definition) {
  _inherits(DefinitionDefinition, _Definition);

  function DefinitionDefinition() {
    _classCallCheck(this, DefinitionDefinition);

    var partProductionName = 'part',
        verticalSpaceProductionName = 'verticalSpace',
        partProductionNamePart = new ProductionNamePart(partProductionName),
        verticalSpaceProductionNamePart = new ProductionNamePart(verticalSpaceProductionName),
        oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(partProductionNamePart),
        optionalVerticalSpaceProductionNamePartPart = new OptionalPartPart(verticalSpaceProductionNamePart),
        parts = [oneOrMorePartProductionNamePartsPart, optionalVerticalSpaceProductionNamePartPart];

    return _possibleConstructorReturn(this, (DefinitionDefinition.__proto__ || Object.getPrototypeOf(DefinitionDefinition)).call(this, parts));
  }

  return DefinitionDefinition;
}(Definition);

module.exports = DefinitionDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9kZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiT3B0aW9uYWxQYXJ0UGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIkRlZmluaXRpb25EZWZpbml0aW9uIiwicGFydFByb2R1Y3Rpb25OYW1lIiwidmVydGljYWxTcGFjZVByb2R1Y3Rpb25OYW1lIiwicGFydFByb2R1Y3Rpb25OYW1lUGFydCIsInZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uTmFtZVBhcnQiLCJvbmVPck1vcmVQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQiLCJvcHRpb25hbFZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uTmFtZVBhcnRQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxtQkFBbUJELFFBQVEsc0JBQVIsQ0FEekI7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FGM0I7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsa0NBQVIsQ0FIM0I7O0lBS01JLG9COzs7QUFDSixrQ0FBYztBQUFBOztBQUNaLFFBQU1DLHFCQUFxQixNQUEzQjtBQUFBLFFBQ01DLDhCQUE4QixlQURwQztBQUFBLFFBRU1DLHlCQUF5QixJQUFJSixrQkFBSixDQUF1QkUsa0JBQXZCLENBRi9CO0FBQUEsUUFHTUcsa0NBQWtDLElBQUlMLGtCQUFKLENBQXVCRywyQkFBdkIsQ0FIeEM7QUFBQSxRQUlNRyx1Q0FBdUMsSUFBSVAsa0JBQUosQ0FBdUJLLHNCQUF2QixDQUo3QztBQUFBLFFBS01HLDhDQUE4QyxJQUFJVCxnQkFBSixDQUFxQk8sK0JBQXJCLENBTHBEO0FBQUEsUUFNTUcsUUFBUSxDQUNORixvQ0FETSxFQUVOQywyQ0FGTSxDQU5kOztBQURZLHVJQVlOQyxLQVpNO0FBYWI7OztFQWRnQ1osVTs7QUFpQm5DYSxPQUFPQyxPQUFQLEdBQWlCVCxvQkFBakIiLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIE9wdGlvbmFsUGFydFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L29wdGlvbmFsUGFydCcpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgRGVmaW5pdGlvbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGFydFByb2R1Y3Rpb25OYW1lID0gJ3BhcnQnLFxuICAgICAgICAgIHZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uTmFtZSA9ICd2ZXJ0aWNhbFNwYWNlJyxcbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwYXJ0UHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIHZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgb25lT3JNb3JlUGFydFByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0KSxcbiAgICAgICAgICBvcHRpb25hbFZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uTmFtZVBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQodmVydGljYWxTcGFjZVByb2R1Y3Rpb25OYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQsXG4gICAgICAgICAgICBvcHRpb25hbFZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uTmFtZVBhcnRQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvbkRlZmluaXRpb247XG4iXX0=