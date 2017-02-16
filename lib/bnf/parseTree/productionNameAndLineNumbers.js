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
          firstLine = nonTerminalNode.getFirstLine(),
          lastLine = nonTerminalNode.getLastLine(),
          firstLineNumber = firstLine.getNumber(),
          lastLineNumber = lastLine.getNumber(),
          string = productionName + ' (' + firstLineNumber + '-' + lastLineNumber + ')',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFyc2VUcmVlL3Byb2R1Y3Rpb25OYW1lQW5kTGluZU51bWJlcnMuanMiXSwibmFtZXMiOlsiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUiLCJub25UZXJtaW5hbE5vZGUiLCJwcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwiZmlyc3RMaW5lIiwiZ2V0Rmlyc3RMaW5lIiwibGFzdExpbmUiLCJnZXRMYXN0TGluZSIsImZpcnN0TGluZU51bWJlciIsImdldE51bWJlciIsImxhc3RMaW5lTnVtYmVyIiwic3RyaW5nIiwic3RyaW5nTGVuZ3RoIiwibGVuZ3RoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSIsImZyb21TdHJpbmciLCJhcHBlbmRUb1RvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsMEJBQTBCQyxRQUFRLDZCQUFSLENBQTlCOztJQUVNQyx1Qjs7Ozs7Ozs7Ozs7d0NBQ3VCQyxlLEVBQWlCO0FBQzFDLFVBQUlDLGlCQUFpQkQsZ0JBQWdCRSxpQkFBaEIsRUFBckI7QUFBQSxVQUNJQyxZQUFZSCxnQkFBZ0JJLFlBQWhCLEVBRGhCO0FBQUEsVUFFSUMsV0FBV0wsZ0JBQWdCTSxXQUFoQixFQUZmO0FBQUEsVUFHSUMsa0JBQWtCSixVQUFVSyxTQUFWLEVBSHRCO0FBQUEsVUFJSUMsaUJBQWlCSixTQUFTRyxTQUFULEVBSnJCO0FBQUEsVUFLSUUsU0FBWVQsY0FBWixVQUErQk0sZUFBL0IsU0FBa0RFLGNBQWxELE1BTEo7QUFBQSxVQU1JRSxlQUFlRCxPQUFPRSxNQU4xQjtBQUFBLFVBT0lDLCtCQUErQkYsWUFQbkM7QUFBQSxVQU9pRDtBQUM3Q0csZ0NBQTBCakIsd0JBQXdCa0IsU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQVI5QjtBQUFBLFVBU0lHLHlCQUF5QkYsd0JBQXdCRyx5QkFBeEIsRUFUN0I7QUFBQSxVQVVJQywwQkFBMEJyQix3QkFBd0JzQixVQUF4QixDQUFtQ1QsTUFBbkMsRUFBMkNYLHVCQUEzQyxFQUFvRWlCLHNCQUFwRSxDQVY5Qjs7QUFZQUUsOEJBQXdCRSxXQUF4QixDQUFvQ04sdUJBQXBDOztBQUVBLGFBQU9JLHVCQUFQO0FBQ0Q7Ozs7RUFqQm1DckIsdUI7O0FBb0J0Q3dCLE9BQU9DLE9BQVAsR0FBaUJ2Qix1QkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbk5hbWVBbmRMaW5lTnVtYmVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3ZlcnRpY2FsQnJhbmNoJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUpIHtcbiAgICB2YXIgcHJvZHVjdGlvbk5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgZmlyc3RMaW5lID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0TGluZSgpLFxuICAgICAgICBsYXN0TGluZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0TGluZSgpLFxuICAgICAgICBmaXJzdExpbmVOdW1iZXIgPSBmaXJzdExpbmUuZ2V0TnVtYmVyKCksXG4gICAgICAgIGxhc3RMaW5lTnVtYmVyID0gbGFzdExpbmUuZ2V0TnVtYmVyKCksXG4gICAgICAgIHN0cmluZyA9IGAke3Byb2R1Y3Rpb25OYW1lfSAoJHtmaXJzdExpbmVOdW1iZXJ9LSR7bGFzdExpbmVOdW1iZXJ9KWAsXG4gICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWU7XG4iXX0=