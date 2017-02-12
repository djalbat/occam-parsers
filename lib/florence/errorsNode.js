'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../common/node/nonTerminal');

var ErrorsNode = function (_NonTerminalNode) {
  _inherits(ErrorsNode, _NonTerminalNode);

  function ErrorsNode() {
    _classCallCheck(this, ErrorsNode);

    return _possibleConstructorReturn(this, (ErrorsNode.__proto__ || Object.getPrototypeOf(ErrorsNode)).apply(this, arguments));
  }

  _createClass(ErrorsNode, null, [{
    key: 'fromProductionNameAndChildNodes',
    value: function fromProductionNameAndChildNodes(productionName, childNodes) {
      NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ErrorsNode);
    }
  }]);

  return ErrorsNode;
}(NonTerminalNode);

module.exports = ErrorsNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9lcnJvcnNOb2RlLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJFcnJvcnNOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwiZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsa0JBQWtCQyxRQUFRLDRCQUFSLENBQXRCOztJQUVNQyxVOzs7Ozs7Ozs7OztvREFDbUNDLGMsRUFBZ0JDLFUsRUFBWTtBQUFFSixzQkFBZ0JLLCtCQUFoQixDQUFnREYsY0FBaEQsRUFBZ0VDLFVBQWhFLEVBQTRFRixVQUE1RTtBQUEwRjs7OztFQUR4SUYsZTs7QUFJekJNLE9BQU9DLE9BQVAsR0FBaUJMLFVBQWpCIiwiZmlsZSI6ImVycm9yc05vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBFcnJvcnNOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMpIHsgTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIEVycm9yc05vZGUpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JzTm9kZTtcbiJdfQ==