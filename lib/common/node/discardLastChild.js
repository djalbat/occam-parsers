'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

var DiscardLastChildNode = function (_NonTerminalNode) {
  _inherits(DiscardLastChildNode, _NonTerminalNode);

  function DiscardLastChildNode() {
    _classCallCheck(this, DiscardLastChildNode);

    return _possibleConstructorReturn(this, (DiscardLastChildNode.__proto__ || Object.getPrototypeOf(DiscardLastChildNode)).apply(this, arguments));
  }

  _createClass(DiscardLastChildNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var childNodes = arrayUtil.discardLast(nodes),
          ///
      discardLastChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DiscardLastChildNode);

      nodes = [discardLastChildNode]; ///

      return nodes;
    }
  }]);

  return DiscardLastChildNode;
}(NonTerminalNode);

module.exports = DiscardLastChildNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9kaXNjYXJkTGFzdENoaWxkLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJEaXNjYXJkTGFzdENoaWxkTm9kZSIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwiZGlzY2FyZExhc3QiLCJkaXNjYXJkTGFzdENoaWxkTm9kZSIsImZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFlBQVlDLFFBQVEsaUJBQVIsQ0FBaEI7QUFBQSxJQUNJQyxrQkFBa0JELFFBQVEsZUFBUixDQUR0Qjs7SUFHTUUsb0I7Ozs7Ozs7Ozs7OytDQUM4QkMsSyxFQUFPQyxjLEVBQWdCO0FBQ3ZELFVBQUlDLGFBQWFOLFVBQVVPLFdBQVYsQ0FBc0JILEtBQXRCLENBQWpCO0FBQUEsVUFBK0M7QUFDM0NJLDZCQUF1Qk4sZ0JBQWdCTywrQkFBaEIsQ0FBZ0RKLGNBQWhELEVBQWdFQyxVQUFoRSxFQUE0RUgsb0JBQTVFLENBRDNCOztBQUdBQyxjQUFRLENBQUNJLG9CQUFELENBQVIsQ0FKdUQsQ0FJdkI7O0FBRWhDLGFBQU9KLEtBQVA7QUFDRDs7OztFQVJnQ0YsZTs7QUFXbkNRLE9BQU9DLE9BQVAsR0FBaUJSLG9CQUFqQiIsImZpbGUiOiJkaXNjYXJkTGFzdENoaWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vYXJyYXlVdGlsJyksXG4gICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBEaXNjYXJkTGFzdENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkTGFzdChub2RlcyksIC8vL1xuICAgICAgICBkaXNjYXJkTGFzdENoaWxkTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBEaXNjYXJkTGFzdENoaWxkTm9kZSk7XG5cbiAgICBub2RlcyA9IFtkaXNjYXJkTGFzdENoaWxkTm9kZV07IC8vL1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzY2FyZExhc3RDaGlsZE5vZGU7XG4iXX0=