'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    OptionalPartPart = require('../part/optionalPart'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    ProductionNamePart = require('../../common/part/productionName');

var ProductionsDefinition = function (_Definition) {
  _inherits(ProductionsDefinition, _Definition);

  function ProductionsDefinition() {
    _classCallCheck(this, ProductionsDefinition);

    var productionProductionName = 'production',
        verticalSpaceProductionName = 'verticalSpace',
        productionProductionNamePart = new ProductionNamePart(productionProductionName),
        verticalSpaceProductionNamePart = new ProductionNamePart(verticalSpaceProductionName),
        optionalVerticalSpaceProductionNamePartPart = new OptionalPartPart(verticalSpaceProductionNamePart),
        oneOrMoreProductionProductionNamePartsPart = new OneOrMorePartsPart(productionProductionNamePart),
        parts = [optionalVerticalSpaceProductionNamePartPart, oneOrMoreProductionProductionNamePartsPart];

    return _possibleConstructorReturn(this, (ProductionsDefinition.__proto__ || Object.getPrototypeOf(ProductionsDefinition)).call(this, parts));
  }

  return ProductionsDefinition;
}(Definition);

module.exports = ProductionsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wcm9kdWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIk9wdGlvbmFsUGFydFBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJQcm9kdWN0aW9uc0RlZmluaXRpb24iLCJwcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWUiLCJ2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbk5hbWUiLCJwcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWVQYXJ0IiwidmVydGljYWxTcGFjZVByb2R1Y3Rpb25OYW1lUGFydCIsIm9wdGlvbmFsVmVydGljYWxTcGFjZVByb2R1Y3Rpb25OYW1lUGFydFBhcnQiLCJvbmVPck1vcmVQcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLG1CQUFtQkQsUUFBUSxzQkFBUixDQUR6QjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSx3QkFBUixDQUYzQjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSxrQ0FBUixDQUgzQjs7SUFLTUkscUI7OztBQUNKLG1DQUFjO0FBQUE7O0FBQ1osUUFBTUMsMkJBQTJCLFlBQWpDO0FBQUEsUUFDTUMsOEJBQThCLGVBRHBDO0FBQUEsUUFFTUMsK0JBQStCLElBQUlKLGtCQUFKLENBQXVCRSx3QkFBdkIsQ0FGckM7QUFBQSxRQUdNRyxrQ0FBa0MsSUFBSUwsa0JBQUosQ0FBdUJHLDJCQUF2QixDQUh4QztBQUFBLFFBSU1HLDhDQUE4QyxJQUFJUixnQkFBSixDQUFxQk8sK0JBQXJCLENBSnBEO0FBQUEsUUFLTUUsNkNBQTZDLElBQUlSLGtCQUFKLENBQXVCSyw0QkFBdkIsQ0FMbkQ7QUFBQSxRQU1NSSxRQUFRLENBQ05GLDJDQURNLEVBRU5DLDBDQUZNLENBTmQ7O0FBRFkseUlBWU5DLEtBWk07QUFhYjs7O0VBZGlDWixVOztBQWlCcENhLE9BQU9DLE9BQVAsR0FBaUJULHFCQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIE9wdGlvbmFsUGFydFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L29wdGlvbmFsUGFydCcpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgUHJvZHVjdGlvbnNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25Qcm9kdWN0aW9uTmFtZSA9ICdwcm9kdWN0aW9uJyxcbiAgICAgICAgICB2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbk5hbWUgPSAndmVydGljYWxTcGFjZScsXG4gICAgICAgICAgcHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICB2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydCh2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIG9wdGlvbmFsVmVydGljYWxTcGFjZVByb2R1Y3Rpb25OYW1lUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydCh2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbk5hbWVQYXJ0KSxcbiAgICAgICAgICBvbmVPck1vcmVQcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHByb2R1Y3Rpb25Qcm9kdWN0aW9uTmFtZVBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb3B0aW9uYWxWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbk5hbWVQYXJ0UGFydCxcbiAgICAgICAgICAgIG9uZU9yTW9yZVByb2R1Y3Rpb25Qcm9kdWN0aW9uTmFtZVBhcnRzUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uc0RlZmluaXRpb247XG4iXX0=