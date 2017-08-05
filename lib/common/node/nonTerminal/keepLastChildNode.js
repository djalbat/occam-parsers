'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../../utilities/array'),
    NonTerminalNode = require('../nonTerminal');

var KeepLastChildNode = function (_NonTerminalNode) {
  _inherits(KeepLastChildNode, _NonTerminalNode);

  function KeepLastChildNode() {
    _classCallCheck(this, KeepLastChildNode);

    return _possibleConstructorReturn(this, (KeepLastChildNode.__proto__ || Object.getPrototypeOf(KeepLastChildNode)).apply(this, arguments));
  }

  _createClass(KeepLastChildNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtilities.keepLast(nodes),
          keepLastChildNode = NonTerminalNode.fromRuleNameAndChildNodes(KeepLastChildNode, ruleName, childNodes);

      return keepLastChildNode;
    }
  }]);

  return KeepLastChildNode;
}(NonTerminalNode);

module.exports = KeepLastChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9rZWVwTGFzdENoaWxkTm9kZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJLZWVwTGFzdENoaWxkTm9kZSIsIm5vZGVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwia2VlcExhc3QiLCJrZWVwTGFzdENoaWxkTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSwwQkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxnQkFBUixDQUR4Qjs7SUFHTUUsaUI7Ozs7Ozs7Ozs7O3lDQUN3QkMsSyxFQUFPQyxRLEVBQVU7QUFDM0MsVUFBTUMsYUFBYU4sZUFBZU8sUUFBZixDQUF3QkgsS0FBeEIsQ0FBbkI7QUFBQSxVQUNNSSxvQkFBb0JOLGdCQUFnQk8seUJBQWhCLENBQTBDTixpQkFBMUMsRUFBNkRFLFFBQTdELEVBQXVFQyxVQUF2RSxDQUQxQjs7QUFHQSxhQUFPRSxpQkFBUDtBQUNEOzs7O0VBTjZCTixlOztBQVNoQ1EsT0FBT0MsT0FBUCxHQUFpQlIsaUJBQWpCIiwiZmlsZSI6ImtlZXBMYXN0Q2hpbGROb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgS2VlcExhc3RDaGlsZE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGFycmF5VXRpbGl0aWVzLmtlZXBMYXN0KG5vZGVzKSxcbiAgICAgICAgICBrZWVwTGFzdENoaWxkTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKEtlZXBMYXN0Q2hpbGROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4ga2VlcExhc3RDaGlsZE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLZWVwTGFzdENoaWxkTm9kZTtcbiJdfQ==