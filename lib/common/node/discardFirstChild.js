'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

var DiscardFirstChildNode = function (_NonTerminalNode) {
  _inherits(DiscardFirstChildNode, _NonTerminalNode);

  function DiscardFirstChildNode() {
    _classCallCheck(this, DiscardFirstChildNode);

    return _possibleConstructorReturn(this, (DiscardFirstChildNode.__proto__ || Object.getPrototypeOf(DiscardFirstChildNode)).apply(this, arguments));
  }

  _createClass(DiscardFirstChildNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = arrayUtil.discardFirst(nodes),
          ///
      discardFirstChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DiscardFirstChildNode);

      nodes = [discardFirstChildNode]; ///

      return nodes;
    }
  }]);

  return DiscardFirstChildNode;
}(NonTerminalNode);

module.exports = DiscardFirstChildNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9kaXNjYXJkRmlyc3RDaGlsZC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiRGlzY2FyZEZpcnN0Q2hpbGROb2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImNoaWxkTm9kZXMiLCJkaXNjYXJkRmlyc3QiLCJkaXNjYXJkRmlyc3RDaGlsZE5vZGUiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFZQyxRQUFRLGlCQUFSLENBQWhCO0FBQUEsSUFDSUMsa0JBQWtCRCxRQUFRLGVBQVIsQ0FEdEI7O0lBR01FLHFCOzs7Ozs7Ozs7Ozs4QkFDYUMsSyxFQUFPQyxjLEVBQWdCO0FBQ3RDLFVBQUlDLGFBQWFOLFVBQVVPLFlBQVYsQ0FBdUJILEtBQXZCLENBQWpCO0FBQUEsVUFBZ0Q7QUFDNUNJLDhCQUF3Qk4sZ0JBQWdCTywrQkFBaEIsQ0FBZ0RKLGNBQWhELEVBQWdFQyxVQUFoRSxFQUE0RUgscUJBQTVFLENBRDVCOztBQUdBQyxjQUFRLENBQUNJLHFCQUFELENBQVIsQ0FKc0MsQ0FJTDs7QUFFakMsYUFBT0osS0FBUDtBQUNEOzs7O0VBUmlDRixlOztBQVdwQ1EsT0FBT0MsT0FBUCxHQUFpQlIscUJBQWpCIiwiZmlsZSI6ImRpc2NhcmRGaXJzdENoaWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vYXJyYXlVdGlsJyksXG4gICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBEaXNjYXJkRmlyc3RDaGlsZE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRGaXJzdChub2RlcyksIC8vL1xuICAgICAgICBkaXNjYXJkRmlyc3RDaGlsZE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgRGlzY2FyZEZpcnN0Q2hpbGROb2RlKTtcblxuICAgIG5vZGVzID0gW2Rpc2NhcmRGaXJzdENoaWxkTm9kZV07IC8vL1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzY2FyZEZpcnN0Q2hpbGROb2RlO1xuIl19