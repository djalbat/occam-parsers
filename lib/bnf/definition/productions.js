'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    OneOrMorePartsPart = require('../../common/part/oneOrMoreParts');

var ProductionsDefinition = function (_Definition) {
  _inherits(ProductionsDefinition, _Definition);

  function ProductionsDefinition() {
    _classCallCheck(this, ProductionsDefinition);

    var terminalPart = null,
        noWhitespace = false,
        productionProductionName = 'production',
        oneOrMoreProductionProductionNamePartsPart = new OneOrMorePartsPart(terminalPart, productionProductionName, noWhitespace),
        parts = [oneOrMoreProductionProductionNamePartsPart];

    return _possibleConstructorReturn(this, (ProductionsDefinition.__proto__ || Object.getPrototypeOf(ProductionsDefinition)).call(this, parts));
  }

  return ProductionsDefinition;
}(Definition);

module.exports = ProductionsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wcm9kdWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlByb2R1Y3Rpb25zRGVmaW5pdGlvbiIsInRlcm1pbmFsUGFydCIsIm5vV2hpdGVzcGFjZSIsInByb2R1Y3Rpb25Qcm9kdWN0aW9uTmFtZSIsIm9uZU9yTW9yZVByb2R1Y3Rpb25Qcm9kdWN0aW9uTmFtZVBhcnRzUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLGtDQUFSLENBRDNCOztJQUdNRSxxQjs7O0FBQ0osbUNBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLElBQXJCO0FBQUEsUUFDTUMsZUFBZSxLQURyQjtBQUFBLFFBRU1DLDJCQUEyQixZQUZqQztBQUFBLFFBR01DLDZDQUE2QyxJQUFJTCxrQkFBSixDQUF1QkUsWUFBdkIsRUFBcUNFLHdCQUFyQyxFQUErREQsWUFBL0QsQ0FIbkQ7QUFBQSxRQUlNRyxRQUFRLENBQ05ELDBDQURNLENBSmQ7O0FBRFkseUlBU05DLEtBVE07QUFVYjs7O0VBWGlDUixVOztBQWNwQ1MsT0FBT0MsT0FBUCxHQUFpQlAscUJBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvb25lT3JNb3JlUGFydHMnKTtcblxuY2xhc3MgUHJvZHVjdGlvbnNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IG51bGwsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIFxuICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uTmFtZSA9ICdwcm9kdWN0aW9uJyxcbiAgICAgICAgICBvbmVPck1vcmVQcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHRlcm1pbmFsUGFydCwgcHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb25lT3JNb3JlUHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25zRGVmaW5pdGlvbjtcbiJdfQ==