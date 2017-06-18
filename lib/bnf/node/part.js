'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bnfUtil = require('../../util/bnf'),
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
          childNodes = this.getChildNodes(),
          nodes = childNodes; ///

      var firstNode = arrayUtil.first(nodes),
          firstNodeNoWhitespaceNode = bnfUtil.isNodeNoWhitespaceNode(firstNode);

      if (firstNodeNoWhitespaceNode) {
        noWhitespace = true;

        nodes = arrayUtil.discardFirst(nodes);
      }

      var quantifiers = null;

      var lastNode = arrayUtil.last(nodes),
          lastNodeQuantifiersNode = bnfUtil.isNodeQuantifiersNode(lastNode);

      if (lastNodeQuantifiersNode) {
        var quantifiersNode = lastNode; ///

        quantifiers = bnfUtil.quantifiersFromQuantifiersNode(quantifiersNode);

        nodes = arrayUtil.discardLast(nodes);
      }

      var nodesLength = nodes.length;

      if (nodesLength > 1) {
        var ChoiceOfPartsPart = Parts['ChoiceOfPartsPart'],
            choiceOfPartsPart = ChoiceOfPartsPart.fromNodes(nodes, Parts);

        if (choiceOfPartsPart !== null) {
          part = choiceOfPartsPart; ///
        } else {
          var GroupOfPartsPart = Parts['GroupOfPartsPart'],
              groupOfPartsPart = GroupOfPartsPart.fromNodes(nodes, Parts);

          part = groupOfPartsPart; ///
        }
      } else {
        var _firstNode = arrayUtil.first(nodes),
            remainingNode = _firstNode; ///

        part = remainingNode.generatePart(Parts, noWhitespace);
      }

      if (quantifiers !== null) {
        var SequenceOfPartsPart = Parts['SequenceOfPartsPart'],
            sequenceOfPartsPart = SequenceOfPartsPart.fromPartAndQuantifiers(part, quantifiers, Parts);

        part = sequenceOfPartsPart; ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbImJuZlV0aWwiLCJyZXF1aXJlIiwiYXJyYXlVdGlsIiwiTm9uVGVybWluYWxOb2RlIiwiUGFydE5vZGUiLCJQYXJ0cyIsIm5vV2hpdGVzcGFjZSIsInBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwiZmlyc3ROb2RlIiwiZmlyc3QiLCJmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlIiwiaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZSIsImRpc2NhcmRGaXJzdCIsInF1YW50aWZpZXJzIiwibGFzdE5vZGUiLCJsYXN0IiwibGFzdE5vZGVRdWFudGlmaWVyc05vZGUiLCJpc05vZGVRdWFudGlmaWVyc05vZGUiLCJxdWFudGlmaWVyc05vZGUiLCJxdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUiLCJkaXNjYXJkTGFzdCIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJjaG9pY2VPZlBhcnRzUGFydCIsImZyb21Ob2RlcyIsIkdyb3VwT2ZQYXJ0c1BhcnQiLCJncm91cE9mUGFydHNQYXJ0IiwicmVtYWluaW5nTm9kZSIsImdlbmVyYXRlUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiZnJvbVBhcnRBbmRRdWFudGlmaWVycyIsInByb2R1Y3Rpb25OYW1lIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZ0JBQVIsQ0FBaEI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGtCQUFSLENBRGxCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLCtCQUFSLENBRnhCOztJQUlNRyxROzs7Ozs7Ozs7OztpQ0FDU0MsSyxFQUFPQyxZLEVBQWM7QUFDaEMsVUFBSUMsYUFBSjtBQUFBLFVBQ0lDLGFBQWEsS0FBS0MsYUFBTCxFQURqQjtBQUFBLFVBRUlDLFFBQVFGLFVBRlosQ0FEZ0MsQ0FHUjs7QUFFeEIsVUFBTUcsWUFBWVQsVUFBVVUsS0FBVixDQUFnQkYsS0FBaEIsQ0FBbEI7QUFBQSxVQUNNRyw0QkFBNEJiLFFBQVFjLHNCQUFSLENBQStCSCxTQUEvQixDQURsQzs7QUFHQSxVQUFJRSx5QkFBSixFQUErQjtBQUM3QlAsdUJBQWUsSUFBZjs7QUFFQUksZ0JBQVFSLFVBQVVhLFlBQVYsQ0FBdUJMLEtBQXZCLENBQVI7QUFDRDs7QUFFRCxVQUFLTSxjQUFjLElBQW5COztBQUVBLFVBQU1DLFdBQVdmLFVBQVVnQixJQUFWLENBQWVSLEtBQWYsQ0FBakI7QUFBQSxVQUNNUywwQkFBMEJuQixRQUFRb0IscUJBQVIsQ0FBOEJILFFBQTlCLENBRGhDOztBQUdBLFVBQUlFLHVCQUFKLEVBQTZCO0FBQzNCLFlBQU1FLGtCQUFrQkosUUFBeEIsQ0FEMkIsQ0FDUTs7QUFFbkNELHNCQUFjaEIsUUFBUXNCLDhCQUFSLENBQXVDRCxlQUF2QyxDQUFkOztBQUVBWCxnQkFBUVIsVUFBVXFCLFdBQVYsQ0FBc0JiLEtBQXRCLENBQVI7QUFDRDs7QUFFRCxVQUFNYyxjQUFjZCxNQUFNZSxNQUExQjs7QUFFQSxVQUFJRCxjQUFjLENBQWxCLEVBQXFCO0FBQ25CLFlBQU1FLG9CQUFvQnJCLE1BQU0sbUJBQU4sQ0FBMUI7QUFBQSxZQUNNc0Isb0JBQW9CRCxrQkFBa0JFLFNBQWxCLENBQTRCbEIsS0FBNUIsRUFBbUNMLEtBQW5DLENBRDFCOztBQUdBLFlBQUlzQixzQkFBc0IsSUFBMUIsRUFBZ0M7QUFDOUJwQixpQkFBT29CLGlCQUFQLENBRDhCLENBQ0o7QUFDM0IsU0FGRCxNQUVPO0FBQ0wsY0FBTUUsbUJBQW1CeEIsTUFBTSxrQkFBTixDQUF6QjtBQUFBLGNBQ015QixtQkFBbUJELGlCQUFpQkQsU0FBakIsQ0FBMkJsQixLQUEzQixFQUFrQ0wsS0FBbEMsQ0FEekI7O0FBR0FFLGlCQUFPdUIsZ0JBQVAsQ0FKSyxDQUlxQjtBQUMzQjtBQUNGLE9BWkQsTUFZTztBQUNMLFlBQU1uQixhQUFZVCxVQUFVVSxLQUFWLENBQWdCRixLQUFoQixDQUFsQjtBQUFBLFlBQ01xQixnQkFBZ0JwQixVQUR0QixDQURLLENBRTZCOztBQUVsQ0osZUFBT3dCLGNBQWNDLFlBQWQsQ0FBMkIzQixLQUEzQixFQUFrQ0MsWUFBbEMsQ0FBUDtBQUNEOztBQUVELFVBQUlVLGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QixZQUFNaUIsc0JBQXNCNUIsTUFBTSxxQkFBTixDQUE1QjtBQUFBLFlBQ002QixzQkFBc0JELG9CQUFvQkUsc0JBQXBCLENBQTJDNUIsSUFBM0MsRUFBaURTLFdBQWpELEVBQThEWCxLQUE5RCxDQUQ1Qjs7QUFHQUUsZUFBTzJCLG1CQUFQLENBSndCLENBSUk7QUFDN0I7O0FBRUQsYUFBTzNCLElBQVA7QUFDRDs7OytDQUVpQ0csSyxFQUFPMEIsYyxFQUFnQjtBQUFFLGFBQU9qQyxnQkFBZ0JrQywwQkFBaEIsQ0FBMkMzQixLQUEzQyxFQUFrRDBCLGNBQWxELEVBQWtFaEMsUUFBbEUsQ0FBUDtBQUFxRjs7OztFQTNEM0hELGU7O0FBOER2Qm1DLE9BQU9DLE9BQVAsR0FBaUJuQyxRQUFqQiIsImZpbGUiOiJwYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBibmZVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9ibmYnKSxcbiAgICAgIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFBhcnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KFBhcnRzLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgcGFydCxcbiAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXM7IC8vL1xuICAgIFxuICAgIGNvbnN0IGZpcnN0Tm9kZSA9IGFycmF5VXRpbC5maXJzdChub2RlcyksXG4gICAgICAgICAgZmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZSA9IGJuZlV0aWwuaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZShmaXJzdE5vZGUpO1xuXG4gICAgaWYgKGZpcnN0Tm9kZU5vV2hpdGVzcGFjZU5vZGUpIHtcbiAgICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG5cbiAgICAgIG5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRGaXJzdChub2Rlcyk7XG4gICAgfVxuXG4gICAgbGV0ICBxdWFudGlmaWVycyA9IG51bGw7XG5cbiAgICBjb25zdCBsYXN0Tm9kZSA9IGFycmF5VXRpbC5sYXN0KG5vZGVzKSxcbiAgICAgICAgICBsYXN0Tm9kZVF1YW50aWZpZXJzTm9kZSA9IGJuZlV0aWwuaXNOb2RlUXVhbnRpZmllcnNOb2RlKGxhc3ROb2RlKTtcbiAgICBcbiAgICBpZiAobGFzdE5vZGVRdWFudGlmaWVyc05vZGUpIHtcbiAgICAgIGNvbnN0IHF1YW50aWZpZXJzTm9kZSA9IGxhc3ROb2RlOyAgLy8vXG4gICAgICBcbiAgICAgIHF1YW50aWZpZXJzID0gYm5mVXRpbC5xdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlKTtcblxuICAgICAgbm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZExhc3Qobm9kZXMpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcbiAgICBcbiAgICBpZiAobm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBDaG9pY2VPZlBhcnRzUGFydCA9IFBhcnRzWydDaG9pY2VPZlBhcnRzUGFydCddLFxuICAgICAgICAgICAgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBDaG9pY2VPZlBhcnRzUGFydC5mcm9tTm9kZXMobm9kZXMsIFBhcnRzKTtcbiAgICAgIFxuICAgICAgaWYgKGNob2ljZU9mUGFydHNQYXJ0ICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnQgPSBjaG9pY2VPZlBhcnRzUGFydDsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBHcm91cE9mUGFydHNQYXJ0ID0gUGFydHNbJ0dyb3VwT2ZQYXJ0c1BhcnQnXSxcbiAgICAgICAgICAgICAgZ3JvdXBPZlBhcnRzUGFydCA9IEdyb3VwT2ZQYXJ0c1BhcnQuZnJvbU5vZGVzKG5vZGVzLCBQYXJ0cyk7XG5cbiAgICAgICAgcGFydCA9IGdyb3VwT2ZQYXJ0c1BhcnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlyc3ROb2RlID0gYXJyYXlVdGlsLmZpcnN0KG5vZGVzKSxcbiAgICAgICAgICAgIHJlbWFpbmluZ05vZGUgPSBmaXJzdE5vZGU7ICAvLy9cbiAgICAgIFxuICAgICAgcGFydCA9IHJlbWFpbmluZ05vZGUuZ2VuZXJhdGVQYXJ0KFBhcnRzLCBub1doaXRlc3BhY2UpO1xuICAgIH1cbiAgICBcbiAgICBpZiAocXVhbnRpZmllcnMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBQYXJ0c1snU2VxdWVuY2VPZlBhcnRzUGFydCddLFxuICAgICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQuZnJvbVBhcnRBbmRRdWFudGlmaWVycyhwYXJ0LCBxdWFudGlmaWVycywgUGFydHMpO1xuICAgICAgXG4gICAgICBwYXJ0ID0gc2VxdWVuY2VPZlBhcnRzUGFydDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIFBhcnROb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnROb2RlO1xuIl19