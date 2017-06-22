'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cycles = require('../grammar/cycles'),
    leftRecursion = require('../grammar/leftRecursion'),
    ExtendedBNFParser = require('../extendedBNF/parser');

var grammarUtil = function () {
  function grammarUtil() {
    _classCallCheck(this, grammarUtil);
  }

  _createClass(grammarUtil, null, [{
    key: 'productionsFromGrammar',
    value: function productionsFromGrammar(grammar, extendedBNFLexer, extendedBNFParser) {
      var productions = void 0;

      var lines = extendedBNFLexer.linesFromGrammar(grammar),
          node = extendedBNFParser.nodeFromLines(lines);

      productions = ExtendedBNFParser.generateProductions(node);

      productions = cycles.eliminate(productions); ///

      productions = leftRecursion.eliminate(productions); ///

      return productions;
    }
  }]);

  return grammarUtil;
}();

module.exports = grammarUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2dyYW1tYXIuanMiXSwibmFtZXMiOlsiY3ljbGVzIiwicmVxdWlyZSIsImxlZnRSZWN1cnNpb24iLCJFeHRlbmRlZEJORlBhcnNlciIsImdyYW1tYXJVdGlsIiwiZ3JhbW1hciIsImV4dGVuZGVkQk5GTGV4ZXIiLCJleHRlbmRlZEJORlBhcnNlciIsInByb2R1Y3Rpb25zIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJnZW5lcmF0ZVByb2R1Y3Rpb25zIiwiZWxpbWluYXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsbUJBQVIsQ0FBZjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSwwQkFBUixDQUR0QjtBQUFBLElBRU1FLG9CQUFvQkYsUUFBUSx1QkFBUixDQUYxQjs7SUFJTUcsVzs7Ozs7OzsyQ0FDMEJDLE8sRUFBU0MsZ0IsRUFBa0JDLGlCLEVBQW1CO0FBQzFFLFVBQUlDLG9CQUFKOztBQUVBLFVBQU1DLFFBQVFILGlCQUFpQkksZ0JBQWpCLENBQWtDTCxPQUFsQyxDQUFkO0FBQUEsVUFDTU0sT0FBT0osa0JBQWtCSyxhQUFsQixDQUFnQ0gsS0FBaEMsQ0FEYjs7QUFHQUQsb0JBQWNMLGtCQUFrQlUsbUJBQWxCLENBQXNDRixJQUF0QyxDQUFkOztBQUVBSCxvQkFBY1IsT0FBT2MsU0FBUCxDQUFpQk4sV0FBakIsQ0FBZCxDQVIwRSxDQVE1Qjs7QUFFOUNBLG9CQUFjTixjQUFjWSxTQUFkLENBQXdCTixXQUF4QixDQUFkLENBVjBFLENBVXJCOztBQUVyRCxhQUFPQSxXQUFQO0FBQ0Q7Ozs7OztBQUdITyxPQUFPQyxPQUFQLEdBQWlCWixXQUFqQiIsImZpbGUiOiJncmFtbWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjeWNsZXMgPSByZXF1aXJlKCcuLi9ncmFtbWFyL2N5Y2xlcycpLFxuICAgICAgbGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvbGVmdFJlY3Vyc2lvbicpLFxuICAgICAgRXh0ZW5kZWRCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9leHRlbmRlZEJORi9wYXJzZXInKTtcblxuY2xhc3MgZ3JhbW1hclV0aWwge1xuICBzdGF0aWMgcHJvZHVjdGlvbnNGcm9tR3JhbW1hcihncmFtbWFyLCBleHRlbmRlZEJORkxleGVyLCBleHRlbmRlZEJORlBhcnNlcikge1xuICAgIGxldCBwcm9kdWN0aW9ucztcbiAgICBcbiAgICBjb25zdCBsaW5lcyA9IGV4dGVuZGVkQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBub2RlID0gZXh0ZW5kZWRCTkZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyk7XG4gICAgXG4gICAgcHJvZHVjdGlvbnMgPSBFeHRlbmRlZEJORlBhcnNlci5nZW5lcmF0ZVByb2R1Y3Rpb25zKG5vZGUpO1xuXG4gICAgcHJvZHVjdGlvbnMgPSBjeWNsZXMuZWxpbWluYXRlKHByb2R1Y3Rpb25zKTsgIC8vL1xuXG4gICAgcHJvZHVjdGlvbnMgPSBsZWZ0UmVjdXJzaW9uLmVsaW1pbmF0ZShwcm9kdWN0aW9ucyk7ICAvLy9cblxuICAgIHJldHVybiBwcm9kdWN0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdyYW1tYXJVdGlsO1xuIl19