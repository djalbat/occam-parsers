'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../../utilities/array'),
    NonTerminalNode = require('../nonTerminal');

var DiscardLastChildNode = function (_NonTerminalNode) {
  _inherits(DiscardLastChildNode, _NonTerminalNode);

  function DiscardLastChildNode() {
    _classCallCheck(this, DiscardLastChildNode);

    return _possibleConstructorReturn(this, (DiscardLastChildNode.__proto__ || Object.getPrototypeOf(DiscardLastChildNode)).apply(this, arguments));
  }

  _createClass(DiscardLastChildNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtilities.discardLast(nodes),
          ///
      discardLastChildNode = NonTerminalNode.fromRuleNameAndChildNodes(DiscardLastChildNode, ruleName, childNodes);

      return discardLastChildNode;
    }
  }]);

  return DiscardLastChildNode;
}(NonTerminalNode);

module.exports = DiscardLastChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9kaXNjYXJkTGFzdENoaWxkTm9kZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJEaXNjYXJkTGFzdENoaWxkTm9kZSIsIm5vZGVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiZGlzY2FyZExhc3QiLCJkaXNjYXJkTGFzdENoaWxkTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSwwQkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxnQkFBUixDQUR4Qjs7SUFHTUUsb0I7Ozs7Ozs7Ozs7O3lDQUN3QkMsSyxFQUFPQyxRLEVBQVU7QUFDM0MsVUFBTUMsYUFBYU4sZUFBZU8sV0FBZixDQUEyQkgsS0FBM0IsQ0FBbkI7QUFBQSxVQUFzRDtBQUNoREksNkJBQXVCTixnQkFBZ0JPLHlCQUFoQixDQUEwQ04sb0JBQTFDLEVBQWdFRSxRQUFoRSxFQUEwRUMsVUFBMUUsQ0FEN0I7O0FBR0EsYUFBT0Usb0JBQVA7QUFDRDs7OztFQU5nQ04sZTs7QUFTbkNRLE9BQU9DLE9BQVAsR0FBaUJSLG9CQUFqQiIsImZpbGUiOiJkaXNjYXJkTGFzdENoaWxkTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIERpc2NhcmRMYXN0Q2hpbGROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBhcnJheVV0aWxpdGllcy5kaXNjYXJkTGFzdChub2RlcyksIC8vL1xuICAgICAgICAgIGRpc2NhcmRMYXN0Q2hpbGROb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoRGlzY2FyZExhc3RDaGlsZE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBkaXNjYXJkTGFzdENoaWxkTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc2NhcmRMYXN0Q2hpbGROb2RlO1xuIl19