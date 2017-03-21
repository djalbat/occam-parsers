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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlL3Byb2R1Y3Rpb25OYW1lQW5kTGluZU51bWJlcnMuanMiXSwibmFtZXMiOlsiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUiLCJub25UZXJtaW5hbE5vZGUiLCJwcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwiZmlyc3RMaW5lIiwiZ2V0Rmlyc3RMaW5lIiwibGFzdExpbmUiLCJnZXRMYXN0TGluZSIsImZpcnN0TGluZU51bWJlciIsImdldE51bWJlciIsImxhc3RMaW5lTnVtYmVyIiwic3RyaW5nIiwic3RyaW5nTGVuZ3RoIiwibGVuZ3RoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSIsImZyb21TdHJpbmciLCJhcHBlbmRUb1RvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsMEJBQTBCQyxRQUFRLDZCQUFSLENBQWhDOztJQUVNQyx1Qjs7Ozs7Ozs7Ozs7d0NBQ3VCQyxlLEVBQWlCO0FBQzFDLFVBQU1DLGlCQUFpQkQsZ0JBQWdCRSxpQkFBaEIsRUFBdkI7QUFBQSxVQUNNQyxZQUFZSCxnQkFBZ0JJLFlBQWhCLEVBRGxCO0FBQUEsVUFFTUMsV0FBV0wsZ0JBQWdCTSxXQUFoQixFQUZqQjtBQUFBLFVBR01DLGtCQUFrQkosVUFBVUssU0FBVixFQUh4QjtBQUFBLFVBSU1DLGlCQUFpQkosU0FBU0csU0FBVCxFQUp2QjtBQUFBLFVBS01FLFNBQVlULGNBQVosVUFBK0JNLGVBQS9CLFNBQWtERSxjQUFsRCxNQUxOO0FBQUEsVUFNTUUsZUFBZUQsT0FBT0UsTUFONUI7QUFBQSxVQU9NQywrQkFBK0JGLFlBUHJDO0FBQUEsVUFPbUQ7QUFDN0NHLGdDQUEwQmpCLHdCQUF3QmtCLFNBQXhCLENBQWtDRiw0QkFBbEMsQ0FSaEM7QUFBQSxVQVNNRyx5QkFBeUJGLHdCQUF3QkcseUJBQXhCLEVBVC9CO0FBQUEsVUFVTUMsMEJBQTBCckIsd0JBQXdCc0IsVUFBeEIsQ0FBbUNULE1BQW5DLEVBQTJDWCx1QkFBM0MsRUFBb0VpQixzQkFBcEUsQ0FWaEM7O0FBWUFFLDhCQUF3QkUsV0FBeEIsQ0FBb0NOLHVCQUFwQzs7QUFFQSxhQUFPSSx1QkFBUDtBQUNEOzs7O0VBakJtQ3JCLHVCOztBQW9CdEN3QixPQUFPQyxPQUFQLEdBQWlCdkIsdUJBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb25OYW1lQW5kTGluZU51bWJlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3ZlcnRpY2FsQnJhbmNoJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgIGZpcnN0TGluZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdExpbmUoKSxcbiAgICAgICAgICBsYXN0TGluZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0TGluZSgpLFxuICAgICAgICAgIGZpcnN0TGluZU51bWJlciA9IGZpcnN0TGluZS5nZXROdW1iZXIoKSxcbiAgICAgICAgICBsYXN0TGluZU51bWJlciA9IGxhc3RMaW5lLmdldE51bWJlcigpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3Byb2R1Y3Rpb25OYW1lfSAoJHtmaXJzdExpbmVOdW1iZXJ9LSR7bGFzdExpbmVOdW1iZXJ9KWAsXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZyhzdHJpbmcsIFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlO1xuIl19