'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SecondChildNode = require('./secondChildNode');

var CommaThenLabelNode = function (_SecondChildNode) {
  _inherits(CommaThenLabelNode, _SecondChildNode);

  function CommaThenLabelNode() {
    _classCallCheck(this, CommaThenLabelNode);

    return _possibleConstructorReturn(this, (CommaThenLabelNode.__proto__ || Object.getPrototypeOf(CommaThenLabelNode)).apply(this, arguments));
  }

  return CommaThenLabelNode;
}(SecondChildNode);

module.exports = CommaThenLabelNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9ub2RlL2NvbW1hVGhlbkxhYmVsLmpzIl0sIm5hbWVzIjpbIlNlY29uZENoaWxkTm9kZSIsInJlcXVpcmUiLCJDb21tYVRoZW5MYWJlbE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFJQSxrQkFBa0JDLFFBQVEsbUJBQVIsQ0FBdEI7O0lBRU1DLGtCOzs7Ozs7Ozs7O0VBQTJCRixlOztBQUVqQ0csT0FBT0MsT0FBUCxHQUFpQkYsa0JBQWpCIiwiZmlsZSI6ImNvbW1hVGhlbkxhYmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2Vjb25kQ2hpbGROb2RlID0gcmVxdWlyZSgnLi9zZWNvbmRDaGlsZE5vZGUnKTtcblxuY2xhc3MgQ29tbWFUaGVuTGFiZWxOb2RlIGV4dGVuZHMgU2Vjb25kQ2hpbGROb2RlIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbWFUaGVuTGFiZWxOb2RlO1xuIl19