'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree'),
    EmptyParseTree = require('../parseTree/empty'),
    HorizontalBranchParseTree = require('../parseTree/horizontalBranch');

var ChildNodesParseTree = function (_ParseTree) {
  _inherits(ChildNodesParseTree, _ParseTree);

  function ChildNodesParseTree() {
    _classCallCheck(this, ChildNodesParseTree);

    return _possibleConstructorReturn(this, (ChildNodesParseTree.__proto__ || Object.getPrototypeOf(ChildNodesParseTree)).apply(this, arguments));
  }

  _createClass(ChildNodesParseTree, null, [{
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
          emptyParseTree = EmptyParseTree.fromDepth(childNodeParseTreesDepth),
          childNodesParseTree = emptyParseTree; ///

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

      if (false) {} else if (childNodeParseTreesLength === 1) {} else if (childNodeParseTreesLength > 1) {
        var firstChildNodeParseTree = first(childNodeParseTrees),
            lastChildNodeParseTree = last(childNodeParseTrees),
            firstChildNodeParseTreeWidth = firstChildNodeParseTree.getWidth(),
            lastChildNodeParseTreeWidth = lastChildNodeParseTree.getWidth(),
            leftMarginWidth = Math.floor(firstChildNodeParseTreeWidth / 2),
            rightMarginWidth = Math.ceil(lastChildNodeParseTreeWidth / 2) - 1,
            childNodesParseTreeWidth = childNodesParseTree.getWidth(),
            horizontalBranchParseTree = HorizontalBranchParseTree.fromWidth(childNodesParseTreeWidth, leftMarginWidth, rightMarginWidth);

        childNodesParseTree.appendToTop(horizontalBranchParseTree);
      }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJzZVRyZWUvY2hpbGROb2Rlcy5qcyJdLCJuYW1lcyI6WyJQYXJzZVRyZWUiLCJyZXF1aXJlIiwiRW1wdHlQYXJzZVRyZWUiLCJIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwiQ2hpbGROb2Rlc1BhcnNlVHJlZSIsImNoaWxkTm9kZXMiLCJjaGlsZE5vZGVQYXJzZVRyZWVzIiwibWFwIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlUGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwiY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCIsInJlZHVjZSIsImNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIiwiZ2V0RGVwdGgiLCJNYXRoIiwibWF4IiwiZW1wdHlQYXJzZVRyZWUiLCJmcm9tRGVwdGgiLCJjaGlsZE5vZGVzUGFyc2VUcmVlIiwiZm9yRWFjaCIsImluZGV4IiwiY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlIiwiY2xvbmUiLCJsYXN0Q2hpbGROb2RlUGFyc2VUcmVlIiwicmlnaHRNYXJnaW5XaWR0aCIsImFkZFJpZ2h0TWFyZ2luIiwiYm90dG9tTWFyZ2luRGVwdGgiLCJhZGRCb3R0b21NYXJnaW4iLCJhcHBlbmRUb1JpZ2h0IiwiZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUiLCJmaXJzdCIsImxhc3QiLCJmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVdpZHRoIiwiZ2V0V2lkdGgiLCJsYXN0Q2hpbGROb2RlUGFyc2VUcmVlV2lkdGgiLCJsZWZ0TWFyZ2luV2lkdGgiLCJmbG9vciIsImNlaWwiLCJjaGlsZE5vZGVzUGFyc2VUcmVlV2lkdGgiLCJob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwiYXBwZW5kVG9Ub3AiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsUUFBUSxjQUFSLENB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ZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZScpLFxuICAgIEVtcHR5UGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL2VtcHR5JyksXG4gICAgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS9ob3Jpem9udGFsQnJhbmNoJyk7XG5cbmNsYXNzIENoaWxkTm9kZXNQYXJzZVRyZWUgZXh0ZW5kcyBQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbUNoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIHZhciBjaGlsZE5vZGVQYXJzZVRyZWVzID0gY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICAgICAgdmFyIGNoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZS5nZXRQYXJzZVRyZWUoKTtcblxuICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVQYXJzZVRyZWU7XG4gICAgICAgIH0pLFxuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID0gY2hpbGROb2RlUGFyc2VUcmVlcy5sZW5ndGgsXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCwgY2hpbGROb2RlUGFyc2VUcmVlKSB7XG4gICAgICAgICAgdmFyIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCk7XG5cbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSBNYXRoLm1heChjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgsIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoKTtcblxuICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGg7XG4gICAgICAgIH0sIDApLFxuICAgICAgICBlbXB0eVBhcnNlVHJlZSA9IEVtcHR5UGFyc2VUcmVlLmZyb21EZXB0aChjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgpLFxuICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlID0gZW1wdHlQYXJzZVRyZWU7IC8vL1xuXG4gICAgY2hpbGROb2RlUGFyc2VUcmVlcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkTm9kZVBhcnNlVHJlZSwgaW5kZXgpIHtcbiAgICAgIHZhciBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpLFxuICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZS5jbG9uZSgpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSAoaW5kZXggPT09IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKTtcblxuICAgICAgaWYgKCFsYXN0Q2hpbGROb2RlUGFyc2VUcmVlKSB7XG4gICAgICAgIHZhciByaWdodE1hcmdpbldpZHRoID0gMTtcblxuICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA8IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCkge1xuICAgICAgICB2YXIgYm90dG9tTWFyZ2luRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggLSBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aDtcblxuICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkQm90dG9tTWFyZ2luKGJvdHRvbU1hcmdpbkRlcHRoKTtcbiAgICAgIH1cblxuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1JpZ2h0KGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAoY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgXG4gICAgfSBlbHNlIGlmIChjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID4gMSkge1xuICAgICAgdmFyIGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlID0gZmlyc3QoY2hpbGROb2RlUGFyc2VUcmVlcyksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGxhc3QoY2hpbGROb2RlUGFyc2VUcmVlcyksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVXaWR0aCA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZVBhcnNlVHJlZVdpZHRoID0gbGFzdENoaWxkTm9kZVBhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IE1hdGguZmxvb3IoZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVXaWR0aC8yKSxcbiAgICAgICAgICByaWdodE1hcmdpbldpZHRoID0gTWF0aC5jZWlsKGxhc3RDaGlsZE5vZGVQYXJzZVRyZWVXaWR0aC8yKSAtIDEsXG4gICAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZVdpZHRoID0gY2hpbGROb2Rlc1BhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgPSBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aChjaGlsZE5vZGVzUGFyc2VUcmVlV2lkdGgsIGxlZnRNYXJnaW5XaWR0aCwgcmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9Ub3AoaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaGlsZE5vZGVzUGFyc2VUcmVlO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG4iXX0=