'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalBranchParseTree = require('../parseTree/verticalBranch');

var ProductionNameParseTree = function (_VerticalBranchParseT) {
  _inherits(ProductionNameParseTree, _VerticalBranchParseT);

  function ProductionNameParseTree() {
    _classCallCheck(this, ProductionNameParseTree);

    return _possibleConstructorReturn(this, (ProductionNameParseTree.__proto__ || Object.getPrototypeOf(ProductionNameParseTree)).apply(this, arguments));
  }

  _createClass(ProductionNameParseTree, null, [{
    key: 'fromNonTerminalNode',
    value: function fromNonTerminalNode(nonTerminalNode) {
      var productionName = nonTerminalNode.getProductionName(),
          startLine = nonTerminalNode.getStartLine(),
          endLine = nonTerminalNode.getEndLine(),
          startLineNumber = startLine.getNumber(),
          endLineNumber = endLine.getNumber(),
          string = productionName + ' (' + startLineNumber + '-' + endLineNumber + ')',
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength,
          ///
      verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          productionNameParseTree = VerticalBranchParseTree.fromString(string, ProductionNameParseTree, verticalBranchPosition);

      productionNameParseTree.appendToTop(verticalBranchParseTree);

      return productionNameParseTree;
    }
  }]);

  return ProductionNameParseTree;
}(VerticalBranchParseTree);

module.exports = ProductionNameParseTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFyc2VUcmVlL3Byb2R1Y3Rpb25OYW1lQW5kTGluZU51bWJlcnMuanMiXSwibmFtZXMiOlsiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUiLCJub25UZXJtaW5hbE5vZGUiLCJwcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwic3RhcnRMaW5lIiwiZ2V0U3RhcnRMaW5lIiwiZW5kTGluZSIsImdldEVuZExpbmUiLCJzdGFydExpbmVOdW1iZXIiLCJnZXROdW1iZXIiLCJlbmRMaW5lTnVtYmVyIiwic3RyaW5nIiwic3RyaW5nTGVuZ3RoIiwibGVuZ3RoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSIsImZyb21TdHJpbmciLCJhcHBlbmRUb1RvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsMEJBQTBCQyxRQUFRLDZCQUFSLENBQTlCOztJQUVNQyx1Qjs7Ozs7Ozs7Ozs7d0NBQ3VCQyxlLEVBQWlCO0FBQzFDLFVBQUlDLGlCQUFpQkQsZ0JBQWdCRSxpQkFBaEIsRUFBckI7QUFBQSxVQUNJQyxZQUFZSCxnQkFBZ0JJLFlBQWhCLEVBRGhCO0FBQUEsVUFFSUMsVUFBVUwsZ0JBQWdCTSxVQUFoQixFQUZkO0FBQUEsVUFHSUMsa0JBQWtCSixVQUFVSyxTQUFWLEVBSHRCO0FBQUEsVUFJSUMsZ0JBQWdCSixRQUFRRyxTQUFSLEVBSnBCO0FBQUEsVUFLSUUsU0FBWVQsY0FBWixVQUErQk0sZUFBL0IsU0FBa0RFLGFBQWxELE1BTEo7QUFBQSxVQU1JRSxlQUFlRCxPQUFPRSxNQU4xQjtBQUFBLFVBT0lDLCtCQUErQkYsWUFQbkM7QUFBQSxVQU9pRDtBQUM3Q0csZ0NBQTBCakIsd0JBQXdCa0IsU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQVI5QjtBQUFBLFVBU0lHLHlCQUF5QkYsd0JBQXdCRyx5QkFBeEIsRUFUN0I7QUFBQSxVQVVJQywwQkFBMEJyQix3QkFBd0JzQixVQUF4QixDQUFtQ1QsTUFBbkMsRUFBMkNYLHVCQUEzQyxFQUFvRWlCLHNCQUFwRSxDQVY5Qjs7QUFZQUUsOEJBQXdCRSxXQUF4QixDQUFvQ04sdUJBQXBDOztBQUVBLGFBQU9JLHVCQUFQO0FBQ0Q7Ozs7RUFqQm1DckIsdUI7O0FBb0J0Q3dCLE9BQU9DLE9BQVAsR0FBaUJ2Qix1QkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbk5hbWVBbmRMaW5lTnVtYmVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3ZlcnRpY2FsQnJhbmNoJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUpIHtcbiAgICB2YXIgcHJvZHVjdGlvbk5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgc3RhcnRMaW5lID0gbm9uVGVybWluYWxOb2RlLmdldFN0YXJ0TGluZSgpLFxuICAgICAgICBlbmRMaW5lID0gbm9uVGVybWluYWxOb2RlLmdldEVuZExpbmUoKSxcbiAgICAgICAgc3RhcnRMaW5lTnVtYmVyID0gc3RhcnRMaW5lLmdldE51bWJlcigpLFxuICAgICAgICBlbmRMaW5lTnVtYmVyID0gZW5kTGluZS5nZXROdW1iZXIoKSxcbiAgICAgICAgc3RyaW5nID0gYCR7cHJvZHVjdGlvbk5hbWV9ICgke3N0YXJ0TGluZU51bWJlcn0tJHtlbmRMaW5lTnVtYmVyfSlgLFxuICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZyhzdHJpbmcsIFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlO1xuIl19