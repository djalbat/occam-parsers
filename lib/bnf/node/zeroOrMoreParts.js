'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var ZeroOrMorePartsNode = function (_NonTerminalNode) {
  _inherits(ZeroOrMorePartsNode, _NonTerminalNode);

  function ZeroOrMorePartsNode() {
    _classCallCheck(this, ZeroOrMorePartsNode);

    return _possibleConstructorReturn(this, (ZeroOrMorePartsNode.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsNode)).apply(this, arguments));
  }

  _createClass(ZeroOrMorePartsNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, ZeroOrMorePartsNode);
    }
  }]);

  return ZeroOrMorePartsNode;
}(NonTerminalNode);

module.exports = ZeroOrMorePartsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS96ZXJvT3JNb3JlUGFydHMuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIlplcm9Pck1vcmVQYXJ0c05vZGUiLCJub2RlcyIsInJ1bGVOYW1lIiwiZnJvbU5vZGVzQW5kUnVsZU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSwrQkFBUixDQUF4Qjs7SUFFTUMsbUI7Ozs7Ozs7Ozs7O3lDQUN3QkMsSyxFQUFPQyxRLEVBQVU7QUFBRSxhQUFPSixnQkFBZ0JLLG9CQUFoQixDQUFxQ0YsS0FBckMsRUFBNENDLFFBQTVDLEVBQXNERixtQkFBdEQsQ0FBUDtBQUFvRjs7OztFQURuR0YsZTs7QUFJbENNLE9BQU9DLE9BQVAsR0FBaUJMLG1CQUFqQiIsImZpbGUiOiJ6ZXJvT3JNb3JlUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFplcm9Pck1vcmVQYXJ0c05vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lLCBaZXJvT3JNb3JlUGFydHNOb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFplcm9Pck1vcmVQYXJ0c05vZGU7XG4iXX0=