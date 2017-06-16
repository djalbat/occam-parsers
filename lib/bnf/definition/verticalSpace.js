'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    EndOfLinePart = require('../part/endOfLine'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts');

var VerticalSpaceDefinition = function (_Definition) {
  _inherits(VerticalSpaceDefinition, _Definition);

  function VerticalSpaceDefinition() {
    _classCallCheck(this, VerticalSpaceDefinition);

    var endOfLinePart = new EndOfLinePart(),
        oneOrMoreEndOfLinePartsPart = new OneOrMorePartsPart(endOfLinePart),
        parts = [oneOrMoreEndOfLinePartsPart];

    return _possibleConstructorReturn(this, (VerticalSpaceDefinition.__proto__ || Object.getPrototypeOf(VerticalSpaceDefinition)).call(this, parts));
  }

  return VerticalSpaceDefinition;
}(Definition);

module.exports = VerticalSpaceDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi92ZXJ0aWNhbFNwYWNlLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiRW5kT2ZMaW5lUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlZlcnRpY2FsU3BhY2VEZWZpbml0aW9uIiwiZW5kT2ZMaW5lUGFydCIsIm9uZU9yTW9yZUVuZE9mTGluZVBhcnRzUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBRHRCO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLHdCQUFSLENBRjNCOztJQUlNRyx1Qjs7O0FBQ0oscUNBQWM7QUFBQTs7QUFDWixRQUFNQyxnQkFBZ0IsSUFBSUgsYUFBSixFQUF0QjtBQUFBLFFBQ01JLDhCQUE4QixJQUFJSCxrQkFBSixDQUF1QkUsYUFBdkIsQ0FEcEM7QUFBQSxRQUVNRSxRQUFRLENBQ05ELDJCQURNLENBRmQ7O0FBRFksNklBT05DLEtBUE07QUFRYjs7O0VBVG1DUCxVOztBQVl0Q1EsT0FBT0MsT0FBUCxHQUFpQkwsdUJBQWpCIiwiZmlsZSI6InZlcnRpY2FsU3BhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBFbmRPZkxpbmVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9lbmRPZkxpbmUnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvb25lT3JNb3JlUGFydHMnKTtcblxuY2xhc3MgVmVydGljYWxTcGFjZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZW5kT2ZMaW5lUGFydCA9IG5ldyBFbmRPZkxpbmVQYXJ0KCksXG4gICAgICAgICAgb25lT3JNb3JlRW5kT2ZMaW5lUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChlbmRPZkxpbmVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZUVuZE9mTGluZVBhcnRzUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsU3BhY2VEZWZpbml0aW9uO1xuIl19