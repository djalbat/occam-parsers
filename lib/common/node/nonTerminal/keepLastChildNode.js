'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../../utilities/array'),
    NonTerminalNode = require('../nonTerminal');

var keepLast = arrayUtilities.keepLast;

var KeepLastChildNode = function (_NonTerminalNode) {
  _inherits(KeepLastChildNode, _NonTerminalNode);

  function KeepLastChildNode() {
    _classCallCheck(this, KeepLastChildNode);

    return _possibleConstructorReturn(this, (KeepLastChildNode.__proto__ || Object.getPrototypeOf(KeepLastChildNode)).apply(this, arguments));
  }

  _createClass(KeepLastChildNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = keepLast(nodes),
          keepLastChildNode = NonTerminalNode.fromRuleNameAndChildNodes(KeepLastChildNode, ruleName, childNodes);

      return keepLastChildNode;
    }
  }]);

  return KeepLastChildNode;
}(NonTerminalNode);

module.exports = KeepLastChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9rZWVwTGFzdENoaWxkTm9kZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJrZWVwTGFzdCIsIktlZXBMYXN0Q2hpbGROb2RlIiwibm9kZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJrZWVwTGFzdENoaWxkTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSwwQkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxnQkFBUixDQUR4Qjs7SUFHUUUsUSxHQUFhSCxjLENBQWJHLFE7O0lBRUZDLGlCOzs7Ozs7Ozs7Ozt5Q0FDd0JDLEssRUFBT0MsUSxFQUFVO0FBQzNDLFVBQU1DLGFBQWFKLFNBQVNFLEtBQVQsQ0FBbkI7QUFBQSxVQUNNRyxvQkFBb0JOLGdCQUFnQk8seUJBQWhCLENBQTBDTCxpQkFBMUMsRUFBNkRFLFFBQTdELEVBQXVFQyxVQUF2RSxDQUQxQjs7QUFHQSxhQUFPQyxpQkFBUDtBQUNEOzs7O0VBTjZCTixlOztBQVNoQ1EsT0FBT0MsT0FBUCxHQUFpQlAsaUJBQWpCIiwiZmlsZSI6ImtlZXBMYXN0Q2hpbGROb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9uVGVybWluYWwnKTtcblxuY29uc3QgeyBrZWVwTGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEtlZXBMYXN0Q2hpbGROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBrZWVwTGFzdChub2RlcyksXG4gICAgICAgICAga2VlcExhc3RDaGlsZE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhLZWVwTGFzdENoaWxkTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIGtlZXBMYXN0Q2hpbGROb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gS2VlcExhc3RDaGlsZE5vZGU7XG4iXX0=