'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoWhitespacePart = require('../part/terminal/noWhitespace'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var NoWhitespacePartNode = function (_NonTerminalNode) {
  _inherits(NoWhitespacePartNode, _NonTerminalNode);

  function NoWhitespacePartNode() {
    _classCallCheck(this, NoWhitespacePartNode);

    return _possibleConstructorReturn(this, (NoWhitespacePartNode.__proto__ || Object.getPrototypeOf(NoWhitespacePartNode)).apply(this, arguments));
  }

  _createClass(NoWhitespacePartNode, [{
    key: 'generatePart',
    value: function generatePart(nonWhitespace, lookAhead) {
      var noWhitespacePart = new NoWhitespacePart(nonWhitespace);

      return noWhitespacePart;
    }
  }], [{
    key: 'fromRuleNameAndChildNodes',
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(NoWhitespacePartNode, ruleName, childNodes);
    }
  }]);

  return NoWhitespacePartNode;
}(NonTerminalNode);

module.exports = NoWhitespacePartNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ub1doaXRlc3BhY2VQYXJ0LmpzIl0sIm5hbWVzIjpbIk5vV2hpdGVzcGFjZVBhcnQiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiTm9XaGl0ZXNwYWNlUGFydE5vZGUiLCJub25XaGl0ZXNwYWNlIiwibG9va0FoZWFkIiwibm9XaGl0ZXNwYWNlUGFydCIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQkMsUUFBUSwrQkFBUixDQUF6QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4Qjs7SUFHTUUsb0I7Ozs7Ozs7Ozs7O2lDQUNTQyxhLEVBQWVDLFMsRUFBVztBQUNyQyxVQUFNQyxtQkFBbUIsSUFBSU4sZ0JBQUosQ0FBcUJJLGFBQXJCLENBQXpCOztBQUVBLGFBQU9FLGdCQUFQO0FBQ0Q7Ozs4Q0FFZ0NDLFEsRUFBVUMsVSxFQUFZO0FBQUUsYUFBT04sZ0JBQWdCTyx5QkFBaEIsQ0FBMENOLG9CQUExQyxFQUFnRUksUUFBaEUsRUFBMEVDLFVBQTFFLENBQVA7QUFBK0Y7Ozs7RUFQdkhOLGU7O0FBVW5DUSxPQUFPQyxPQUFQLEdBQWlCUixvQkFBakIiLCJmaWxlIjoibm9XaGl0ZXNwYWNlUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9XaGl0ZXNwYWNlUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvbm9XaGl0ZXNwYWNlJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBOb1doaXRlc3BhY2VQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub25XaGl0ZXNwYWNlLCBsb29rQWhlYWQpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VQYXJ0ID0gbmV3IE5vV2hpdGVzcGFjZVBhcnQobm9uV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhOb1doaXRlc3BhY2VQYXJ0Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9XaGl0ZXNwYWNlUGFydE5vZGU7XG4iXX0=