'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

var DiscardChildrenNode = function (_NonTerminalNode) {
  _inherits(DiscardChildrenNode, _NonTerminalNode);

  function DiscardChildrenNode() {
    _classCallCheck(this, DiscardChildrenNode);

    return _possibleConstructorReturn(this, (DiscardChildrenNode.__proto__ || Object.getPrototypeOf(DiscardChildrenNode)).apply(this, arguments));
  }

  _createClass(DiscardChildrenNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      nodes = arrayUtil.discardAll(nodes);

      return nodes;
    }
  }]);

  return DiscardChildrenNode;
}(NonTerminalNode);

module.exports = DiscardChildrenNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9kaXNjYXJkQ2hpbGRyZW4uanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIkRpc2NhcmRDaGlsZHJlbk5vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZGlzY2FyZEFsbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsUUFBUSxpQkFBUixDQUFoQjtBQUFBLElBQ0lDLGtCQUFrQkQsUUFBUSxlQUFSLENBRHRCOztJQUdNRSxtQjs7Ozs7Ozs7Ozs7K0NBQzhCQyxLLEVBQU9DLGMsRUFBZ0I7QUFDdkRELGNBQVFKLFVBQVVNLFVBQVYsQ0FBcUJGLEtBQXJCLENBQVI7O0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7O0VBTCtCRixlOztBQVFsQ0ssT0FBT0MsT0FBUCxHQUFpQkwsbUJBQWpCIiwiZmlsZSI6ImRpc2NhcmRDaGlsZHJlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL2FycmF5VXRpbCcpLFxuICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRGlzY2FyZENoaWxkcmVuTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBub2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkQWxsKG5vZGVzKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc2NhcmRDaGlsZHJlbk5vZGU7XG4iXX0=