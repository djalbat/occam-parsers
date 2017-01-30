'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

var KeepFirstChildNode = function (_NonTerminalNode) {
  _inherits(KeepFirstChildNode, _NonTerminalNode);

  function KeepFirstChildNode() {
    _classCallCheck(this, KeepFirstChildNode);

    return _possibleConstructorReturn(this, (KeepFirstChildNode.__proto__ || Object.getPrototypeOf(KeepFirstChildNode)).apply(this, arguments));
  }

  _createClass(KeepFirstChildNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = arrayUtil.keepFirst(nodes),
          keepFirstChildNode = NonTerminalNode.fromChildNodesAndProductionName(childNodes, productionName, KeepFirstChildNode);

      nodes = [keepFirstChildNode]; ///

      return nodes;
    }
  }]);

  return KeepFirstChildNode;
}(NonTerminalNode);

module.exports = KeepFirstChildNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9rZWVwRmlyc3RDaGlsZC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiS2VlcEZpcnN0Q2hpbGROb2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImNoaWxkTm9kZXMiLCJrZWVwRmlyc3QiLCJrZWVwRmlyc3RDaGlsZE5vZGUiLCJmcm9tQ2hpbGROb2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFZQyxRQUFRLGlCQUFSLENBQWhCO0FBQUEsSUFDSUMsa0JBQWtCRCxRQUFRLGVBQVIsQ0FEdEI7O0lBR01FLGtCOzs7Ozs7Ozs7Ozs4QkFDYUMsSyxFQUFPQyxjLEVBQWdCO0FBQ3RDLFVBQUlDLGFBQWFOLFVBQVVPLFNBQVYsQ0FBb0JILEtBQXBCLENBQWpCO0FBQUEsVUFDSUkscUJBQXFCTixnQkFBZ0JPLCtCQUFoQixDQUFnREgsVUFBaEQsRUFBNERELGNBQTVELEVBQTRFRixrQkFBNUUsQ0FEekI7O0FBR0FDLGNBQVEsQ0FBQ0ksa0JBQUQsQ0FBUixDQUpzQyxDQUlSOztBQUU5QixhQUFPSixLQUFQO0FBQ0Q7Ozs7RUFSOEJGLGU7O0FBV2pDUSxPQUFPQyxPQUFQLEdBQWlCUixrQkFBakIiLCJmaWxlIjoia2VlcEZpcnN0Q2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi9hcnJheVV0aWwnKSxcbiAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIEtlZXBGaXJzdENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBhcnJheVV0aWwua2VlcEZpcnN0KG5vZGVzKSxcbiAgICAgICAga2VlcEZpcnN0Q2hpbGROb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21DaGlsZE5vZGVzQW5kUHJvZHVjdGlvbk5hbWUoY2hpbGROb2RlcywgcHJvZHVjdGlvbk5hbWUsIEtlZXBGaXJzdENoaWxkTm9kZSk7XG5cbiAgICBub2RlcyA9IFtrZWVwRmlyc3RDaGlsZE5vZGVdOyAvLy9cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEtlZXBGaXJzdENoaWxkTm9kZTtcbiJdfQ==