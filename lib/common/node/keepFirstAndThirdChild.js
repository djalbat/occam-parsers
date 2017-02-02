'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

var KeepFirstAndThirdChildNode = function (_NonTerminalNode) {
  _inherits(KeepFirstAndThirdChildNode, _NonTerminalNode);

  function KeepFirstAndThirdChildNode() {
    _classCallCheck(this, KeepFirstAndThirdChildNode);

    return _possibleConstructorReturn(this, (KeepFirstAndThirdChildNode.__proto__ || Object.getPrototypeOf(KeepFirstAndThirdChildNode)).apply(this, arguments));
  }

  _createClass(KeepFirstAndThirdChildNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = arrayUtil.keepFirstAndThird(nodes),
          keepFirstAndThirdChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, KeepFirstAndThirdChildNode);

      nodes = [keepFirstAndThirdChildNode]; ///

      return nodes;
    }
  }]);

  return KeepFirstAndThirdChildNode;
}(NonTerminalNode);

module.exports = KeepFirstAndThirdChildNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9rZWVwRmlyc3RBbmRUaGlyZENoaWxkLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJLZWVwRmlyc3RBbmRUaGlyZENoaWxkTm9kZSIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwia2VlcEZpcnN0QW5kVGhpcmQiLCJrZWVwRmlyc3RBbmRUaGlyZENoaWxkTm9kZSIsImZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFlBQVlDLFFBQVEsaUJBQVIsQ0FBaEI7QUFBQSxJQUNJQyxrQkFBa0JELFFBQVEsZUFBUixDQUR0Qjs7SUFHTUUsMEI7Ozs7Ozs7Ozs7OzhCQUNhQyxLLEVBQU9DLGMsRUFBZ0I7QUFDdEMsVUFBSUMsYUFBYU4sVUFBVU8saUJBQVYsQ0FBNEJILEtBQTVCLENBQWpCO0FBQUEsVUFDSUksNkJBQTZCTixnQkFBZ0JPLCtCQUFoQixDQUFnREosY0FBaEQsRUFBZ0VDLFVBQWhFLEVBQTRFSCwwQkFBNUUsQ0FEakM7O0FBR0FDLGNBQVEsQ0FBQ0ksMEJBQUQsQ0FBUixDQUpzQyxDQUlBOztBQUV0QyxhQUFPSixLQUFQO0FBQ0Q7Ozs7RUFSc0NGLGU7O0FBV3pDUSxPQUFPQyxPQUFQLEdBQWlCUiwwQkFBakIiLCJmaWxlIjoia2VlcEZpcnN0QW5kVGhpcmRDaGlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL2FycmF5VXRpbCcpLFxuICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgS2VlcEZpcnN0QW5kVGhpcmRDaGlsZE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmtlZXBGaXJzdEFuZFRoaXJkKG5vZGVzKSxcbiAgICAgICAga2VlcEZpcnN0QW5kVGhpcmRDaGlsZE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgS2VlcEZpcnN0QW5kVGhpcmRDaGlsZE5vZGUpO1xuXG4gICAgbm9kZXMgPSBba2VlcEZpcnN0QW5kVGhpcmRDaGlsZE5vZGVdOyAvLy9cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEtlZXBGaXJzdEFuZFRoaXJkQ2hpbGROb2RlO1xuIl19