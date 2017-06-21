'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

var ZeroOrMorePartsDefinition = function (_SequenceOfPartsDefin) {
  _inherits(ZeroOrMorePartsDefinition, _SequenceOfPartsDefin);

  function ZeroOrMorePartsDefinition() {
    _classCallCheck(this, ZeroOrMorePartsDefinition);

    var asteriskTerminalSymbolContent = '*';

    return _possibleConstructorReturn(this, (ZeroOrMorePartsDefinition.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsDefinition)).call(this, asteriskTerminalSymbolContent));
  }

  return ZeroOrMorePartsDefinition;
}(SequenceOfPartsDefinition);

module.exports = ZeroOrMorePartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL3plcm9Pck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIiwicmVxdWlyZSIsIlplcm9Pck1vcmVQYXJ0c0RlZmluaXRpb24iLCJhc3Rlcmlza1Rlcm1pbmFsU3ltYm9sQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLDRCQUE0QkMsUUFBUSwrQkFBUixDQUFsQzs7SUFFTUMseUI7OztBQUNKLHVDQUFjO0FBQUE7O0FBQ1osUUFBTUMsZ0NBQWdDLEdBQXRDOztBQURZLGlKQUdOQSw2QkFITTtBQUliOzs7RUFMcUNILHlCOztBQVF4Q0ksT0FBT0MsT0FBUCxHQUFpQkgseUJBQWpCIiwiZmlsZSI6Inplcm9Pck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vc2VxdWVuY2VPZlBhcnRzJyk7XG5cbmNsYXNzIFplcm9Pck1vcmVQYXJ0c0RlZmluaXRpb24gZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnKic7XG5cbiAgICBzdXBlcihhc3Rlcmlza1Rlcm1pbmFsU3ltYm9sQ29udGVudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBaZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uO1xuIl19