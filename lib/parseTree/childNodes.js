'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree'),
    EmptyParseTree = require('../parseTree/empty');

var ChildNodesParseTree = function (_ParseTree) {
  _inherits(ChildNodesParseTree, _ParseTree);

  function ChildNodesParseTree(lines, verticalBranchPosition) {
    _classCallCheck(this, ChildNodesParseTree);

    var _this = _possibleConstructorReturn(this, (ChildNodesParseTree.__proto__ || Object.getPrototypeOf(ChildNodesParseTree)).call(this, lines));

    _this.verticalBranchPosition = verticalBranchPosition;
    return _this;
  }

  _createClass(ChildNodesParseTree, [{
    key: 'getVerticalBranchPosition',
    value: function getVerticalBranchPosition() {
      return this.verticalBranchPosition;
    }
  }], [{
    key: 'fromChildNodes',
    value: function fromChildNodes(childNodes) {
      var childNodeParseTrees = childNodes.map(function (childNode) {
        var childNodeParseTree = childNode.getParseTree();

        return childNodeParseTree;
      }),
          childNodeParseTreesLength = childNodeParseTrees.length,
          childNodeParseTreesDepth = childNodeParseTrees.reduce(function (childNodeParseTreesDepth, childNodeParseTree) {
        var childNodeParseTreeDepth = childNodeParseTree.getDepth();

        childNodeParseTreesDepth = Math.max(childNodeParseTreesDepth, childNodeParseTreeDepth);

        return childNodeParseTreesDepth;
      }, 0),
          verticalBranchPosition = childNodeParseTrees.reduce(function (verticalBranchPosition, childNodeParseTree) {
        if (verticalBranchPosition === null) {
          var firstChildNodeParseTree = childNodeParseTree,
              firstChildNodeParseTreeVerticalBranchPosition = firstChildNodeParseTree.getVerticalBranchPosition();

          verticalBranchPosition = firstChildNodeParseTreeVerticalBranchPosition;
        } else {
          verticalBranchPosition = undefined;
        }

        return verticalBranchPosition;
      }, null),
          childNodesParseTree = EmptyParseTree.fromDepth(childNodeParseTreesDepth, ChildNodesParseTree, verticalBranchPosition);

      childNodeParseTrees.forEach(function (childNodeParseTree, index) {
        var childNodeParseTreeDepth = childNodeParseTree.getDepth(),
            clonedChildNodeParseTree = childNodeParseTree.clone(),
            lastChildNodeParseTree = index === childNodeParseTreesLength - 1;

        if (!lastChildNodeParseTree) {
          var rightMarginWidth = 1;

          clonedChildNodeParseTree.addRightMargin(rightMarginWidth);
        }

        if (childNodeParseTreeDepth < childNodeParseTreesDepth) {
          var bottomMarginDepth = childNodeParseTreesDepth - childNodeParseTreeDepth;

          clonedChildNodeParseTree.addBottomMargin(bottomMarginDepth);
        }

        childNodesParseTree.appendToRight(clonedChildNodeParseTree);
      });

      return childNodesParseTree;
    }
  }]);

  return ChildNodesParseTree;
}(ParseTree);

module.exports = ChildNodesParseTree;

function first(array) {
  return array[0];
}
function last(array) {
  return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJzZVRyZWUvY2hpbGROb2Rlcy5qcyJdLCJuYW1lcyI6WyJQYXJzZVRyZWUiLCJyZXF1aXJlIiwiRW1wdHlQYXJzZVRyZWUiLCJDaGlsZE5vZGVzUGFyc2VUcmVlIiwibGluZXMiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2hpbGROb2RlcyIsImNoaWxkTm9kZVBhcnNlVHJlZXMiLCJtYXAiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVQYXJzZVRyZWUiLCJnZXRQYXJzZVRyZWUiLCJjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoIiwicmVkdWNlIiwiY2hpbGROb2RlUGFyc2VUcmVlRGVwdGgiLCJnZXREZXB0aCIsIk1hdGgiLCJtYXgiLCJmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSIsImZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJ1bmRlZmluZWQiLCJjaGlsZE5vZGVzUGFyc2VUcmVlIiwiZnJvbURlcHRoIiwiZm9yRWFjaCIsImluZGV4IiwiY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlIiwiY2xvbmUiLCJsYXN0Q2hpbGROb2RlUGFyc2VUcmVlIiwicmlnaHRNYXJnaW5XaWR0aCIsImFkZFJpZ2h0TWFyZ2luIiwiYm90dG9tTWFyZ2luRGVwdGgiLCJhZGRCb3R0b21NYXJnaW4iLCJhcHBlbmRUb1JpZ2h0IiwibW9kdWxlIiwiZXhwb3J0cyIsImZpcnN0IiwiYXJyYXkiLCJsYXN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFlBQVlDLFFBQVEsY0FBUixDQUFoQjtBQUFBLElBQ0lDLGlCQUFpQkQsUUFBUSxvQkFBUixDQURyQjs7SUFHTUUsbUI7OztBQUNKLCtCQUFZQyxLQUFaLEVBQW1CQyxzQkFBbkIsRUFBMkM7QUFBQTs7QUFBQSwwSUFDbkNELEtBRG1DOztBQUd6QyxVQUFLQyxzQkFBTCxHQUE4QkEsc0JBQTlCO0FBSHlDO0FBSTFDOzs7O2dEQUUyQjtBQUMxQixhQUFPLEtBQUtBLHNCQUFaO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUNoQyxVQUFJQyxzQkFBc0JELFdBQVdFLEdBQVgsQ0FBZSxVQUFTQyxTQUFULEVBQW9CO0FBQ3ZELFlBQUlDLHFCQUFxQkQsVUFBVUUsWUFBVixFQUF6Qjs7QUFFQSxlQUFPRCxrQkFBUDtBQUNELE9BSnFCLENBQTFCO0FBQUEsVUFLSUUsNEJBQTRCTCxvQkFBb0JNLE1BTHBEO0FBQUEsVUFNSUMsMkJBQTJCUCxvQkFBb0JRLE1BQXBCLENBQTJCLFVBQVNELHdCQUFULEVBQW1DSixrQkFBbkMsRUFBdUQ7QUFDM0csWUFBSU0sMEJBQTBCTixtQkFBbUJPLFFBQW5CLEVBQTlCOztBQUVBSCxtQ0FBMkJJLEtBQUtDLEdBQUwsQ0FBU0wsd0JBQVQsRUFBbUNFLHVCQUFuQyxDQUEzQjs7QUFFQSxlQUFPRix3QkFBUDtBQUNELE9BTjBCLEVBTXhCLENBTndCLENBTi9CO0FBQUEsVUFhSVQseUJBQXlCRSxvQkFBb0JRLE1BQXBCLENBQTJCLFVBQVNWLHNCQUFULEVBQWlDSyxrQkFBakMsRUFBcUQ7QUFDdkcsWUFBSUwsMkJBQTJCLElBQS9CLEVBQXFDO0FBQ25DLGNBQUllLDBCQUEwQlYsa0JBQTlCO0FBQUEsY0FDSVcsZ0RBQWdERCx3QkFBd0JFLHlCQUF4QixFQURwRDs7QUFHQWpCLG1DQUF5QmdCLDZDQUF6QjtBQUNELFNBTEQsTUFLTztBQUNMaEIsbUNBQXlCa0IsU0FBekI7QUFDRDs7QUFFRCxlQUFPbEIsc0JBQVA7QUFDRCxPQVh3QixFQVd0QixJQVhzQixDQWI3QjtBQUFBLFVBeUJJbUIsc0JBQXNCdEIsZUFBZXVCLFNBQWYsQ0FBeUJYLHdCQUF6QixFQUFtRFgsbUJBQW5ELEVBQXdFRSxzQkFBeEUsQ0F6QjFCOztBQTJCQUUsMEJBQW9CbUIsT0FBcEIsQ0FBNEIsVUFBU2hCLGtCQUFULEVBQTZCaUIsS0FBN0IsRUFBb0M7QUFDOUQsWUFBSVgsMEJBQTBCTixtQkFBbUJPLFFBQW5CLEVBQTlCO0FBQUEsWUFDSVcsMkJBQTJCbEIsbUJBQW1CbUIsS0FBbkIsRUFEL0I7QUFBQSxZQUVJQyx5QkFBMEJILFVBQVVmLDRCQUE0QixDQUZwRTs7QUFJQSxZQUFJLENBQUNrQixzQkFBTCxFQUE2QjtBQUMzQixjQUFJQyxtQkFBbUIsQ0FBdkI7O0FBRUFILG1DQUF5QkksY0FBekIsQ0FBd0NELGdCQUF4QztBQUNEOztBQUVELFlBQUlmLDBCQUEwQkYsd0JBQTlCLEVBQXdEO0FBQ3RELGNBQUltQixvQkFBb0JuQiwyQkFBMkJFLHVCQUFuRDs7QUFFQVksbUNBQXlCTSxlQUF6QixDQUF5Q0QsaUJBQXpDO0FBQ0Q7O0FBRURULDRCQUFvQlcsYUFBcEIsQ0FBa0NQLHdCQUFsQztBQUNELE9BbEJEOztBQW9CQSxhQUFPSixtQkFBUDtBQUNEOzs7O0VBNUQrQnhCLFM7O0FBK0RsQ29DLE9BQU9DLE9BQVAsR0FBaUJsQyxtQkFBakI7O0FBRUEsU0FBU21DLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNDLElBQVQsQ0FBY0QsS0FBZCxFQUFxQjtBQUFFLFNBQU9BLE1BQU1BLE1BQU0xQixNQUFOLEdBQWUsQ0FBckIsQ0FBUDtBQUFpQyIsImZpbGUiOiJjaGlsZE5vZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlJyksXG4gICAgRW1wdHlQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvZW1wdHknKTtcblxuY2xhc3MgQ2hpbGROb2Rlc1BhcnNlVHJlZSBleHRlbmRzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSB7XG4gICAgc3VwZXIobGluZXMpO1xuICAgIFxuICAgIHRoaXMudmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB2YXIgY2hpbGROb2RlUGFyc2VUcmVlcyA9IGNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uKGNoaWxkTm9kZSkge1xuICAgICAgICAgIHZhciBjaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGUuZ2V0UGFyc2VUcmVlKCk7XG5cbiAgICAgICAgICByZXR1cm4gY2hpbGROb2RlUGFyc2VUcmVlO1xuICAgICAgICB9KSxcbiAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXMubGVuZ3RoLFxuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzLnJlZHVjZShmdW5jdGlvbihjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgsIGNoaWxkTm9kZVBhcnNlVHJlZSkge1xuICAgICAgICAgIHZhciBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpO1xuXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoID0gTWF0aC5tYXgoY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCk7XG5cbiAgICAgICAgICByZXR1cm4gY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoO1xuICAgICAgICB9LCAwKSxcbiAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGNoaWxkTm9kZVBhcnNlVHJlZXMucmVkdWNlKGZ1bmN0aW9uKHZlcnRpY2FsQnJhbmNoUG9zaXRpb24sIGNoaWxkTm9kZVBhcnNlVHJlZSkge1xuICAgICAgICAgIGlmICh2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID09PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICAgICAgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gdmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUgPSBFbXB0eVBhcnNlVHJlZS5mcm9tRGVwdGgoY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCBDaGlsZE5vZGVzUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSB7XG4gICAgICB2YXIgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0RGVwdGgoKSxcbiAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUuY2xvbmUoKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlID0gKGluZGV4ID09PSBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSk7XG5cbiAgICAgIGlmICghbGFzdENoaWxkTm9kZVBhcnNlVHJlZSkge1xuICAgICAgICB2YXIgcmlnaHRNYXJnaW5XaWR0aCA9IDE7XG5cbiAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPCBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgpIHtcbiAgICAgICAgdmFyIGJvdHRvbU1hcmdpbkRlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoIC0gY2hpbGROb2RlUGFyc2VUcmVlRGVwdGg7XG5cbiAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlLmFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCk7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9SaWdodChjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaGlsZE5vZGVzUGFyc2VUcmVlO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG4iXX0=