'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var RegularExpressionNode = function (_NonTerminalNode) {
  _inherits(RegularExpressionNode, _NonTerminalNode);

  function RegularExpressionNode() {
    _classCallCheck(this, RegularExpressionNode);

    return _possibleConstructorReturn(this, (RegularExpressionNode.__proto__ || Object.getPrototypeOf(RegularExpressionNode)).apply(this, arguments));
  }

  _createClass(RegularExpressionNode, [{
    key: 'generatePart',
    value: function generatePart(Parts, noWhitespace) {
      var regExp = this.getRegExp(),
          RegularExpressionPart = Parts['RegularExpressionPart'],
          regularExpressionPart = new RegularExpressionPart(regExp, noWhitespace);

      return regularExpressionPart;
    }
  }, {
    key: 'getRegExp',
    value: function getRegExp() {
      var regExp = /^\/([^/]+)\/$/; ///

      var childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,
          ///
      terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(regExp),
          secondMatch = second(matches),
          pattern = secondMatch; ///

      regExp = new RegExp(pattern);

      return regExp;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, RegularExpressionNode);
    }
  }]);

  return RegularExpressionNode;
}(NonTerminalNode);

module.exports = RegularExpressionNode;

function first(array) {
  return array[0];
}
function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiUmVndWxhckV4cHJlc3Npb25Ob2RlIiwiUGFydHMiLCJub1doaXRlc3BhY2UiLCJyZWdFeHAiLCJnZXRSZWdFeHAiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwicGF0dGVybiIsIlJlZ0V4cCIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JDLFFBQVEsK0JBQVIsQ0FBeEI7O0lBRU1DLHFCOzs7Ozs7Ozs7OztpQ0FDU0MsSyxFQUFPQyxZLEVBQWM7QUFDaEMsVUFBTUMsU0FBUyxLQUFLQyxTQUFMLEVBQWY7QUFBQSxVQUNNQyx3QkFBd0JKLE1BQU0sdUJBQU4sQ0FEOUI7QUFBQSxVQUVNSyx3QkFBd0IsSUFBSUQscUJBQUosQ0FBMEJGLE1BQTFCLEVBQWtDRCxZQUFsQyxDQUY5Qjs7QUFJQSxhQUFPSSxxQkFBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFJSCxTQUFTLGVBQWIsQ0FEVSxDQUNvQjs7QUFFOUIsVUFBTUksYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsaUJBQWlCQyxNQUFNSCxVQUFOLENBRHZCO0FBQUEsVUFFTUksZUFBZUYsY0FGckI7QUFBQSxVQUVzQztBQUNoQ0csNEJBQXNCRCxhQUFhRSxVQUFiLEVBSDVCO0FBQUEsVUFJTUMsVUFBVUYsb0JBQW9CRyxLQUFwQixDQUEwQlosTUFBMUIsQ0FKaEI7QUFBQSxVQUtNYSxjQUFjQyxPQUFPSCxPQUFQLENBTHBCO0FBQUEsVUFNTUksVUFBVUYsV0FOaEIsQ0FIVSxDQVNtQjs7QUFFN0JiLGVBQVMsSUFBSWdCLE1BQUosQ0FBV0QsT0FBWCxDQUFUOztBQUVBLGFBQU9mLE1BQVA7QUFDRDs7OytDQUVpQ2lCLEssRUFBT0MsYyxFQUFnQjtBQUFFLGFBQU92QixnQkFBZ0J3QiwwQkFBaEIsQ0FBMkNGLEtBQTNDLEVBQWtEQyxjQUFsRCxFQUFrRXJCLHFCQUFsRSxDQUFQO0FBQWtHOzs7O0VBekIzSEYsZTs7QUE0QnBDeUIsT0FBT0MsT0FBUCxHQUFpQnhCLHFCQUFqQjs7QUFFQSxTQUFTVSxLQUFULENBQWVlLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTUixNQUFULENBQWdCUSxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InJlZ3VsYXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHJlZ0V4cCA9IHRoaXMuZ2V0UmVnRXhwKCksXG4gICAgICAgICAgUmVndWxhckV4cHJlc3Npb25QYXJ0ID0gUGFydHNbJ1JlZ3VsYXJFeHByZXNzaW9uUGFydCddLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblBhcnQocmVnRXhwLCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uUGFydDtcbiAgfVxuXG4gIGdldFJlZ0V4cCgpIHtcbiAgICBsZXQgcmVnRXhwID0gL15cXC8oW14vXSspXFwvJC87IC8vL1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGVybWluYWxOb2RlQ29udGVudC5tYXRjaChyZWdFeHApLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHBhdHRlcm4gPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIHJlZ0V4cDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIFJlZ3VsYXJFeHByZXNzaW9uTm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvbk5vZGU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19