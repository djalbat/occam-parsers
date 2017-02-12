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
      return NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ErrorsNode);
    }
  }, {
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, ErrorsNode);
    }
  }]);

  return ErrorsNode;
}(NonTerminalNode);

module.exports = ErrorsNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9lcnJvcnNOb2RlLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJFcnJvcnNOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwiZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2RlcyIsIm5vZGVzIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGtCQUFrQkMsUUFBUSw0QkFBUixDQUF0Qjs7SUFFTUMsVTs7Ozs7Ozs7Ozs7b0RBQ21DQyxjLEVBQWdCQyxVLEVBQVk7QUFBRSxhQUFPSixnQkFBZ0JLLCtCQUFoQixDQUFnREYsY0FBaEQsRUFBZ0VDLFVBQWhFLEVBQTRFRixVQUE1RSxDQUFQO0FBQWlHOzs7K0NBRXBJSSxLLEVBQU9ILGMsRUFBZ0I7QUFBRSxhQUFPSCxnQkFBZ0JPLDBCQUFoQixDQUEyQ0QsS0FBM0MsRUFBa0RILGNBQWxELEVBQWtFRCxVQUFsRSxDQUFQO0FBQXVGOzs7O0VBSDNIRixlOztBQU16QlEsT0FBT0MsT0FBUCxHQUFpQlAsVUFBakIiLCJmaWxlIjoiZXJyb3JzTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIEVycm9yc05vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIEVycm9yc05vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSwgRXJyb3JzTm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvcnNOb2RlO1xuIl19