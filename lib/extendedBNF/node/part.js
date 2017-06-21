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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3BhcnQuanMiXSwibmFtZXMiOlsiYm5mVXRpbCIsInJlcXVpcmUiLCJhcnJheVV0aWwiLCJOb25UZXJtaW5hbE5vZGUiLCJQYXJ0Tm9kZSIsIlBhcnRzIiwibm9XaGl0ZXNwYWNlIiwicGFydCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJmaXJzdE5vZGUiLCJmaXJzdCIsImZpcnN0Tm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJpc05vZGVOb1doaXRlc3BhY2VOb2RlIiwiZGlzY2FyZEZpcnN0IiwicXVhbnRpZmllcnMiLCJsYXN0Tm9kZSIsImxhc3QiLCJsYXN0Tm9kZVF1YW50aWZpZXJzTm9kZSIsImlzTm9kZVF1YW50aWZpZXJzTm9kZSIsInF1YW50aWZpZXJzTm9kZSIsInF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZSIsImRpc2NhcmRMYXN0Iiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJDaG9pY2VPZlBhcnRzUGFydCIsImNob2ljZU9mUGFydHNQYXJ0IiwiZnJvbU5vZGVzIiwiR3JvdXBPZlBhcnRzUGFydCIsImdyb3VwT2ZQYXJ0c1BhcnQiLCJyZW1haW5pbmdOb2RlIiwiZ2VuZXJhdGVQYXJ0IiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJmcm9tUGFydEFuZFF1YW50aWZpZXJzIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxnQkFBUixDQUFoQjtBQUFBLElBQ01DLFlBQVlELFFBQVEsa0JBQVIsQ0FEbEI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsK0JBQVIsQ0FGeEI7O0lBSU1HLFE7Ozs7Ozs7Ozs7O2lDQUNTQyxLLEVBQU9DLFksRUFBYztBQUNoQyxVQUFJQyxhQUFKO0FBQUEsVUFDSUMsYUFBYSxLQUFLQyxhQUFMLEVBRGpCO0FBQUEsVUFFSUMsUUFBUUYsVUFGWixDQURnQyxDQUdSOztBQUV4QixVQUFNRyxZQUFZVCxVQUFVVSxLQUFWLENBQWdCRixLQUFoQixDQUFsQjtBQUFBLFVBQ01HLDRCQUE0QmIsUUFBUWMsc0JBQVIsQ0FBK0JILFNBQS9CLENBRGxDOztBQUdBLFVBQUlFLHlCQUFKLEVBQStCO0FBQzdCUCx1QkFBZSxJQUFmOztBQUVBSSxnQkFBUVIsVUFBVWEsWUFBVixDQUF1QkwsS0FBdkIsQ0FBUjtBQUNEOztBQUVELFVBQUtNLGNBQWMsSUFBbkI7O0FBRUEsVUFBTUMsV0FBV2YsVUFBVWdCLElBQVYsQ0FBZVIsS0FBZixDQUFqQjtBQUFBLFVBQ01TLDBCQUEwQm5CLFFBQVFvQixxQkFBUixDQUE4QkgsUUFBOUIsQ0FEaEM7O0FBR0EsVUFBSUUsdUJBQUosRUFBNkI7QUFDM0IsWUFBTUUsa0JBQWtCSixRQUF4QixDQUQyQixDQUNROztBQUVuQ0Qsc0JBQWNoQixRQUFRc0IsOEJBQVIsQ0FBdUNELGVBQXZDLENBQWQ7O0FBRUFYLGdCQUFRUixVQUFVcUIsV0FBVixDQUFzQmIsS0FBdEIsQ0FBUjtBQUNEOztBQUVELFVBQU1jLGNBQWNkLE1BQU1lLE1BQTFCOztBQUVBLFVBQUlELGNBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsWUFBTUUsb0JBQW9CckIsTUFBTSxtQkFBTixDQUExQjtBQUFBLFlBQ01zQixvQkFBb0JELGtCQUFrQkUsU0FBbEIsQ0FBNEJsQixLQUE1QixFQUFtQ0wsS0FBbkMsQ0FEMUI7O0FBR0EsWUFBSXNCLHNCQUFzQixJQUExQixFQUFnQztBQUM5QnBCLGlCQUFPb0IsaUJBQVAsQ0FEOEIsQ0FDSjtBQUMzQixTQUZELE1BRU87QUFDTCxjQUFNRSxtQkFBbUJ4QixNQUFNLGtCQUFOLENBQXpCO0FBQUEsY0FDTXlCLG1CQUFtQkQsaUJBQWlCRCxTQUFqQixDQUEyQmxCLEtBQTNCLEVBQWtDTCxLQUFsQyxDQUR6Qjs7QUFHQUUsaUJBQU91QixnQkFBUCxDQUpLLENBSXFCO0FBQzNCO0FBQ0YsT0FaRCxNQVlPO0FBQ0wsWUFBTW5CLGFBQVlULFVBQVVVLEtBQVYsQ0FBZ0JGLEtBQWhCLENBQWxCO0FBQUEsWUFDTXFCLGdCQUFnQnBCLFVBRHRCLENBREssQ0FFNkI7O0FBRWxDSixlQUFPd0IsY0FBY0MsWUFBZCxDQUEyQjNCLEtBQTNCLEVBQWtDQyxZQUFsQyxDQUFQO0FBQ0Q7O0FBRUQsVUFBSVUsZ0JBQWdCLElBQXBCLEVBQTBCO0FBQ3hCLFlBQU1pQixzQkFBc0I1QixNQUFNLHFCQUFOLENBQTVCO0FBQUEsWUFDTTZCLHNCQUFzQkQsb0JBQW9CRSxzQkFBcEIsQ0FBMkM1QixJQUEzQyxFQUFpRFMsV0FBakQsRUFBOERYLEtBQTlELENBRDVCOztBQUdBRSxlQUFPMkIsbUJBQVAsQ0FKd0IsQ0FJSTtBQUM3Qjs7QUFFRCxhQUFPM0IsSUFBUDtBQUNEOzs7K0NBRWlDRyxLLEVBQU8wQixjLEVBQWdCO0FBQUUsYUFBT2pDLGdCQUFnQmtDLDBCQUFoQixDQUEyQzNCLEtBQTNDLEVBQWtEMEIsY0FBbEQsRUFBa0VoQyxRQUFsRSxDQUFQO0FBQXFGOzs7O0VBM0QzSEQsZTs7QUE4RHZCbUMsT0FBT0MsT0FBUCxHQUFpQm5DLFFBQWpCIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGJuZlV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2JuZicpLFxuICAgICAgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUGFydE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBwYXJ0LFxuICAgICAgICBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIG5vZGVzID0gY2hpbGROb2RlczsgLy8vXG4gICAgXG4gICAgY29uc3QgZmlyc3ROb2RlID0gYXJyYXlVdGlsLmZpcnN0KG5vZGVzKSxcbiAgICAgICAgICBmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlID0gYm5mVXRpbC5pc05vZGVOb1doaXRlc3BhY2VOb2RlKGZpcnN0Tm9kZSk7XG5cbiAgICBpZiAoZmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZSkge1xuICAgICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcblxuICAgICAgbm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZEZpcnN0KG5vZGVzKTtcbiAgICB9XG5cbiAgICBsZXQgIHF1YW50aWZpZXJzID0gbnVsbDtcblxuICAgIGNvbnN0IGxhc3ROb2RlID0gYXJyYXlVdGlsLmxhc3Qobm9kZXMpLFxuICAgICAgICAgIGxhc3ROb2RlUXVhbnRpZmllcnNOb2RlID0gYm5mVXRpbC5pc05vZGVRdWFudGlmaWVyc05vZGUobGFzdE5vZGUpO1xuICAgIFxuICAgIGlmIChsYXN0Tm9kZVF1YW50aWZpZXJzTm9kZSkge1xuICAgICAgY29uc3QgcXVhbnRpZmllcnNOb2RlID0gbGFzdE5vZGU7ICAvLy9cbiAgICAgIFxuICAgICAgcXVhbnRpZmllcnMgPSBibmZVdGlsLnF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUpO1xuXG4gICAgICBub2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkTGFzdChub2Rlcyk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChub2Rlc0xlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IENob2ljZU9mUGFydHNQYXJ0ID0gUGFydHNbJ0Nob2ljZU9mUGFydHNQYXJ0J10sXG4gICAgICAgICAgICBjaG9pY2VPZlBhcnRzUGFydCA9IENob2ljZU9mUGFydHNQYXJ0LmZyb21Ob2Rlcyhub2RlcywgUGFydHMpO1xuICAgICAgXG4gICAgICBpZiAoY2hvaWNlT2ZQYXJ0c1BhcnQgIT09IG51bGwpIHtcbiAgICAgICAgcGFydCA9IGNob2ljZU9mUGFydHNQYXJ0OyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IEdyb3VwT2ZQYXJ0c1BhcnQgPSBQYXJ0c1snR3JvdXBPZlBhcnRzUGFydCddLFxuICAgICAgICAgICAgICBncm91cE9mUGFydHNQYXJ0ID0gR3JvdXBPZlBhcnRzUGFydC5mcm9tTm9kZXMobm9kZXMsIFBhcnRzKTtcblxuICAgICAgICBwYXJ0ID0gZ3JvdXBPZlBhcnRzUGFydDsgIC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaXJzdE5vZGUgPSBhcnJheVV0aWwuZmlyc3Qobm9kZXMpLFxuICAgICAgICAgICAgcmVtYWluaW5nTm9kZSA9IGZpcnN0Tm9kZTsgIC8vL1xuICAgICAgXG4gICAgICBwYXJ0ID0gcmVtYWluaW5nTm9kZS5nZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuICAgIFxuICAgIGlmIChxdWFudGlmaWVycyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgU2VxdWVuY2VPZlBhcnRzUGFydCA9IFBhcnRzWydTZXF1ZW5jZU9mUGFydHNQYXJ0J10sXG4gICAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gU2VxdWVuY2VPZlBhcnRzUGFydC5mcm9tUGFydEFuZFF1YW50aWZpZXJzKHBhcnQsIHF1YW50aWZpZXJzLCBQYXJ0cyk7XG4gICAgICBcbiAgICAgIHBhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSwgUGFydE5vZGUpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydE5vZGU7XG4iXX0=