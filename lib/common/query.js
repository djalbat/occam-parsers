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

      var matches = expression.match(/^\/(\/)?([^/\[]+)(\[[^\]]+\])?(\/.*)?$/),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcXVlcnkuanMiXSwibmFtZXMiOlsiU3ByZWFkIiwicmVxdWlyZSIsIlF1ZXJ5IiwiaW5maW5pdGVEZXNjZW50IiwicHJvZHVjdGlvbk5hbWUiLCJzdWJRdWVyeSIsInNwcmVhZCIsIm5vZGUiLCJub2RlcyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZVByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJpc0JldHdlZW4iLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb2RlcyIsIm5vZGVzRnJvbU5vZGUiLCJjb25jYXQiLCJiaW5kIiwiaW5jcmVtZW50SW5kZXgiLCJleHByZXNzaW9uIiwidW5kZWZpbmVkIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJmb3VydGhNYXRjaCIsImZvdXJ0aCIsImZpZnRoTWF0Y2giLCJmaWZ0aCIsInN1YkV4cHJlc3Npb24iLCJzcHJlYWRFeHByZXNzaW9uIiwiZnJvbUV4cHJlc3Npb24iLCJxdWVyeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsVUFBUixDQUFiOztJQUVNQyxLO0FBQ0osaUJBQVlDLGVBQVosRUFBNkJDLGNBQTdCLEVBQTZDQyxRQUE3QyxFQUF1REMsTUFBdkQsRUFBK0Q7QUFBQTs7QUFDN0QsU0FBS0gsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7a0NBRWFDLEksRUFBTTtBQUNsQixVQUFJQyxRQUFRLEVBQVo7QUFBQSxVQUNJQyxhQUFhRixLQUFLRyxhQUFMLEVBRGpCO0FBQUEsVUFFSUMscUJBQXFCSixLQUFLSyxpQkFBTCxFQUZ6Qjs7QUFJQSxVQUFLLEtBQUtSLGNBQUwsS0FBd0IsR0FBekIsSUFDQyxLQUFLQSxjQUFMLEtBQXdCTyxrQkFEN0IsRUFDa0Q7O0FBRWhELFlBQUksS0FBS0wsTUFBTCxDQUFZTyxTQUFaLEVBQUosRUFBNkI7QUFDM0IsY0FBSSxLQUFLUixRQUFMLEtBQWtCLElBQXRCLEVBQTRCO0FBQzFCRyxvQkFBUSxDQUFDRCxJQUFELENBQVI7QUFDRCxXQUZELE1BRU87QUFDTEMsb0JBQVFDLFdBQVdLLE1BQVgsQ0FBa0IsVUFBU04sS0FBVCxFQUFnQk8sU0FBaEIsRUFBMkI7QUFDbkQsa0JBQUlDLGlCQUFpQixLQUFLWCxRQUFMLENBQWNZLGFBQWQsQ0FBNEJGLFNBQTVCLENBQXJCOztBQUVBUCxzQkFBUUEsTUFBTVUsTUFBTixDQUFhRixjQUFiLENBQVI7O0FBRUEscUJBQU9SLEtBQVA7QUFDRCxhQU55QixDQU14QlcsSUFOd0IsQ0FNbkIsSUFObUIsQ0FBbEIsRUFNTVgsS0FOTixDQUFSO0FBT0Q7QUFDRjs7QUFFRCxhQUFLRixNQUFMLENBQVljLGNBQVo7QUFDRDs7QUFFRCxVQUFJLEtBQUtqQixlQUFULEVBQTBCO0FBQ3hCSyxnQkFBUUMsV0FBV0ssTUFBWCxDQUFrQixVQUFTTixLQUFULEVBQWdCTyxTQUFoQixFQUEyQjtBQUNuRCxjQUFJQyxpQkFBaUIsS0FBS0MsYUFBTCxDQUFtQkYsU0FBbkIsQ0FBckI7O0FBRUFQLGtCQUFRQSxNQUFNVSxNQUFOLENBQWFGLGNBQWIsQ0FBUjs7QUFFQSxpQkFBT1IsS0FBUDtBQUNELFNBTnlCLENBTXhCVyxJQU53QixDQU1uQixJQU5tQixDQUFsQixFQU1NWCxLQU5OLENBQVI7QUFPRDs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzttQ0FFcUJhLFUsRUFBWTtBQUNoQyxVQUFJQSxlQUFlQyxTQUFuQixFQUE4QjtBQUFFO0FBQzlCLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlDLFVBQVVGLFdBQVdHLEtBQVgsQ0FBaUIsd0NBQWpCLENBQWQ7QUFBQSxVQUNJQyxjQUFjQyxPQUFPSCxPQUFQLENBRGxCO0FBQUEsVUFFSUksYUFBYUMsTUFBTUwsT0FBTixDQUZqQjtBQUFBLFVBR0lNLGNBQWNDLE9BQU9QLE9BQVAsQ0FIbEI7QUFBQSxVQUlJUSxhQUFhQyxNQUFNVCxPQUFOLENBSmpCO0FBQUEsVUFLSXBCLGtCQUFtQnNCLGdCQUFnQixHQUx2QztBQUFBLFVBSzhDO0FBQzFDckIsdUJBQWlCdUIsVUFOckI7QUFBQSxVQU1rQztBQUM5Qk0sc0JBQWdCRixVQVBwQjtBQUFBLFVBT2lDO0FBQzdCRyx5QkFBbUJMLFdBUnZCO0FBQUEsVUFRcUM7QUFDakN4QixpQkFBV0gsTUFBTWlDLGNBQU4sQ0FBcUJGLGFBQXJCLENBVGY7QUFBQSxVQVVJM0IsU0FBU04sT0FBT21DLGNBQVAsQ0FBc0JELGdCQUF0QixDQVZiO0FBQUEsVUFXSUUsUUFBUSxJQUFJbEMsS0FBSixDQUFVQyxlQUFWLEVBQTJCQyxjQUEzQixFQUEyQ0MsUUFBM0MsRUFBcURDLE1BQXJELENBWFo7O0FBYUEsYUFBTzhCLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJwQyxLQUFqQjs7QUFFQSxTQUFTd0IsTUFBVCxDQUFnQmEsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTWCxLQUFULENBQWVXLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTVCxNQUFULENBQWdCUyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzNDLFNBQVNQLEtBQVQsQ0FBZU8sS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InF1ZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3ByZWFkID0gcmVxdWlyZSgnLi9zcHJlYWQnKTtcblxuY2xhc3MgUXVlcnkge1xuICBjb25zdHJ1Y3RvcihpbmZpbml0ZURlc2NlbnQsIHByb2R1Y3Rpb25OYW1lLCBzdWJRdWVyeSwgc3ByZWFkKSB7XG4gICAgdGhpcy5pbmZpbml0ZURlc2NlbnQgPSBpbmZpbml0ZURlc2NlbnQ7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICAgIHRoaXMuc3ViUXVlcnkgPSBzdWJRdWVyeTtcbiAgICB0aGlzLnNwcmVhZCA9IHNwcmVhZDtcbiAgfVxuICBcbiAgbm9kZXNGcm9tTm9kZShub2RlKSB7XG4gICAgdmFyIG5vZGVzID0gW10sXG4gICAgICAgIGNoaWxkTm9kZXMgPSBub2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgbm9kZVByb2R1Y3Rpb25OYW1lID0gbm9kZS5nZXRQcm9kdWN0aW9uTmFtZSgpO1xuXG4gICAgaWYgKCh0aGlzLnByb2R1Y3Rpb25OYW1lID09PSAnKicpIHx8XG4gICAgICAgICh0aGlzLnByb2R1Y3Rpb25OYW1lID09PSBub2RlUHJvZHVjdGlvbk5hbWUpKSB7XG5cbiAgICAgIGlmICh0aGlzLnNwcmVhZC5pc0JldHdlZW4oKSkge1xuICAgICAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgICAgIG5vZGVzID0gW25vZGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5yZWR1Y2UoZnVuY3Rpb24obm9kZXMsIGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgdmFyIGNoaWxkTm9kZU5vZGVzID0gdGhpcy5zdWJRdWVyeS5ub2Rlc0Zyb21Ob2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSwgbm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3ByZWFkLmluY3JlbWVudEluZGV4KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5maW5pdGVEZXNjZW50KSB7XG4gICAgICBub2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKGZ1bmN0aW9uKG5vZGVzLCBjaGlsZE5vZGUpIHtcbiAgICAgICAgdmFyIGNoaWxkTm9kZU5vZGVzID0gdGhpcy5ub2Rlc0Zyb21Ob2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGROb2RlTm9kZXMpO1xuXG4gICAgICAgIHJldHVybiBub2RlcztcbiAgICAgIH0uYmluZCh0aGlzKSwgbm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgaWYgKGV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCkgeyAvLy9cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICB2YXIgbWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2goL15cXC8oXFwvKT8oW14vXFxbXSspKFxcW1teXFxdXStcXF0pPyhcXC8uKik/JC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSxcbiAgICAgICAgZmlmdGhNYXRjaCA9IGZpZnRoKG1hdGNoZXMpLFxuICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSAoc2Vjb25kTWF0Y2ggPT09ICcvJyksICAvLy9cbiAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSB0aGlyZE1hdGNoLCAgLy8vXG4gICAgICAgIHN1YkV4cHJlc3Npb24gPSBmaWZ0aE1hdGNoLCAgLy8vXG4gICAgICAgIHNwcmVhZEV4cHJlc3Npb24gPSBmb3VydGhNYXRjaCwgIC8vL1xuICAgICAgICBzdWJRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKHN1YkV4cHJlc3Npb24pLFxuICAgICAgICBzcHJlYWQgPSBTcHJlYWQuZnJvbUV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbiksXG4gICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KGluZmluaXRlRGVzY2VudCwgcHJvZHVjdGlvbk5hbWUsIHN1YlF1ZXJ5LCBzcHJlYWQpO1xuICAgIFxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXJ5O1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5mdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cbmZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cbmZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuIl19