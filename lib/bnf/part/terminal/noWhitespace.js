'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var TerminalPart = require('../../part/terminal'),
    NoWhitespaceNode = require('../../../common/node/terminal/noWhitespace');

var specialSymbols = lexers.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var NoWhitespacePart = function (_TerminalPart) {
  _inherits(NoWhitespacePart, _TerminalPart);

  function NoWhitespacePart() {
    _classCallCheck(this, NoWhitespacePart);

    return _possibleConstructorReturn(this, (NoWhitespacePart.__proto__ || Object.getPrototypeOf(NoWhitespacePart)).apply(this, arguments));
  }

  _createClass(NoWhitespacePart, [{
    key: 'parse',
    value: function parse(configuration) {
      var noWhitespaceNode = null;

      var savedIndex = configuration.getSavedIndex(),
          nextToken = configuration.getNextToken(),
          token = nextToken; ///

      if (token !== null) {
        var tokenWhitespaceToken = token.isWhitespaceToken();

        if (!tokenWhitespaceToken) {
          noWhitespaceNode = NoWhitespaceNode.fromNothing();
        }
      }

      configuration.backtrack(savedIndex);

      return noWhitespaceNode;
    }
  }, {
    key: 'asString',
    value: function asString() {
      var string = NO_WHITESPACE; ///

      return string;
    }
  }, {
    key: 'clone',
    value: function clone() {
      return _get(NoWhitespacePart.prototype.__proto__ || Object.getPrototypeOf(NoWhitespacePart.prototype), 'clone', this).call(this, NoWhitespacePart);
    }
  }]);

  return NoWhitespacePart;
}(TerminalPart);

module.exports = NoWhitespacePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC9ub1doaXRlc3BhY2UuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlRlcm1pbmFsUGFydCIsIk5vV2hpdGVzcGFjZU5vZGUiLCJzcGVjaWFsU3ltYm9scyIsIk5PX1dISVRFU1BBQ0UiLCJOb1doaXRlc3BhY2VQYXJ0IiwiY29uZmlndXJhdGlvbiIsIm5vV2hpdGVzcGFjZU5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRUb2tlbiIsImdldE5leHRUb2tlbiIsInRva2VuIiwidG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJpc1doaXRlc3BhY2VUb2tlbiIsImZyb21Ob3RoaW5nIiwiYmFja3RyYWNrIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGVBQWVELFFBQVEscUJBQVIsQ0FBckI7QUFBQSxJQUNNRSxtQkFBbUJGLFFBQVEsNENBQVIsQ0FEekI7O0FBR00sSUFBRUcsY0FBRixHQUFxQkosTUFBckIsQ0FBRUksY0FBRjtBQUFBLElBQ0VDLGFBREYsR0FDb0JELGNBRHBCLENBQ0VDLGFBREY7O0lBR0FDLGdCOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlO0FBQ25CLFVBQUlDLG1CQUFtQixJQUF2Qjs7QUFFQSxVQUFNQyxhQUFhRixjQUFjRyxhQUFkLEVBQW5CO0FBQUEsVUFDTUMsWUFBWUosY0FBY0ssWUFBZCxFQURsQjtBQUFBLFVBRU1DLFFBQVFGLFNBRmQsQ0FIbUIsQ0FLTTs7QUFFekIsVUFBSUUsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLFlBQU1DLHVCQUF1QkQsTUFBTUUsaUJBQU4sRUFBN0I7O0FBRUEsWUFBSSxDQUFDRCxvQkFBTCxFQUEyQjtBQUN6Qk4sNkJBQW1CTCxpQkFBaUJhLFdBQWpCLEVBQW5CO0FBQ0Q7QUFDRjs7QUFFRFQsb0JBQWNVLFNBQWQsQ0FBd0JSLFVBQXhCOztBQUVBLGFBQU9ELGdCQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1VLFNBQVNiLGFBQWYsQ0FEUyxDQUNxQjs7QUFFOUIsYUFBT2EsTUFBUDtBQUNEOzs7NEJBRU87QUFBRSx1SUFBbUJaLGdCQUFuQjtBQUF1Qzs7OztFQTNCcEJKLFk7O0FBOEIvQmlCLE9BQU9DLE9BQVAsR0FBaUJkLGdCQUFqQiIsImZpbGUiOiJub1doaXRlc3BhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBUZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L3Rlcm1pbmFsJyksXG4gICAgICBOb1doaXRlc3BhY2VOb2RlID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwvbm9XaGl0ZXNwYWNlJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIE5vV2hpdGVzcGFjZVBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IG5vV2hpdGVzcGFjZU5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbmZpZ3VyYXRpb24uZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5leHRUb2tlbiA9IGNvbmZpZ3VyYXRpb24uZ2V0TmV4dFRva2VuKCksXG4gICAgICAgICAgdG9rZW4gPSBuZXh0VG9rZW47IC8vL1xuXG4gICAgaWYgKHRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0b2tlbldoaXRlc3BhY2VUb2tlbiA9IHRva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG5cbiAgICAgIGlmICghdG9rZW5XaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgbm9XaGl0ZXNwYWNlTm9kZSA9IE5vV2hpdGVzcGFjZU5vZGUuZnJvbU5vdGhpbmcoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWd1cmF0aW9uLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VOb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gTk9fV0hJVEVTUEFDRTsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShOb1doaXRlc3BhY2VQYXJ0KTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vV2hpdGVzcGFjZVBhcnQ7XG4iXX0=