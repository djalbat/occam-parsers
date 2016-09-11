'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonParser = require('./commonParser');

var GallinaParser = function (_CommonParser) {
  _inherits(GallinaParser, _CommonParser);

  function GallinaParser() {
    _classCallCheck(this, GallinaParser);

    return _possibleConstructorReturn(this, (GallinaParser.__proto__ || Object.getPrototypeOf(GallinaParser)).apply(this, arguments));
  }

  return GallinaParser;
}(CommonParser);

module.exports = GallinaParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9nYWxsaW5hUGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbW1vblBhcnNlciIsInJlcXVpcmUiLCJHYWxsaW5hUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZ0JDLFFBQVEsZ0JBQVIsQ0FBcEI7O0lBRU1DLGE7Ozs7Ozs7Ozs7RUFBc0JGLFk7O0FBSTVCRyxPQUFPQyxPQUFQLEdBQWlCRixhQUFqQiIsImZpbGUiOiJnYWxsaW5hUGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29tbW9uUGFyc2VyICA9IHJlcXVpcmUoJy4vY29tbW9uUGFyc2VyJyk7XG5cbmNsYXNzIEdhbGxpbmFQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYWxsaW5hUGFyc2VyO1xuIl19