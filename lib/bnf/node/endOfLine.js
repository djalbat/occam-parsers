'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EndOfLinePart = require('../part/terminal/endOfLine'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var EndOfLineNode = function (_NonTerminalNode) {
  _inherits(EndOfLineNode, _NonTerminalNode);

  function EndOfLineNode() {
    _classCallCheck(this, EndOfLineNode);

    return _possibleConstructorReturn(this, (EndOfLineNode.__proto__ || Object.getPrototypeOf(EndOfLineNode)).apply(this, arguments));
  }

  _createClass(EndOfLineNode, [{
    key: 'generatePart',
    value: function generatePart(noWhitespace, lookAhead) {
      var endOfLinePart = new EndOfLinePart(noWhitespace);

      return endOfLinePart;
    }
  }], [{
    key: 'fromRuleNameAndChildNodes',
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(EndOfLineNode, ruleName, childNodes);
    }
  }]);

  return EndOfLineNode;
}(NonTerminalNode);

module.exports = EndOfLineNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsiRW5kT2ZMaW5lUGFydCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJFbmRPZkxpbmVOb2RlIiwibm9XaGl0ZXNwYWNlIiwibG9va0FoZWFkIiwiZW5kT2ZMaW5lUGFydCIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSw0QkFBUixDQUF0QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4Qjs7SUFHTUUsYTs7Ozs7Ozs7Ozs7aUNBQ1NDLFksRUFBY0MsUyxFQUFXO0FBQ3BDLFVBQU1DLGdCQUFnQixJQUFJTixhQUFKLENBQWtCSSxZQUFsQixDQUF0Qjs7QUFFQSxhQUFPRSxhQUFQO0FBQ0Q7Ozs4Q0FFZ0NDLFEsRUFBVUMsVSxFQUFZO0FBQUUsYUFBT04sZ0JBQWdCTyx5QkFBaEIsQ0FBMENOLGFBQTFDLEVBQXlESSxRQUF6RCxFQUFtRUMsVUFBbkUsQ0FBUDtBQUF3Rjs7OztFQVB2SE4sZTs7QUFVNUJRLE9BQU9DLE9BQVAsR0FBaUJSLGFBQWpCIiwiZmlsZSI6ImVuZE9mTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRW5kT2ZMaW5lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvZW5kT2ZMaW5lJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSwgbG9va0FoZWFkKSB7XG4gICAgY29uc3QgZW5kT2ZMaW5lUGFydCA9IG5ldyBFbmRPZkxpbmVQYXJ0KG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhFbmRPZkxpbmVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVOb2RlO1xuIl19