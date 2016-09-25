'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree'),
    ChildNodesParseTree = require('../parseTree/childNodes'),
    ProductionNameParseTree = require('../parseTree/productionName');

var NonTerminalNodeParseTree = function (_ParseTree) {
  _inherits(NonTerminalNodeParseTree, _ParseTree);

  function NonTerminalNodeParseTree() {
    _classCallCheck(this, NonTerminalNodeParseTree);

    return _possibleConstructorReturn(this, (NonTerminalNodeParseTree.__proto__ || Object.getPrototypeOf(NonTerminalNodeParseTree)).apply(this, arguments));
  }

  _createClass(NonTerminalNodeParseTree, null, [{
    key: 'fromNonTerminalNode',
    value: function fromNonTerminalNode(nonTerminalNode) {
      var productionName = nonTerminalNode.getProductionName(),
          childNodes = nonTerminalNode.getChildNodes(),
          productionNameParseTree = ProductionNameParseTree.fromProductionName(productionName),
          childNodesParseTreeParseTree = ChildNodesParseTree.fromChildNodes(childNodes);

      var parseTree = productionNameParseTree,
          ///
      parseTreeWidth = parseTree.getWidth(),
          childNodesParseTreeParseTreeWidth = childNodesParseTreeParseTree.getWidth(),
          differenceInWidths = Math.abs(parseTreeWidth - childNodesParseTreeParseTreeWidth),
          leftMarginWidth = Math.floor(differenceInWidths / 2),
          rightMarginWidth = Math.ceil(differenceInWidths / 2);

      if (false) {} else if (parseTreeWidth < childNodesParseTreeParseTreeWidth) {
        parseTree.addLeftMargin(leftMarginWidth);
        parseTree.addRightMargin(rightMarginWidth);
      } else if (childNodesParseTreeParseTreeWidth < parseTreeWidth) {
        childNodesParseTreeParseTree.addLeftMargin(leftMarginWidth);
        childNodesParseTreeParseTree.addRightMargin(rightMarginWidth);
      }

      parseTree.appendToBottom(childNodesParseTreeParseTree);

      return parseTree;
    }
  }]);

  return NonTerminalNodeParseTree;
}(ParseTree);

module.exports = NonTerminalNodeParseTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlLmpzIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsInJlcXVpcmUiLCJDaGlsZE5vZGVzUGFyc2VUcmVlIiwiUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJub25UZXJtaW5hbE5vZGUiLCJwcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSIsImZyb21Qcm9kdWN0aW9uTmFtZSIsImNoaWxkTm9kZXNQYXJzZVRyZWVQYXJzZVRyZWUiLCJmcm9tQ2hpbGROb2RlcyIsInBhcnNlVHJlZSIsInBhcnNlVHJlZVdpZHRoIiwiZ2V0V2lkdGgiLCJjaGlsZE5vZGVzUGFyc2VUcmVlUGFyc2VUcmVlV2lkdGgiLCJkaWZmZXJlbmNlSW5XaWR0aHMiLCJNYXRoIiwiYWJzIiwibGVmdE1hcmdpbldpZHRoIiwiZmxvb3IiLCJyaWdodE1hcmdpbldpZHRoIiwiY2VpbCIsImFkZExlZnRNYXJnaW4iLCJhZGRSaWdodE1hcmdpbiIsImFwcGVuZFRvQm90dG9tIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFZQyxRQUFRLGNBQVIsQ0FBaEI7QUFBQSxJQUNJQyxzQkFBc0JELFFBQVEseUJBQVIsQ0FEMUI7QUFBQSxJQUVJRSwwQkFBMEJGLFFBQVEsNkJBQVIsQ0FGOUI7O0lBSU1HLHdCOzs7Ozs7Ozs7Ozt3Q0FDdUJDLGUsRUFBaUI7QUFDMUMsVUFBSUMsaUJBQWlCRCxnQkFBZ0JFLGlCQUFoQixFQUFyQjtBQUFBLFVBQ0lDLGFBQWFILGdCQUFnQkksYUFBaEIsRUFEakI7QUFBQSxVQUVJQywwQkFBMEJQLHdCQUF3QlEsa0JBQXhCLENBQTJDTCxjQUEzQyxDQUY5QjtBQUFBLFVBR0lNLCtCQUErQlYsb0JBQW9CVyxjQUFwQixDQUFtQ0wsVUFBbkMsQ0FIbkM7O0FBS0EsVUFBSU0sWUFBWUosdUJBQWhCO0FBQUEsVUFBMEM7QUFDdENLLHVCQUFpQkQsVUFBVUUsUUFBVixFQURyQjtBQUFBLFVBRUlDLG9DQUFvQ0wsNkJBQTZCSSxRQUE3QixFQUZ4QztBQUFBLFVBR0lFLHFCQUFxQkMsS0FBS0MsR0FBTCxDQUFTTCxpQkFBaUJFLGlDQUExQixDQUh6QjtBQUFBLFVBSUlJLGtCQUFrQkYsS0FBS0csS0FBTCxDQUFXSixxQkFBbUIsQ0FBOUIsQ0FKdEI7QUFBQSxVQUtJSyxtQkFBbUJKLEtBQUtLLElBQUwsQ0FBVU4scUJBQW1CLENBQTdCLENBTHZCOztBQU9BLFVBQUksS0FBSixFQUFXLENBRVYsQ0FGRCxNQUVPLElBQUlILGlCQUFpQkUsaUNBQXJCLEVBQXdEO0FBQzdESCxrQkFBVVcsYUFBVixDQUF3QkosZUFBeEI7QUFDQVAsa0JBQVVZLGNBQVYsQ0FBeUJILGdCQUF6QjtBQUNELE9BSE0sTUFHQSxJQUFJTixvQ0FBb0NGLGNBQXhDLEVBQXdEO0FBQzdESCxxQ0FBNkJhLGFBQTdCLENBQTJDSixlQUEzQztBQUNBVCxxQ0FBNkJjLGNBQTdCLENBQTRDSCxnQkFBNUM7QUFDRDs7QUFFRFQsZ0JBQVVhLGNBQVYsQ0FBeUJmLDRCQUF6Qjs7QUFFQSxhQUFPRSxTQUFQO0FBQ0Q7Ozs7RUEzQm9DZCxTOztBQThCdkM0QixPQUFPQyxPQUFQLEdBQWlCekIsd0JBQWpCIiwiZmlsZSI6Im5vblRlcm1pbmFsTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZScpLFxuICAgIENoaWxkTm9kZXNQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvY2hpbGROb2RlcycpLFxuICAgIFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSBleHRlbmRzIFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSkge1xuICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUgPSBQcm9kdWN0aW9uTmFtZVBhcnNlVHJlZS5mcm9tUHJvZHVjdGlvbk5hbWUocHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlUGFyc2VUcmVlID0gQ2hpbGROb2Rlc1BhcnNlVHJlZS5mcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzKTtcblxuICAgIHZhciBwYXJzZVRyZWUgPSBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSwgIC8vL1xuICAgICAgICBwYXJzZVRyZWVXaWR0aCA9IHBhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlUGFyc2VUcmVlV2lkdGggPSBjaGlsZE5vZGVzUGFyc2VUcmVlUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgIGRpZmZlcmVuY2VJbldpZHRocyA9IE1hdGguYWJzKHBhcnNlVHJlZVdpZHRoIC0gY2hpbGROb2Rlc1BhcnNlVHJlZVBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgbGVmdE1hcmdpbldpZHRoID0gTWF0aC5mbG9vcihkaWZmZXJlbmNlSW5XaWR0aHMvMiksXG4gICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSBNYXRoLmNlaWwoZGlmZmVyZW5jZUluV2lkdGhzLzIpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKHBhcnNlVHJlZVdpZHRoIDwgY2hpbGROb2Rlc1BhcnNlVHJlZVBhcnNlVHJlZVdpZHRoKSB7XG4gICAgICBwYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgcGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgIH0gZWxzZSBpZiAoY2hpbGROb2Rlc1BhcnNlVHJlZVBhcnNlVHJlZVdpZHRoIDwgcGFyc2VUcmVlV2lkdGgpIHtcbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWVQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZVBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICB9XG5cbiAgICBwYXJzZVRyZWUuYXBwZW5kVG9Cb3R0b20oY2hpbGROb2Rlc1BhcnNlVHJlZVBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlO1xuIl19