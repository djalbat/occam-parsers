'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EndOfLinePart = require('../part/endOfLine'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var EndOfLineSymbolNode = function (_NonTerminalNode) {
  _inherits(EndOfLineSymbolNode, _NonTerminalNode);

  function EndOfLineSymbolNode() {
    _classCallCheck(this, EndOfLineSymbolNode);

    return _possibleConstructorReturn(this, (EndOfLineSymbolNode.__proto__ || Object.getPrototypeOf(EndOfLineSymbolNode)).apply(this, arguments));
  }

  _createClass(EndOfLineSymbolNode, [{
    key: 'generatePart',
    value: function generatePart(Parts, noWhitespace) {
      var EndOfLinePart = Parts['EndOfLinePart'],
          endOfLinePart = new EndOfLinePart(noWhitespace);

      return endOfLinePart;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, EndOfLineSymbolNode);
    }
  }]);

  return EndOfLineSymbolNode;
}(NonTerminalNode);

module.exports = EndOfLineSymbolNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9lbmRPZkxpbmVTeW1ib2wuanMiXSwibmFtZXMiOlsiRW5kT2ZMaW5lUGFydCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJFbmRPZkxpbmVTeW1ib2xOb2RlIiwiUGFydHMiLCJub1doaXRlc3BhY2UiLCJlbmRPZkxpbmVQYXJ0Iiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsbUJBQVIsQ0FBdEI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsK0JBQVIsQ0FEeEI7O0lBR01FLG1COzs7Ozs7Ozs7OztpQ0FDU0MsSyxFQUFPQyxZLEVBQWM7QUFDaEMsVUFBTUwsZ0JBQWdCSSxNQUFNLGVBQU4sQ0FBdEI7QUFBQSxVQUNNRSxnQkFBZ0IsSUFBSU4sYUFBSixDQUFrQkssWUFBbEIsQ0FEdEI7O0FBR0EsYUFBT0MsYUFBUDtBQUNEOzs7K0NBRWlDQyxLLEVBQU9DLGMsRUFBZ0I7QUFBRSxhQUFPTixnQkFBZ0JPLDBCQUFoQixDQUEyQ0YsS0FBM0MsRUFBa0RDLGNBQWxELEVBQWtFTCxtQkFBbEUsQ0FBUDtBQUFnRzs7OztFQVIzSEQsZTs7QUFXbENRLE9BQU9DLE9BQVAsR0FBaUJSLG1CQUFqQiIsImZpbGUiOiJlbmRPZkxpbmVTeW1ib2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVuZE9mTGluZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L2VuZE9mTGluZScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRW5kT2ZMaW5lU3ltYm9sTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChQYXJ0cywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgY29uc3QgRW5kT2ZMaW5lUGFydCA9IFBhcnRzWydFbmRPZkxpbmVQYXJ0J10sXG4gICAgICAgICAgZW5kT2ZMaW5lUGFydCA9IG5ldyBFbmRPZkxpbmVQYXJ0KG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIEVuZE9mTGluZVN5bWJvbE5vZGUpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lU3ltYm9sTm9kZTtcbiJdfQ==