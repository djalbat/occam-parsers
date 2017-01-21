'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('../../bnf/node/nonTerminal');

var DiscardChildrenNode = function (_NonTerminalNode) {
  _inherits(DiscardChildrenNode, _NonTerminalNode);

  function DiscardChildrenNode() {
    _classCallCheck(this, DiscardChildrenNode);

    return _possibleConstructorReturn(this, (DiscardChildrenNode.__proto__ || Object.getPrototypeOf(DiscardChildrenNode)).apply(this, arguments));
  }

  _createClass(DiscardChildrenNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      nodes = arrayUtil.discardAll(nodes);

      return nodes;
    }
  }]);

  return DiscardChildrenNode;
}(NonTerminalNode);

module.exports = DiscardChildrenNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9kaXNjYXJkQ2hpbGRyZW4uanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIkRpc2NhcmRDaGlsZHJlbk5vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZGlzY2FyZEFsbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsUUFBUSxpQkFBUixDQUFoQjtBQUFBLElBQ0lDLGtCQUFrQkQsUUFBUSw0QkFBUixDQUR0Qjs7SUFHTUUsbUI7Ozs7Ozs7Ozs7OzhCQUNhQyxLLEVBQU9DLGMsRUFBZ0I7QUFDdENELGNBQVFKLFVBQVVNLFVBQVYsQ0FBcUJGLEtBQXJCLENBQVI7O0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7O0VBTCtCRixlOztBQVFsQ0ssT0FBT0MsT0FBUCxHQUFpQkwsbUJBQWpCIiwiZmlsZSI6ImRpc2NhcmRDaGlsZHJlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL2FycmF5VXRpbCcpLFxuICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2JuZi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIERpc2NhcmRDaGlsZHJlbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIG5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRBbGwobm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzY2FyZENoaWxkcmVuTm9kZTtcbiJdfQ==