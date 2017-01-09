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
    key: 'fromProductionName',
    value: function fromProductionName(productionName) {
      var string = productionName,
          ///
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFyc2VUcmVlL3Byb2R1Y3Rpb25OYW1lLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlIiwicHJvZHVjdGlvbk5hbWUiLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlIiwiZnJvbVN0cmluZyIsImFwcGVuZFRvVG9wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSwwQkFBMEJDLFFBQVEsNkJBQVIsQ0FBOUI7O0lBRU1DLHVCOzs7Ozs7Ozs7Ozt1Q0FDc0JDLGMsRUFBZ0I7QUFDeEMsVUFBSUMsU0FBU0QsY0FBYjtBQUFBLFVBQTZCO0FBQ3pCRSxxQkFBZUQsT0FBT0UsTUFEMUI7QUFBQSxVQUVJQywrQkFBK0JGLFlBRm5DO0FBQUEsVUFFaUQ7QUFDN0NHLGdDQUEwQlIsd0JBQXdCUyxTQUF4QixDQUFrQ0YsNEJBQWxDLENBSDlCO0FBQUEsVUFJSUcseUJBQXlCRix3QkFBd0JHLHlCQUF4QixFQUo3QjtBQUFBLFVBS0lDLDBCQUEwQlosd0JBQXdCYSxVQUF4QixDQUFtQ1QsTUFBbkMsRUFBMkNGLHVCQUEzQyxFQUFvRVEsc0JBQXBFLENBTDlCOztBQU9BRSw4QkFBd0JFLFdBQXhCLENBQW9DTix1QkFBcEM7O0FBRUEsYUFBT0ksdUJBQVA7QUFDRDs7OztFQVptQ1osdUI7O0FBZXRDZSxPQUFPQyxPQUFQLEdBQWlCZCx1QkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbk5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS92ZXJ0aWNhbEJyYW5jaCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uTmFtZShwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBzdHJpbmcgPSBwcm9kdWN0aW9uTmFtZSwgLy8vXG4gICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWU7XG4iXX0=