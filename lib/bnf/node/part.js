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

      var firstChildNode = arrayUtil.first(childNodes);

      var firstChildNodeNoWhitespaceNode = nodeUtil.isNodeNoWhitespaceNode(firstChildNode);

      if (firstChildNodeNoWhitespaceNode) {
        childNodes = arrayUtil.discardFirst(childNodes);

        noWhitespace = true;
      }

      var lastChildNode = arrayUtil.last(childNodes);

      firstChildNode = arrayUtil.first(childNodes);

      var childNodesLength = childNodes.length;

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
  var firstChildNode = arrayUtil.first(childNodes),
      secondChildNode = arrayUtil.second(childNodes),
      node = firstChildNode,
      ///
  quantifiersNode = secondChildNode,
      ///
  SequenceOfPartsPart = Parts['SequenceOfPartsPart'],
      sequenceOfPartsPart = SequenceOfPartsPart.fromNodeAndQuantifiersNode(node, quantifiersNode, Parts, noWhitespace),
      part = sequenceOfPartsPart; ///

  return part;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbIm5vZGVVdGlsIiwicmVxdWlyZSIsImFycmF5VXRpbCIsIk5vblRlcm1pbmFsTm9kZSIsIlBhcnROb2RlIiwiUGFydHMiLCJub1doaXRlc3BhY2UiLCJwYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwiZmlyc3RDaGlsZE5vZGVOb1doaXRlc3BhY2VOb2RlIiwiaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZSIsImRpc2NhcmRGaXJzdCIsImxhc3RDaGlsZE5vZGUiLCJsYXN0IiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZSIsInBhcnRGcm9tQ2hpbGROb2RlIiwicGFydEZyb21DaGlsZE5vZGVzIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsImdlbmVyYXRlUGFydCIsInNlY29uZENoaWxkTm9kZSIsInNlY29uZCIsIm5vZGUiLCJxdWFudGlmaWVyc05vZGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCIsImZyb21Ob2RlQW5kUXVhbnRpZmllcnNOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsaUJBQVIsQ0FBakI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGtCQUFSLENBRGxCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLCtCQUFSLENBRnhCOztJQUlNRyxROzs7Ozs7Ozs7OztpQ0FDU0MsSyxFQUFPQyxZLEVBQWM7QUFDaEMsVUFBSUMsYUFBSjtBQUFBLFVBQ0lDLGFBQWEsS0FBS0MsYUFBTCxFQURqQjs7QUFHQSxVQUFJQyxpQkFBaUJSLFVBQVVTLEtBQVYsQ0FBZ0JILFVBQWhCLENBQXJCOztBQUVBLFVBQU1JLGlDQUFpQ1osU0FBU2Esc0JBQVQsQ0FBZ0NILGNBQWhDLENBQXZDOztBQUVBLFVBQUlFLDhCQUFKLEVBQW9DO0FBQ2xDSixxQkFBYU4sVUFBVVksWUFBVixDQUF1Qk4sVUFBdkIsQ0FBYjs7QUFFQUYsdUJBQWUsSUFBZjtBQUNEOztBQUVELFVBQU1TLGdCQUFnQmIsVUFBVWMsSUFBVixDQUFlUixVQUFmLENBQXRCOztBQUVBRSx1QkFBaUJSLFVBQVVTLEtBQVYsQ0FBZ0JILFVBQWhCLENBQWpCOztBQUVBLFVBQU1TLG1CQUFtQlQsV0FBV1UsTUFBcEM7O0FBRUEsVUFBSUQscUJBQXFCLENBQXpCLEVBQTRCO0FBQzFCLFlBQU1FLFlBQVlULGNBQWxCLENBRDBCLENBQ1E7O0FBRWxDSCxlQUFPYSxrQkFBa0JELFNBQWxCLEVBQTZCZCxLQUE3QixFQUFvQ0MsWUFBcEMsQ0FBUDtBQUNELE9BSkQsTUFJTztBQUNMQyxlQUFPYyxtQkFBbUJiLFVBQW5CLEVBQStCSCxLQUEvQixFQUFzQ0MsWUFBdEMsQ0FBUDtBQUNEOztBQUVELGFBQU9DLElBQVA7QUFDRDs7OytDQUVpQ2UsSyxFQUFPQyxjLEVBQWdCO0FBQUUsYUFBT3BCLGdCQUFnQnFCLDBCQUFoQixDQUEyQ0YsS0FBM0MsRUFBa0RDLGNBQWxELEVBQWtFbkIsUUFBbEUsQ0FBUDtBQUFxRjs7OztFQWhDM0hELGU7O0FBbUN2QnNCLE9BQU9DLE9BQVAsR0FBaUJ0QixRQUFqQjs7QUFFQSxTQUFTZ0IsaUJBQVQsQ0FBMkJELFNBQTNCLEVBQXNDZCxLQUF0QyxFQUE2Q0MsWUFBN0MsRUFBMkQ7QUFDekQsTUFBTUMsT0FBT1ksVUFBVVEsWUFBVixDQUF1QnRCLEtBQXZCLEVBQThCQyxZQUE5QixDQUFiOztBQUVBLFNBQU9DLElBQVA7QUFDRDs7QUFFRCxTQUFTYyxrQkFBVCxDQUE0QmIsVUFBNUIsRUFBd0NILEtBQXhDLEVBQStDQyxZQUEvQyxFQUE2RDtBQUMzRCxNQUFNSSxpQkFBaUJSLFVBQVVTLEtBQVYsQ0FBZ0JILFVBQWhCLENBQXZCO0FBQUEsTUFDTW9CLGtCQUFrQjFCLFVBQVUyQixNQUFWLENBQWlCckIsVUFBakIsQ0FEeEI7QUFBQSxNQUVNc0IsT0FBT3BCLGNBRmI7QUFBQSxNQUU4QjtBQUN4QnFCLG9CQUFrQkgsZUFIeEI7QUFBQSxNQUd5QztBQUNuQ0ksd0JBQXNCM0IsTUFBTSxxQkFBTixDQUo1QjtBQUFBLE1BS000QixzQkFBc0JELG9CQUFvQkUsMEJBQXBCLENBQStDSixJQUEvQyxFQUFxREMsZUFBckQsRUFBc0UxQixLQUF0RSxFQUE2RUMsWUFBN0UsQ0FMNUI7QUFBQSxNQU1NQyxPQUFPMEIsbUJBTmIsQ0FEMkQsQ0FPekI7O0FBRWxDLFNBQU8xQixJQUFQO0FBQ0QiLCJmaWxlIjoicGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgbm9kZVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL25vZGUnKSxcbiAgICAgIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFBhcnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KFBhcnRzLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgcGFydCxcbiAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuICAgIFxuICAgIGxldCBmaXJzdENoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKTtcbiAgICBcbiAgICBjb25zdCBmaXJzdENoaWxkTm9kZU5vV2hpdGVzcGFjZU5vZGUgPSBub2RlVXRpbC5pc05vZGVOb1doaXRlc3BhY2VOb2RlKGZpcnN0Q2hpbGROb2RlKTtcblxuICAgIGlmIChmaXJzdENoaWxkTm9kZU5vV2hpdGVzcGFjZU5vZGUpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZEZpcnN0KGNoaWxkTm9kZXMpO1xuICBcbiAgICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxhc3RDaGlsZE5vZGUgPSBhcnJheVV0aWwubGFzdChjaGlsZE5vZGVzKTtcblxuICAgIGZpcnN0Q2hpbGROb2RlID0gYXJyYXlVdGlsLmZpcnN0KGNoaWxkTm9kZXMpO1xuICAgIFxuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBmaXJzdENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHBhcnQgPSBwYXJ0RnJvbUNoaWxkTm9kZShjaGlsZE5vZGUsIFBhcnRzLCBub1doaXRlc3BhY2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnQgPSBwYXJ0RnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgUGFydHMsIG5vV2hpdGVzcGFjZSlcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIFBhcnROb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnROb2RlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbUNoaWxkTm9kZShjaGlsZE5vZGUsIFBhcnRzLCBub1doaXRlc3BhY2UpIHtcbiAgY29uc3QgcGFydCA9IGNoaWxkTm9kZS5nZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnRGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBQYXJ0cywgbm9XaGl0ZXNwYWNlKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gYXJyYXlVdGlsLmZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBhcnJheVV0aWwuc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICBub2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgcXVhbnRpZmllcnNOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgU2VxdWVuY2VPZlBhcnRzUGFydCA9IFBhcnRzWydTZXF1ZW5jZU9mUGFydHNQYXJ0J10sXG4gICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0LmZyb21Ob2RlQW5kUXVhbnRpZmllcnNOb2RlKG5vZGUsIHF1YW50aWZpZXJzTm9kZSwgUGFydHMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgIHBhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0OyAvLy9cblxuICByZXR1cm4gcGFydDtcbn1cblxuIl19