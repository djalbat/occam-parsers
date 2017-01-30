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
    key: 'fromProductionNameAndLineNumbers',
    value: function fromProductionNameAndLineNumbers(productionName, startLineNumbers, endLineNumbers) {
      var string = productionName + ' (' + startLineNumbers + '-' + endLineNumbers + ')',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFyc2VUcmVlL3Byb2R1Y3Rpb25OYW1lQW5kTGluZU51bWJlcnMuanMiXSwibmFtZXMiOlsiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUiLCJwcm9kdWN0aW9uTmFtZSIsInN0YXJ0TGluZU51bWJlcnMiLCJlbmRMaW5lTnVtYmVycyIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwicHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nIiwiYXBwZW5kVG9Ub3AiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLDBCQUEwQkMsUUFBUSw2QkFBUixDQUE5Qjs7SUFFTUMsdUI7Ozs7Ozs7Ozs7O3FEQUNvQ0MsYyxFQUFnQkMsZ0IsRUFBa0JDLGMsRUFBZ0I7QUFDeEYsVUFBSUMsU0FBWUgsY0FBWixVQUErQkMsZ0JBQS9CLFNBQW1EQyxjQUFuRCxNQUFKO0FBQUEsVUFDSUUsZUFBZUQsT0FBT0UsTUFEMUI7QUFBQSxVQUVJQywrQkFBK0JGLFlBRm5DO0FBQUEsVUFFaUQ7QUFDN0NHLGdDQUEwQlYsd0JBQXdCVyxTQUF4QixDQUFrQ0YsNEJBQWxDLENBSDlCO0FBQUEsVUFJSUcseUJBQXlCRix3QkFBd0JHLHlCQUF4QixFQUo3QjtBQUFBLFVBS0lDLDBCQUEwQmQsd0JBQXdCZSxVQUF4QixDQUFtQ1QsTUFBbkMsRUFBMkNKLHVCQUEzQyxFQUFvRVUsc0JBQXBFLENBTDlCOztBQU9BRSw4QkFBd0JFLFdBQXhCLENBQW9DTix1QkFBcEM7O0FBRUEsYUFBT0ksdUJBQVA7QUFDRDs7OztFQVptQ2QsdUI7O0FBZXRDaUIsT0FBT0MsT0FBUCxHQUFpQmhCLHVCQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uTmFtZUFuZExpbmVOdW1iZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvdmVydGljYWxCcmFuY2gnKTtcblxuY2xhc3MgUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbk5hbWVBbmRMaW5lTnVtYmVycyhwcm9kdWN0aW9uTmFtZSwgc3RhcnRMaW5lTnVtYmVycywgZW5kTGluZU51bWJlcnMpIHtcbiAgICB2YXIgc3RyaW5nID0gYCR7cHJvZHVjdGlvbk5hbWV9ICgke3N0YXJ0TGluZU51bWJlcnN9LSR7ZW5kTGluZU51bWJlcnN9KWAsXG4gICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWU7XG4iXX0=