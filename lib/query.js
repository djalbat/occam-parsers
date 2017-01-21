'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spread = require('./spread');

var Query = function () {
  function Query(infiniteDescent, productionName, subQuery, spread) {
    _classCallCheck(this, Query);

    this.infiniteDescent = infiniteDescent;
    this.productionName = productionName;
    this.subQuery = subQuery;
    this.spread = spread;
  }

  _createClass(Query, [{
    key: 'nodesFromNode',
    value: function nodesFromNode(node) {
      var nodes = [],
          childNodes = node.getChildNodes(),
          nodeProductionName = node.getProductionName();

      if (this.productionName === '*' || this.productionName === nodeProductionName) {

        if (this.spread.isBetween()) {
          if (this.subQuery === null) {
            nodes = [node];
          } else {
            nodes = childNodes.reduce(function (nodes, childNode) {
              var childNodeNodes = this.subQuery.nodesFromNode(childNode);

              nodes = nodes.concat(childNodeNodes);

              return nodes;
            }.bind(this), nodes);
          }
        }

        this.spread.incrementIndex();
      }

      if (this.infiniteDescent) {
        nodes = childNodes.reduce(function (nodes, childNode) {
          var childNodeNodes = this.nodesFromNode(childNode);

          nodes = nodes.concat(childNodeNodes);

          return nodes;
        }.bind(this), nodes);
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

      var regExp = /^\/(\/)?([^/\[]+)(\[[^\]]+\])?(\/.*)?$/,
          matches = expression.match(regExp),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          fourthMatch = fourth(matches),
          fifthMatch = fifth(matches),
          infiniteDescent = secondMatch === '/',
          ///
      productionName = thirdMatch,
          ///
      subExpression = fifthMatch,
          ///
      spreadExpression = fourthMatch,
          ///
      subQuery = Query.fromExpression(subExpression),
          spread = Spread.fromExpression(spreadExpression),
          query = new Query(infiniteDescent, productionName, subQuery, spread);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWVyeS5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJyZXF1aXJlIiwiUXVlcnkiLCJpbmZpbml0ZURlc2NlbnQiLCJwcm9kdWN0aW9uTmFtZSIsInN1YlF1ZXJ5Iiwic3ByZWFkIiwibm9kZSIsIm5vZGVzIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlUHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsImlzQmV0d2VlbiIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vZGVzIiwibm9kZXNGcm9tTm9kZSIsImNvbmNhdCIsImJpbmQiLCJpbmNyZW1lbnRJbmRleCIsImV4cHJlc3Npb24iLCJ1bmRlZmluZWQiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInRoaXJkTWF0Y2giLCJ0aGlyZCIsImZvdXJ0aE1hdGNoIiwiZm91cnRoIiwiZmlmdGhNYXRjaCIsImZpZnRoIiwic3ViRXhwcmVzc2lvbiIsInNwcmVhZEV4cHJlc3Npb24iLCJmcm9tRXhwcmVzc2lvbiIsInF1ZXJ5IiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxVQUFSLENBQWI7O0lBRU1DLEs7QUFDSixpQkFBWUMsZUFBWixFQUE2QkMsY0FBN0IsRUFBNkNDLFFBQTdDLEVBQXVEQyxNQUF2RCxFQUErRDtBQUFBOztBQUM3RCxTQUFLSCxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFNBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OztrQ0FFYUMsSSxFQUFNO0FBQ2xCLFVBQUlDLFFBQVEsRUFBWjtBQUFBLFVBQ0lDLGFBQWFGLEtBQUtHLGFBQUwsRUFEakI7QUFBQSxVQUVJQyxxQkFBcUJKLEtBQUtLLGlCQUFMLEVBRnpCOztBQUlBLFVBQUssS0FBS1IsY0FBTCxLQUF3QixHQUF6QixJQUNDLEtBQUtBLGNBQUwsS0FBd0JPLGtCQUQ3QixFQUNrRDs7QUFFaEQsWUFBSSxLQUFLTCxNQUFMLENBQVlPLFNBQVosRUFBSixFQUE2QjtBQUMzQixjQUFJLEtBQUtSLFFBQUwsS0FBa0IsSUFBdEIsRUFBNEI7QUFDMUJHLG9CQUFRLENBQUNELElBQUQsQ0FBUjtBQUNELFdBRkQsTUFFTztBQUNMQyxvQkFBUUMsV0FBV0ssTUFBWCxDQUFrQixVQUFTTixLQUFULEVBQWdCTyxTQUFoQixFQUEyQjtBQUNuRCxrQkFBSUMsaUJBQWlCLEtBQUtYLFFBQUwsQ0FBY1ksYUFBZCxDQUE0QkYsU0FBNUIsQ0FBckI7O0FBRUFQLHNCQUFRQSxNQUFNVSxNQUFOLENBQWFGLGNBQWIsQ0FBUjs7QUFFQSxxQkFBT1IsS0FBUDtBQUNELGFBTnlCLENBTXhCVyxJQU53QixDQU1uQixJQU5tQixDQUFsQixFQU1NWCxLQU5OLENBQVI7QUFPRDtBQUNGOztBQUVELGFBQUtGLE1BQUwsQ0FBWWMsY0FBWjtBQUNEOztBQUVELFVBQUksS0FBS2pCLGVBQVQsRUFBMEI7QUFDeEJLLGdCQUFRQyxXQUFXSyxNQUFYLENBQWtCLFVBQVNOLEtBQVQsRUFBZ0JPLFNBQWhCLEVBQTJCO0FBQ25ELGNBQUlDLGlCQUFpQixLQUFLQyxhQUFMLENBQW1CRixTQUFuQixDQUFyQjs7QUFFQVAsa0JBQVFBLE1BQU1VLE1BQU4sQ0FBYUYsY0FBYixDQUFSOztBQUVBLGlCQUFPUixLQUFQO0FBQ0QsU0FOeUIsQ0FNeEJXLElBTndCLENBTW5CLElBTm1CLENBQWxCLEVBTU1YLEtBTk4sQ0FBUjtBQU9EOztBQUVELGFBQU9BLEtBQVA7QUFDRDs7O21DQUVxQmEsVSxFQUFZO0FBQ2hDLFVBQUlBLGVBQWVDLFNBQW5CLEVBQThCO0FBQUU7QUFDOUIsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUMsU0FBUyx3Q0FBYjtBQUFBLFVBQ0lDLFVBQVVILFdBQVdJLEtBQVgsQ0FBaUJGLE1BQWpCLENBRGQ7QUFBQSxVQUVJRyxjQUFjQyxPQUFPSCxPQUFQLENBRmxCO0FBQUEsVUFHSUksYUFBYUMsTUFBTUwsT0FBTixDQUhqQjtBQUFBLFVBSUlNLGNBQWNDLE9BQU9QLE9BQVAsQ0FKbEI7QUFBQSxVQUtJUSxhQUFhQyxNQUFNVCxPQUFOLENBTGpCO0FBQUEsVUFNSXJCLGtCQUFtQnVCLGdCQUFnQixHQU52QztBQUFBLFVBTThDO0FBQzFDdEIsdUJBQWlCd0IsVUFQckI7QUFBQSxVQU9rQztBQUM5Qk0sc0JBQWdCRixVQVJwQjtBQUFBLFVBUWlDO0FBQzdCRyx5QkFBbUJMLFdBVHZCO0FBQUEsVUFTcUM7QUFDakN6QixpQkFBV0gsTUFBTWtDLGNBQU4sQ0FBcUJGLGFBQXJCLENBVmY7QUFBQSxVQVdJNUIsU0FBU04sT0FBT29DLGNBQVAsQ0FBc0JELGdCQUF0QixDQVhiO0FBQUEsVUFZSUUsUUFBUSxJQUFJbkMsS0FBSixDQUFVQyxlQUFWLEVBQTJCQyxjQUEzQixFQUEyQ0MsUUFBM0MsRUFBcURDLE1BQXJELENBWlo7O0FBY0EsYUFBTytCLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJyQyxLQUFqQjs7QUFFQSxTQUFTeUIsTUFBVCxDQUFnQmEsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTWCxLQUFULENBQWVXLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTVCxNQUFULENBQWdCUyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzNDLFNBQVNQLEtBQVQsQ0FBZU8sS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InF1ZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3ByZWFkID0gcmVxdWlyZSgnLi9zcHJlYWQnKTtcblxuY2xhc3MgUXVlcnkge1xuICBjb25zdHJ1Y3RvcihpbmZpbml0ZURlc2NlbnQsIHByb2R1Y3Rpb25OYW1lLCBzdWJRdWVyeSwgc3ByZWFkKSB7XG4gICAgdGhpcy5pbmZpbml0ZURlc2NlbnQgPSBpbmZpbml0ZURlc2NlbnQ7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICAgIHRoaXMuc3ViUXVlcnkgPSBzdWJRdWVyeTtcbiAgICB0aGlzLnNwcmVhZCA9IHNwcmVhZDtcbiAgfVxuICBcbiAgbm9kZXNGcm9tTm9kZShub2RlKSB7XG4gICAgdmFyIG5vZGVzID0gW10sXG4gICAgICAgIGNoaWxkTm9kZXMgPSBub2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgbm9kZVByb2R1Y3Rpb25OYW1lID0gbm9kZS5nZXRQcm9kdWN0aW9uTmFtZSgpO1xuXG4gICAgaWYgKCh0aGlzLnByb2R1Y3Rpb25OYW1lID09PSAnKicpIHx8XG4gICAgICAgICh0aGlzLnByb2R1Y3Rpb25OYW1lID09PSBub2RlUHJvZHVjdGlvbk5hbWUpKSB7XG5cbiAgICAgIGlmICh0aGlzLnNwcmVhZC5pc0JldHdlZW4oKSkge1xuICAgICAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgICAgIG5vZGVzID0gW25vZGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5yZWR1Y2UoZnVuY3Rpb24obm9kZXMsIGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgdmFyIGNoaWxkTm9kZU5vZGVzID0gdGhpcy5zdWJRdWVyeS5ub2Rlc0Zyb21Ob2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSwgbm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3ByZWFkLmluY3JlbWVudEluZGV4KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5maW5pdGVEZXNjZW50KSB7XG4gICAgICBub2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKGZ1bmN0aW9uKG5vZGVzLCBjaGlsZE5vZGUpIHtcbiAgICAgICAgdmFyIGNoaWxkTm9kZU5vZGVzID0gdGhpcy5ub2Rlc0Zyb21Ob2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGROb2RlTm9kZXMpO1xuXG4gICAgICAgIHJldHVybiBub2RlcztcbiAgICAgIH0uYmluZCh0aGlzKSwgbm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgaWYgKGV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCkgeyAvLy9cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICB2YXIgcmVnRXhwID0gL15cXC8oXFwvKT8oW14vXFxbXSspKFxcW1teXFxdXStcXF0pPyhcXC8uKik/JC8sXG4gICAgICAgIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpLFxuICAgICAgICBmaWZ0aE1hdGNoID0gZmlmdGgobWF0Y2hlcyksXG4gICAgICAgIGluZmluaXRlRGVzY2VudCA9IChzZWNvbmRNYXRjaCA9PT0gJy8nKSwgIC8vL1xuICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHRoaXJkTWF0Y2gsICAvLy9cbiAgICAgICAgc3ViRXhwcmVzc2lvbiA9IGZpZnRoTWF0Y2gsICAvLy9cbiAgICAgICAgc3ByZWFkRXhwcmVzc2lvbiA9IGZvdXJ0aE1hdGNoLCAgLy8vXG4gICAgICAgIHN1YlF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbiksXG4gICAgICAgIHNwcmVhZCA9IFNwcmVhZC5mcm9tRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSxcbiAgICAgICAgcXVlcnkgPSBuZXcgUXVlcnkoaW5maW5pdGVEZXNjZW50LCBwcm9kdWN0aW9uTmFtZSwgc3ViUXVlcnksIHNwcmVhZCk7XG4gICAgXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnk7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG4iXX0=