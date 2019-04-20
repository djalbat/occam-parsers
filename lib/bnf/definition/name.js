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

            var noWhitespace = false,
                nameSignificantTokenType = nameType,
                ///
            nameSignificantTokenTypePart = new SignificantTokenTypePart(nameSignificantTokenType, noWhitespace),
                parts = [nameSignificantTokenTypePart];

            return _possibleConstructorReturn(this, (NameDefinition.__proto__ || Object.getPrototypeOf(NameDefinition)).call(this, parts));
      }

      return NameDefinition;
}(Definition);

module.exports = NameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9uYW1lLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwidHlwZXMiLCJuYW1lVHlwZSIsIk5hbWVEZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlIiwibmFtZVNpZ25pZmljYW50VG9rZW5UeXBlIiwibmFtZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsYUFBYUQsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUUsMkJBQTJCRixRQUFRLHVDQUFSLENBRGpDOztBQUdNLElBQUVHLEtBQUYsR0FBWUosTUFBWixDQUFFSSxLQUFGO0FBQUEsSUFDRUMsUUFERixHQUNlRCxLQURmLENBQ0VDLFFBREY7O0lBR0FDLGM7OztBQUNKLGdDQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLGVBQWUsS0FBckI7QUFBQSxnQkFDTUMsMkJBQTJCSCxRQURqQztBQUFBLGdCQUM0QztBQUN0Q0ksMkNBQStCLElBQUlOLHdCQUFKLENBQTZCSyx3QkFBN0IsRUFBdURELFlBQXZELENBRnJDO0FBQUEsZ0JBR01HLFFBQVEsQ0FDTkQsNEJBRE0sQ0FIZDs7QUFEWSxtSUFRTkMsS0FSTTtBQVNiOzs7RUFWMEJSLFU7O0FBYTdCUyxPQUFPQyxPQUFQLEdBQWlCTixjQUFqQiIsImZpbGUiOiJuYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY29uc3QgeyB0eXBlcyB9ID0gbGV4ZXJzLFxuICAgICAgeyBuYW1lVHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIE5hbWVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIG5hbWVTaWduaWZpY2FudFRva2VuVHlwZSA9IG5hbWVUeXBlLCAgLy8vXG4gICAgICAgICAgbmFtZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQobmFtZVNpZ25pZmljYW50VG9rZW5UeXBlLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbmFtZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5hbWVEZWZpbml0aW9uO1xuIl19