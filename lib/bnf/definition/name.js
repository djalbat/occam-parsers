'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    SignificantTokenTypePart = require('../part/terminal/significantTokenType');

var types = lexers.types,
    nameType = types.nameType;

var NameDefinition = function (_Definition) {
      _inherits(NameDefinition, _Definition);

      function NameDefinition() {
            _classCallCheck(this, NameDefinition);

            var nonWhitespace = false,
                nameSignificantTokenType = nameType,
                ///
            nameSignificantTokenTypePart = new SignificantTokenTypePart(nameSignificantTokenType, nonWhitespace),
                parts = [nameSignificantTokenTypePart];

            return _possibleConstructorReturn(this, (NameDefinition.__proto__ || Object.getPrototypeOf(NameDefinition)).call(this, parts));
      }

      return NameDefinition;
}(Definition);

module.exports = NameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9uYW1lLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwidHlwZXMiLCJuYW1lVHlwZSIsIk5hbWVEZWZpbml0aW9uIiwibm9uV2hpdGVzcGFjZSIsIm5hbWVTaWduaWZpY2FudFRva2VuVHlwZSIsIm5hbWVTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGFBQWFELFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01FLDJCQUEyQkYsUUFBUSx1Q0FBUixDQURqQzs7QUFHTSxJQUFFRyxLQUFGLEdBQVlKLE1BQVosQ0FBRUksS0FBRjtBQUFBLElBQ0VDLFFBREYsR0FDZUQsS0FEZixDQUNFQyxRQURGOztJQUdBQyxjOzs7QUFDSixnQ0FBYztBQUFBOztBQUNaLGdCQUFNQyxnQkFBZ0IsS0FBdEI7QUFBQSxnQkFDTUMsMkJBQTJCSCxRQURqQztBQUFBLGdCQUM0QztBQUN0Q0ksMkNBQStCLElBQUlOLHdCQUFKLENBQTZCSyx3QkFBN0IsRUFBdURELGFBQXZELENBRnJDO0FBQUEsZ0JBR01HLFFBQVEsQ0FDTkQsNEJBRE0sQ0FIZDs7QUFEWSxtSUFRTkMsS0FSTTtBQVNiOzs7RUFWMEJSLFU7O0FBYTdCUyxPQUFPQyxPQUFQLEdBQWlCTixjQUFqQiIsImZpbGUiOiJuYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY29uc3QgeyB0eXBlcyB9ID0gbGV4ZXJzLFxuICAgICAgeyBuYW1lVHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIE5hbWVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vbldoaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGUgPSBuYW1lVHlwZSwgIC8vL1xuICAgICAgICAgIG5hbWVTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KG5hbWVTaWduaWZpY2FudFRva2VuVHlwZSwgbm9uV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTmFtZURlZmluaXRpb247XG4iXX0=