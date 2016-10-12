'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree');

var ProductionNameParseTree = function (_ParseTree) {
  _inherits(ProductionNameParseTree, _ParseTree);

  function ProductionNameParseTree() {
    _classCallCheck(this, ProductionNameParseTree);

    return _possibleConstructorReturn(this, (ProductionNameParseTree.__proto__ || Object.getPrototypeOf(ProductionNameParseTree)).apply(this, arguments));
  }

  _createClass(ProductionNameParseTree, null, [{
    key: 'fromProductionName',
    value: function fromProductionName(productionName) {
      var str = productionName,
          ///
      productionNameParseTree = ParseTree.fromString(str);

      return productionNameParseTree;
    }
  }]);

  return ProductionNameParseTree;
}(ParseTree);

module.exports = ProductionNameParseTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJzZVRyZWUvcHJvZHVjdGlvbk5hbWUuanMiXSwibmFtZXMiOlsiUGFyc2VUcmVlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlIiwicHJvZHVjdGlvbk5hbWUiLCJzdHIiLCJwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSIsImZyb21TdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFlBQVlDLFFBQVEsY0FBUixDQUFoQjs7SUFFTUMsdUI7Ozs7Ozs7Ozs7O3VDQUNzQkMsYyxFQUFnQjtBQUN4QyxVQUFJQyxNQUFNRCxjQUFWO0FBQUEsVUFBMEI7QUFDdEJFLGdDQUEwQkwsVUFBVU0sVUFBVixDQUFxQkYsR0FBckIsQ0FEOUI7O0FBR0EsYUFBT0MsdUJBQVA7QUFDRDs7OztFQU5tQ0wsUzs7QUFTdENPLE9BQU9DLE9BQVAsR0FBaUJOLHVCQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZScpO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSBleHRlbmRzIFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbk5hbWUocHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgc3RyID0gcHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSA9IFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cik7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uTmFtZVBhcnNlVHJlZTtcbiJdfQ==