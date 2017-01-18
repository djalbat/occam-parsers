'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spread = require('./spread');

var Query = function () {
  function Query(infiniteDescent, productionName, spread, subQuery) {
    _classCallCheck(this, Query);

    this.infiniteDescent = infiniteDescent;
    this.productionName = productionName;
    this.spread = spread;
    this.subQuery = subQuery;
  }

  _createClass(Query, [{
    key: 'nodesFromNode',
    value: function nodesFromNode(node) {
      var nodes = [],
          childNodes = node.getChildNodes(),
          nodeProductionName = node.getProductionName();

      if (this.productionName === '*' || this.productionName === nodeProductionName) {

        if (this.subQuery === null) {
          nodes = [node];
        } else {
          nodes = childNodes.reduce(function (nodes, childNode) {
            var childNodeNodes = this.subQuery.nodesFromNode(childNode);

            nodes = nodes.concat(childNodeNodes);

            return nodes;
          }.bind(this), []);
        }
      } else if (this.infiniteDescent) {
        nodes = childNodes.reduce(function (nodes, childNode) {
          var childNodeNodes = this.nodesFromNode(childNode);

          nodes = nodes.concat(childNodeNodes);

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
      productionName = thirdMatch,
          ///
      spreadExpression = fourthMatch,
          ///
      subExpression = fifthMatch,
          ///
      spread = Spread.fromExpression(spreadExpression),
          subQuery = Query.fromExpression(subExpression),
          query = new Query(infiniteDescent, productionName, spread, subQuery);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcXVlcnkuanMiXSwibmFtZXMiOlsiU3ByZWFkIiwicmVxdWlyZSIsIlF1ZXJ5IiwiaW5maW5pdGVEZXNjZW50IiwicHJvZHVjdGlvbk5hbWUiLCJzcHJlYWQiLCJzdWJRdWVyeSIsIm5vZGUiLCJub2RlcyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZVByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb2RlcyIsIm5vZGVzRnJvbU5vZGUiLCJjb25jYXQiLCJiaW5kIiwiZXhwcmVzc2lvbiIsInVuZGVmaW5lZCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwidGhpcmRNYXRjaCIsInRoaXJkIiwiZm91cnRoTWF0Y2giLCJmb3VydGgiLCJmaWZ0aE1hdGNoIiwiZmlmdGgiLCJzcHJlYWRFeHByZXNzaW9uIiwic3ViRXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uIiwicXVlcnkiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFVBQVIsQ0FBYjs7SUFFTUMsSztBQUNKLGlCQUFZQyxlQUFaLEVBQTZCQyxjQUE3QixFQUE2Q0MsTUFBN0MsRUFBcURDLFFBQXJELEVBQStEO0FBQUE7O0FBQzdELFNBQUtILGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O2tDQUVhQyxJLEVBQU07QUFDbEIsVUFBSUMsUUFBUSxFQUFaO0FBQUEsVUFDSUMsYUFBYUYsS0FBS0csYUFBTCxFQURqQjtBQUFBLFVBRUlDLHFCQUFxQkosS0FBS0ssaUJBQUwsRUFGekI7O0FBSUEsVUFBSyxLQUFLUixjQUFMLEtBQXdCLEdBQXpCLElBQ0MsS0FBS0EsY0FBTCxLQUF3Qk8sa0JBRDdCLEVBQ2tEOztBQUVoRCxZQUFJLEtBQUtMLFFBQUwsS0FBa0IsSUFBdEIsRUFBNEI7QUFDMUJFLGtCQUFRLENBQUNELElBQUQsQ0FBUjtBQUNELFNBRkQsTUFFTztBQUNMQyxrQkFBUUMsV0FBV0ksTUFBWCxDQUFrQixVQUFTTCxLQUFULEVBQWdCTSxTQUFoQixFQUEyQjtBQUNuRCxnQkFBSUMsaUJBQWlCLEtBQUtULFFBQUwsQ0FBY1UsYUFBZCxDQUE0QkYsU0FBNUIsQ0FBckI7O0FBRUFOLG9CQUFRQSxNQUFNUyxNQUFOLENBQWFGLGNBQWIsQ0FBUjs7QUFFQSxtQkFBT1AsS0FBUDtBQUNELFdBTnlCLENBTXhCVSxJQU53QixDQU1uQixJQU5tQixDQUFsQixFQU1NLEVBTk4sQ0FBUjtBQU9EO0FBQ0YsT0FkRCxNQWNPLElBQUksS0FBS2YsZUFBVCxFQUEwQjtBQUMvQkssZ0JBQVFDLFdBQVdJLE1BQVgsQ0FBa0IsVUFBU0wsS0FBVCxFQUFnQk0sU0FBaEIsRUFBMkI7QUFDbkQsY0FBSUMsaUJBQWlCLEtBQUtDLGFBQUwsQ0FBbUJGLFNBQW5CLENBQXJCOztBQUVBTixrQkFBUUEsTUFBTVMsTUFBTixDQUFhRixjQUFiLENBQVI7O0FBRUEsaUJBQU9QLEtBQVA7QUFDRCxTQU55QixDQU14QlUsSUFOd0IsQ0FNbkIsSUFObUIsQ0FBbEIsRUFNTSxFQU5OLENBQVI7QUFPRDs7QUFFRCxhQUFPVixLQUFQO0FBQ0Q7OzttQ0FFcUJXLFUsRUFBWTtBQUNoQyxVQUFJQSxlQUFlQyxTQUFuQixFQUE4QjtBQUFFO0FBQzlCLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlDLFVBQVVGLFdBQVdHLEtBQVgsQ0FBaUIsd0NBQWpCLENBQWQ7QUFBQSxVQUNJQyxjQUFjQyxPQUFPSCxPQUFQLENBRGxCO0FBQUEsVUFFSUksYUFBYUMsTUFBTUwsT0FBTixDQUZqQjtBQUFBLFVBR0lNLGNBQWNDLE9BQU9QLE9BQVAsQ0FIbEI7QUFBQSxVQUlJUSxhQUFhQyxNQUFNVCxPQUFOLENBSmpCO0FBQUEsVUFLSWxCLGtCQUFtQm9CLGdCQUFnQixHQUx2QztBQUFBLFVBSzhDO0FBQzFDbkIsdUJBQWlCcUIsVUFOckI7QUFBQSxVQU1rQztBQUM5Qk0seUJBQW1CSixXQVB2QjtBQUFBLFVBT3FDO0FBQ2pDSyxzQkFBZ0JILFVBUnBCO0FBQUEsVUFRaUM7QUFDN0J4QixlQUFTTCxPQUFPaUMsY0FBUCxDQUFzQkYsZ0JBQXRCLENBVGI7QUFBQSxVQVVJekIsV0FBV0osTUFBTStCLGNBQU4sQ0FBcUJELGFBQXJCLENBVmY7QUFBQSxVQVdJRSxRQUFRLElBQUloQyxLQUFKLENBQVVDLGVBQVYsRUFBMkJDLGNBQTNCLEVBQTJDQyxNQUEzQyxFQUFtREMsUUFBbkQsQ0FYWjs7QUFhQSxhQUFPNEIsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmxDLEtBQWpCOztBQUVBLFNBQVNzQixNQUFULENBQWdCYSxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzNDLFNBQVNYLEtBQVQsQ0FBZVcsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNULE1BQVQsQ0FBZ0JTLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDM0MsU0FBU1AsS0FBVCxDQUFlTyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBTcHJlYWQgPSByZXF1aXJlKCcuL3NwcmVhZCcpO1xuXG5jbGFzcyBRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKGluZmluaXRlRGVzY2VudCwgcHJvZHVjdGlvbk5hbWUsIHNwcmVhZCwgc3ViUXVlcnkpIHtcbiAgICB0aGlzLmluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudDtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gICAgdGhpcy5zcHJlYWQgPSBzcHJlYWQ7XG4gICAgdGhpcy5zdWJRdWVyeSA9IHN1YlF1ZXJ5O1xuICB9XG4gIFxuICBub2Rlc0Zyb21Ob2RlKG5vZGUpIHtcbiAgICB2YXIgbm9kZXMgPSBbXSxcbiAgICAgICAgY2hpbGROb2RlcyA9IG5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBub2RlUHJvZHVjdGlvbk5hbWUgPSBub2RlLmdldFByb2R1Y3Rpb25OYW1lKCk7XG5cbiAgICBpZiAoKHRoaXMucHJvZHVjdGlvbk5hbWUgPT09ICcqJykgfHxcbiAgICAgICAgKHRoaXMucHJvZHVjdGlvbk5hbWUgPT09IG5vZGVQcm9kdWN0aW9uTmFtZSkpIHtcbiAgICAgIFxuICAgICAgaWYgKHRoaXMuc3ViUXVlcnkgPT09IG51bGwpIHtcbiAgICAgICAgbm9kZXMgPSBbbm9kZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKGZ1bmN0aW9uKG5vZGVzLCBjaGlsZE5vZGUpIHtcbiAgICAgICAgICB2YXIgY2hpbGROb2RlTm9kZXMgPSB0aGlzLnN1YlF1ZXJ5Lm5vZGVzRnJvbU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgW10pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pbmZpbml0ZURlc2NlbnQpIHtcbiAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5yZWR1Y2UoZnVuY3Rpb24obm9kZXMsIGNoaWxkTm9kZSkge1xuICAgICAgICB2YXIgY2hpbGROb2RlTm9kZXMgPSB0aGlzLm5vZGVzRnJvbU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZE5vZGVOb2Rlcyk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgfS5iaW5kKHRoaXMpLCBbXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICBpZiAoZXhwcmVzc2lvbiA9PT0gdW5kZWZpbmVkKSB7IC8vL1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIHZhciBtYXRjaGVzID0gZXhwcmVzc2lvbi5tYXRjaCgvXlxcLyhcXC8pPyhbXi9cXFtdKykoXFxbW15cXF1dK1xcXSk/KFxcLy4qKT8kLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpLFxuICAgICAgICBmaWZ0aE1hdGNoID0gZmlmdGgobWF0Y2hlcyksXG4gICAgICAgIGluZmluaXRlRGVzY2VudCA9IChzZWNvbmRNYXRjaCA9PT0gJy8nKSwgIC8vL1xuICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHRoaXJkTWF0Y2gsICAvLy9cbiAgICAgICAgc3ByZWFkRXhwcmVzc2lvbiA9IGZvdXJ0aE1hdGNoLCAgLy8vXG4gICAgICAgIHN1YkV4cHJlc3Npb24gPSBmaWZ0aE1hdGNoLCAgLy8vXG4gICAgICAgIHNwcmVhZCA9IFNwcmVhZC5mcm9tRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSxcbiAgICAgICAgc3ViUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihzdWJFeHByZXNzaW9uKSxcbiAgICAgICAgcXVlcnkgPSBuZXcgUXVlcnkoaW5maW5pdGVEZXNjZW50LCBwcm9kdWN0aW9uTmFtZSwgc3ByZWFkLCBzdWJRdWVyeSk7XG4gICAgXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnk7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG4iXX0=