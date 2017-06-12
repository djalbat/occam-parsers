'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../common/definition'),
    Production = require('../../common/production'),
    RightRecursiveProduction = require('../production/rightRecursive');

var NonLeftRecursiveProduction = function (_Production) {
  _inherits(NonLeftRecursiveProduction, _Production);

  function NonLeftRecursiveProduction() {
    _classCallCheck(this, NonLeftRecursiveProduction);

    return _possibleConstructorReturn(this, (NonLeftRecursiveProduction.__proto__ || Object.getPrototypeOf(NonLeftRecursiveProduction)).apply(this, arguments));
  }

  _createClass(NonLeftRecursiveProduction, null, [{
    key: 'fromLeftRecursiveProduction',
    value: function fromLeftRecursiveProduction(leftRecursiveProduction) {
      var productionName = leftRecursiveProduction.getName(),
          productionNode = leftRecursiveProduction.getNode(),
          name = productionName,
          ///
      definitions = definitionsFromLeftRecursiveProduction(leftRecursiveProduction),
          Node = productionNode,
          ///
      nonLeftRecursiveProduction = new NonLeftRecursiveProduction(name, definitions, Node);

      return nonLeftRecursiveProduction;
    }
  }]);

  return NonLeftRecursiveProduction;
}(Production);

module.exports = NonLeftRecursiveProduction;

function definitionsFromLeftRecursiveProduction(leftRecursiveProduction) {
  var productionNonLeftRecursiveDefinitions = leftRecursiveProduction.getNonLeftRecursiveDefinitions(),
      productionNamePart = RightRecursiveProduction.productionNamePartFromLeftRecursiveProduction(leftRecursiveProduction),
      definitions = productionNonLeftRecursiveDefinitions.map(function (productionNonLeftRecursiveDefinition) {
    var productionNonLeftRecursiveDefinitionParts = productionNonLeftRecursiveDefinition.getParts(),
        parts = [].concat(productionNonLeftRecursiveDefinitionParts).concat(productionNamePart),
        definition = new Definition(parts);

    return definition;
  });

  return definitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vbm9uTGVmdFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiIsImxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWUiLCJnZXROYW1lIiwicHJvZHVjdGlvbk5vZGUiLCJnZXROb2RlIiwibmFtZSIsImRlZmluaXRpb25zIiwiZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJOb2RlIiwibm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImdldE5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInByb2R1Y3Rpb25OYW1lUGFydCIsInByb2R1Y3Rpb25OYW1lUGFydEZyb21MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiIsIm1hcCIsInByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwiZ2V0UGFydHMiLCJwYXJ0cyIsImNvbmNhdCIsImRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSx5QkFBUixDQUFuQjtBQUFBLElBQ01DLGFBQWFELFFBQVEseUJBQVIsQ0FEbkI7QUFBQSxJQUVNRSwyQkFBMkJGLFFBQVEsOEJBQVIsQ0FGakM7O0lBSU1HLDBCOzs7Ozs7Ozs7OztnREFDK0JDLHVCLEVBQXlCO0FBQzFELFVBQU1DLGlCQUFpQkQsd0JBQXdCRSxPQUF4QixFQUF2QjtBQUFBLFVBQ01DLGlCQUFpQkgsd0JBQXdCSSxPQUF4QixFQUR2QjtBQUFBLFVBRU1DLE9BQU9KLGNBRmI7QUFBQSxVQUU4QjtBQUN4Qkssb0JBQWNDLHVDQUF1Q1AsdUJBQXZDLENBSHBCO0FBQUEsVUFJTVEsT0FBT0wsY0FKYjtBQUFBLFVBSThCO0FBQ3hCTSxtQ0FBNkIsSUFBSVYsMEJBQUosQ0FBK0JNLElBQS9CLEVBQXFDQyxXQUFyQyxFQUFrREUsSUFBbEQsQ0FMbkM7O0FBT0EsYUFBT0MsMEJBQVA7QUFDRDs7OztFQVZzQ1osVTs7QUFhekNhLE9BQU9DLE9BQVAsR0FBaUJaLDBCQUFqQjs7QUFFQSxTQUFTUSxzQ0FBVCxDQUFnRFAsdUJBQWhELEVBQXlFO0FBQ3ZFLE1BQU1ZLHdDQUF3Q1osd0JBQXdCYSw4QkFBeEIsRUFBOUM7QUFBQSxNQUNNQyxxQkFBcUJoQix5QkFBeUJpQiw2Q0FBekIsQ0FBdUVmLHVCQUF2RSxDQUQzQjtBQUFBLE1BRU1NLGNBQWNNLHNDQUFzQ0ksR0FBdEMsQ0FBMEMsVUFBU0Msb0NBQVQsRUFBK0M7QUFDckcsUUFBTUMsNENBQTRDRCxxQ0FBcUNFLFFBQXJDLEVBQWxEO0FBQUEsUUFDTUMsUUFBUSxHQUFHQyxNQUFILENBQVVILHlDQUFWLEVBQXFERyxNQUFyRCxDQUE0RFAsa0JBQTVELENBRGQ7QUFBQSxRQUVNUSxhQUFhLElBQUkzQixVQUFKLENBQWV5QixLQUFmLENBRm5COztBQUlBLFdBQU9FLFVBQVA7QUFDRCxHQU5hLENBRnBCOztBQVVBLFNBQU9oQixXQUFQO0FBQ0QiLCJmaWxlIjoibm9uTGVmdFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9kZWZpbml0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24vcmlnaHRSZWN1cnNpdmUnKTtcblxuY2xhc3MgTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgc3RhdGljIGZyb21MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbihsZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbikge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gbGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlID0gbGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5hbWUgPSBwcm9kdWN0aW9uTmFtZSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24obGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24pLFxuICAgICAgICAgIE5vZGUgPSBwcm9kdWN0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gbmV3IE5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcbiAgICBcbiAgICByZXR1cm4gbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24obGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24pIHtcbiAgY29uc3QgcHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uLmdldE5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucygpLFxuICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnQgPSBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24ucHJvZHVjdGlvbk5hbWVQYXJ0RnJvbUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKGxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKSxcbiAgICAgICAgZGVmaW5pdGlvbnMgPSBwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLm1hcChmdW5jdGlvbihwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gW10uY29uY2F0KHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKS5jb25jYXQocHJvZHVjdGlvbk5hbWVQYXJ0KSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuICBcbiAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zO1xufVxuIl19