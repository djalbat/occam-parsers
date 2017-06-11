'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalBranchParseTree = require('./verticalBranch');

var ProductionNameParseTree = function (_VerticalBranchParseT) {
  _inherits(ProductionNameParseTree, _VerticalBranchParseT);

  function ProductionNameParseTree() {
    _classCallCheck(this, ProductionNameParseTree);

    return _possibleConstructorReturn(this, (ProductionNameParseTree.__proto__ || Object.getPrototypeOf(ProductionNameParseTree)).apply(this, arguments));
  }

  _createClass(ProductionNameParseTree, null, [{
    key: 'fromNonTerminalNode',
    value: function fromNonTerminalNode(nonTerminalNode, lines) {
      var productionName = nonTerminalNode.getProductionName(),
          firstLine = nonTerminalNode.getFirstLine(),
          lastLine = nonTerminalNode.getLastLine(),
          firstLineIndex = lines.indexOf(firstLine),
          lastLineIndex = lines.indexOf(lastLine),
          firstLineNumber = firstLineIndex + 1,
          lastLineNumber = lastLineIndex + 1,
          string = productionName + '(' + firstLineNumber + '-' + lastLineNumber + ')',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlL3Byb2R1Y3Rpb25OYW1lLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlIiwibm9uVGVybWluYWxOb2RlIiwibGluZXMiLCJwcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwiZmlyc3RMaW5lIiwiZ2V0Rmlyc3RMaW5lIiwibGFzdExpbmUiLCJnZXRMYXN0TGluZSIsImZpcnN0TGluZUluZGV4IiwiaW5kZXhPZiIsImxhc3RMaW5lSW5kZXgiLCJmaXJzdExpbmVOdW1iZXIiLCJsYXN0TGluZU51bWJlciIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwicHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nIiwiYXBwZW5kVG9Ub3AiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLDBCQUEwQkMsUUFBUSxrQkFBUixDQUFoQzs7SUFFTUMsdUI7Ozs7Ozs7Ozs7O3dDQUN1QkMsZSxFQUFpQkMsSyxFQUFPO0FBQ2pELFVBQU1DLGlCQUFpQkYsZ0JBQWdCRyxpQkFBaEIsRUFBdkI7QUFBQSxVQUNNQyxZQUFZSixnQkFBZ0JLLFlBQWhCLEVBRGxCO0FBQUEsVUFFTUMsV0FBV04sZ0JBQWdCTyxXQUFoQixFQUZqQjtBQUFBLFVBR01DLGlCQUFpQlAsTUFBTVEsT0FBTixDQUFjTCxTQUFkLENBSHZCO0FBQUEsVUFJTU0sZ0JBQWdCVCxNQUFNUSxPQUFOLENBQWNILFFBQWQsQ0FKdEI7QUFBQSxVQUtNSyxrQkFBa0JILGlCQUFpQixDQUx6QztBQUFBLFVBTU1JLGlCQUFpQkYsZ0JBQWdCLENBTnZDO0FBQUEsVUFPTUcsU0FBWVgsY0FBWixTQUE4QlMsZUFBOUIsU0FBaURDLGNBQWpELE1BUE47QUFBQSxVQVFNRSxlQUFlRCxPQUFPRSxNQVI1QjtBQUFBLFVBU01DLCtCQUErQkYsWUFUckM7QUFBQSxVQVNtRDtBQUM3Q0csZ0NBQTBCcEIsd0JBQXdCcUIsU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQVZoQztBQUFBLFVBV01HLHlCQUF5QkYsd0JBQXdCRyx5QkFBeEIsRUFYL0I7QUFBQSxVQVlNQywwQkFBMEJ4Qix3QkFBd0J5QixVQUF4QixDQUFtQ1QsTUFBbkMsRUFBMkNkLHVCQUEzQyxFQUFvRW9CLHNCQUFwRSxDQVpoQzs7QUFjQUUsOEJBQXdCRSxXQUF4QixDQUFvQ04sdUJBQXBDOztBQUVBLGFBQU9JLHVCQUFQO0FBQ0Q7Ozs7RUFuQm1DeEIsdUI7O0FBc0J0QzJCLE9BQU9DLE9BQVAsR0FBaUIxQix1QkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbk5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi92ZXJ0aWNhbEJyYW5jaCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21Ob25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsaW5lcykge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgZmlyc3RMaW5lID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0TGluZSgpLFxuICAgICAgICAgIGxhc3RMaW5lID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RMaW5lKCksXG4gICAgICAgICAgZmlyc3RMaW5lSW5kZXggPSBsaW5lcy5pbmRleE9mKGZpcnN0TGluZSksXG4gICAgICAgICAgbGFzdExpbmVJbmRleCA9IGxpbmVzLmluZGV4T2YobGFzdExpbmUpLFxuICAgICAgICAgIGZpcnN0TGluZU51bWJlciA9IGZpcnN0TGluZUluZGV4ICsgMSxcbiAgICAgICAgICBsYXN0TGluZU51bWJlciA9IGxhc3RMaW5lSW5kZXggKyAxLFxuICAgICAgICAgIHN0cmluZyA9IGAke3Byb2R1Y3Rpb25OYW1lfSgke2ZpcnN0TGluZU51bWJlcn0tJHtsYXN0TGluZU51bWJlcn0pYCxcbiAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWU7XG4iXX0=