'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../arrayUtil'),
    NonTerminalNode = require('../../bnf/node/nonTerminal');

var KeepThirdChildNode = function (_NonTerminalNode) {
  _inherits(KeepThirdChildNode, _NonTerminalNode);

  function KeepThirdChildNode() {
    _classCallCheck(this, KeepThirdChildNode);

    return _possibleConstructorReturn(this, (KeepThirdChildNode.__proto__ || Object.getPrototypeOf(KeepThirdChildNode)).apply(this, arguments));
  }

  _createClass(KeepThirdChildNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = arrayUtil.keepThird(nodes),
          keepThirdChildNode = new KeepThirdChildNode(childNodes, productionName);

      nodes = [keepThirdChildNode]; ///

      return nodes;
    }
  }]);

  return KeepThirdChildNode;
}(NonTerminalNode);

module.exports = KeepThirdChildNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9rZWVwVGhpcmRDaGlsZC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiS2VlcFRoaXJkQ2hpbGROb2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImNoaWxkTm9kZXMiLCJrZWVwVGhpcmQiLCJrZWVwVGhpcmRDaGlsZE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFlBQVlDLFFBQVEsY0FBUixDQUFoQjtBQUFBLElBQ0lDLGtCQUFrQkQsUUFBUSw0QkFBUixDQUR0Qjs7SUFHTUUsa0I7Ozs7Ozs7Ozs7OzhCQUNhQyxLLEVBQU9DLGMsRUFBZ0I7QUFDdEMsVUFBSUMsYUFBYU4sVUFBVU8sU0FBVixDQUFvQkgsS0FBcEIsQ0FBakI7QUFBQSxVQUNJSSxxQkFBcUIsSUFBSUwsa0JBQUosQ0FBdUJHLFVBQXZCLEVBQW1DRCxjQUFuQyxDQUR6Qjs7QUFHQUQsY0FBUSxDQUFDSSxrQkFBRCxDQUFSLENBSnNDLENBSVI7O0FBRTlCLGFBQU9KLEtBQVA7QUFDRDs7OztFQVI4QkYsZTs7QUFXakNPLE9BQU9DLE9BQVAsR0FBaUJQLGtCQUFqQiIsImZpbGUiOiJrZWVwVGhpcmRDaGlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL2FycmF5VXRpbCcpLFxuICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2JuZi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIEtlZXBUaGlyZENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBhcnJheVV0aWwua2VlcFRoaXJkKG5vZGVzKSxcbiAgICAgICAga2VlcFRoaXJkQ2hpbGROb2RlID0gbmV3IEtlZXBUaGlyZENoaWxkTm9kZShjaGlsZE5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICBub2RlcyA9IFtrZWVwVGhpcmRDaGlsZE5vZGVdOyAvLy9cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEtlZXBUaGlyZENoaWxkTm9kZTtcbiJdfQ==