'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TerminalNode = require('../../bnf/node/terminal');

var LabelNode = function (_TerminalNode) {
  _inherits(LabelNode, _TerminalNode);

  function LabelNode() {
    _classCallCheck(this, LabelNode);

    return _possibleConstructorReturn(this, (LabelNode.__proto__ || Object.getPrototypeOf(LabelNode)).apply(this, arguments));
  }

  _createClass(LabelNode, [{
    key: 'update',
    value: function update() {
      var significantToken = this.getSignificantToken(),
          significantTokenType = 'label'; ///

      significantToken.setType(significantTokenType);
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var firstNode = first(nodes),
          terminalNode = firstNode,
          ///
      significantToken = terminalNode.getSignificantToken(),
          labelNode = new LabelNode(significantToken);

      nodes = [labelNode];

      return nodes;
    }
  }]);

  return LabelNode;
}(TerminalNode);

module.exports = LabelNode;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9ub2RlL2xhYmVsLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJMYWJlbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwic2V0VHlwZSIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJmaXJzdE5vZGUiLCJmaXJzdCIsInRlcm1pbmFsTm9kZSIsImxhYmVsTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLHlCQUFSLENBQW5COztJQUVNQyxTOzs7Ozs7Ozs7Ozs2QkFDSztBQUNQLFVBQUlDLG1CQUFtQixLQUFLQyxtQkFBTCxFQUF2QjtBQUFBLFVBQ0lDLHVCQUF1QixPQUQzQixDQURPLENBRTZCOztBQUVwQ0YsdUJBQWlCRyxPQUFqQixDQUF5QkQsb0JBQXpCO0FBQ0Q7Ozs4QkFFZ0JFLEssRUFBT0MsYyxFQUFnQjtBQUN0QyxVQUFJQyxZQUFZQyxNQUFNSCxLQUFOLENBQWhCO0FBQUEsVUFDSUksZUFBZUYsU0FEbkI7QUFBQSxVQUMrQjtBQUMzQk4seUJBQW1CUSxhQUFhUCxtQkFBYixFQUZ2QjtBQUFBLFVBR0lRLFlBQVksSUFBSVYsU0FBSixDQUFjQyxnQkFBZCxDQUhoQjs7QUFLQUksY0FBUSxDQUFDSyxTQUFELENBQVI7O0FBRUEsYUFBT0wsS0FBUDtBQUNEOzs7O0VBakJxQlAsWTs7QUFvQnhCYSxPQUFPQyxPQUFQLEdBQWlCWixTQUFqQjs7QUFFQSxTQUFTUSxLQUFULENBQWVLLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJsYWJlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2JuZi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIExhYmVsTm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIHVwZGF0ZSgpIHtcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9ICdsYWJlbCc7IC8vL1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbi5zZXRUeXBlKHNpZ25pZmljYW50VG9rZW5UeXBlKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpLFxuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdE5vZGUsICAvLy9cbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIGxhYmVsTm9kZSA9IG5ldyBMYWJlbE5vZGUoc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICBub2RlcyA9IFtsYWJlbE5vZGVdO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGFiZWxOb2RlO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==