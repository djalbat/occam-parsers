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
          lastLine = nonTerminalNode.getLastLine();

      var string = void 0;

      if (firstLine === null && lastLine === null) {
        string = productionName; ///
      } else {
        var firstLineIndex = lines.indexOf(firstLine),
            lastLineIndex = lines.indexOf(lastLine),
            firstLineNumber = firstLineIndex + 1,
            lastLineNumber = lastLineIndex + 1;

        string = productionName + ' (' + firstLineNumber + '-' + lastLineNumber + ')';
      }

      var stringLength = string.length,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlL3Byb2R1Y3Rpb25OYW1lLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlIiwibm9uVGVybWluYWxOb2RlIiwibGluZXMiLCJwcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwiZmlyc3RMaW5lIiwiZ2V0Rmlyc3RMaW5lIiwibGFzdExpbmUiLCJnZXRMYXN0TGluZSIsInN0cmluZyIsImZpcnN0TGluZUluZGV4IiwiaW5kZXhPZiIsImxhc3RMaW5lSW5kZXgiLCJmaXJzdExpbmVOdW1iZXIiLCJsYXN0TGluZU51bWJlciIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwicHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nIiwiYXBwZW5kVG9Ub3AiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLDBCQUEwQkMsUUFBUSxrQkFBUixDQUFoQzs7SUFFTUMsdUI7Ozs7Ozs7Ozs7O3dDQUN1QkMsZSxFQUFpQkMsSyxFQUFPO0FBQ2pELFVBQU1DLGlCQUFpQkYsZ0JBQWdCRyxpQkFBaEIsRUFBdkI7QUFBQSxVQUNNQyxZQUFZSixnQkFBZ0JLLFlBQWhCLEVBRGxCO0FBQUEsVUFFTUMsV0FBV04sZ0JBQWdCTyxXQUFoQixFQUZqQjs7QUFJQSxVQUFJQyxlQUFKOztBQUVBLFVBQUtKLGNBQWMsSUFBZixJQUF5QkUsYUFBYSxJQUExQyxFQUFpRDtBQUMvQ0UsaUJBQVNOLGNBQVQsQ0FEK0MsQ0FDckI7QUFDM0IsT0FGRCxNQUVPO0FBQ0wsWUFBTU8saUJBQWlCUixNQUFNUyxPQUFOLENBQWNOLFNBQWQsQ0FBdkI7QUFBQSxZQUNNTyxnQkFBZ0JWLE1BQU1TLE9BQU4sQ0FBY0osUUFBZCxDQUR0QjtBQUFBLFlBRU1NLGtCQUFrQkgsaUJBQWlCLENBRnpDO0FBQUEsWUFHTUksaUJBQWlCRixnQkFBZ0IsQ0FIdkM7O0FBS0FILGlCQUFZTixjQUFaLFVBQStCVSxlQUEvQixTQUFrREMsY0FBbEQ7QUFDRDs7QUFFRCxVQUFNQyxlQUFlTixPQUFPTyxNQUE1QjtBQUFBLFVBQ01DLCtCQUErQkYsWUFEckM7QUFBQSxVQUNtRDtBQUM3Q0csZ0NBQTBCcEIsd0JBQXdCcUIsU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQUZoQztBQUFBLFVBR01HLHlCQUF5QkYsd0JBQXdCRyx5QkFBeEIsRUFIL0I7QUFBQSxVQUlNQywwQkFBMEJ4Qix3QkFBd0J5QixVQUF4QixDQUFtQ2QsTUFBbkMsRUFBMkNULHVCQUEzQyxFQUFvRW9CLHNCQUFwRSxDQUpoQzs7QUFNQUUsOEJBQXdCRSxXQUF4QixDQUFvQ04sdUJBQXBDOztBQUVBLGFBQU9JLHVCQUFQO0FBQ0Q7Ozs7RUE1Qm1DeEIsdUI7O0FBK0J0QzJCLE9BQU9DLE9BQVAsR0FBaUIxQix1QkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbk5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi92ZXJ0aWNhbEJyYW5jaCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21Ob25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsaW5lcykge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgZmlyc3RMaW5lID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0TGluZSgpLFxuICAgICAgICAgIGxhc3RMaW5lID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RMaW5lKCk7XG5cbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKChmaXJzdExpbmUgPT09IG51bGwpICYmIChsYXN0TGluZSA9PT0gbnVsbCkpIHtcbiAgICAgIHN0cmluZyA9IHByb2R1Y3Rpb25OYW1lOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpcnN0TGluZUluZGV4ID0gbGluZXMuaW5kZXhPZihmaXJzdExpbmUpLFxuICAgICAgICAgICAgbGFzdExpbmVJbmRleCA9IGxpbmVzLmluZGV4T2YobGFzdExpbmUpLFxuICAgICAgICAgICAgZmlyc3RMaW5lTnVtYmVyID0gZmlyc3RMaW5lSW5kZXggKyAxLFxuICAgICAgICAgICAgbGFzdExpbmVOdW1iZXIgPSBsYXN0TGluZUluZGV4ICsgMTtcblxuICAgICAgc3RyaW5nID0gYCR7cHJvZHVjdGlvbk5hbWV9ICgke2ZpcnN0TGluZU51bWJlcn0tJHtsYXN0TGluZU51bWJlcn0pYDtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWU7XG4iXX0=