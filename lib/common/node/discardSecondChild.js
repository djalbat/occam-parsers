'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../arrayUtil'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9kaXNjYXJkU2Vjb25kQ2hpbGQuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIkRpc2NhcmRTZWNvbmRDaGlsZE5vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiY2hpbGROb2RlcyIsImRpc2NhcmRTZWNvbmQiLCJkaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFZQyxRQUFRLGNBQVIsQ0FBaEI7QUFBQSxJQUNJQyxrQkFBa0JELFFBQVEsNEJBQVIsQ0FEdEI7O0lBR01FLHNCOzs7Ozs7Ozs7Ozs4QkFDYUMsSyxFQUFPQyxjLEVBQWdCO0FBQ3RDLFVBQUlDLGFBQWFOLFVBQVVPLGFBQVYsQ0FBd0JILEtBQXhCLENBQWpCO0FBQUEsVUFDSUkseUJBQXlCLElBQUlMLHNCQUFKLENBQTJCRyxVQUEzQixFQUF1Q0QsY0FBdkMsQ0FEN0I7O0FBR0FELGNBQVEsQ0FBQ0ksc0JBQUQsQ0FBUixDQUpzQyxDQUlKOztBQUVsQyxhQUFPSixLQUFQO0FBQ0Q7Ozs7RUFSa0NGLGU7O0FBV3JDTyxPQUFPQyxPQUFQLEdBQWlCUCxzQkFBakIiLCJmaWxlIjoiZGlzY2FyZFNlY29uZENoaWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vYXJyYXlVdGlsJyksXG4gICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vYm5mL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRGlzY2FyZFNlY29uZENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZFNlY29uZChub2RlcyksXG4gICAgICAgIGRpc2NhcmRTZWNvbmRDaGlsZE5vZGUgPSBuZXcgRGlzY2FyZFNlY29uZENoaWxkTm9kZShjaGlsZE5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICBub2RlcyA9IFtkaXNjYXJkU2Vjb25kQ2hpbGROb2RlXTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlO1xuIl19