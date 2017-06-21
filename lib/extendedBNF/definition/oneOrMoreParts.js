'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

var OneOrMorePartsDefinition = function (_SequenceOfPartsDefin) {
  _inherits(OneOrMorePartsDefinition, _SequenceOfPartsDefin);

  function OneOrMorePartsDefinition() {
    _classCallCheck(this, OneOrMorePartsDefinition);

    var plusTerminalSymbolContent = '+';

    return _possibleConstructorReturn(this, (OneOrMorePartsDefinition.__proto__ || Object.getPrototypeOf(OneOrMorePartsDefinition)).call(this, plusTerminalSymbolContent));
  }

  return OneOrMorePartsDefinition;
}(SequenceOfPartsDefinition);

module.exports = OneOrMorePartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL29uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbIlNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24iLCJyZXF1aXJlIiwiT25lT3JNb3JlUGFydHNEZWZpbml0aW9uIiwicGx1c1Rlcm1pbmFsU3ltYm9sQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLDRCQUE0QkMsUUFBUSwrQkFBUixDQUFsQzs7SUFFTUMsd0I7OztBQUNKLHNDQUFjO0FBQUE7O0FBQ1osUUFBTUMsNEJBQTRCLEdBQWxDOztBQURZLCtJQUdOQSx5QkFITTtBQUliOzs7RUFMb0NILHlCOztBQVF2Q0ksT0FBT0MsT0FBUCxHQUFpQkgsd0JBQWpCIiwiZmlsZSI6Im9uZU9yTW9yZVBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9zZXF1ZW5jZU9mUGFydHMnKTtcblxuY2xhc3MgT25lT3JNb3JlUGFydHNEZWZpbml0aW9uIGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBsdXNUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnKyc7XG5cbiAgICBzdXBlcihwbHVzVGVybWluYWxTeW1ib2xDb250ZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvbjtcbiJdfQ==