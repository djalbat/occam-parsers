'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bnfUtil = require('../../util/bnf'),
    arrayUtil = require('../../util/array'),
    GroupOfPartsPart = require('../part/groupOfParts'),
    ChoiceOfPartsPart = require('../part/choiceOfParts'),
    OptionalPartPart = require('../part/optionalPart'),
    ZeroOrMorePartsPart = require('../part/zeroOrMoreParts'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var PartNode = function (_NonTerminalNode) {
  _inherits(PartNode, _NonTerminalNode);

  function PartNode() {
    _classCallCheck(this, PartNode);

    return _possibleConstructorReturn(this, (PartNode.__proto__ || Object.getPrototypeOf(PartNode)).apply(this, arguments));
  }

  _createClass(PartNode, [{
    key: 'generatePart',
    value: function generatePart(noWhitespace) {
      var part = null;

      var childNodes = this.getChildNodes(),
          nodes = childNodes,
          ///
      quantifiers = quantifiersFromNodes(nodes);

      noWhitespace = noWhitespaceFromNodes(nodes, noWhitespace);

      var nodesLength = nodes.length;

      if (nodesLength === 1) {
        var firstNode = arrayUtil.first(nodes),
            node = firstNode; ///

        part = partFromNode(node, noWhitespace);
      } else {
        part = partFromNodes(nodes);
      }

      part = partFromPartAndQuantifiers(part, quantifiers);

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

function noWhitespaceFromNodes(nodes, noWhitespace) {
  var firstNode = arrayUtil.first(nodes),
      firstNodeNoWhitespaceNode = bnfUtil.isNodeNoWhitespaceNode(firstNode);

  if (firstNodeNoWhitespaceNode) {
    noWhitespace = true;

    var begin = 0,
        deleteCount = 1;

    nodes.splice(begin, deleteCount);
  }

  return noWhitespace;
}

function quantifiersFromNodes(nodes) {
  var quantifiers = [];

  var lastNode = arrayUtil.last(nodes),
      lastNodeQuantifiersNode = bnfUtil.isNodeQuantifiersNode(lastNode);

  if (lastNodeQuantifiersNode) {
    var quantifiersNode = lastNode; ///

    quantifiers = bnfUtil.quantifiersFromQuantifiersNode(quantifiersNode);

    var begin = -1,
        deleteCount = 1;

    nodes.splice(begin, deleteCount);
  }

  return quantifiers;
}

function partFromNode(node, noWhitespace) {
  var part = node.generatePart(noWhitespace);

  return part;
}

function partFromNodes(nodes) {
  var part = ChoiceOfPartsPart.fromNodes(nodes) || GroupOfPartsPart.fromNodes(nodes); /// 

  return part;
}

function partFromPartAndQuantifiers(part, quantifiers) {
  var quantifiersLength = quantifiers.length;

  if (quantifiersLength > 0) {
    var quantifier = quantifiers.shift(),
        sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifier(part, quantifier);

    part = sequenceOfPartsPart; ///

    part = partFromPartAndQuantifiers(part, quantifiers);
  }

  return part;
}

function sequenceOfPartsPartFromPartAndQuantifier(part, quantifier) {
  var sequenceOfPartsPart = void 0;

  switch (quantifier) {
    case '?':
      var optionalPartPart = new OptionalPartPart(part);

      sequenceOfPartsPart = optionalPartPart; ///
      break;

    case '*':
      var zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

      sequenceOfPartsPart = zeroOrMorePartsPart; ///
      break;

    case '+':
      var oneOrMorePartsPart = new OneOrMorePartsPart(part);

      sequenceOfPartsPart = oneOrMorePartsPart; ///
      break;
  }

  return sequenceOfPartsPart;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3BhcnQuanMiXSwibmFtZXMiOlsiYm5mVXRpbCIsInJlcXVpcmUiLCJhcnJheVV0aWwiLCJHcm91cE9mUGFydHNQYXJ0IiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJPcHRpb25hbFBhcnRQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIk5vblRlcm1pbmFsTm9kZSIsIlBhcnROb2RlIiwibm9XaGl0ZXNwYWNlIiwicGFydCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJxdWFudGlmaWVycyIsInF1YW50aWZpZXJzRnJvbU5vZGVzIiwibm9XaGl0ZXNwYWNlRnJvbU5vZGVzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdE5vZGUiLCJmaXJzdCIsIm5vZGUiLCJwYXJ0RnJvbU5vZGUiLCJwYXJ0RnJvbU5vZGVzIiwicGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcnMiLCJwcm9kdWN0aW9uTmFtZSIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpcnN0Tm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJpc05vZGVOb1doaXRlc3BhY2VOb2RlIiwiYmVnaW4iLCJkZWxldGVDb3VudCIsInNwbGljZSIsImxhc3ROb2RlIiwibGFzdCIsImxhc3ROb2RlUXVhbnRpZmllcnNOb2RlIiwiaXNOb2RlUXVhbnRpZmllcnNOb2RlIiwicXVhbnRpZmllcnNOb2RlIiwicXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlIiwiZ2VuZXJhdGVQYXJ0IiwiZnJvbU5vZGVzIiwicXVhbnRpZmllcnNMZW5ndGgiLCJxdWFudGlmaWVyIiwic2hpZnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUXVhbnRpZmllciIsIm9wdGlvbmFsUGFydFBhcnQiLCJ6ZXJvT3JNb3JlUGFy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QUFqQko7O0FBb0JBLFNBQU9KLG1CQUFQO0FBQ0QiLCJmaWxlIjoicGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYm5mVXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYm5mJyksXG4gICAgICBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBHcm91cE9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ncm91cE9mUGFydHMnKSxcbiAgICAgIENob2ljZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9jaG9pY2VPZlBhcnRzJyksXG4gICAgICBPcHRpb25hbFBhcnRQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9vcHRpb25hbFBhcnQnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3plcm9Pck1vcmVQYXJ0cycpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuXG5jbGFzcyBQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgcGFydCA9IG51bGw7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBxdWFudGlmaWVycyA9IHF1YW50aWZpZXJzRnJvbU5vZGVzKG5vZGVzKTtcblxuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZUZyb21Ob2Rlcyhub2Rlcywgbm9XaGl0ZXNwYWNlKTtcblxuICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChub2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3ROb2RlID0gYXJyYXlVdGlsLmZpcnN0KG5vZGVzKSxcbiAgICAgICAgICAgIG5vZGUgPSBmaXJzdE5vZGU7ICAvLy9cblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZShub2RlLCBub1doaXRlc3BhY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG4gICAgfVxuICAgIFxuICAgIHBhcnQgPSBwYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVycyhwYXJ0LCBxdWFudGlmaWVycyk7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSwgUGFydE5vZGUpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydE5vZGU7XG5cbmZ1bmN0aW9uIG5vV2hpdGVzcGFjZUZyb21Ob2Rlcyhub2Rlcywgbm9XaGl0ZXNwYWNlKSB7XG4gIGNvbnN0IGZpcnN0Tm9kZSA9IGFycmF5VXRpbC5maXJzdChub2RlcyksXG4gICAgICAgIGZpcnN0Tm9kZU5vV2hpdGVzcGFjZU5vZGUgPSBibmZVdGlsLmlzTm9kZU5vV2hpdGVzcGFjZU5vZGUoZmlyc3ROb2RlKTtcblxuICBpZiAoZmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG5cbiAgICBjb25zdCBiZWdpbiA9IDAsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgbm9kZXMuc3BsaWNlKGJlZ2luLCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZXR1cm4gbm9XaGl0ZXNwYWNlO1xufVxuXG5mdW5jdGlvbiBxdWFudGlmaWVyc0Zyb21Ob2Rlcyhub2Rlcykge1xuICBsZXQgIHF1YW50aWZpZXJzID0gW107XG5cbiAgY29uc3QgbGFzdE5vZGUgPSBhcnJheVV0aWwubGFzdChub2RlcyksXG4gICAgICAgIGxhc3ROb2RlUXVhbnRpZmllcnNOb2RlID0gYm5mVXRpbC5pc05vZGVRdWFudGlmaWVyc05vZGUobGFzdE5vZGUpO1xuXG4gIGlmIChsYXN0Tm9kZVF1YW50aWZpZXJzTm9kZSkge1xuICAgIGNvbnN0IHF1YW50aWZpZXJzTm9kZSA9IGxhc3ROb2RlOyAgLy8vXG5cbiAgICBxdWFudGlmaWVycyA9IGJuZlV0aWwucXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSk7XG5cbiAgICBjb25zdCBiZWdpbiA9IC0xLFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIG5vZGVzLnNwbGljZShiZWdpbiwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgcmV0dXJuIHF1YW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBwYXJ0RnJvbU5vZGUobm9kZSwgbm9XaGl0ZXNwYWNlKSB7XG4gIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChub1doaXRlc3BhY2UpO1xuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBwYXJ0RnJvbU5vZGVzKG5vZGVzKSB7XG4gIGNvbnN0IHBhcnQgPSBDaG9pY2VPZlBhcnRzUGFydC5mcm9tTm9kZXMobm9kZXMpIHx8IEdyb3VwT2ZQYXJ0c1BhcnQuZnJvbU5vZGVzKG5vZGVzKTsgLy8vIFxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBwYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVycyhwYXJ0LCBxdWFudGlmaWVycykge1xuICBjb25zdCBxdWFudGlmaWVyc0xlbmd0aCA9IHF1YW50aWZpZXJzLmxlbmd0aDtcblxuICBpZiAocXVhbnRpZmllcnNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcXVhbnRpZmllciA9IHF1YW50aWZpZXJzLnNoaWZ0KCksXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFF1YW50aWZpZXIocGFydCwgcXVhbnRpZmllcik7XG5cbiAgICBwYXJ0ID0gc2VxdWVuY2VPZlBhcnRzUGFydDsgLy8vXG5cbiAgICBwYXJ0ID0gcGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcnMocGFydCwgcXVhbnRpZmllcnMpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIHNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFF1YW50aWZpZXIocGFydCwgcXVhbnRpZmllcikge1xuICBsZXQgc2VxdWVuY2VPZlBhcnRzUGFydDtcblxuICBzd2l0Y2ggKHF1YW50aWZpZXIpIHtcbiAgICBjYXNlICc/JzpcbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChwYXJ0KTtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG9wdGlvbmFsUGFydFBhcnQ7IC8vL1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICcqJzpcbiAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQ7ICAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnKyc6XG4gICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG59XG4iXX0=