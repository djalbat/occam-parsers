'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    OptionalPartPart = require('../../common/part/optionalPart'),
    OneOrMorePartsPart = require('../../common/part/oneOrMoreParts');

var DefinitionDefinition = function (_Definition) {
  _inherits(DefinitionDefinition, _Definition);

  function DefinitionDefinition() {
    _classCallCheck(this, DefinitionDefinition);

    var terminalPart = null,
        noWhitespace = false,
        partProductionName = 'part',
        verticalSpaceProductionName = 'verticalSpace',
        oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(terminalPart, partProductionName, noWhitespace),
        optionalVerticalSpaceProductionNamePartPart = new OptionalPartPart(terminalPart, verticalSpaceProductionName, noWhitespace),
        parts = [oneOrMorePartProductionNamePartsPart, optionalVerticalSpaceProductionNamePartPart];

    return _possibleConstructorReturn(this, (DefinitionDefinition.__proto__ || Object.getPrototypeOf(DefinitionDefinition)).call(this, parts));
  }

  return DefinitionDefinition;
}(Definition);

module.exports = DefinitionDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9kZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiT3B0aW9uYWxQYXJ0UGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIkRlZmluaXRpb25EZWZpbml0aW9uIiwidGVybWluYWxQYXJ0Iiwibm9XaGl0ZXNwYWNlIiwicGFydFByb2R1Y3Rpb25OYW1lIiwidmVydGljYWxTcGFjZVByb2R1Y3Rpb25OYW1lIiwib25lT3JNb3JlUGFydFByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0Iiwib3B0aW9uYWxWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbk5hbWVQYXJ0UGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsbUJBQW1CRCxRQUFRLGdDQUFSLENBRHpCO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLGtDQUFSLENBRjNCOztJQUlNRyxvQjs7O0FBQ0osa0NBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLElBQXJCO0FBQUEsUUFDTUMsZUFBZSxLQURyQjtBQUFBLFFBRU1DLHFCQUFxQixNQUYzQjtBQUFBLFFBR01DLDhCQUE4QixlQUhwQztBQUFBLFFBSU1DLHVDQUF1QyxJQUFJTixrQkFBSixDQUF1QkUsWUFBdkIsRUFBcUNFLGtCQUFyQyxFQUF5REQsWUFBekQsQ0FKN0M7QUFBQSxRQUtNSSw4Q0FBOEMsSUFBSVIsZ0JBQUosQ0FBcUJHLFlBQXJCLEVBQW1DRywyQkFBbkMsRUFBZ0VGLFlBQWhFLENBTHBEO0FBQUEsUUFNTUssUUFBUSxDQUNORixvQ0FETSxFQUVOQywyQ0FGTSxDQU5kOztBQURZLHVJQVlOQyxLQVpNO0FBYWI7OztFQWRnQ1gsVTs7QUFpQm5DWSxPQUFPQyxPQUFQLEdBQWlCVCxvQkFBakIiLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIE9wdGlvbmFsUGFydFBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9vcHRpb25hbFBhcnQnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L29uZU9yTW9yZVBhcnRzJyk7XG5cbmNsYXNzIERlZmluaXRpb25EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IG51bGwsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lID0gJ3BhcnQnLFxuICAgICAgICAgIHZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uTmFtZSA9ICd2ZXJ0aWNhbFNwYWNlJyxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHRlcm1pbmFsUGFydCwgcGFydFByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIG9wdGlvbmFsVmVydGljYWxTcGFjZVByb2R1Y3Rpb25OYW1lUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydCh0ZXJtaW5hbFBhcnQsIHZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZVBhcnRQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCxcbiAgICAgICAgICAgIG9wdGlvbmFsVmVydGljYWxTcGFjZVByb2R1Y3Rpb25OYW1lUGFydFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbml0aW9uRGVmaW5pdGlvbjtcbiJdfQ==