'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('../../bnf/node/nonTerminal');

var DiscardSecondChildNode = function (_NonTerminalNode) {
  _inherits(DiscardSecondChildNode, _NonTerminalNode);

  function DiscardSecondChildNode() {
    _classCallCheck(this, DiscardSecondChildNode);

    return _possibleConstructorReturn(this, (DiscardSecondChildNode.__proto__ || Object.getPrototypeOf(DiscardSecondChildNode)).apply(this, arguments));
  }

  _createClass(DiscardSecondChildNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = arrayUtil.discardSecond(nodes),
          discardSecondChildNode = new DiscardSecondChildNode(childNodes, productionName);

      nodes = [discardSecondChildNode]; ///

      return nodes;
    }
  }]);

  return DiscardSecondChildNode;
}(NonTerminalNode);

module.exports = DiscardSecondChildNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9kaXNjYXJkU2Vjb25kQ2hpbGQuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIkRpc2NhcmRTZWNvbmRDaGlsZE5vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiY2hpbGROb2RlcyIsImRpc2NhcmRTZWNvbmQiLCJkaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFZQyxRQUFRLGlCQUFSLENBQWhCO0FBQUEsSUFDSUMsa0JBQWtCRCxRQUFRLDRCQUFSLENBRHRCOztJQUdNRSxzQjs7Ozs7Ozs7Ozs7OEJBQ2FDLEssRUFBT0MsYyxFQUFnQjtBQUN0QyxVQUFJQyxhQUFhTixVQUFVTyxhQUFWLENBQXdCSCxLQUF4QixDQUFqQjtBQUFBLFVBQ0lJLHlCQUF5QixJQUFJTCxzQkFBSixDQUEyQkcsVUFBM0IsRUFBdUNELGNBQXZDLENBRDdCOztBQUdBRCxjQUFRLENBQUNJLHNCQUFELENBQVIsQ0FKc0MsQ0FJSjs7QUFFbEMsYUFBT0osS0FBUDtBQUNEOzs7O0VBUmtDRixlOztBQVdyQ08sT0FBT0MsT0FBUCxHQUFpQlAsc0JBQWpCIiwiZmlsZSI6ImRpc2NhcmRTZWNvbmRDaGlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL2FycmF5VXRpbCcpLFxuICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2JuZi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIERpc2NhcmRTZWNvbmRDaGlsZE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRTZWNvbmQobm9kZXMpLFxuICAgICAgICBkaXNjYXJkU2Vjb25kQ2hpbGROb2RlID0gbmV3IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUoY2hpbGROb2RlcywgcHJvZHVjdGlvbk5hbWUpO1xuXG4gICAgbm9kZXMgPSBbZGlzY2FyZFNlY29uZENoaWxkTm9kZV07IC8vL1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzY2FyZFNlY29uZENoaWxkTm9kZTtcbiJdfQ==