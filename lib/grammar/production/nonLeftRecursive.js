'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../bnf/definition'),
    Production = require('../../bnf/production'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vbm9uTGVmdFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiIsImxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWUiLCJnZXROYW1lIiwicHJvZHVjdGlvbk5vZGUiLCJnZXROb2RlIiwibmFtZSIsImRlZmluaXRpb25zIiwiZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJOb2RlIiwibm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwicmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZVBhcnRGcm9tTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZ2V0Tm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInBhcnRzIiwiZGVmaW5pdGlvbiIsIm1hcCIsInByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwiZ2V0UGFydHMiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxzQkFBUixDQUFuQjtBQUFBLElBQ01DLGFBQWFELFFBQVEsc0JBQVIsQ0FEbkI7QUFBQSxJQUVNRSwyQkFBMkJGLFFBQVEsOEJBQVIsQ0FGakM7O0lBSU1HLDBCOzs7Ozs7Ozs7OztnREFDK0JDLHVCLEVBQXlCO0FBQzFELFVBQU1DLGlCQUFpQkQsd0JBQXdCRSxPQUF4QixFQUF2QjtBQUFBLFVBQ01DLGlCQUFpQkgsd0JBQXdCSSxPQUF4QixFQUR2QjtBQUFBLFVBRU1DLE9BQU9KLGNBRmI7QUFBQSxVQUU4QjtBQUN4Qkssb0JBQWNDLHVDQUF1Q1AsdUJBQXZDLENBSHBCO0FBQUEsVUFJTVEsT0FBT0wsY0FKYjtBQUFBLFVBSThCO0FBQ3hCTSxtQ0FBNkIsSUFBSVYsMEJBQUosQ0FBK0JNLElBQS9CLEVBQXFDQyxXQUFyQyxFQUFrREUsSUFBbEQsQ0FMbkM7O0FBT0EsYUFBT0MsMEJBQVA7QUFDRDs7OztFQVZzQ1osVTs7QUFhekNhLE9BQU9DLE9BQVAsR0FBaUJaLDBCQUFqQjs7QUFFQSxTQUFTUSxzQ0FBVCxDQUFnRFAsdUJBQWhELEVBQXlFO0FBQ3ZFLE1BQUlNLG9CQUFKOztBQUVBLE1BQU1NLG1DQUFtQ2QseUJBQXlCZSw2Q0FBekIsQ0FBdUViLHVCQUF2RSxDQUF6QztBQUFBLE1BQ01jLHdDQUF3Q2Qsd0JBQXdCZSw4QkFBeEIsRUFEOUM7QUFBQSxNQUVNQyw4Q0FBOENGLHNDQUFzQ0csTUFGMUY7O0FBSUEsTUFBSUQsZ0RBQWdELENBQXBELEVBQXVEO0FBQ3JELFFBQU1FLFFBQVEsQ0FBQ04sZ0NBQUQsQ0FBZDtBQUFBLFFBQ01PLGFBQWEsSUFBSXhCLFVBQUosQ0FBZXVCLEtBQWYsQ0FEbkI7O0FBR0FaLGtCQUFjLENBQUNhLFVBQUQsQ0FBZDtBQUNELEdBTEQsTUFLTztBQUNMYixrQkFBY1Esc0NBQXNDTSxHQUF0QyxDQUEwQyxVQUFTQyxvQ0FBVCxFQUErQztBQUNyRyxVQUFNQyw0Q0FBNENELHFDQUFxQ0UsUUFBckMsRUFBbEQ7QUFBQSxVQUNNTCxRQUFRLEdBQUdNLE1BQUgsQ0FBVUYseUNBQVYsRUFBcURFLE1BQXJELENBQTREWixnQ0FBNUQsQ0FEZDtBQUFBLFVBRU1PLGFBQWEsSUFBSXhCLFVBQUosQ0FBZXVCLEtBQWYsQ0FGbkI7O0FBSUEsYUFBT0MsVUFBUDtBQUNELEtBTmEsQ0FBZDtBQU9EOztBQUVELFNBQU9iLFdBQVA7QUFDRCIsImZpbGUiOiJub25MZWZ0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vYm5mL2RlZmluaXRpb24nKSxcbiAgICAgIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi8uLi9ibmYvcHJvZHVjdGlvbicpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbi9yaWdodFJlY3Vyc2l2ZScpO1xuXG5jbGFzcyBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBzdGF0aWMgZnJvbUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKGxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBsZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5vZGUgPSBsZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9uc0Zyb21MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbihsZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiksXG4gICAgICAgICAgTm9kZSA9IHByb2R1Y3Rpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBuZXcgTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24obmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuICAgIFxuICAgIHJldHVybiBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uO1xuXG5mdW5jdGlvbiBkZWZpbml0aW9uc0Zyb21MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbihsZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbikge1xuICBsZXQgZGVmaW5pdGlvbnM7XG5cbiAgY29uc3QgcmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uTmFtZVBhcnQgPSBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24ucHJvZHVjdGlvbk5hbWVQYXJ0RnJvbUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKGxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKSxcbiAgICAgICAgcHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uLmdldE5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucygpLFxuICAgICAgICBwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gcHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBwYXJ0cyA9IFtyaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb25OYW1lUGFydF0sXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIGRlZmluaXRpb25zID0gW2RlZmluaXRpb25dO1xuICB9IGVsc2Uge1xuICAgIGRlZmluaXRpb25zID0gcHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoZnVuY3Rpb24ocHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHMgPSBbXS5jb25jYXQocHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpLmNvbmNhdChyaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb25OYW1lUGFydCksXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBkZWZpbml0aW9ucztcbn1cbiJdfQ==