'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nodeUtil = require('../../util/node'),
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
      var part = void 0;

      var childNodes = this.getChildNodes();

      if (!noWhitespace) {
        var _firstChildNode = first(childNodes),
            firstChildNodeNoWhitespaceNode = nodeUtil.isNodeNoWhitespaceNode(_firstChildNode);

        if (firstChildNodeNoWhitespaceNode) {
          var start = 0,
              deleteCount = 1;

          childNodes.splice(start, deleteCount);

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
  var part = void 0;

  var firstChildNode = first(childNodes),
      secondChildNode = second(childNodes),
      secondChildNodeQuantifierNode = nodeUtil.isNodeQuantifierNode(secondChildNode);

  if (secondChildNodeQuantifierNode) {
    var node = firstChildNode,
        ///
    quantifierNode = secondChildNode;

    part = partFromNodeAndQuantifierNode(node, quantifierNode, Parts, noWhitespace);
  }

  return part;
}

function partFromNodeAndQuantifierNode(node, quantifierNode, Parts, noWhitespace) {
  var part = node.generatePart(Parts, noWhitespace);

  var quantifierNodeContent = nodeUtil.contentFromQuantifierNode(quantifierNode),
      quantifier = quantifierNodeContent; ///

  var Part = void 0;

  switch (quantifier) {
    case '+':
      var OneOrMorePartsPart = Parts['OneOrMorePartsPart'];

      Part = OneOrMorePartsPart;
      break;
  }

  part = new Part(part); ///

  return part;
}

function first(array) {
  return array[0];
}

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbIm5vZGVVdGlsIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlBhcnROb2RlIiwiUGFydHMiLCJub1doaXRlc3BhY2UiLCJwYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwiZmlyc3RDaGlsZE5vZGVOb1doaXRlc3BhY2VOb2RlIiwiaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2RlIiwicGFydEZyb21DaGlsZE5vZGUiLCJwYXJ0RnJvbUNoaWxkTm9kZXMiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2VuZXJhdGVQYXJ0Iiwic2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kIiwic2Vjb25kQ2hpbGROb2RlUXVhbnRpZmllck5vZGUiLCJpc05vZGVRdWFudGlmaWVyTm9kZSIsIm5vZGUiLCJxdWFudGlmaWVyTm9kZSIsInBhcnRGcm9tTm9kZUFuZFF1YW50aWZpZXJOb2RlIiwicXVhbnRpZmllck5vZGVDb250ZW50IiwiY29udGVudEZyb21RdWFudGlmaWVyTm9kZSIsInF1YW50aWZpZXIiLCJQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxpQkFBUixDQUFqQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4Qjs7SUFHTUUsUTs7Ozs7Ozs7Ozs7aUNBQ1NDLEssRUFBT0MsWSxFQUFjO0FBQ2hDLFVBQUlDLGFBQUo7O0FBRUEsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5COztBQUVBLFVBQUksQ0FB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anMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5vZGVVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9ub2RlJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChQYXJ0cywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IHBhcnQ7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBpZiAoIW5vV2hpdGVzcGFjZSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlTm9XaGl0ZXNwYWNlTm9kZSA9IG5vZGVVdGlsLmlzTm9kZU5vV2hpdGVzcGFjZU5vZGUoZmlyc3RDaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoZmlyc3RDaGlsZE5vZGVOb1doaXRlc3BhY2VOb2RlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBmaXJzdENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHBhcnQgPSBwYXJ0RnJvbUNoaWxkTm9kZShjaGlsZE5vZGUsIFBhcnRzLCBub1doaXRlc3BhY2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnQgPSBwYXJ0RnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgUGFydHMsIG5vV2hpdGVzcGFjZSlcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIFBhcnROb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnROb2RlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbUNoaWxkTm9kZShjaGlsZE5vZGUsIFBhcnRzLCBub1doaXRlc3BhY2UpIHtcbiAgY29uc3QgcGFydCA9IGNoaWxkTm9kZS5nZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnRGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBQYXJ0cywgbm9XaGl0ZXNwYWNlKSB7XG4gIGxldCBwYXJ0O1xuXG4gIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgc2Vjb25kQ2hpbGROb2RlUXVhbnRpZmllck5vZGUgPSBub2RlVXRpbC5pc05vZGVRdWFudGlmaWVyTm9kZShzZWNvbmRDaGlsZE5vZGUpO1xuXG4gIGlmIChzZWNvbmRDaGlsZE5vZGVRdWFudGlmaWVyTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHF1YW50aWZpZXJOb2RlID0gc2Vjb25kQ2hpbGROb2RlO1xuXG4gICAgcGFydCA9IHBhcnRGcm9tTm9kZUFuZFF1YW50aWZpZXJOb2RlKG5vZGUsIHF1YW50aWZpZXJOb2RlLCBQYXJ0cywgbm9XaGl0ZXNwYWNlKTtcbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBwYXJ0RnJvbU5vZGVBbmRRdWFudGlmaWVyTm9kZShub2RlLCBxdWFudGlmaWVyTm9kZSwgUGFydHMsIG5vV2hpdGVzcGFjZSkge1xuICBsZXQgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KFBhcnRzLCBub1doaXRlc3BhY2UpO1xuXG4gIGNvbnN0IHF1YW50aWZpZXJOb2RlQ29udGVudCA9IG5vZGVVdGlsLmNvbnRlbnRGcm9tUXVhbnRpZmllck5vZGUocXVhbnRpZmllck5vZGUpLFxuICAgICAgICBxdWFudGlmaWVyID0gcXVhbnRpZmllck5vZGVDb250ZW50OyAvLy9cblxuICBsZXQgUGFydDtcblxuICBzd2l0Y2ggKHF1YW50aWZpZXIpIHtcbiAgICBjYXNlICcrJzpcbiAgICAgIGNvbnN0IE9uZU9yTW9yZVBhcnRzUGFydCA9IFBhcnRzWydPbmVPck1vcmVQYXJ0c1BhcnQnXTtcblxuICAgICAgUGFydCA9IE9uZU9yTW9yZVBhcnRzUGFydDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcGFydCA9IG5ldyBQYXJ0KHBhcnQpOyAgLy8vXG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=