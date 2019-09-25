'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var bnfUtilities = require('../../utilities/bnf'),
    partUtilities = require('../../utilities/part'),
    arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    OptionalPartPart = require('../part/nonTerminal/optionalPart'),
    GroupOfPartsPart = require('../part/nonTerminal/groupOfParts'),
    ChoiceOfPartsPart = require('../part/nonTerminal/choiceOfParts'),
    OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts'),
    ZeroOrMorePartsPart = require('../part/nonTerminal/zeroOrMoreParts');

var first = arrayUtilities.first,
    last = arrayUtilities.last,
    specialSymbols = lexers.specialSymbols,
    isPartRuleNamePart = partUtilities.isPartRuleNamePart,
    plus = specialSymbols.plus,
    asterisk = specialSymbols.asterisk,
    questionMark = specialSymbols.questionMark,
    exclamationMark = specialSymbols.exclamationMark,
    isNodeQuantifiersNode = bnfUtilities.isNodeQuantifiersNode,
    isNodeNoWhitespaceNode = bnfUtilities.isNodeNoWhitespaceNode,
    quantifiersFromQuantifiersNode = bnfUtilities.quantifiersFromQuantifiersNode;

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
          nodes = childNodes.slice(),
          ///
      quantifiers = quantifiersFromNodes(nodes),
          firstNodeNoWhitespaceNode = isFirstNodeNoWhitespaceNode(nodes);

      if (firstNodeNoWhitespaceNode) {
        nodes.shift();

        noWhitespace = true;
      }

      var nodesLength = nodes.length;

      if (nodesLength === 1) {
        var firstNode = first(nodes),
            node = firstNode; ///

        part = partFromNode(node, noWhitespace);
      } else {
        part = partFromNodes(nodes);
      }

      part = partFromPartAndQuantifiers(part, quantifiers);

      return part;
    }
  }], [{
    key: 'fromRuleNameAndChildNodes',
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(PartNode, ruleName, childNodes);
    }
  }]);

  return PartNode;
}(NonTerminalNode);

module.exports = PartNode;

function quantifiersFromNodes(nodes) {
  var quantifiers = [];

  var lastNode = last(nodes),
      lastNodeQuantifiersNode = isNodeQuantifiersNode(lastNode);

  if (lastNodeQuantifiersNode) {
    var quantifiersNode = lastNode; ///

    quantifiers = quantifiersFromQuantifiersNode(quantifiersNode);
  }

  return quantifiers;
}

function isFirstNodeNoWhitespaceNode(nodes) {
  var firstNode = first(nodes),
      firstNodeNoWhitespaceNode = isNodeNoWhitespaceNode(firstNode);

  return firstNodeNoWhitespaceNode;
}

function partFromNode(node, noWhitespace) {
  var part = node.generatePart(noWhitespace);

  return part;
}

function partFromNodes(nodes) {
  var part = null;

  var choiceOfPartsPart = ChoiceOfPartsPart.fromNodes(nodes);

  if (choiceOfPartsPart !== null) {
    part = choiceOfPartsPart; ///
  } else {
    var groupOfPartsPart = GroupOfPartsPart.fromNodes(nodes);

    if (groupOfPartsPart !== null) {
      part = groupOfPartsPart; ///
    }
  }

  return part;
}

function partFromPartAndQuantifiers(part, quantifiers) {
  var quantifiersLength = quantifiers.length;

  if (quantifiersLength > 0) {
    var quantifier = quantifiers.shift();

    if (quantifier === exclamationMark) {
      var partRuleNamePart = isPartRuleNamePart(part);

      if (partRuleNamePart) {
        var ruleNamePart = part,
            ///
        lookAhead = true;

        ruleNamePart.setLookAhead(lookAhead);
      }
    } else {
      var sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifier(part, quantifier);

      part = sequenceOfPartsPart; ///
    }

    part = partFromPartAndQuantifiers(part, quantifiers);
  }

  return part;
}

function sequenceOfPartsPartFromPartAndQuantifier(part, quantifier) {
  var sequenceOfPartsPart = void 0;

  switch (quantifier) {
    case questionMark:
      var optionalPartPart = new OptionalPartPart(part);

      sequenceOfPartsPart = optionalPartPart; ///
      break;

    case plus:
      var oneOrMorePartsPart = new OneOrMorePartsPart(part);

      sequenceOfPartsPart = oneOrMorePartsPart; ///
      break;

    case asterisk:
      var zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

      sequenceOfPartsPart = zeroOrMorePartsPart; ///
      break;
  }

  return sequenceOfPartsPart;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJibmZVdGlsaXRpZXMiLCJwYXJ0VXRpbGl0aWVzIiwiYXJyYXlVdGlsaXRpZXMiLCJOb25UZXJtaW5hbE5vZGUiLCJPcHRpb25hbFBhcnRQYXJ0IiwiR3JvdXBPZlBhcnRzUGFydCIsIkNob2ljZU9mUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsImZpcnN0IiwibGFzdCIsInNwZWNpYWxTeW1ib2xzIiwiaXNQYXJ0UnVsZU5hbWVQYXJ0IiwicGx1cyIsImFzdGVyaXNrIiwicXVlc3Rpb25NYXJrIiwiZXhjbGFtYXRpb25NYXJrIiwiaXNOb2RlUXVhbnRpZmllcnNOb2RlIiwiaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZSIsInF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZSIsIlBhcnROb2RlIiwibm9XaGl0ZXNwYWNlIiwicGFydCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJzbGljZSIsInF1YW50aWZpZXJzIiwicXVhbnRpZmllcnNGcm9tTm9kZXMiLCJmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlIiwiaXNGaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlIiwic2hpZnQiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9kZSIsIm5vZGUiLCJwYXJ0RnJvbU5vZGUiLCJwYXJ0RnJvbU5vZGVzIiwicGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcnMiLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwibGFzdE5vZGUiLCJsYXN0Tm9kZVF1YW50aWZpZXJzTm9kZSIsInF1YW50aWZpZXJzTm9kZSIsImdlbmVyYXRlUGFydCIsImNob2ljZU9mUGFydHNQYXJ0IiwiZnJvbU5vZGVzIiwiZ3JvdXBPZlBhcnRzUGFydCIsInF1YW50aWZpZXJzTGVuZ3RoIiwicXVhbnRpZmllciIsInBhcnRSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnQiLCJsb29rQWhlYWQiLCJzZXRMb29rQWhlYWQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUXVhbnRpZmllciIsIm9wdGlvbmFsUGFydFBhcnQiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGVBQWVELFFBQVEscUJBQVIsQ0FBckI7QUFBQSxJQUNNRSxnQkFBZ0JGLFFBQVEsc0JBQVIsQ0FEdEI7QUFBQSxJQUVNRyxpQkFBaUJILFFBQVEsdUJBQVIsQ0FGdkI7QUFBQSxJQUdNSSxrQkFBa0JKLFFBQVEsK0JBQVIsQ0FIeEI7QUFBQSxJQUlNSyxtQkFBbUJMLFFBQVEsa0NBQVIsQ0FKekI7QUFBQSxJQUtNTSxtQkFBbUJOLFFBQVEsa0NBQVIsQ0FMekI7QUFBQSxJQU1NTyxvQkFBb0JQLFFBQVEsbUNBQVIsQ0FOMUI7QUFBQSxJQU9NUSxxQkFBcUJSLFFBQVEsb0NBQVIsQ0FQM0I7QUFBQSxJQVFNUyxzQkFBc0JULFFBQVEscUNBQVIsQ0FSNUI7O0lBVVFVLEssR0FBZ0JQLGMsQ0FBaEJPLEs7SUFBT0MsSSxHQUFTUixjLENBQVRRLEk7SUFDUEMsYyxHQUFtQmIsTSxDQUFuQmEsYztJQUNBQyxrQixHQUF1QlgsYSxDQUF2Qlcsa0I7SUFDQUMsSSxHQUFrREYsYyxDQUFsREUsSTtJQUFNQyxRLEdBQTRDSCxjLENBQTVDRyxRO0lBQVVDLFksR0FBa0NKLGMsQ0FBbENJLFk7SUFBY0MsZSxHQUFvQkwsYyxDQUFwQkssZTtJQUM5QkMscUIsR0FBa0ZqQixZLENBQWxGaUIscUI7SUFBdUJDLHNCLEdBQTJEbEIsWSxDQUEzRGtCLHNCO0lBQXdCQyw4QixHQUFtQ25CLFksQ0FBbkNt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LG1CQUFtQlUsSUFBbkIsQ0FBekI7O0FBRUEsVUFBSThCLGdCQUFKLEVBQXNCO0FBQ3BCLFlBQU1DLGVBQWUvQixJQUFyQjtBQUFBLFlBQTRCO0FBQ3RCZ0Msb0JBQVksSUFEbEI7O0FBR0FELHFCQUFhRSxZQUFiLENBQTBCRCxTQUExQjtBQUNEO0FBQ0YsS0FURCxNQVNPO0FBQ0wsVUFBTUUsc0JBQXNCQyx5Q0FBeUNuQyxJQUF6QyxFQUErQzZCLFVBQS9DLENBQTVCOztBQUVBN0IsYUFBT2tDLG1CQUFQLENBSEssQ0FHdUI7QUFDN0I7O0FBRURsQyxXQUFPZ0IsMkJBQTJCaEIsSUFBM0IsRUFBaUNLLFdBQWpDLENBQVA7QUFDRDs7QUFFRCxTQUFPTCxJQUFQO0FBQ0Q7O0FBRUQsU0FBU21DLHdDQUFULENBQWtEbkMsSUFBbEQsRUFBd0Q2QixVQUF4RCxFQUFvRTtBQUNsRSxNQUFJSyw0QkFBSjs7QUFFQSxVQUFRTCxVQUFSO0FBQ0UsU0FBS3BDLFlBQUw7QUFDRSxVQUFNMkMsbUJBQW1CLElBQUl0RCxnQkFBSixDQUFxQmtCLElBQXJCLENBQXpCOztBQUVBa0MsNEJBQXNCRSxnQkFBdEIsQ0FIRixDQUcwQztBQUN4Qzs7QUFFRixTQUFLN0MsSUFBTDtBQUNFLFVBQU04QyxxQkFBcUIsSUFBSXBELGtCQUFKLENBQXVCZSxJQUF2QixDQUEzQjs7QUFFQWtDLDRCQUFzQkcsa0JBQXRCLENBSEYsQ0FHNEM7QUFDMUM7O0FBRUYsU0FBSzdDLFFBQUw7QUFDRSxVQUFNOEMsc0JBQXNCLElBQUlwRCxtQkFBSixDQUF3QmMsSUFBeEIsQ0FBNUI7O0FBRUFrQyw0QkFBc0JJLG1CQUF0QixDQUhGLENBRzhDO0FBQzVDO0FBakJKOztBQW9CQSxTQUFPSixtQkFBUDtBQUNEIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBibmZVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYm5mJyksXG4gICAgICBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3BhcnQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgT3B0aW9uYWxQYXJ0UGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0JyksXG4gICAgICBHcm91cE9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9ncm91cE9mUGFydHMnKSxcbiAgICAgIENob2ljZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHMnKTtcblxuY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IGlzUGFydFJ1bGVOYW1lUGFydCB9ID0gcGFydFV0aWxpdGllcyxcbiAgICAgIHsgcGx1cywgYXN0ZXJpc2ssIHF1ZXN0aW9uTWFyaywgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scyxcbiAgICAgIHsgaXNOb2RlUXVhbnRpZmllcnNOb2RlLCBpc05vZGVOb1doaXRlc3BhY2VOb2RlLCBxdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUgfSA9IGJuZlV0aWxpdGllcztcblxuY2xhc3MgUGFydE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IHBhcnQgPSBudWxsO1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5zbGljZSgpLCAvLy9cbiAgICAgICAgICBxdWFudGlmaWVycyA9IHF1YW50aWZpZXJzRnJvbU5vZGVzKG5vZGVzKSxcbiAgICAgICAgICBmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlID0gaXNGaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlKG5vZGVzKTtcblxuICAgIGlmIChmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlKSB7XG4gICAgICBub2Rlcy5zaGlmdCgpO1xuXG4gICAgICBub1doaXRlc3BhY2UgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChub2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpLFxuICAgICAgICAgICAgbm9kZSA9IGZpcnN0Tm9kZTsgIC8vL1xuXG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2RlKG5vZGUsIG5vV2hpdGVzcGFjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGVzKG5vZGVzKTtcbiAgICB9XG4gICAgXG4gICAgcGFydCA9IHBhcnRGcm9tUGFydEFuZFF1YW50aWZpZXJzKHBhcnQsIHF1YW50aWZpZXJzKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFBhcnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0Tm9kZTtcblxuZnVuY3Rpb24gcXVhbnRpZmllcnNGcm9tTm9kZXMobm9kZXMpIHtcbiAgbGV0ICBxdWFudGlmaWVycyA9IFtdO1xuXG4gIGNvbnN0IGxhc3ROb2RlID0gbGFzdChub2RlcyksXG4gICAgICAgIGxhc3ROb2RlUXVhbnRpZmllcnNOb2RlID0gaXNOb2RlUXVhbnRpZmllcnNOb2RlKGxhc3ROb2RlKTtcblxuICBpZiAobGFzdE5vZGVRdWFudGlmaWVyc05vZGUpIHtcbiAgICBjb25zdCBxdWFudGlmaWVyc05vZGUgPSBsYXN0Tm9kZTsgIC8vL1xuXG4gICAgcXVhbnRpZmllcnMgPSBxdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBxdWFudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaXNGaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlKG5vZGVzKSB7XG4gIGNvbnN0IGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKSxcbiAgICAgICAgZmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZSA9IGlzTm9kZU5vV2hpdGVzcGFjZU5vZGUoZmlyc3ROb2RlKTtcblxuICByZXR1cm4gZmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZTtcbn1cblxuZnVuY3Rpb24gcGFydEZyb21Ob2RlKG5vZGUsIG5vV2hpdGVzcGFjZSkge1xuICBjb25zdCBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlKTtcblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gcGFydEZyb21Ob2Rlcyhub2Rlcykge1xuICBsZXQgcGFydCA9IG51bGw7XG5cbiAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBDaG9pY2VPZlBhcnRzUGFydC5mcm9tTm9kZXMobm9kZXMpO1xuXG4gIGlmIChjaG9pY2VPZlBhcnRzUGFydCAhPT0gbnVsbCkge1xuICAgIHBhcnQgPSBjaG9pY2VPZlBhcnRzUGFydDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZ3JvdXBPZlBhcnRzUGFydCA9IEdyb3VwT2ZQYXJ0c1BhcnQuZnJvbU5vZGVzKG5vZGVzKTtcblxuICAgIGlmIChncm91cE9mUGFydHNQYXJ0ICE9PSBudWxsKSB7XG4gICAgICBwYXJ0ID0gZ3JvdXBPZlBhcnRzUGFydDsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBwYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVycyhwYXJ0LCBxdWFudGlmaWVycykge1xuICBjb25zdCBxdWFudGlmaWVyc0xlbmd0aCA9IHF1YW50aWZpZXJzLmxlbmd0aDtcblxuICBpZiAocXVhbnRpZmllcnNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcXVhbnRpZmllciA9IHF1YW50aWZpZXJzLnNoaWZ0KCk7XG5cbiAgICBpZiAocXVhbnRpZmllciA9PT0gZXhjbGFtYXRpb25NYXJrKSB7XG4gICAgICBjb25zdCBwYXJ0UnVsZU5hbWVQYXJ0ID0gaXNQYXJ0UnVsZU5hbWVQYXJ0KHBhcnQpO1xuXG4gICAgICBpZiAocGFydFJ1bGVOYW1lUGFydCkge1xuICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIGxvb2tBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgcnVsZU5hbWVQYXJ0LnNldExvb2tBaGVhZChsb29rQWhlYWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gc2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcihwYXJ0LCBxdWFudGlmaWVyKTtcblxuICAgICAgcGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7IC8vL1xuICAgIH1cblxuICAgIHBhcnQgPSBwYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVycyhwYXJ0LCBxdWFudGlmaWVycyk7XG4gIH1cblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gc2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcihwYXJ0LCBxdWFudGlmaWVyKSB7XG4gIGxldCBzZXF1ZW5jZU9mUGFydHNQYXJ0O1xuXG4gIHN3aXRjaCAocXVhbnRpZmllcikge1xuICAgIGNhc2UgcXVlc3Rpb25NYXJrIDpcbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChwYXJ0KTtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG9wdGlvbmFsUGFydFBhcnQ7IC8vL1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBsdXMgOlxuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgYXN0ZXJpc2sgOlxuICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbn1cbiJdfQ==