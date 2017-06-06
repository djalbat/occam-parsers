'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    Production = require('../production'),
    RightRecursiveProduction = require('./rightRecursive');

var NonLeftRecursiveProduction = function (_Production) {
  _inherits(NonLeftRecursiveProduction, _Production);

  function NonLeftRecursiveProduction() {
    _classCallCheck(this, NonLeftRecursiveProduction);

    return _possibleConstructorReturn(this, (NonLeftRecursiveProduction.__proto__ || Object.getPrototypeOf(NonLeftRecursiveProduction)).apply(this, arguments));
  }

  _createClass(NonLeftRecursiveProduction, null, [{
    key: 'fromProduction',
    value: function fromProduction(production) {
      var productionName = production.getName(),
          productionNode = production.getNode(),
          name = productionName,
          ///
      rules = rulesFromProduction(production),
          Node = productionNode,
          ///
      nonLeftRecursiveProduction = new Production(name, rules, Node);

      return nonLeftRecursiveProduction;
    }
  }]);

  return NonLeftRecursiveProduction;
}(Production);

module.exports = NonLeftRecursiveProduction;

function rulesFromProduction(production) {
  var productionNonLeftRecursiveRules = production.getNonLeftRecursiveRules(),
      rules = productionNonLeftRecursiveRules.map(function (productionNonLeftRecursiveRule) {
    var productionNonLeftRecursiveRuleParts = productionNonLeftRecursiveRule.getParts(),
        productionNamePart = RightRecursiveProduction.productionNamePartFromProduction(production),
        parts = [].concat(productionNonLeftRecursiveRuleParts).concat(productionNamePart),
        rule = new Rule(parts);

    return rule;
  });

  return rules;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi9ub25MZWZ0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbiIsIlJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiIsIk5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uIiwicHJvZHVjdGlvbiIsInByb2R1Y3Rpb25OYW1lIiwiZ2V0TmFtZSIsInByb2R1Y3Rpb25Ob2RlIiwiZ2V0Tm9kZSIsIm5hbWUiLCJydWxlcyIsInJ1bGVzRnJvbVByb2R1Y3Rpb24iLCJOb2RlIiwibm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVSdWxlcyIsImdldE5vbkxlZnRSZWN1cnNpdmVSdWxlcyIsIm1hcCIsInByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZSIsInByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZVBhcnRzIiwiZ2V0UGFydHMiLCJwcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZVBhcnRGcm9tUHJvZHVjdGlvbiIsInBhcnRzIiwiY29uY2F0IiwicnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsZUFBUixDQURuQjtBQUFBLElBRU1FLDJCQUEyQkYsUUFBUSxrQkFBUixDQUZqQzs7SUFJTUcsMEI7Ozs7Ozs7Ozs7O21DQUNrQkMsVSxFQUFZO0FBQ2hDLFVBQU1DLGlCQUFpQkQsV0FBV0UsT0FBWCxFQUF2QjtBQUFBLFVBQ01DLGlCQUFpQkgsV0FBV0ksT0FBWCxFQUR2QjtBQUFBLFVBRU1DLE9BQU9KLGNBRmI7QUFBQSxVQUU4QjtBQUN4QkssY0FBUUMsb0JBQW9CUCxVQUFwQixDQUhkO0FBQUEsVUFJTVEsT0FBT0wsY0FKYjtBQUFBLFVBSThCO0FBQ3hCTSxtQ0FBNkIsSUFBSVosVUFBSixDQUFlUSxJQUFmLEVBQXFCQyxLQUFyQixFQUE0QkUsSUFBNUIsQ0FMbkM7O0FBT0EsYUFBT0MsMEJBQVA7QUFDRDs7OztFQVZzQ1osVTs7QUFhekNhLE9BQU9DLE9BQVAsR0FBaUJaLDBCQUFqQjs7QUFFQSxTQUFTUSxtQkFBVCxDQUE2QlAsVUFBN0IsRUFBeUM7QUFDdkMsTUFBTVksa0NBQWtDWixXQUFXYSx3QkFBWCxFQUF4QztBQUFBLE1BQ01QLFFBQVFNLGdDQUFnQ0UsR0FBaEMsQ0FBb0MsVUFBU0MsOEJBQVQsRUFBeUM7QUFDbkYsUUFBTUMsc0NBQXNDRCwrQkFBK0JFLFFBQS9CLEVBQTVDO0FBQUEsUUFDTUMscUJBQXFCcEIseUJBQXlCcUIsZ0NBQXpCLENBQTBEbkIsVUFBMUQsQ0FEM0I7QUFBQSxRQUVNb0IsUUFBUSxHQUFHQyxNQUFILENBQVVMLG1DQUFWLEVBQStDSyxNQUEvQyxDQUFzREgsa0JBQXRELENBRmQ7QUFBQSxRQUdNSSxPQUFPLElBQUkzQixJQUFKLENBQVN5QixLQUFULENBSGI7O0FBS0EsV0FBT0UsSUFBUDtBQUNELEdBUE8sQ0FEZDs7QUFVQSxTQUFPaEIsS0FBUDtBQUNEIiwiZmlsZSI6Im5vbkxlZnRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9yaWdodFJlY3Vyc2l2ZScpO1xuXG5jbGFzcyBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5vZGUgPSBwcm9kdWN0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgICAgTm9kZSA9IHByb2R1Y3Rpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG4gICAgXG4gICAgcmV0dXJuIG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICBjb25zdCBwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZVJ1bGVzID0gcHJvZHVjdGlvbi5nZXROb25MZWZ0UmVjdXJzaXZlUnVsZXMoKSxcbiAgICAgICAgcnVsZXMgPSBwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZVJ1bGVzLm1hcChmdW5jdGlvbihwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZVJ1bGVQYXJ0cyA9IHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZS5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbi5wcm9kdWN0aW9uTmFtZVBhcnRGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IFtdLmNvbmNhdChwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZVJ1bGVQYXJ0cykuY29uY2F0KHByb2R1Y3Rpb25OYW1lUGFydCksXG4gICAgICAgICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHBhcnRzKTtcbiAgXG4gICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdfQ==