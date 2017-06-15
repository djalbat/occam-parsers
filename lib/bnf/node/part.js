'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nodeUtil = require('../../util/node'),
    arrayUtil = require('../../util/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var PartNode = function (_NonTerminalNode) {
  _inherits(PartNode, _NonTerminalNode);

  function PartNode() {
    _classCallCheck(this, PartNode);

    return _possibleConstructorReturn(this, (PartNode.__proto__ || Object.getPrototypeOf(PartNode)).apply(this, arguments));
  }

  _createClass(PartNode, [{
    key: 'generatePart',
    value: function generatePart(Parts, noWhitespace) {
      var part = void 0,
          childNodes = this.getChildNodes();

      if (!noWhitespace) {
        var _firstChildNode = first(childNodes),
            firstChildNodeNoWhitespaceNode = nodeUtil.isNodeNoWhitespaceNode(_firstChildNode);

        if (firstChildNodeNoWhitespaceNode) {
          childNodes = arrayUtil.discardFirst(childNodes);

          noWhitespace = true;
        }
      }

      var firstChildNode = first(childNodes),
          childNodesLength = childNodes.length;

      if (childNodesLength === 1) {
        var childNode = firstChildNode; ///

        part = partFromChildNode(childNode, Parts, noWhitespace);
      } else {
        part = partFromChildNodes(childNodes, Parts, noWhitespace);
      }

      return part;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, PartNode);
    }
  }]);

  return PartNode;
}(NonTerminalNode);

module.exports = PartNode;

function partFromChildNode(childNode, Parts, noWhitespace) {
  var part = childNode.generatePart(Parts, noWhitespace);

  return part;
}

function partFromChildNodes(childNodes, Parts, noWhitespace) {
  var firstChildNode = first(childNodes),
      secondChildNode = second(childNodes),
      node = firstChildNode,
      ///
  quantifiersNode = secondChildNode,
      ///
  sequenceOfPartsPart = nodeUtil.sequenceOfPartsPartFromNodeAndQuantifiersNode(node, quantifiersNode, Parts, noWhitespace),
      part = sequenceOfPartsPart; ///

  return part;
}

function first(array) {
  return array[0];
}

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbIm5vZGVVdGlsIiwicmVxdWlyZSIsImFycmF5VXRpbCIsIk5vblRlcm1pbmFsTm9kZSIsIlBhcnROb2RlIiwiUGFydHMiLCJub1doaXRlc3BhY2UiLCJwYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwiZmlyc3RDaGlsZE5vZGVOb1doaXRlc3BhY2VOb2RlIiwiaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZSIsImRpc2NhcmRGaXJzdCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjaGlsZE5vZGUiLCJwYXJ0RnJvbUNoaWxkTm9kZSIsInBhcnRGcm9tQ2hpbGROb2RlcyIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZW5lcmF0ZVBhcnQiLCJzZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmQiLCJub2RlIiwicXVhbnRpZmllcnNOb2RlIiwic2VxdWVuY2VPZlBhcnRzUGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tTm9kZUFuZFF1YW50aWZpZXJzTm9kZSIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsaUJBQVIsQ0FBakI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGtCQUFSLENBRGxCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLCtCQUFSLENBRnhCOztJQUlNRyxROzs7Ozs7Ozs7OztpQ0FDU0MsSyxFQUFPQyxZLEVBQWM7QUFDaEMsVUFBSUMsYUFBSjtBQUFBLFVBQ0lDLGFBQWEsS0FBS0MsYUFBTCxFQURqQjs7QUFHQSxVQUFJLENBQUNILFlBQUwsRUFBbUI7QUFDakIsWUFBTUksa0JBQWlCQyxNQUFNSCxVQUFOLENBQXZCO0FBQUEsWUFDTUksaUNBQWlDWixTQUFTYSxzQkFBVCxDQUFnQ0gsZUFBaEMsQ0FEdkM7O0FBR0EsWUFBSUUsOEJBQUosRUFBb0M7QUFDbENKLHVCQUFhTixVQUFVWSxZQUFWLENBQXVCTixVQUF2QixDQUFiOztBQUVBRix5QkFBZSxJQUFmO0FBQ0Q7QUFDRjs7QUFFRCxVQUFNSSxpQkFBaUJDLE1BQU1ILFVBQU4sQ0FBdkI7QUFBQSxVQUNNTyxtQkFBbUJQLFdBQVdRLE1BRHBDOztBQUdBLFVBQUlELHFCQUFxQixDQUF6QixFQUE0QjtBQUMxQixZQUFNRSxZQUFZUCxjQUFsQixDQUQwQixDQUNROztBQUVsQ0gsZUFBT1csa0JBQWtCRCxTQUFsQixFQUE2QlosS0FBN0IsRUFBb0NDLFlBQXBDLENBQVA7QUFDRCxPQUpELE1BSU87QUFDTEMsZUFBT1ksbUJBQW1CWCxVQUFuQixFQUErQkgsS0FBL0IsRUFBc0NDLFlBQXRDLENBQVA7QUFDRDs7QUFFRCxhQUFPQyxJQUFQO0FBQ0Q7OzsrQ0FFaUNhLEssRUFBT0MsYyxFQUFnQjtBQUFFLGFBQU9sQixnQkFBZ0JtQiwwQkFBaEIsQ0FBMkNGLEtBQTNDLEVBQWtEQyxjQUFsRCxFQUFrRWpCLFFBQWxFLENBQVA7QUFBcUY7Ozs7RUE5QjNIRCxlOztBQWlDdkJvQixPQUFPQyxPQUFQLEdBQWlCcEIsUUFBakI7O0FBRUEsU0FBU2MsaUJBQVQsQ0FBMkJELFNBQTNCLEVBQXNDWixLQUF0QyxFQUE2Q0MsWUFBN0MsRUFBMkQ7QUFDekQsTUFBTUMsT0FBT1UsVUFBVVEsWUFBVixDQUF1QnBCLEtBQXZCLEVBQThCQyxZQUE5QixDQUFiOztBQUVBLFNBQU9DLElBQVA7QUFDRDs7QUFFRCxTQUFTWSxrQkFBVCxDQUE0QlgsVUFBNUIsRUFBd0NILEtBQXhDLEVBQStDQyxZQUEvQyxFQUE2RDtBQUMzRCxNQUFNSSxpQkFBaUJDLE1BQU1ILFVBQU4sQ0FBdkI7QUFBQSxNQUNNa0Isa0JBQWtCQyxPQUFPbkIsVUFBUCxDQUR4QjtBQUFBLE1BRU1vQixPQUFPbEIsY0FGYjtBQUFBLE1BRThCO0FBQ3hCbUIsb0JBQWtCSCxlQUh4QjtBQUFBLE1BR3lDO0FBQ25DSSx3QkFBc0I5QixTQUFTK0IsNkNBQVQsQ0FBdURILElBQXZELEVBQTZEQyxlQUE3RCxFQUE4RXhCLEtBQTlFLEVBQXFGQyxZQUFyRixDQUo1QjtBQUFBLE1BS01DLE9BQU91QixtQkFMYixDQUQyRCxDQU16Qjs7QUFFbEMsU0FBT3ZCLElBQVA7QUFDRDs7QUFFRCxTQUFTSSxLQUFULENBQWVxQixLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7O0FBRTFDLFNBQVNMLE1BQVQsQ0FBZ0JLLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgbm9kZVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL25vZGUnKSxcbiAgICAgIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFBhcnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KFBhcnRzLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgcGFydCxcbiAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgaWYgKCFub1doaXRlc3BhY2UpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgICBmaXJzdENoaWxkTm9kZU5vV2hpdGVzcGFjZU5vZGUgPSBub2RlVXRpbC5pc05vZGVOb1doaXRlc3BhY2VOb2RlKGZpcnN0Q2hpbGROb2RlKTtcblxuICAgICAgaWYgKGZpcnN0Q2hpbGROb2RlTm9XaGl0ZXNwYWNlTm9kZSkge1xuICAgICAgICBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRGaXJzdChjaGlsZE5vZGVzKTtcblxuICAgICAgICBub1doaXRlc3BhY2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAvLy9cblxuICAgICAgcGFydCA9IHBhcnRGcm9tQ2hpbGROb2RlKGNoaWxkTm9kZSwgUGFydHMsIG5vV2hpdGVzcGFjZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcGFydCA9IHBhcnRGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBQYXJ0cywgbm9XaGl0ZXNwYWNlKVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcGFydDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSwgUGFydE5vZGUpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydE5vZGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tQ2hpbGROb2RlKGNoaWxkTm9kZSwgUGFydHMsIG5vV2hpdGVzcGFjZSkge1xuICBjb25zdCBwYXJ0ID0gY2hpbGROb2RlLmdlbmVyYXRlUGFydChQYXJ0cywgbm9XaGl0ZXNwYWNlKTtcblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gcGFydEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIFBhcnRzLCBub1doaXRlc3BhY2UpIHtcbiAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICBub2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgcXVhbnRpZmllcnNOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vZGVVdGlsLnNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tTm9kZUFuZFF1YW50aWZpZXJzTm9kZShub2RlLCBxdWFudGlmaWVyc05vZGUsIFBhcnRzLCBub1doaXRlc3BhY2UpLFxuICAgICAgICBwYXJ0ID0gc2VxdWVuY2VPZlBhcnRzUGFydDsgLy8vXG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=