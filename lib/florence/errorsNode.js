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
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      NonTerminalNode.fromNodesAndProductionName(nodes, productionName, ErrorsNode);
    }
  }]);

  return ErrorsNode;
}(NonTerminalNode);

module.exports = ErrorsNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9lcnJvcnNOb2RlLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJFcnJvcnNOb2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxrQkFBa0JDLFFBQVEsNEJBQVIsQ0FBdEI7O0lBRU1DLFU7Ozs7Ozs7Ozs7OytDQUM4QkMsSyxFQUFPQyxjLEVBQWdCO0FBQUVKLHNCQUFnQkssMEJBQWhCLENBQTJDRixLQUEzQyxFQUFrREMsY0FBbEQsRUFBa0VGLFVBQWxFO0FBQWdGOzs7O0VBRHBIRixlOztBQUl6Qk0sT0FBT0MsT0FBUCxHQUFpQkwsVUFBakIiLCJmaWxlIjoiZXJyb3JzTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIEVycm9yc05vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7IE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIEVycm9yc05vZGUpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JzTm9kZTtcbiJdfQ==