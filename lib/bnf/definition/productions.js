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

    var noWhitespace = false,
        productionProductionName = 'production',
        verticalSpaceProductionName = 'verticalSpace',
        productionProductionNamePart = new ProductionNamePart(productionProductionName, noWhitespace),
        verticalSpaceProductionNamePart = new ProductionNamePart(verticalSpaceProductionName, noWhitespace),
        optionalVerticalSpaceProductionNamePartPart = new OptionalPartPart(verticalSpaceProductionNamePart, noWhitespace),
        oneOrMoreProductionProductionNamePartsPart = new OneOrMorePartsPart(productionProductionNamePart, noWhitespace),
        parts = [optionalVerticalSpaceProductionNamePartPart, oneOrMoreProductionProductionNamePartsPart];

    return _possibleConstructorReturn(this, (ProductionsDefinition.__proto__ || Object.getPrototypeOf(ProductionsDefinition)).call(this, parts));
  }

  return ProductionsDefinition;
}(Definition);

module.exports = ProductionsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wcm9kdWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIk9wdGlvbmFsUGFydFBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJQcm9kdWN0aW9uc0RlZmluaXRpb24iLCJub1doaXRlc3BhY2UiLCJwcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWUiLCJ2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbk5hbWUiLCJwcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWVQYXJ0IiwidmVydGljYWxTcGFjZVByb2R1Y3Rpb25OYW1lUGFydCIsIm9wdGlvbmFsVmVydGljYWxTcGFjZVByb2R1Y3Rpb25OYW1lUGFydFBhcnQiLCJvbmVPck1vcmVQcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLG1CQUFtQkQsUUFBUSxzQkFBUixDQUR6QjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSx3QkFBUixDQUYzQjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSxrQ0FBUixDQUgzQjs7SUFLTUkscUI7OztBQUNKLG1DQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxLQUFyQjtBQUFBLFFBQ01DLDJCQUEyQixZQURqQztBQUFBLFFBRU1DLDhCQUE4QixlQUZwQztBQUFBLFFBR01DLCtCQUErQixJQUFJTCxrQkFBSixDQUF1Qkcsd0JBQXZCLEVBQWlERCxZQUFqRCxDQUhyQztBQUFBLFFBSU1JLGtDQUFrQyxJQUFJTixrQkFBSixDQUF1QkksMkJBQXZCLEVBQW9ERixZQUFwRCxDQUp4QztBQUFBLFFBS01LLDhDQUE4QyxJQUFJVCxnQkFBSixDQUFxQlEsK0JBQXJCLEVBQXNESixZQUF0RCxDQUxwRDtBQUFBLFFBTU1NLDZDQUE2QyxJQUFJVCxrQkFBSixDQUF1Qk0sNEJBQXZCLEVBQXFESCxZQUFyRCxDQU5uRDtBQUFBLFFBT01PLFFBQVEsQ0FDTkYsMkNBRE0sRUFFTkMsMENBRk0sQ0FQZDs7QUFEWSx5SUFhTkMsS0FiTTtBQWNiOzs7RUFmaUNiLFU7O0FBa0JwQ2MsT0FBT0MsT0FBUCxHQUFpQlYscUJBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgT3B0aW9uYWxQYXJ0UGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvb3B0aW9uYWxQYXJ0JyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBQcm9kdWN0aW9uc0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIFxuICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uTmFtZSA9ICdwcm9kdWN0aW9uJyxcbiAgICAgICAgICB2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbk5hbWUgPSAndmVydGljYWxTcGFjZScsXG4gICAgICAgICAgcHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBvcHRpb25hbFZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uTmFtZVBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQodmVydGljYWxTcGFjZVByb2R1Y3Rpb25OYW1lUGFydCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBvbmVPck1vcmVQcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHByb2R1Y3Rpb25Qcm9kdWN0aW9uTmFtZVBhcnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvcHRpb25hbFZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uTmFtZVBhcnRQYXJ0LFxuICAgICAgICAgICAgb25lT3JNb3JlUHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25zRGVmaW5pdGlvbjtcbiJdfQ==