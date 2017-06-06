'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    NonTerminalNode = require('../nonTerminal');

var DiscardFirstChildNode = function (_NonTerminalNode) {
  _inherits(DiscardFirstChildNode, _NonTerminalNode);

  function DiscardFirstChildNode() {
    _classCallCheck(this, DiscardFirstChildNode);

    return _possibleConstructorReturn(this, (DiscardFirstChildNode.__proto__ || Object.getPrototypeOf(DiscardFirstChildNode)).apply(this, arguments));
  }

  _createClass(DiscardFirstChildNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var childNodes = arrayUtil.discardFirst(nodes),
          ///
      discardFirstChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DiscardFirstChildNode);

      return discardFirstChildNode;
    }
  }]);

  return DiscardFirstChildNode;
}(NonTerminalNode);

module.exports = DiscardFirstChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9kaXNjYXJkRmlyc3RDaGlsZC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiRGlzY2FyZEZpcnN0Q2hpbGROb2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImNoaWxkTm9kZXMiLCJkaXNjYXJkRmlyc3QiLCJkaXNjYXJkRmlyc3RDaGlsZE5vZGUiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLHFCQUFSLENBQWxCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLGdCQUFSLENBRHhCOztJQUdNRSxxQjs7Ozs7Ozs7Ozs7K0NBQzhCQyxLLEVBQU9DLGMsRUFBZ0I7QUFDdkQsVUFBTUMsYUFBYU4sVUFBVU8sWUFBVixDQUF1QkgsS0FBdkIsQ0FBbkI7QUFBQSxVQUFrRDtBQUM1Q0ksOEJBQXdCTixnQkFBZ0JPLCtCQUFoQixDQUFnREosY0FBaEQsRUFBZ0VDLFVBQWhFLEVBQTRFSCxxQkFBNUUsQ0FEOUI7O0FBR0EsYUFBT0sscUJBQVA7QUFDRDs7OztFQU5pQ04sZTs7QUFTcENRLE9BQU9DLE9BQVAsR0FBaUJSLHFCQUFqQiIsImZpbGUiOiJkaXNjYXJkRmlyc3RDaGlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRGlzY2FyZEZpcnN0Q2hpbGROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZEZpcnN0KG5vZGVzKSwgLy8vXG4gICAgICAgICAgZGlzY2FyZEZpcnN0Q2hpbGROb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIERpc2NhcmRGaXJzdENoaWxkTm9kZSk7XG5cbiAgICByZXR1cm4gZGlzY2FyZEZpcnN0Q2hpbGROb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzY2FyZEZpcnN0Q2hpbGROb2RlO1xuIl19