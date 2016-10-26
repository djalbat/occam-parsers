'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TerminalNode = require('../terminal');

var ErrorNode = function (_TerminalNode) {
  _inherits(ErrorNode, _TerminalNode);

  function ErrorNode() {
    _classCallCheck(this, ErrorNode);

    var str = 'ERROR',
        type = null;

    return _possibleConstructorReturn(this, (ErrorNode.__proto__ || Object.getPrototypeOf(ErrorNode)).call(this, str, type));
  }

  return ErrorNode;
}(TerminalNode);

module.exports = ErrorNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ub2RlL3Rlcm1pbmFsL2Vycm9yLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJFcnJvck5vZGUiLCJzdHIiLCJ0eXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxhQUFSLENBQW5COztJQUVNQyxTOzs7QUFDSix1QkFBYztBQUFBOztBQUNaLFFBQUlDLE1BQU0sT0FBVjtBQUFBLFFBQ0lDLE9BQU8sSUFEWDs7QUFEWSxpSEFJTkQsR0FKTSxFQUlEQyxJQUpDO0FBS2I7OztFQU5xQkosWTs7QUFTeEJLLE9BQU9DLE9BQVAsR0FBaUJKLFNBQWpCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vdGVybWluYWwnKTtcblxuY2xhc3MgRXJyb3JOb2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdmFyIHN0ciA9ICdFUlJPUicsXG4gICAgICAgIHR5cGUgPSBudWxsO1xuICAgIFxuICAgIHN1cGVyKHN0ciwgdHlwZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvck5vZGU7XG4iXX0=