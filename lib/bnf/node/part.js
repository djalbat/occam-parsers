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
  var firstChildNode = first(childNodes),
      secondChildNode = second(childNodes),
      node = firstChildNode,
      ///
  quantifiersNode = secondChildNode,
      ///
  sequenceOfPartsPart = sequenceOfPartsPartFromNodeAndQuantifiersNode(node, quantifiersNode, Parts, noWhitespace),
      part = sequenceOfPartsPart; ///

  return part;
}

function sequenceOfPartsPartFromNodeAndQuantifiersNode(node, quantifiersNode, Parts, noWhitespace) {
  var part = node.generatePart(Parts, noWhitespace),
      quantifiers = nodeUtil.quantifiersFromQuantifiersNode(quantifiersNode),
      sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifiers(part, quantifiers, Parts);

  return sequenceOfPartsPart;
}

function sequenceOfPartsPartFromPartAndQuantifiers(part, quantifiers, Parts) {
  var quantifier = quantifiers.shift(),
      quantifiersLength = quantifiers.length;

  var sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifier(part, quantifier, Parts);

  if (quantifiersLength > 0) {
    part = sequenceOfPartsPart; ///

    sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifiers(part, quantifiers, Parts);
  }

  return sequenceOfPartsPart;
}

function sequenceOfPartsPartFromPartAndQuantifier(part, quantifier, Parts) {
  var sequenceOfPartsPart = void 0;

  switch (quantifier) {
    case '?':
      var OptionalPartPart = Parts['OptionalPartPart'],
          optionalPartPart = new OptionalPartPart(part);

      sequenceOfPartsPart = optionalPartPart;
      break;

    case '*':
      var ZeroOrMorePartsPart = Parts['ZeroOrMorePartsPart'],
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

      sequenceOfPartsPart = zeroOrMorePartsPart;
      break;

    case '+':
      var OneOrMorePartsPart = Parts['OneOrMorePartsPart'],
          oneOrMorePartsPart = new OneOrMorePartsPart(part);

      sequenceOfPartsPart = oneOrMorePartsPart;
      break;
  }

  return sequenceOfPartsPart;
}

function first(array) {
  return array[0];
}
function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbIm5vZGVVdGlsIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlBhcnROb2RlIiwiUGFydHMiLCJub1doaXRlc3BhY2UiLCJwYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwiZmlyc3RDaGlsZE5vZGVOb1doaXRlc3BhY2VOb2RlIiwiaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2RlIiwicGFydEZyb21DaGlsZE5vZGUiLCJwYXJ0RnJvbUNoaWxkTm9kZXMiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2VuZXJhdGVQYXJ0Iiwic2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kIiwibm9kZSIsInF1YW50aWZpZXJzTm9kZSIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbU5vZGVBbmRRdWFudGlmaWVyc05vZGUiLCJxdWFudGlmaWVycyIsInF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZSIsInNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFF1YW50aWZpZXJzIiwicXVhbnRpZmllciIsInNoaWZ0IiwicXVhbnRpZmllcnNMZW5ndGgiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVyIiwiT3B0aW9uYWxQYXJ0UGFydCIsIm9wdGlvbmFsUGFydFBhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIm9uZU9yTW9yZVBhcnRzUGFydCIsImFycmF5Il0sIm1hcHBpbmdzIjoi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Q29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5vZGVVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9ub2RlJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChQYXJ0cywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IHBhcnQ7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBpZiAoIW5vV2hpdGVzcGFjZSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlTm9XaGl0ZXNwYWNlTm9kZSA9IG5vZGVVdGlsLmlzTm9kZU5vV2hpdGVzcGFjZU5vZGUoZmlyc3RDaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoZmlyc3RDaGlsZE5vZGVOb1doaXRlc3BhY2VOb2RlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBmaXJzdENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHBhcnQgPSBwYXJ0RnJvbUNoaWxkTm9kZShjaGlsZE5vZGUsIFBhcnRzLCBub1doaXRlc3BhY2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnQgPSBwYXJ0RnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgUGFydHMsIG5vV2hpdGVzcGFjZSlcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIFBhcnROb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnROb2RlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbUNoaWxkTm9kZShjaGlsZE5vZGUsIFBhcnRzLCBub1doaXRlc3BhY2UpIHtcbiAgY29uc3QgcGFydCA9IGNoaWxkTm9kZS5nZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnRGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBQYXJ0cywgbm9XaGl0ZXNwYWNlKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgbm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgIHF1YW50aWZpZXJzTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgLy8vXG4gICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbU5vZGVBbmRRdWFudGlmaWVyc05vZGUobm9kZSwgcXVhbnRpZmllcnNOb2RlLCBQYXJ0cywgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgcGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7IC8vL1xuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbU5vZGVBbmRRdWFudGlmaWVyc05vZGUobm9kZSwgcXVhbnRpZmllcnNOb2RlLCBQYXJ0cywgbm9XaGl0ZXNwYWNlKSB7XG4gIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChQYXJ0cywgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgcXVhbnRpZmllcnMgPSBub2RlVXRpbC5xdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlKSxcbiAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFF1YW50aWZpZXJzKHBhcnQsIHF1YW50aWZpZXJzLCBQYXJ0cyk7XG5cbiAgcmV0dXJuIHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG59XG5cbmZ1bmN0aW9uIHNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFF1YW50aWZpZXJzKHBhcnQsIHF1YW50aWZpZXJzLCBQYXJ0cykge1xuICBjb25zdCBxdWFudGlmaWVyID0gcXVhbnRpZmllcnMuc2hpZnQoKSxcbiAgICAgICAgcXVhbnRpZmllcnNMZW5ndGggPSBxdWFudGlmaWVycy5sZW5ndGg7XG5cbiAgbGV0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVyKHBhcnQsIHF1YW50aWZpZXIsIFBhcnRzKTtcblxuICBpZiAocXVhbnRpZmllcnNMZW5ndGggPiAwKSB7XG4gICAgcGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7IC8vL1xuXG4gICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFF1YW50aWZpZXJzKHBhcnQsIHF1YW50aWZpZXJzLCBQYXJ0cyk7XG4gIH1cblxuICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbn1cblxuZnVuY3Rpb24gc2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcihwYXJ0LCBxdWFudGlmaWVyLCBQYXJ0cykge1xuICBsZXQgc2VxdWVuY2VPZlBhcnRzUGFydDtcblxuICBzd2l0Y2ggKHF1YW50aWZpZXIpIHtcbiAgICBjYXNlICc/JzpcbiAgICAgIGNvbnN0IE9wdGlvbmFsUGFydFBhcnQgPSBQYXJ0c1snT3B0aW9uYWxQYXJ0UGFydCddLFxuICAgICAgICAgICAgb3B0aW9uYWxQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydDtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnKic6XG4gICAgICBjb25zdCBaZXJvT3JNb3JlUGFydHNQYXJ0ID0gUGFydHNbJ1plcm9Pck1vcmVQYXJ0c1BhcnQnXSxcbiAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJysnOlxuICAgICAgY29uc3QgT25lT3JNb3JlUGFydHNQYXJ0ID0gUGFydHNbJ09uZU9yTW9yZVBhcnRzUGFydCddLFxuICAgICAgICAgICAgb25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19