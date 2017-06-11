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
    key: 'fromLeftRecursiveProduction',
    value: function fromLeftRecursiveProduction(leftRecursiveProduction) {
      var productionName = leftRecursiveProduction.getName(),
          productionNode = leftRecursiveProduction.getNode(),
          name = productionName,
          ///
      rules = rulesFromLeftRecursiveProduction(leftRecursiveProduction),
          Node = productionNode,
          ///
      nonLeftRecursiveProduction = new Production(name, rules, Node);

      return nonLeftRecursiveProduction;
    }
  }]);

  return NonLeftRecursiveProduction;
}(Production);

module.exports = NonLeftRecursiveProduction;

function rulesFromLeftRecursiveProduction(leftRecursiveProduction) {
  var productionNonLeftRecursiveRules = leftRecursiveProduction.getNonLeftRecursiveRules(),
      productionNamePart = RightRecursiveProduction.productionNamePartFromLeftRecursiveProduction(leftRecursiveProduction),
      rules = productionNonLeftRecursiveRules.map(function (productionNonLeftRecursiveRule) {
    var productionNonLeftRecursiveRuleParts = productionNonLeftRecursiveRule.getParts(),
        parts = [].concat(productionNonLeftRecursiveRuleParts).concat(productionNamePart),
        rule = new Rule(parts);

    return rule;
  });

  return rules;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vbm9uTGVmdFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiIsImxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWUiLCJnZXROYW1lIiwicHJvZHVjdGlvbk5vZGUiLCJnZXROb2RlIiwibmFtZSIsInJ1bGVzIiwicnVsZXNGcm9tTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJOb2RlIiwibm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVSdWxlcyIsImdldE5vbkxlZnRSZWN1cnNpdmVSdWxlcyIsInByb2R1Y3Rpb25OYW1lUGFydCIsInByb2R1Y3Rpb25OYW1lUGFydEZyb21MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiIsIm1hcCIsInByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZSIsInByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZVBhcnRzIiwiZ2V0UGFydHMiLCJwYXJ0cyIsImNvbmNhdCIsInJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxtQkFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSx5QkFBUixDQURuQjtBQUFBLElBRU1FLDJCQUEyQkYsUUFBUSw4QkFBUixDQUZqQzs7SUFJTUcsMEI7Ozs7Ozs7Ozs7O2dEQUMrQkMsdUIsRUFBeUI7QUFDMUQsVUFBTUMsaUJBQWlCRCx3QkFBd0JFLE9BQXhCLEVBQXZCO0FBQUEsVUFDTUMsaUJBQWlCSCx3QkFBd0JJLE9BQXhCLEVBRHZCO0FBQUEsVUFFTUMsT0FBT0osY0FGYjtBQUFBLFVBRThCO0FBQ3hCSyxjQUFRQyxpQ0FBaUNQLHVCQUFqQyxDQUhkO0FBQUEsVUFJTVEsT0FBT0wsY0FKYjtBQUFBLFVBSThCO0FBQ3hCTSxtQ0FBNkIsSUFBSVosVUFBSixDQUFlUSxJQUFmLEVBQXFCQyxLQUFyQixFQUE0QkUsSUFBNUIsQ0FMbkM7O0FBT0EsYUFBT0MsMEJBQVA7QUFDRDs7OztFQVZzQ1osVTs7QUFhekNhLE9BQU9DLE9BQVAsR0FBaUJaLDBCQUFqQjs7QUFFQSxTQUFTUSxnQ0FBVCxDQUEwQ1AsdUJBQTFDLEVBQW1FO0FBQ2pFLE1BQU1ZLGtDQUFrQ1osd0JBQXdCYSx3QkFBeEIsRUFBeEM7QUFBQSxNQUNNQyxxQkFBcUJoQix5QkFBeUJpQiw2Q0FBekIsQ0FBdUVmLHVCQUF2RSxDQUQzQjtBQUFBLE1BRU1NLFFBQVFNLGdDQUFnQ0ksR0FBaEMsQ0FBb0MsVUFBU0MsOEJBQVQsRUFBeUM7QUFDbkYsUUFBTUMsc0NBQXNDRCwrQkFBK0JFLFFBQS9CLEVBQTVDO0FBQUEsUUFDTUMsUUFBUSxHQUFHQyxNQUFILENBQVVILG1DQUFWLEVBQStDRyxNQUEvQyxDQUFzRFAsa0JBQXRELENBRGQ7QUFBQSxRQUVNUSxPQUFPLElBQUkzQixJQUFKLENBQVN5QixLQUFULENBRmI7O0FBSUEsV0FBT0UsSUFBUDtBQUNELEdBTk8sQ0FGZDs7QUFVQSxTQUFPaEIsS0FBUDtBQUNEIiwiZmlsZSI6Im5vbkxlZnRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcnVsZScpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wcm9kdWN0aW9uJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uL3JpZ2h0UmVjdXJzaXZlJyk7XG5cbmNsYXNzIE5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24obGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IGxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTm9kZSA9IGxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKGxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKSxcbiAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcbiAgICBcbiAgICByZXR1cm4gbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcnVsZXNGcm9tTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24obGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24pIHtcbiAgY29uc3QgcHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVSdWxlcyA9IGxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uLmdldE5vbkxlZnRSZWN1cnNpdmVSdWxlcygpLFxuICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnQgPSBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24ucHJvZHVjdGlvbk5hbWVQYXJ0RnJvbUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKGxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKSxcbiAgICAgICAgcnVsZXMgPSBwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZVJ1bGVzLm1hcChmdW5jdGlvbihwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZVJ1bGVQYXJ0cyA9IHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZS5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gW10uY29uY2F0KHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZVBhcnRzKS5jb25jYXQocHJvZHVjdGlvbk5hbWVQYXJ0KSxcbiAgICAgICAgICAgICAgICBydWxlID0gbmV3IFJ1bGUocGFydHMpO1xuICBcbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuIl19