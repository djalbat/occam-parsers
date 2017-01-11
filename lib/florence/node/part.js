'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TransparentNode = require('./transparent');

var PartNode = function (_TransparentNode) {
  _inherits(PartNode, _TransparentNode);

  function PartNode() {
    _classCallCheck(this, PartNode);

    return _possibleConstructorReturn(this, (PartNode.__proto__ || Object.getPrototypeOf(PartNode)).apply(this, arguments));
  }

  return PartNode;
}(TransparentNode);

module.exports = PartNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9ub2RlL3BhcnQuanMiXSwibmFtZXMiOlsiVHJhbnNwYXJlbnROb2RlIiwicmVxdWlyZSIsIlBhcnROb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBSUEsa0JBQWtCQyxRQUFRLGVBQVIsQ0FBdEI7O0lBRU1DLFE7Ozs7Ozs7Ozs7RUFBaUJGLGU7O0FBRXZCRyxPQUFPQyxPQUFQLEdBQWlCRixRQUFqQiIsImZpbGUiOiJwYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHJhbnNwYXJlbnROb2RlID0gcmVxdWlyZSgnLi90cmFuc3BhcmVudCcpO1xuXG5jbGFzcyBQYXJ0Tm9kZSBleHRlbmRzIFRyYW5zcGFyZW50Tm9kZSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnROb2RlO1xuIl19