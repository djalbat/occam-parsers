'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../common/rule'),
    Production = require('../../common/production'),
    RightRecursiveProduction = require('../production/rightRecursive');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vbm9uTGVmdFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiIsInByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uTmFtZSIsImdldE5hbWUiLCJwcm9kdWN0aW9uTm9kZSIsImdldE5vZGUiLCJuYW1lIiwicnVsZXMiLCJydWxlc0Zyb21Qcm9kdWN0aW9uIiwiTm9kZSIsIm5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsInByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZXMiLCJnZXROb25MZWZ0UmVjdXJzaXZlUnVsZXMiLCJtYXAiLCJwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZVJ1bGVQYXJ0cyIsImdldFBhcnRzIiwicHJvZHVjdGlvbk5hbWVQYXJ0IiwicHJvZHVjdGlvbk5hbWVQYXJ0RnJvbVByb2R1Y3Rpb24iLCJwYXJ0cyIsImNvbmNhdCIsInJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxtQkFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSx5QkFBUixDQURuQjtBQUFBLElBRU1FLDJCQUEyQkYsUUFBUSw4QkFBUixDQUZqQzs7SUFJTUcsMEI7Ozs7Ozs7Ozs7O21DQUNrQkMsVSxFQUFZO0FBQ2hDLFVBQU1DLGlCQUFpQkQsV0FBV0UsT0FBWCxFQUF2QjtBQUFBLFVBQ01DLGlCQUFpQkgsV0FBV0ksT0FBWCxFQUR2QjtBQUFBLFVBRU1DLE9BQU9KLGNBRmI7QUFBQSxVQUU4QjtBQUN4QkssY0FBUUMsb0JBQW9CUCxVQUFwQixDQUhkO0FBQUEsVUFJTVEsT0FBT0wsY0FKYjtBQUFBLFVBSThCO0FBQ3hCTSxtQ0FBNkIsSUFBSVosVUFBSixDQUFlUSxJQUFmLEVBQXFCQyxLQUFyQixFQUE0QkUsSUFBNUIsQ0FMbkM7O0FBT0EsYUFBT0MsMEJBQVA7QUFDRDs7OztFQVZzQ1osVTs7QUFhekNhLE9BQU9DLE9BQVAsR0FBaUJaLDBCQUFqQjs7QUFFQSxTQUFTUSxtQkFBVCxDQUE2QlAsVUFBN0IsRUFBeUM7QUFDdkMsTUFBTVksa0NBQWtDWixXQUFXYSx3QkFBWCxFQUF4QztBQUFBLE1BQ01QLFFBQVFNLGdDQUFnQ0UsR0FBaEMsQ0FBb0MsVUFBU0MsOEJBQVQsRUFBeUM7QUFDbkYsUUFBTUMsc0NBQXNDRCwrQkFBK0JFLFFBQS9CLEVBQTVDO0FBQUEsUUFDTUMscUJBQXFCcEIseUJBQXlCcUIsZ0NBQXpCLENBQTBEbkIsVUFBMUQsQ0FEM0I7QUFBQSxRQUVNb0IsUUFBUSxHQUFHQyxNQUFILENBQVVMLG1DQUFWLEVBQStDSyxNQUEvQyxDQUFzREgsa0JBQXRELENBRmQ7QUFBQSxRQUdNSSxPQUFPLElBQUkzQixJQUFKLENBQVN5QixLQUFULENBSGI7O0FBS0EsV0FBT0UsSUFBUDtBQUNELEdBUE8sQ0FEZDs7QUFVQSxTQUFPaEIsS0FBUDtBQUNEIiwiZmlsZSI6Im5vbkxlZnRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcnVsZScpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wcm9kdWN0aW9uJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uL3JpZ2h0UmVjdXJzaXZlJyk7XG5cbmNsYXNzIE5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTm9kZSA9IHByb2R1Y3Rpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5hbWUgPSBwcm9kdWN0aW9uTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcbiAgICBcbiAgICByZXR1cm4gbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gIGNvbnN0IHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZXMgPSBwcm9kdWN0aW9uLmdldE5vbkxlZnRSZWN1cnNpdmVSdWxlcygpLFxuICAgICAgICBydWxlcyA9IHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZXMubWFwKGZ1bmN0aW9uKHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgICAgICAgIGNvbnN0IHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZVBhcnRzID0gcHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVSdWxlLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uLnByb2R1Y3Rpb25OYW1lUGFydEZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gW10uY29uY2F0KHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZVBhcnRzKS5jb25jYXQocHJvZHVjdGlvbk5hbWVQYXJ0KSxcbiAgICAgICAgICAgICAgICBydWxlID0gbmV3IFJ1bGUocGFydHMpO1xuICBcbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuIl19