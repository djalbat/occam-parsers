'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../extendedBNF/definition'),
    Production = require('../../extendedBNF/production'),
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
  var definitions = void 0;

  var rightRecursiveProductionNamePart = RightRecursiveProduction.productionNamePartFromLeftRecursiveProduction(leftRecursiveProduction),
      productionNonLeftRecursiveDefinitions = leftRecursiveProduction.getNonLeftRecursiveDefinitions(),
      productionNonLeftRecursiveDefinitionsLength = productionNonLeftRecursiveDefinitions.length;

  if (productionNonLeftRecursiveDefinitionsLength === 0) {
    var parts = [rightRecursiveProductionNamePart],
        definition = new Definition(parts);

    definitions = [definition];
  } else {
    definitions = productionNonLeftRecursiveDefinitions.map(function (productionNonLeftRecursiveDefinition) {
      var productionNonLeftRecursiveDefinitionParts = productionNonLeftRecursiveDefinition.getParts(),
          parts = [].concat(productionNonLeftRecursiveDefinitionParts).concat(rightRecursiveProductionNamePart),
          definition = new Definition(parts);

      return definition;
    });
  }

  return definitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vbm9uTGVmdFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiIsImxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWUiLCJnZXROYW1lIiwicHJvZHVjdGlvbk5vZGUiLCJnZXROb2RlIiwibmFtZSIsImRlZmluaXRpb25zIiwiZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJOb2RlIiwibm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwicmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZVBhcnRGcm9tTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZ2V0Tm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInBhcnRzIiwiZGVmaW5pdGlvbiIsIm1hcCIsInByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwiZ2V0UGFydHMiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSw4QkFBUixDQUFuQjtBQUFBLElBQ01DLGFBQWFELFFBQVEsOEJBQVIsQ0FEbkI7QUFBQSxJQUVNRSwyQkFBMkJGLFFBQVEsOEJBQVIsQ0FGakM7O0lBSU1HLDBCOzs7Ozs7Ozs7OztnREFDK0JDLHVCLEVBQXlCO0FBQzFELFVBQU1DLGlCQUFpQkQsd0JBQXdCRSxPQUF4QixFQUF2QjtBQUFBLFVBQ01DLGlCQUFpQkgsd0JBQXdCSSxPQUF4QixFQUR2QjtBQUFBLFVBRU1DLE9BQU9KLGNBRmI7QUFBQSxVQUU4QjtBQUN4Qkssb0JBQWNDLHVDQUF1Q1AsdUJBQXZDLENBSHBCO0FBQUEsVUFJTVEsT0FBT0wsY0FKYjtBQUFBLFVBSThCO0FBQ3hCTSxtQ0FBNkIsSUFBSVYsMEJBQUosQ0FBK0JNLElBQS9CLEVBQXFDQyxXQUFyQyxFQUFrREUsSUFBbEQsQ0FMbkM7O0FBT0EsYUFBT0MsMEJBQVA7QUFDRDs7OztFQVZzQ1osVTs7QUFhekNhLE9BQU9DLE9BQVAsR0FBaUJaLDBCQUFqQjs7QUFFQSxTQUFTUSxzQ0FBVCxDQUFnRFAsdUJBQWhELEVBQXlFO0FBQ3ZFLE1BQUlNLG9CQUFKOztBQUVBLE1BQU1NLG1DQUFtQ2QseUJBQXlCZSw2Q0FBekIsQ0FBdUViLHVCQUF2RSxDQUF6QztBQUFBLE1BQ01jLHdDQUF3Q2Qsd0JBQXdCZSw4QkFBeEIsRUFEOUM7QUFBQSxNQUVNQyw4Q0FBOENGLHNDQUFzQ0csTUFGMUY7O0FBSUEsTUFBSUQsZ0RBQWdELENBQXBELEVBQXVEO0FBQ3JELFFBQU1FLFFBQVEsQ0FBQ04sZ0NBQUQsQ0FBZDtBQUFBLFFBQ01PLGFBQWEsSUFBSXhCLFVBQUosQ0FBZXVCLEtBQWYsQ0FEbkI7O0FBR0FaLGtCQUFjLENBQUNhLFVBQUQsQ0FBZDtBQUNELEdBTEQsTUFLTztBQUNMYixrQkFBY1Esc0NBQXNDTSxHQUF0QyxDQUEwQyxVQUFTQyxvQ0FBVCxFQUErQztBQUNyRyxVQUFNQyw0Q0FBNENELHFDQUFxQ0UsUUFBckMsRUFBbEQ7QUFBQSxVQUNNTCxRQUFRLEdBQUdNLE1BQUgsQ0FBVUYseUNBQVYsRUFBcURFLE1BQXJELENBQTREWixnQ0FBNUQsQ0FEZDtBQUFBLFVBRU1PLGFBQWEsSUFBSXhCLFVBQUosQ0FBZXVCLEtBQWYsQ0FGbkI7O0FBSUEsYUFBT0MsVUFBUDtBQUNELEtBTmEsQ0FBZDtBQU9EOztBQUVELFNBQU9iLFdBQVA7QUFDRCIsImZpbGUiOiJub25MZWZ0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vZXh0ZW5kZWRCTkYvZGVmaW5pdGlvbicpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2V4dGVuZGVkQk5GL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24vcmlnaHRSZWN1cnNpdmUnKTtcblxuY2xhc3MgTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgc3RhdGljIGZyb21MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbihsZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbikge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gbGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlID0gbGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5hbWUgPSBwcm9kdWN0aW9uTmFtZSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24obGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24pLFxuICAgICAgICAgIE5vZGUgPSBwcm9kdWN0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gbmV3IE5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcbiAgICBcbiAgICByZXR1cm4gbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24obGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24pIHtcbiAgbGV0IGRlZmluaXRpb25zO1xuXG4gIGNvbnN0IHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbk5hbWVQYXJ0ID0gUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uLnByb2R1Y3Rpb25OYW1lUGFydEZyb21MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbihsZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiksXG4gICAgICAgIHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbi5nZXROb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSxcbiAgICAgICAgcHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgcGFydHMgPSBbcmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uTmFtZVBhcnRdLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICBkZWZpbml0aW9ucyA9IFtkZWZpbml0aW9uXTtcbiAgfSBlbHNlIHtcbiAgICBkZWZpbml0aW9ucyA9IHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKGZ1bmN0aW9uKHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgcHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzID0gW10uY29uY2F0KHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKS5jb25jYXQocmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uTmFtZVBhcnQpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZGVmaW5pdGlvbnM7XG59XG4iXX0=