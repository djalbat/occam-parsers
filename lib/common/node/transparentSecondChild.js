'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../bnf/node/nonTerminal');

var TransparentSecondChildNode = function (_NonTerminalNode) {
  _inherits(TransparentSecondChildNode, _NonTerminalNode);

  function TransparentSecondChildNode() {
    _classCallCheck(this, TransparentSecondChildNode);

    return _possibleConstructorReturn(this, (TransparentSecondChildNode.__proto__ || Object.getPrototypeOf(TransparentSecondChildNode)).apply(this, arguments));
  }

  _createClass(TransparentSecondChildNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = nodes,
          ///
      secondChildNode = second(childNodes);

      nodes = [secondChildNode];

      return nodes;
    }
  }]);

  return TransparentSecondChildNode;
}(NonTerminalNode);

module.exports = TransparentSecondChildNode;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90cmFuc3BhcmVudFNlY29uZENoaWxkLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJUcmFuc3BhcmVudFNlY29uZENoaWxkTm9kZSIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwic2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGtCQUFrQkMsUUFBUSw0QkFBUixDQUF0Qjs7SUFFTUMsMEI7Ozs7Ozs7Ozs7OzhCQUNhQyxLLEVBQU9DLGMsRUFBZ0I7QUFDdEMsVUFBSUMsYUFBYUYsS0FBakI7QUFBQSxVQUF3QjtBQUNwQkcsd0JBQWtCQyxPQUFPRixVQUFQLENBRHRCOztBQUdBRixjQUFRLENBQUNHLGVBQUQsQ0FBUjs7QUFFQSxhQUFPSCxLQUFQO0FBQ0Q7Ozs7RUFSc0NILGU7O0FBV3pDUSxPQUFPQyxPQUFQLEdBQWlCUCwwQkFBakI7O0FBRUEsU0FBU0ssTUFBVCxDQUFnQkcsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ0cmFuc3BhcmVudFNlY29uZENoaWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vYm5mL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgVHJhbnNwYXJlbnRTZWNvbmRDaGlsZE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2Rlcyk7XG5cbiAgICBub2RlcyA9IFtzZWNvbmRDaGlsZE5vZGVdO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNwYXJlbnRTZWNvbmRDaGlsZE5vZGU7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==