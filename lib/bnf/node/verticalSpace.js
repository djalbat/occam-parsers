'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var VerticalSpaceNode = function (_NonTerminalNode) {
  _inherits(VerticalSpaceNode, _NonTerminalNode);

  function VerticalSpaceNode() {
    _classCallCheck(this, VerticalSpaceNode);

    return _possibleConstructorReturn(this, (VerticalSpaceNode.__proto__ || Object.getPrototypeOf(VerticalSpaceNode)).apply(this, arguments));
  }

  _createClass(VerticalSpaceNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, VerticalSpaceNode);
    }
  }]);

  return VerticalSpaceNode;
}(NonTerminalNode);

module.exports = VerticalSpaceNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS92ZXJ0aWNhbFNwYWNlLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJWZXJ0aWNhbFNwYWNlTm9kZSIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCQyxRQUFRLCtCQUFSLENBQXhCOztJQUVNQyxpQjs7Ozs7Ozs7Ozs7K0NBQzhCQyxLLEVBQU9DLGMsRUFBZ0I7QUFBRSxhQUFPSixnQkFBZ0JLLDBCQUFoQixDQUEyQ0YsS0FBM0MsRUFBa0RDLGNBQWxELEVBQWtFRixpQkFBbEUsQ0FBUDtBQUE4Rjs7OztFQUQzSEYsZTs7QUFJaENNLE9BQU9DLE9BQVAsR0FBaUJMLGlCQUFqQiIsImZpbGUiOiJ2ZXJ0aWNhbFNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBWZXJ0aWNhbFNwYWNlTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIFZlcnRpY2FsU3BhY2VOb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsU3BhY2VOb2RlO1xuIl19