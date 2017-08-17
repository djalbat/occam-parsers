'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../../utilities/array'),
    NonTerminalNode = require('../nonTerminal');

var DiscardFourthThenSecondChildNode = function (_NonTerminalNode) {
  _inherits(DiscardFourthThenSecondChildNode, _NonTerminalNode);

  function DiscardFourthThenSecondChildNode() {
    _classCallCheck(this, DiscardFourthThenSecondChildNode);

    return _possibleConstructorReturn(this, (DiscardFourthThenSecondChildNode.__proto__ || Object.getPrototypeOf(DiscardFourthThenSecondChildNode)).apply(this, arguments));
  }

  _createClass(DiscardFourthThenSecondChildNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtilities.discardFourthThenSecond(nodes),
          discardFourthThenSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(DiscardFourthThenSecondChildNode, ruleName, childNodes);

      return discardFourthThenSecondChildNode;
    }
  }]);

  return DiscardFourthThenSecondChildNode;
}(NonTerminalNode);

module.exports = DiscardFourthThenSecondChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9kaXNjYXJkRm91cnRoVGhlblNlY29uZENoaWxkTm9kZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJEaXNjYXJkRm91cnRoVGhlblNlY29uZENoaWxkTm9kZSIsIm5vZGVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiZGlzY2FyZEZvdXJ0aFRoZW5TZWNvbmQiLCJkaXNjYXJkRm91cnRoVGhlblNlY29uZENoaWxkTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSwwQkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxnQkFBUixDQUR4Qjs7SUFHTUUsZ0M7Ozs7Ozs7Ozs7O3lDQUN3QkMsSyxFQUFPQyxRLEVBQVU7QUFDM0MsVUFBTUMsYUFBYU4sZUFBZU8sdUJBQWYsQ0FBdUNILEtBQXZDLENBQW5CO0FBQUEsVUFDTUksbUNBQW1DTixnQkFBZ0JPLHlCQUFoQixDQUEwQ04sZ0NBQTFDLEVBQTRFRSxRQUE1RSxFQUFzRkMsVUFBdEYsQ0FEekM7O0FBR0EsYUFBT0UsZ0NBQVA7QUFDRDs7OztFQU40Q04sZTs7QUFTL0NRLE9BQU9DLE9BQVAsR0FBaUJSLGdDQUFqQiIsImZpbGUiOiJkaXNjYXJkRm91cnRoVGhlblNlY29uZENoaWxkTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIERpc2NhcmRGb3VydGhUaGVuU2Vjb25kQ2hpbGROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBhcnJheVV0aWxpdGllcy5kaXNjYXJkRm91cnRoVGhlblNlY29uZChub2RlcyksXG4gICAgICAgICAgZGlzY2FyZEZvdXJ0aFRoZW5TZWNvbmRDaGlsZE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhEaXNjYXJkRm91cnRoVGhlblNlY29uZENoaWxkTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIGRpc2NhcmRGb3VydGhUaGVuU2Vjb25kQ2hpbGROb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzY2FyZEZvdXJ0aFRoZW5TZWNvbmRDaGlsZE5vZGU7XG4iXX0=