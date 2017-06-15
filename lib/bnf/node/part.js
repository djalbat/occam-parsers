'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TerminalNode = require('../../common/node/terminal'),
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
        var firstChildNode = first(childNodes),
            firstChildNodeNoWhitespaceNode = isNodeNoWhitespaceNode(firstChildNode);

        if (firstChildNodeNoWhitespaceNode) {
          var start = 0,
              deleteCount = 1;

          childNodes.splice(start, deleteCount);

          noWhitespace = firstChildNodeNoWhitespaceNode; ///
        }
      }

      var childNodesLength = childNodes.length;

      if (childNodesLength === 1) {
        var _firstChildNode = first(childNodes),
            childNode = _firstChildNode; ///

        part = childNode.generatePart(Parts, noWhitespace);
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

function first(array) {
  return array[0];
}

function isNodeNoWhitespaceNode(node) {
  var nodeNoWhitespaceNode = false;

  var nodeTerminalNode = node instanceof TerminalNode;

  if (nodeTerminalNode) {
    var terminalNode = node,
        terminalNodeContent = terminalNode.getContent();

    nodeNoWhitespaceNode = terminalNodeContent === "<NO_WHITESPACE>"; ///
  }

  return nodeNoWhitespaceNode;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJQYXJ0Tm9kZSIsIlBhcnRzIiwibm9XaGl0ZXNwYWNlIiwicGFydCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsImZpcnN0Q2hpbGROb2RlTm9XaGl0ZXNwYWNlTm9kZSIsImlzTm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZSIsImdlbmVyYXRlUGFydCIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSIsIm5vZGUiLCJub2RlTm9XaGl0ZXNwYWNlTm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLDRCQUFSLENBQXJCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCOztJQUdNRSxROzs7Ozs7Ozs7OztpQ0FDU0MsSyxFQUFPQyxZLEVBQWM7QUFDaEMsVUFBSUMsYUFBSjs7QUFFQSxVQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7O0FBRUEsVUFBSSxDQUFDSCxZQUFMLEVBQW1CO0FBQ2pCLFlBQU1JLGlCQUFpQkMsTUFBTUgsVUFBTixDQUF2QjtBQUFBLFlBQ01JLGlDQUFpQ0MsdUJBQXVCSCxjQUF2QixDQUR2Qzs7QUFHQSxZQUFJRSw4QkFBSixFQUFvQztBQUNsQyxjQUFNRSxRQUFRLENBQWQ7QUFBQSxjQUNNQyxjQUFjLENBRHBCOztBQUdBUCxxQkFBV1EsTUFBWCxDQUFrQkYsS0FBbEIsRUFBeUJDLFdBQXpCOztBQUVBVCx5QkFBZU0sOEJBQWYsQ0FOa0MsQ0FNYztBQUNqRDtBQUNGOztBQUVELFVBQU1LLG1CQUFtQlQsV0FBV1UsTUFBcEM7O0FBRUEsVUFBSUQscUJBQXFCLENBQXpCLEVBQTRCO0FBQzFCLFlBQU1QLGtCQUFpQkMsTUFBTUgsVUFBTixDQUF2QjtBQUFBLFlBQ01XLFlBQVlULGVBRGxCLENBRDBCLENBRVE7O0FBRWxDSCxlQUFPWSxVQUFVQyxZQUFWLENBQXVCZixLQUF2QixFQUE4QkMsWUFBOUIsQ0FBUDtBQUNEOztBQUVELGFBQU9DLElBQVA7QUFDRDs7OytDQUVpQ2MsSyxFQUFPQyxjLEVBQWdCO0FBQUUsYUFBT25CLGdCQUFnQm9CLDBCQUFoQixDQUEyQ0YsS0FBM0MsRUFBa0RDLGNBQWxELEVBQWtFbEIsUUFBbEUsQ0FBUDtBQUFxRjs7OztFQWhDM0hELGU7O0FBbUN2QnFCLE9BQU9DLE9BQVAsR0FBaUJyQixRQUFqQjs7QUFFQSxTQUFTTyxLQUFULENBQWVlLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjs7QUFFMUMsU0FBU2Isc0JBQVQsQ0FBZ0NjLElBQWhDLEVBQXNDO0FBQ3BDLE1BQUlDLHVCQUF1QixLQUEzQjs7QUFFQSxNQUFNQyxtQkFBb0JGLGdCQUFnQjFCLFlBQTFDOztBQUVBLE1BQUk0QixnQkFBSixFQUFzQjtBQUNwQixRQUFNQyxlQUFlSCxJQUFyQjtBQUFBLFFBQ01JLHNCQUFzQkQsYUFBYUUsVUFBYixFQUQ1Qjs7QUFHQUosMkJBQXdCRyx3QkFBd0IsaUJBQWhELENBSm9CLENBSWdEO0FBQ3JFOztBQUVELFNBQU9ILG9CQUFQO0FBQ0QiLCJmaWxlIjoicGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFBhcnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KFBhcnRzLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgcGFydDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGlmICghbm9XaGl0ZXNwYWNlKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgZmlyc3RDaGlsZE5vZGVOb1doaXRlc3BhY2VOb2RlID0gaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZShmaXJzdENoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChmaXJzdENoaWxkTm9kZU5vV2hpdGVzcGFjZU5vZGUpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICAgICAgICBub1doaXRlc3BhY2UgPSBmaXJzdENoaWxkTm9kZU5vV2hpdGVzcGFjZU5vZGU7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAvLy9cblxuICAgICAgcGFydCA9IGNoaWxkTm9kZS5nZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSlcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIFBhcnROb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnROb2RlO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZnVuY3Rpb24gaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZShub2RlKSB7XG4gIGxldCBub2RlTm9XaGl0ZXNwYWNlTm9kZSA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSAobm9kZSBpbnN0YW5jZW9mIFRlcm1pbmFsTm9kZSk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgbm9kZU5vV2hpdGVzcGFjZU5vZGUgPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gXCI8Tk9fV0hJVEVTUEFDRT5cIik7IC8vL1xuICB9XG5cbiAgcmV0dXJuIG5vZGVOb1doaXRlc3BhY2VOb2RlO1xufVxuIl19