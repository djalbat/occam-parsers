'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LeftRecursiveRule = require('./rule/leftRecursive'),
    RightRecursiveRule = require('./rule/rightRecursive'),
    NonLeftRecursiveRule = require('./rule/nonLeftRecursive'),
    ImplicitlyLeftRecursiveRule = require('./rule/implicitlyLeftRecursive');

var leftRecursion = function () {
  function leftRecursion() {
    _classCallCheck(this, leftRecursion);
  }

  _createClass(leftRecursion, null, [{
    key: 'eliminate',
    value: function eliminate(rules) {
      var nonLeftRecursiveRules = [],
          rightRecursiveRules = [];

      rules.forEach(function (rule, index) {
        var begin = 0,
            end = index,
            ///
        previousNonLeftRecursiveRules = nonLeftRecursiveRules.slice(begin, end),
            previousRules = previousNonLeftRecursiveRules,
            ///
        implicitlyLeftRecursiveRule = ImplicitlyLeftRecursiveRule.fromRuleAndPreviousRules(rule, previousRules);

        if (implicitlyLeftRecursiveRule !== null) {
          var _leftRecursiveRule = LeftRecursiveRule.fromImplicitlyLeftRecursiveRuleAndPreviousRules(implicitlyLeftRecursiveRule, previousRules);

          rule = _leftRecursiveRule; ///
        }

        var leftRecursiveRule = LeftRecursiveRule.fromRule(rule);

        if (leftRecursiveRule === null) {
          var nonLeftRecursiveRule = rule; ///

          nonLeftRecursiveRules.push(nonLeftRecursiveRule);
        } else {
          var rightRecursiveRule = RightRecursiveRule.fromLeftRecursiveRule(leftRecursiveRule),
              _nonLeftRecursiveRule = NonLeftRecursiveRule.fromLeftRecursiveRule(leftRecursiveRule);

          rightRecursiveRules.push(rightRecursiveRule);

          nonLeftRecursiveRules.push(_nonLeftRecursiveRule);
        }
      });

      rules = [].concat(nonLeftRecursiveRules).concat(rightRecursiveRules);

      return rules;
    }
  }]);

  return leftRecursion;
}();

module.exports = leftRecursion;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFtbWFyL2xlZnRSZWN1cnNpb24uanMiXSwibmFtZXMiOlsiTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJyZXF1aXJlIiwiUmlnaHRSZWN1cnNpdmVSdWxlIiwiTm9uTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJsZWZ0UmVjdXJzaW9uIiwicnVsZXMiLCJub25MZWZ0UmVjdXJzaXZlUnVsZXMiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVzIiwiZm9yRWFjaCIsInJ1bGUiLCJpbmRleCIsImJlZ2luIiwiZW5kIiwicHJldmlvdXNOb25MZWZ0UmVjdXJzaXZlUnVsZXMiLCJzbGljZSIsInByZXZpb3VzUnVsZXMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJmcm9tUnVsZUFuZFByZXZpb3VzUnVsZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZSIsImZyb21JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVBbmRQcmV2aW91c1J1bGVzIiwiZnJvbVJ1bGUiLCJub25MZWZ0UmVjdXJzaXZlUnVsZSIsInB1c2giLCJyaWdodFJlY3Vyc2l2ZVJ1bGUiLCJmcm9tTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJjb25jYXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CQyxRQUFRLHNCQUFSLENBQTFCO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLHVCQUFSLENBRDNCO0FBQUEsSUFFTUUsdUJBQXVCRixRQUFRLHlCQUFSLENBRjdCO0FBQUEsSUFHTUcsOEJBQThCSCxRQUFRLGdDQUFSLENBSHBDOztJQUtNSSxhOzs7Ozs7OzhCQUNhQyxLLEVBQU87QUFDdEIsVUFBTUMsd0JBQXdCLEVBQTlCO0FBQUEsVUFDTUMsc0JBQXNCLEVBRDVCOztBQUdBRixZQUFNRyxPQUFOLENBQWMsVUFBU0MsSUFBVCxFQUFlQyxLQUFmLEVBQXNCO0FBQ2xDLFlBQU1DLFFBQVEsQ0FBZDtBQUFBLFlBQ01DLE1BQU1GLEtBRFo7QUFBQSxZQUNvQjtBQUNkRyx3Q0FBZ0NQLHNCQUFzQlEsS0FBdEIsQ0FBNEJILEtBQTVCLEVBQW1DQyxHQUFuQyxDQUZ0QztBQUFBLFlBR01HLGdCQUFnQkYsNkJBSHRCO0FBQUEsWUFHc0Q7QUFDaERHLHNDQUE4QmIsNEJBQTRCYyx3QkFBNUIsQ0FBcURSLElBQXJELEVBQTJETSxhQUEzRCxDQUpwQzs7QUFNQSxZQUFJQyxnQ0FBZ0MsSUFBcEMsRUFBMEM7QUFDeEMsY0FBTUUscUJBQW9CbkIsa0JBQWtCb0IsK0NBQWxCLENBQWtFSCwyQkFBbEUsRUFBK0ZELGFBQS9GLENBQTFCOztBQUVBTixpQkFBT1Msa0JBQVAsQ0FId0MsQ0FHZDtBQUMzQjs7QUFFRCxZQUFNQSxvQkFBb0JuQixrQkFBa0JxQixRQUFsQixDQUEyQlgsSUFBM0IsQ0FBMUI7O0FBRUEsWUFBSVMsc0JBQXNCLElBQTFCLEVBQWdDO0FBQzlCLGNBQU1HLHVCQUF1QlosSUFBN0IsQ0FEOEIsQ0FDTTs7QUFFcENILGdDQUFzQmdCLElBQXRCLENBQTJCRCxvQkFBM0I7QUFDRCxTQUpELE1BSU87QUFDTCxjQUFNRSxxQkFBcUJ0QixtQkFBbUJ1QixxQkFBbkIsQ0FBeUNOLGlCQUF6QyxDQUEzQjtBQUFBLGNBQ01HLHdCQUF1Qm5CLHFCQUFxQnNCLHFCQUFyQixDQUEyQ04saUJBQTNDLENBRDdCOztBQUdBWCw4QkFBb0JlLElBQXBCLENBQXlCQyxrQkFBekI7O0FBRUFqQixnQ0FBc0JnQixJQUF0QixDQUEyQkQscUJBQTNCO0FBQ0Q7QUFDRixPQTNCRDs7QUE2QkFoQixjQUFRLEdBQUdvQixNQUFILENBQVVuQixxQkFBVixFQUFpQ21CLE1BQWpDLENBQXdDbEIsbUJBQXhDLENBQVI7O0FBRUEsYUFBT0YsS0FBUDtBQUNEOzs7Ozs7QUFHSHFCLE9BQU9DLE9BQVAsR0FBaUJ2QixhQUFqQiIsImZpbGUiOiJsZWZ0UmVjdXJzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBMZWZ0UmVjdXJzaXZlUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9sZWZ0UmVjdXJzaXZlJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcmlnaHRSZWN1cnNpdmUnKSxcbiAgICAgIE5vbkxlZnRSZWN1cnNpdmVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL25vbkxlZnRSZWN1cnNpdmUnKSxcbiAgICAgIEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZScpO1xuXG5jbGFzcyBsZWZ0UmVjdXJzaW9uIHtcbiAgc3RhdGljIGVsaW1pbmF0ZShydWxlcykge1xuICAgIGNvbnN0IG5vbkxlZnRSZWN1cnNpdmVSdWxlcyA9IFtdLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZXMgPSBbXTtcblxuICAgIHJ1bGVzLmZvckVhY2goZnVuY3Rpb24ocnVsZSwgaW5kZXgpIHtcbiAgICAgIGNvbnN0IGJlZ2luID0gMCxcbiAgICAgICAgICAgIGVuZCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBwcmV2aW91c05vbkxlZnRSZWN1cnNpdmVSdWxlcyA9IG5vbkxlZnRSZWN1cnNpdmVSdWxlcy5zbGljZShiZWdpbiwgZW5kKSxcbiAgICAgICAgICAgIHByZXZpb3VzUnVsZXMgPSBwcmV2aW91c05vbkxlZnRSZWN1cnNpdmVSdWxlcywgIC8vL1xuICAgICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlLmZyb21SdWxlQW5kUHJldmlvdXNSdWxlcyhydWxlLCBwcmV2aW91c1J1bGVzKTtcblxuICAgICAgaWYgKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZSA9IExlZnRSZWN1cnNpdmVSdWxlLmZyb21JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVBbmRQcmV2aW91c1J1bGVzKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSwgcHJldmlvdXNSdWxlcyk7XG4gICAgICAgIFxuICAgICAgICBydWxlID0gbGVmdFJlY3Vyc2l2ZVJ1bGU7IC8vL1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZSA9IExlZnRSZWN1cnNpdmVSdWxlLmZyb21SdWxlKHJ1bGUpO1xuICAgICAgXG4gICAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGUgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9uTGVmdFJlY3Vyc2l2ZVJ1bGUgPSBydWxlOyAgLy8vXG5cbiAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZVJ1bGVzLnB1c2gobm9uTGVmdFJlY3Vyc2l2ZVJ1bGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmlnaHRSZWN1cnNpdmVSdWxlID0gUmlnaHRSZWN1cnNpdmVSdWxlLmZyb21MZWZ0UmVjdXJzaXZlUnVsZShsZWZ0UmVjdXJzaXZlUnVsZSksXG4gICAgICAgICAgICAgIG5vbkxlZnRSZWN1cnNpdmVSdWxlID0gTm9uTGVmdFJlY3Vyc2l2ZVJ1bGUuZnJvbUxlZnRSZWN1cnNpdmVSdWxlKGxlZnRSZWN1cnNpdmVSdWxlKTtcblxuICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVzLnB1c2gocmlnaHRSZWN1cnNpdmVSdWxlKTtcblxuICAgICAgICBub25MZWZ0UmVjdXJzaXZlUnVsZXMucHVzaChub25MZWZ0UmVjdXJzaXZlUnVsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBydWxlcyA9IFtdLmNvbmNhdChub25MZWZ0UmVjdXJzaXZlUnVsZXMpLmNvbmNhdChyaWdodFJlY3Vyc2l2ZVJ1bGVzKTtcblxuICAgIHJldHVybiBydWxlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxlZnRSZWN1cnNpb247XG4iXX0=