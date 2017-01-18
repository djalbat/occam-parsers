'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spread = require('./spread');

var Query = function () {
  function Query(infiniteDescent, childProductionName, spread, subQuery) {
    _classCallCheck(this, Query);

    this.infiniteDescent = infiniteDescent;
    this.childProductionName = childProductionName;
    this.spread = spread;
    this.subQuery = subQuery;
  }

  _createClass(Query, [{
    key: 'nodesFromNode',
    value: function nodesFromNode(node) {
      var nodes = null,
          childNodes = node.getChildNodes();

      if (childNodes !== null) {
        var index = 0;

        nodes = childNodes.reduce(function (nodes, childNode) {
          var childNodeProductionName = childNode.getProductionName();

          if (this.childProductionName === '*' || this.childProductionName === childNodeProductionName) {

            var spreadIndex = this.spread.containsIndex(index);

            if (spreadIndex) {
              var childNodeNodes = this.subQuery !== null ? this.subQuery.nodesFromNode(childNode) : [childNode]; ///

              nodes = nodes.concat(childNodeNodes);
            }

            index++;
          }

          return nodes;
        }.bind(this), []);
      }

      return nodes;
    }
  }], [{
    key: 'fromExpression',
    value: function fromExpression(expression) {
      if (expression === undefined) {
        ///
        return null;
      }

      var matches = expression.match(/^\/(\/)?([^/\[]+)(\[[^\]]+\])?(\/.*)?$/),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          fourthMatch = fourth(matches),
          fifthMatch = fifth(matches),
          infiniteDescent = secondMatch === '/',
          ///
      childProductionName = thirdMatch,
          ///
      spreadExpression = fourthMatch,
          ///
      subExpression = fifthMatch,
          ///
      spread = Spread.fromExpression(spreadExpression),
          subQuery = Query.fromExpression(subExpression),
          query = new Query(infiniteDescent, childProductionName, spread, subQuery);

      return query;
    }
  }]);

  return Query;
}();

module.exports = Query;

function second(array) {
  return array[1];
}
function third(array) {
  return array[2];
}
function fourth(array) {
  return array[3];
}
function fifth(array) {
  return array[4];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcXVlcnkuanMiXSwibmFtZXMiOlsiU3ByZWFkIiwicmVxdWlyZSIsIlF1ZXJ5IiwiaW5maW5pdGVEZXNjZW50IiwiY2hpbGRQcm9kdWN0aW9uTmFtZSIsInNwcmVhZCIsInN1YlF1ZXJ5Iiwibm9kZSIsIm5vZGVzIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJpbmRleCIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJzcHJlYWRJbmRleCIsImNvbnRhaW5zSW5kZXgiLCJjaGlsZE5vZGVOb2RlcyIsIm5vZGVzRnJvbU5vZGUiLCJjb25jYXQiLCJiaW5kIiwiZXhwcmVzc2lvbiIsInVuZGVmaW5lZCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwidGhpcmRNYXRjaCIsInRoaXJkIiwiZm91cnRoTWF0Y2giLCJmb3VydGgiLCJmaWZ0aE1hdGNoIiwiZmlmdGgiLCJzcHJlYWRFeHByZXNzaW9uIiwic3ViRXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uIiwicXVlcnkiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFVBQVIsQ0FBYjs7SUFFTUMsSztBQUNKLGlCQUFZQyxlQUFaLEVBQTZCQyxtQkFBN0IsRUFBa0RDLE1BQWxELEVBQTBEQyxRQUExRCxFQUFvRTtBQUFBOztBQUNsRSxTQUFLSCxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFNBQUtDLG1CQUFMLEdBQTJCQSxtQkFBM0I7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O2tDQUVhQyxJLEVBQU07QUFDbEIsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMsYUFBYUYsS0FBS0csYUFBTCxFQURqQjs7QUFHQSxVQUFJRCxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCLFlBQUlFLFFBQVEsQ0FBWjs7QUFFQUgsZ0JBQVFDLFdBQVdHLE1BQVgsQ0FBa0IsVUFBU0osS0FBVCxFQUFnQkssU0FBaEIsRUFBMkI7QUFDbkQsY0FBSUMsMEJBQTBCRCxVQUFVRSxpQkFBVixFQUE5Qjs7QUFFQSxjQUFLLEtBQUtYLG1CQUFMLEtBQTZCLEdBQTlCLElBQ0MsS0FBS0EsbUJBQUwsS0FBNkJVLHVCQURsQyxFQUM0RDs7QUFFMUQsZ0JBQUlFLGNBQWMsS0FBS1gsTUFBTCxDQUFZWSxhQUFaLENBQTBCTixLQUExQixDQUFsQjs7QUFFQSxnQkFBSUssV0FBSixFQUFpQjtBQUNmLGtCQUFJRSxpQkFBa0IsS0FBS1osUUFBTCxLQUFrQixJQUFuQixHQUNHLEtBQUtBLFFBQUwsQ0FBY2EsYUFBZCxDQUE0Qk4sU0FBNUIsQ0FESCxHQUVLLENBQUNBLFNBQUQsQ0FGMUIsQ0FEZSxDQUd5Qjs7QUFFeENMLHNCQUFRQSxNQUFNWSxNQUFOLENBQWFGLGNBQWIsQ0FBUjtBQUNEOztBQUVEUDtBQUNEOztBQUVELGlCQUFPSCxLQUFQO0FBQ0QsU0FwQnlCLENBb0J4QmEsSUFwQndCLENBb0JuQixJQXBCbUIsQ0FBbEIsRUFvQk0sRUFwQk4sQ0FBUjtBQXFCRDs7QUFFRCxhQUFPYixLQUFQO0FBQ0Q7OzttQ0FFcUJjLFUsRUFBWTtBQUNoQyxVQUFJQSxlQUFlQyxTQUFuQixFQUE4QjtBQUFFO0FBQzlCLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlDLFVBQVVGLFdBQVdHLEtBQVgsQ0FBaUIsd0NBQWpCLENBQWQ7QUFBQSxVQUNJQyxjQUFjQyxPQUFPSCxPQUFQLENBRGxCO0FBQUEsVUFFSUksYUFBYUMsTUFBTUwsT0FBTixDQUZqQjtBQUFBLFVBR0lNLGNBQWNDLE9BQU9QLE9BQVAsQ0FIbEI7QUFBQSxVQUlJUSxhQUFhQyxNQUFNVCxPQUFOLENBSmpCO0FBQUEsVUFLSXJCLGtCQUFtQnVCLGdCQUFnQixHQUx2QztBQUFBLFVBSzhDO0FBQzFDdEIsNEJBQXNCd0IsVUFOMUI7QUFBQSxVQU11QztBQUNuQ00seUJBQW1CSixXQVB2QjtBQUFBLFVBT3FDO0FBQ2pDSyxzQkFBZ0JILFVBUnBCO0FBQUEsVUFRaUM7QUFDN0IzQixlQUFTTCxPQUFPb0MsY0FBUCxDQUFzQkYsZ0JBQXRCLENBVGI7QUFBQSxVQVVJNUIsV0FBV0osTUFBTWtDLGNBQU4sQ0FBcUJELGFBQXJCLENBVmY7QUFBQSxVQVdJRSxRQUFRLElBQUluQyxLQUFKLENBQVVDLGVBQVYsRUFBMkJDLG1CQUEzQixFQUFnREMsTUFBaEQsRUFBd0RDLFFBQXhELENBWFo7O0FBYUEsYUFBTytCLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJyQyxLQUFqQjs7QUFFQSxTQUFTeUIsTUFBVCxDQUFnQmEsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTWCxLQUFULENBQWVXLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTVCxNQUFULENBQWdCUyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzNDLFNBQVNQLEtBQVQsQ0FBZU8sS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InF1ZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3ByZWFkID0gcmVxdWlyZSgnLi9zcHJlYWQnKTtcblxuY2xhc3MgUXVlcnkge1xuICBjb25zdHJ1Y3RvcihpbmZpbml0ZURlc2NlbnQsIGNoaWxkUHJvZHVjdGlvbk5hbWUsIHNwcmVhZCwgc3ViUXVlcnkpIHtcbiAgICB0aGlzLmluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudDtcbiAgICB0aGlzLmNoaWxkUHJvZHVjdGlvbk5hbWUgPSBjaGlsZFByb2R1Y3Rpb25OYW1lO1xuICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xuICAgIHRoaXMuc3ViUXVlcnkgPSBzdWJRdWVyeTtcbiAgfVxuICBcbiAgbm9kZXNGcm9tTm9kZShub2RlKSB7XG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgY2hpbGROb2RlcyA9IG5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgaWYgKGNoaWxkTm9kZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBpbmRleCA9IDA7XG5cbiAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5yZWR1Y2UoZnVuY3Rpb24obm9kZXMsIGNoaWxkTm9kZSkge1xuICAgICAgICB2YXIgY2hpbGROb2RlUHJvZHVjdGlvbk5hbWUgPSBjaGlsZE5vZGUuZ2V0UHJvZHVjdGlvbk5hbWUoKTtcblxuICAgICAgICBpZiAoKHRoaXMuY2hpbGRQcm9kdWN0aW9uTmFtZSA9PT0gJyonKSB8fFxuICAgICAgICAgICAgKHRoaXMuY2hpbGRQcm9kdWN0aW9uTmFtZSA9PT0gY2hpbGROb2RlUHJvZHVjdGlvbk5hbWUpKSB7XG5cbiAgICAgICAgICB2YXIgc3ByZWFkSW5kZXggPSB0aGlzLnNwcmVhZC5jb250YWluc0luZGV4KGluZGV4KTtcblxuICAgICAgICAgIGlmIChzcHJlYWRJbmRleCkge1xuICAgICAgICAgICAgdmFyIGNoaWxkTm9kZU5vZGVzID0gKHRoaXMuc3ViUXVlcnkgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViUXVlcnkubm9kZXNGcm9tTm9kZShjaGlsZE5vZGUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NoaWxkTm9kZV07ICAvLy9cblxuICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGROb2RlTm9kZXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICB9LmJpbmQodGhpcyksIFtdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIGlmIChleHByZXNzaW9uID09PSB1bmRlZmluZWQpIHsgLy8vXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgdmFyIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKC9eXFwvKFxcLyk/KFteL1xcW10rKShcXFtbXlxcXV0rXFxdKT8oXFwvLiopPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyksXG4gICAgICAgIGZpZnRoTWF0Y2ggPSBmaWZ0aChtYXRjaGVzKSxcbiAgICAgICAgaW5maW5pdGVEZXNjZW50ID0gKHNlY29uZE1hdGNoID09PSAnLycpLCAgLy8vXG4gICAgICAgIGNoaWxkUHJvZHVjdGlvbk5hbWUgPSB0aGlyZE1hdGNoLCAgLy8vXG4gICAgICAgIHNwcmVhZEV4cHJlc3Npb24gPSBmb3VydGhNYXRjaCwgIC8vL1xuICAgICAgICBzdWJFeHByZXNzaW9uID0gZmlmdGhNYXRjaCwgIC8vL1xuICAgICAgICBzcHJlYWQgPSBTcHJlYWQuZnJvbUV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbiksXG4gICAgICAgIHN1YlF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbiksXG4gICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KGluZmluaXRlRGVzY2VudCwgY2hpbGRQcm9kdWN0aW9uTmFtZSwgc3ByZWFkLCBzdWJRdWVyeSk7XG4gICAgXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnk7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG4iXX0=